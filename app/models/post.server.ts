// import hugging from '../images/hf-logo-c.png';
// import dynamo from '../images/dynamo.png';
import hero from '../images/hero.png';

type Post = {
    slug: string;
    title: string;
    date: string;
    summary?: string;
    image: any;
    imageAltText: string;
    markdown: string;
};

const posts: { [key: string]: Post } = {
  'finding-a-job-on-linkedin': {
    slug: 'finding-a-job-on-linkedin',
    title: "Finding a Job on LinkedIn",
    date: "2022-09-01",
    summary: "Learn how to effectively use LinkedIn to find your dream job.",
    image: hero,
    imageAltText: 'text',
    markdown: `
Are you tired of scrolling through never-ending job boards and sending out countless resumes with no luck? Look no further than LinkedIn,
the professional networking platform that can help you land your dream job. With over 700 million users, LinkedIn offers a wealth of opportunities for job seekers. In this blog post,
we'll explore some tips and strategies to make the most out of your job search on LinkedIn.

## Optimize Your Profile

Your LinkedIn profile is your online resume and the first impression you make on potential employers. Be sure to include a professional photo, a concise yet compelling summary, and a
detailed list of your skills and experience. Use keywords that are relevant to your industry to improve your visibility in LinkedIn search results. Don't forget to regularly update your
profile to reflect your latest accomplishments and projects.

## Connect with Others

LinkedIn is all about building connections. Start by connecting with friends, colleagues, and people you've worked with in the past. Reach out to industry professionals and join relevant
groups to expand your network. Engage with your connections by liking, commenting, and sharing their posts. Building meaningful connections will not only help you discover job opportunities
but also provide valuable insights and mentorship.

## Utilize the Job Search Feature

LinkedIn's job search feature allows you to filter job listings by location, industry, experience level, and more. Take advantage of these filters to narrow down your search and find the most
suitable opportunities. Save job searches and set up email alerts to stay updated on new listings. Make sure to tailor your application materials, such as your resume and cover letter, to each
job you apply for.

## Leverage Your Network

Don't hesitate to reach out to your connections for job referrals or introductions. Many job openings are never publicly advertised, and referrals can often give you a significant advantage in the
hiring process. If you come across a job posting of interest, see if you have any connections who work at the company and reach out to them for insights. Your network can be a valuable resource in
your job search.

## Build a Personal Brand

Establishing a strong personal brand can make you stand out from other job seekers. Share industry-related articles, write your own posts, and showcase your expertise through LinkedIn's publishing
platform. Engage in conversations and demonstrate your knowledge and passion for your field. Employers are more likely to notice candidates who actively participate in professional discussions.

## Conclusion

LinkedIn is a powerful tool that can significantly enhance your job search. By optimizing your profile, connecting with others, utilizing the job search feature, leveraging your network, and building
a personal brand, you'll increase your chances of finding the perfect job. So, polish up your LinkedIn profile and start exploring the vast opportunities waiting for you. Good luck!
`.trim(),
  },
    'open-source-machine-learning-aws-v1': {
        slug: 'open-source-machine-learning-aws-v1',
        title: 'Deploying a machine learning model to AWS',
        date: '10-05-23',
        summary:
            'Deploying a machine learning model from huggingface to AWS Lambda, backed by a Docker container.',
        image: hero,
        imageAltText: 'Logo of HuggingFace, the hugging face emoji',
        markdown: `
## Overview

I recently used AWS Lambda to host an open source Pytorch machine learning model.
I'll walk through the steps I took to get everything set up, and share a couple of gotchas I ran into and how to get past them.

A note on Infrastructure as Code: I'm using [SST](https://sst.dev/) for IAC (my personal favorite tool in the space). I'll throw in a couple of examples using the
Serverless framework to get to the same goal. I'll also link to an AWS walkthrough that uses AWS SAM in case that is your jam.

## Lambda Handler Function

First I set up a Python lambda to handle our incoming REST request. [This file](https://github.com/MattCorwin/personal-v3/blob/main/functions/inference/app.py)
is the full handler function code you can reference. I'll step through a bit of what is going on in there. The model used in this example is
[distilbert-base-uncased-distilled-squad](https://huggingface.co/distilbert-base-uncased-distilled-squad).


The following is a util function that uses the BeautifySoup package to fetch the web page for a given URL and scrape all the text from all paragraph html elements,
and returns the text as a list of strings split on space characters. This worked well for a Wikipedia article, but might require some tweaking based on the page you are scraping.

    def scrapePageText(url):
      text = ""
      response = requests.get(url)
      print(response.status_code)
      soup = BeautifulSoup(response.content, "html.parser")

      paragraphs = soup.find_all("p")
      for p in paragraphs:
          text = text + p.text

      print('returning page text')
      return text.split()

Here we initialize the articleText outside of the lambda handler. The benefit of this is that this value can be referenced across Lambda invocations, as long as the
lambda container is active. We're essentially caching the response from scrapePageText when we assign it inside the handler function. The transformers package includes
functions for getting the tokenizer (for converting words into tokens) and loading the model. Loading the tokenizer in this way ensures it matches the tokenizer used
to train the model.

    articleText = []
    tokenizer = AutoTokenizer.from_pretrained("model/")
    model = AutoModelForQuestionAnswering.from_pretrained("model/")

Then we iterate through chunks of context small enough for the model to handle. This is a workaround for the fact that this model
can only handle 512 tokens of total input. For the next iteration of this project I'll swap to a model that can handle more context.

    question_length = len(question.split())
    chunk_size = 360 - question_length
    chunks = [articleText[i : i + chunk_size] for i in range(0, len(articleText), chunk_size)]

Finally, tokenize the question and context, and pass them to the model for prediction. Then convert the model output from tokens back into text.

    inputs = tokenizer.encode_plus(
      question.split(), question_context, add_special_tokens=True, is_split_into_words=True, truncation=True, max_length=512, return_tensors="pt"
    )
    input_ids = inputs["input_ids"].tolist()[0]
    
    output = model(**inputs)
    answer_start_scores = output.start_logits
    answer_end_scores = output.end_logits
    
    answer_start = torch.argmax(answer_start_scores)
    answer_end = torch.argmax(answer_end_scores) + 1
    
    answer = tokenizer.convert_tokens_to_string(
      tokenizer.convert_ids_to_tokens(input_ids[answer_start:answer_end])
    )

## Lambda Function and Docker Container Provisioning

Now that we have our REST endpoint referencing our model, we need to provision the Lambda function and Docker image that contains our dependencies
referenced in the app.py file. We're going to use a Docker container to back our lambda, rather than using one of the regular lambda runtimes because
the regular lambda runtimes only allow for 250 MB of code and dependencies, while building our own Docker image gives us 10 GB to play with.
The ML model in this instance takes up 250 MB on its own. To provision a Docker lambda with SST, we'll add to our sst.config file.

    const dockerFn = new Function(stack, "pythonDockerFunction", {
      timeout: 30,
          runtime: "container",
          handler: "functions",
    })
    const api = new Api(stack, "Api", {
      routes: {
        "POST /answer": dockerFn,
      },
    });

There is a lot of magic baked into those few lines. We are telling SST that a Dockerfile lives in our functions directory, and creating an API route
that handles a POST request, which it passes to our handler code. At build time SST will build a Docker image based on our Dockerfile and upload the resulting
image to AWS ECR so that it can be pulled when needed by AWS lambda. I'll link to an AWS walkthrough that shows how to upload the image to ECR manually.

Now we need to create a Dockerfile in the functions directory that will tie together our dependencies and our app.py handler function. First we extend
the Python3.9 Docker image maintained by AWS.

    FROM public.ecr.aws/lambda/python:3.9

Now we have a container that has Python 3.9 installed, and we can pull in our other dependencies and install them in the container.

    RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
    ENV PATH="/root/.cargo/bin:\${PATH}"
    COPY requirements.txt ./
    
    # Install the python requirements from requirements.txt
    RUN python3.9 -m pip install -r requirements.txt
    
    COPY inference/app.py ./

Finally we can pull the model from huggingface and put it in the model directory so our app.py file can reference it. The final line tells the container
what the entrypoint is for our lambda.

    RUN mkdir model
    RUN curl -L https://huggingface.co/distilbert-base-uncased-distilled-squad/resolve/main/pytorch_model.bin -o ./model/pytorch_model.bin
    RUN curl https://huggingface.co/distilbert-base-uncased-distilled-squad/resolve/main/config.json -o ./model/config.json
    RUN curl https://huggingface.co/distilbert-base-uncased-distilled-squad/resolve/main/tokenizer.json -o ./model/tokenizer.json
    RUN curl https://huggingface.co/distilbert-base-uncased-distilled-squad/resolve/main/tokenizer_config.json -o ./model/tokenizer_config.json
    
    # Set the CMD to your handler
    CMD ["app.lambda_handler"]

## Using The Serverless Framework For IAC (not necessary if you followed the SST steps above)

Here is an example of declaring the Docker image in a serverless.ts file. This tells Serverless to look for a Dockerfile in the /functions directory,
which Serverless uses to build a Docker container named pythonlambdaimage and store it in ECR.

    ecr: {
      images: {
        pythonlambdaimage: {
          path: './functions'
        }
      }
    },

You can then reference the pythonlambdaimage in your Lambda function declaration:

    functions: {
      myFunction: {
        image: 'pythonlambdaimage'
      }
    }

## Gotchas

One issue I ran into was a build failure when running sst dev, which was because I didn't have Docker Desktop running,
which is required to build the Docker container locally.

Other errors I ran into:
- IndexError: index out of range in self - Too large an input was passed to the tokenizer encode function. I fixed this by scaling back
the amount of tokens I was passing the encode function, and setting truncation=True as a fallback.
- TypeError: PreTokenizedInputSequence must be Union[List[str], Tuple[str]] - I was initially passing the encode function the full string question,
while the context was a list of strings. The tokenizer expects the two items to be of the same type, either an unsplit string or list of strings.
- Rust version errors - For some reason when using the Python 3.10 lambda container image as a base in the Dockerfile I was seeing some odd rust version errors.
Python 3.9 worked like a charm.

## Future Revisions

This was one of my first experiments with deploying open source machine learning models to AWS Lambda. There are a couple of things I would change
for the next experiment. First, I would like to experiment with a model that can take the entire wikipedia article as context, that would allow the
predictions to be a lot more accurate. Secondly I would like to convert the API endpoint to a Websockets endpoint to allow for longer processing times
that are common with more complex ML models.

Thanks for reading!

## Useful Links

[My Github](https://github.com/MattCorwin/personal-v3) Contains all the code for this project  
[SST](https://sst.dev/)  
[AWS Walkthrough on this topic](https://aws.amazon.com/blogs/machine-learning/using-container-images-to-run-pytorch-models-in-aws-lambda/)  
[Serverless Lambda Function Docs](https://www.serverless.com/framework/docs/providers/aws/guide/functions)
    `.trim(),
    },
    'aws-dynamodb-performance-tuning': {
      slug: 'aws-dynamodb-performance-tuning',
      title: 'Performance Tuning DynamoDB - Lessons Learned',
      date: '10-10-23',
      summary:
          'DynamoDB key structure, GSIs, and implications for performance and streaming.',
      image: hero,
      imageAltText: 'Logo of AWS DynamoDB',
      markdown: `
## Overview

I've helped set up many DynamoDB tables at this point as the datastore for microservices. I've run into several interesting issues, so I'll jot them
down here in case they are helpful.

## Intro

I'll assume some basic knowledge around DynamoDB's key structure and options, you can take a look at the docs [here](https://aws.amazon.com/blogs/database/choosing-the-right-dynamodb-partition-key/).
I'll dive into some of the ways we've designed the keys for our tables, but the main initial callout is that you are limited in the ways you can access data, so you have to figure out your data access patterns before
you design your keys, which consist of either a partition(hash) key or partition(hash) key and a sort(range) key. Also, if your access patterns vary a ton and/or you have a really wide data structure, you should probably consider a 
relational database rather than DynamoDB. I've learned this the hard way :)

## Traditional Key Structure

In a traditional DynamoDB key setup, you determine your main access patterns and key your table based on those access patterns. In a multi-tenant table that could look something like a partition key of tenantID
and a hierarchical sort key like country||state||city (where || is a delimiter). So you could query for all tenant data with the partition key, or query for a tenant and country, or tenant, country, and state, etc. It should
be noted that the combination of partition key and sort key must be unique, since that is essentially the foreign key for the item. If you need other access patterns, you can build a GSI (Global Secondary Index) with a different
sort key organized for the secondary access pattern. The callout here is that you cannot do a strongly consistent read against GSIs. This will become more important to be aware of in the next key setup.

## Write Optimized Key Structure

After some time working with the traditional key structure, we realized that we could speed things up by making some tweaks. DynamoDB operates on the idea of shards, with the partition key determining which database shard/partition
an item is stored in. We were doing nightly data loads of large amounts of tenant data, which would "heat up" the specific database shard associated with the tenant. By spreading our items out across multiple shards we could speed up the write side of our operations.
(If you are writing data infrequently or using more of a change data capture type ingest then this pattern is probably not as useful for you.) We spread the items across shards by using a random UUID as the hash key for the item, and created a GSI with the more traditional
key structure which would be used to access items.

## Shortcomings of the Write Optimized Key Structure

Some issues arose with this table structure. If you are clearing out and writing new items regularly, you have to be careful to delete all the old records or you can create duplicates. This is because assigning a UUID for the item's hash key
means the previous version of the item (that in reality would have the same key in the traditional key structure) will not be overwritten by the new item. You will have to do explicit deletes on all old items before reimporting new tenant data if there is
an overlap between the data already in Dynamo and the incoming data.

Strongly consistent reads are only possible on the original hash key, not GSIs. If you are updating items frequently and don't have the item's hash key available, then you will have to look up your item by the GSI keys, and then do a second strongly consistent
read by the item's original hash key. This takes extra time and db usage.

DynamoDB stream events are only guaranteed to arrive in sequence per database shard. This was the big one for us. I was using DynamoDB stream events to de-normalized the data (remember what I said about learning the hard way) into another differently keyed table item
(with a one to many relationship with the original record), and noticed that in our nightly "delete everything and reimport" cycle, that the deletes for an item would sometimes land in the lambda stream handler function AFTER the write for the new item, resulting in the de-normalized
copy of the data being deleted after being written. This occurred because we were changing the item's hash key between delete and re-write (since it is a randomly assigned UUID), so Dynamo didn't know that they were the same item and didn't preserve the order of database operations in the stream events.

## Blended approach

In order to address the final shortcoming there, but keep the performance increases we saw by spreading out the database writes across multiple shards, I ended up using a UUID v5 for the item's hash key instead of a v4 UUID. For us this was easy because the sort key we were using for our GSI
was unique, which meant I could just hash the sort key as a v5 uuid. This means we get the write speed of a UUID hash key, but the same sort key would receive the same v5 UUID across imports, resulting in the Dynamo stream events landing in the correct sequence. This comes with a couple of other
benefits. First when we have the full sort key available we can convert it to it's v5 UUID hash and do a strongly consistent read instantly. Secondly we can move our import to one that doesn't do a full delete of all records, but instead overwrites the records that match between incoming records
and current db records, and then just do a cleanup step for any records that were previously present in the db but not in the incoming dataset. Dynamo $ saved!

Thanks for reading! I hope all that jabbering was useful and made at least a little sense.

## Shameless Plug - [HIRE ME!](https://www.linkedin.com/in/matt-corwin/)
I am looking for my next role, and I love to build cool stuff. I'd appreciate any connections you can make to help me find the right position!

## Useful Links

[DynamoDB Docs on sort keys](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-sort-keys.html) 
  `.trim(),
  },
};

export function getPosts(): Array<Post> {
    return Object.values(posts);
}

export function getPost(slug: string): Post {
    return posts[`${slug}`];
}
