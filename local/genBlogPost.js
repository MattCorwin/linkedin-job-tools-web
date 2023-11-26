const OpenAI = require("openai");
const fs = require("fs");
require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
});

async function main() {
  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content:
          `Write a 500 word blog post on finding a job on LinkedIn. Format the response as a JSON object with the following format and content:
          {
            title: Blog Post Title,
            date: The current date,
            summary: A short summary of the blog post,
            markdown: A string containing the markdown representation of the blog post
          }
          Do not add any preceding text, the response should be valid, parseable JSON. Please use <br> as the newline character in place of \n in the markdown.`,
      },
    ],
    model: "gpt-4",
  });

  console.log(chatCompletion.choices);
  fs.writeFileSync(
    `${__dirname}/completion.json`,
    chatCompletion.choices[0].message.content,
    {
      flag: "w",
    }
  );
}

main();
