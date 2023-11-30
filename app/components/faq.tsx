import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "What is LinkedIn Job Tools?",
    answer: "LinkedIn Job Tools is a chrome extension that gives you tools to find a job. You can generate custom cover letters for jobs viewed on LinkedIn. You can also filter out positions with specific keywords, filter to remote only roles, filter out roles you've already applied for, and more!",
  },
  {
    question: "What is the pricing for LinkedIn Job Tools?",
    answer: "There is a 7 day free trial, with no payment info required. After that, it is $14.99 per month. Free trials include 20 cover letter customizations, and paid users can generate 50 cover letters per month.",
  },
  {
    question: "How do I get started?",
    answer: "Download the Chrome Extension, and click on the extension icon to start your free trial. You may need to refresh your LinkedIn page to see the LinkedIn Power Tools icon, which automatically appears in the LinkedIn toolbar on relevant job search pages.",
  },
  {
    question: "Where do I find the LinkedIn Job Tools icon?",
    answer: "Our icon only appears on LinkedIn pages with a job list on the left side of the page, such as https://www.linkedin.com/jobs/search/ or https://www.linkedin.com/jobs/collections/recommended/. If you are on one of those pages, try reloading the page. After starting a free trial the page will likely need to be reloaded to inject the Job Tools.",
  },
  {
    question: "How do the added filters interact with the regular LinkedIn filters?",
    answer: "The LinkedIn Job Tools filters apply after the regular LinkedIn filters are applied.",
  }
];

export default Faq;