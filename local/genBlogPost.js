const OpenAI = require('openai');
const fs = require('fs');
require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
});

// TODO add accompanying image generation
// const image = await openai.images.generate({ model: "dall-e-3", prompt: "A cute baby sea otter" });
const imageOnly = true;

const num = '1';
const topic = `"Unlocking LinkedIn's Job Search Features: A Step-by-Step Guide"
Explain how to effectively use LinkedIn's job search features to find the right job opportunities and connect with potential employers.`;
const imagePrompt = `Generate a main image for a blog post on the topic ${topic}. Do not include any text in the image.`;
async function main() {
  if (!imageOnly) {
    const chatCompletion = await openai.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: `Write an 800 word blog post on ${topic}.
            Format the response as a JSON object with the following format and content:
            {
              title: Blog Post Title,
              slug: the title property converted to a URL slug ie. all lowercase words separated by dashes,
              date: The current date,
              summary: A short summary of the blog post,
              image: an empty string,
              imageAltText: an empty string,
              markdown: A string containing the markdown representation of the blog post
            }
            Do not add any preceding text, the response should be valid, parseable JSON. Use <br> instead of \n for newline characters.`,
        },
      ],
      model: 'gpt-4-1106-preview',
    });

    console.log(chatCompletion.choices);
    fs.writeFileSync(
      `${__dirname}/completion-${num}.json`,
      chatCompletion.choices[0].message.content,
      {
        flag: 'w',
      }
    );
  }
  for (let num = 1; num < 3; num++) {
    await genImage(openai, imagePrompt, num.toString());
  }
}

const genImage = async (openai, prompt, count) => {
  const response = await openai.images.generate({
    model: 'dall-e-3',
    prompt,
    n: 1,
    response_format: 'b64_json',
  });
  response.data.forEach((item) => {
    const buffer = Buffer.from(item.b64_json, 'base64');
    fs.writeFileSync(`${__dirname}/image-${count}.webp`, buffer, {
      flag: 'w',
    });
  });
};

main();

/*

"The Do's and Don'ts of Networking on LinkedIn for Job Seekers"
Share strategies for building and maintaining a strong professional network on LinkedIn to enhance your job search.

"The Role of Keywords in LinkedIn Job Searches and Cover Letters"
Explain how keywords play a crucial role in LinkedIn job searches and guide readers on incorporating them into cover letters.

"LinkedIn Profile Optimization for Job Seekers"
Provide insights on how to optimize your LinkedIn profile to attract potential employers and increase your chances of landing interviews.

"How to Leverage LinkedIn Recommendations in Your Job Search"
Explore the significance of LinkedIn recommendations and how to request and use them to strengthen your job applications.

"Creating a Compelling LinkedIn Summary: A Key to Landing Interviews"
Offer tips and examples for crafting an engaging LinkedIn summary that can grab the attention of recruiters and hiring managers.

"The Power of Networking Groups on LinkedIn for Job Seekers"
Discuss the benefits of joining and actively participating in LinkedIn groups related to your industry or job search.

"Handling Rejections: A Guide to Staying Resilient in Your Job Search"
Provide advice on how to cope with job rejections on LinkedIn and maintain a positive mindset throughout your job search journey.

*/
