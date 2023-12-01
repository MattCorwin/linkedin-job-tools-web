const OpenAI = require("openai");
const fs = require("fs");
require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
});

const num = '1';
const topic = `"The Art of Writing a Standout LinkedIn Cover Letter" Provide tips and best practices for crafting a compelling cover letter specifically tailored for LinkedIn job applications.`;

async function main() {
  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content:
          `Write a 1000 word blog post on ${topic}.
          Format the response as a JSON object with the following format and content:
          {
            title: Blog Post Title,
            date: The current date,
            summary: A short summary of the blog post,
            markdown: A string containing the markdown representation of the blog post
          }
          Do not add any preceding text, the response should be valid, parseable JSON. Please do not use any newline characters in the markdown.`,
      },
    ],
    model: "gpt-4-1106-preview",
  });

  console.log(chatCompletion.choices);
  fs.writeFileSync(
    `${__dirname}/completion-${num}.json`,
    chatCompletion.choices[0].message.content,
    {
      flag: "w",
    }
  );
}

main();

/*
"The Art of Writing a Standout LinkedIn Cover Letter"

Provide tips and best practices for crafting a compelling cover letter specifically tailored for LinkedIn job applications.
"Unlocking LinkedIn's Job Search Features: A Step-by-Step Guide"

Explain how to effectively use LinkedIn's job search features to find the right job opportunities and connect with potential employers.
"How to Customize Your Cover Letter for Different Jobs on LinkedIn"

Discuss the importance of tailoring cover letters to specific job postings and offer advice on how to do it effectively.
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
