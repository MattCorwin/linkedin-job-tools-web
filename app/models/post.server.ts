import signpost from '../images/signpost2.webp';
import jobFair from '../images/jobFair.webp';
import coverLetterEdit from '../images/coverLetterEdit.webp';

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
    title: 'Finding a Job on LinkedIn',
    date: '11-28-2023',
    summary: 'Learn how to effectively use LinkedIn to find your dream job.',
    image: signpost,
    imageAltText:
      'A person in front of an open door with signposts pointing in multiple directions',
    markdown: `
In this blog post, we'll explore some tips and strategies to make the most out of your job search on LinkedIn, and link to some helpful content.

## Optimize Your Profile

Your LinkedIn profile is your online resume and the first impression you make on potential employers. Be sure to include a professional photo, a concise yet compelling summary, and a
detailed list of your skills and experience. Use keywords that are relevant to your industry to improve your visibility in LinkedIn search results. Think from the perspective of a recruiter or hiring manager, and use the current position and job title fields to list all the
possible search terms that hiring mangers would search for to find candidates. So instead of "Software Developer at My Company" try "Software Developer | Full Stack Engineer | Nodejs | React".

## Utilize the Job Search Feature

LinkedIn's job search feature allows you to filter job listings by location, industry, experience level, and more. Take advantage of these filters to narrow down your search and find the most
suitable opportunities. Save job searches and set up email alerts to stay updated on new listings. Make sure to tailor your application materials, such as your resume and cover letter, to each
job you apply for. Try our expanded job search filter to help you find the perfect role, and save time on sifting through jobs that are a bad fit.

## Connect with Others

LinkedIn is all about building connections. Start by connecting with friends, colleagues, and people you've worked with in the past. Reach out to industry professionals and join relevant
groups to expand your network. Engage with your connections by liking, commenting, and sharing their posts. Building meaningful connections will not only help you discover job opportunities
but also provide valuable insights and mentorship. Don't be afraid to connect with hiring managers and others in your field that you don't know directly. LinkedIn is not a typical social network,
and hiring and finding new jobs are some of the essential functions of the platform. Try this as a starter message: "Hi Becca! LinkedIn suggested you as a contact so I thought I’d reach out. Open to connecting?".

## Leverage Your Network

Don't hesitate to reach out to your connections for job referrals or introductions. Many job openings are never publicly advertised, and referrals can often give you a significant advantage in the
hiring process. If you come across a job posting of interest, see if you have any connections who work at the company and reach out to them for insights. Your network can be a valuable resource in
your job search. Don't forget to post publicly (if possible) that you are open for work. In my experience this gets many more responses than just putting up the green Open To Work banner and hoping
your connections will reach out.

## Follow Up With A Hiring Manager/Recruiter After You Apply

A simple introductory message can go a long way towards distinguishing you in a crowded field of applicants. When messaging a hiring manager directly, give some information about your qualifications
and how they align with the position, and any information that might convey your passion for the particular company or position.

## Build a Personal Brand

Establishing a strong personal brand can make you stand out from other job seekers. Share industry-related articles, write your own posts, and showcase your expertise through LinkedIn's publishing
platform. Engage in conversations and demonstrate your knowledge and passion for your field. Employers are more likely to notice candidates who actively participate in professional discussions. Demonstrate
your skills in your field in any way possible. That can mean sharing projects you've built, or articles you've written. Share your passion for the field you are in!

## Conclusion

LinkedIn is a powerful tool that can significantly enhance your job search. By optimizing your profile, connecting with others, utilizing the job search feature, leveraging your network, and building
a personal brand, you'll increase your chances of finding the perfect job. So, polish up your LinkedIn profile and start exploring the vast opportunities waiting for you. And if you haven't already, give LinkedIn Job Tools
a try. Our AI cover letter customizer can save you a ton of time in your job search. Good luck!

## Resources
- Danny Thompson: [LinkedIn profile optimization](https://www.youtube.com/watch?v=YuL_JoDeBDM)
- [How to Reach Out to a Recrutier on LinkedIn](https://octopuscrm.io/blog/how-to-reach-out-to-a-recruiter-on-linkedin/)
- [Our AI Cover Letter Customizer](https://chromewebstore.google.com/detail/linkedin-job-tools/pnbffadghcgnggdmpefiodonaiolfjgm)
`.trim(),
  },
  'writing-a-standout-linkedin-cover-letter': {
    slug: 'writing-a-standout-linkedin-cover-letter',
    title: 'The Art of Writing a Standout LinkedIn Cover Letter',
    date: '12-01-23',
    summary:
      'A blog post providing valuable tips and best practices for job-seekers looking to craft their LinkedIn cover letters. The post discusses the importance of personalization, clarity, and alignment with the LinkedIn format to make a memorable first impression on potential employers.',
    image: jobFair,
    imageAltText: 'Lots of people applying for jobs at a job fair',
    markdown: `
## Introduction
In the competitive job market, your LinkedIn cover letter can be the key to unlocking opportunities. While LinkedIn streamlines the job-hunting process, it also means you are competing with a multitude of candidates. That's where a standout LinkedIn cover letter comes in. This post will delve into tips and best practices for crafting a compelling cover letter tailored specifically for LinkedIn applications.

## Why a LinkedIn Cover Letter Matters
LinkedIn is a platform where professionals connect, making it a prime spot for discovering job opportunities. A targeted cover letter on LinkedIn isn't just another step in the application process—it's your chance to tell your story, showcase your achievements, and explain why you are the perfect fit for the role.

## Understanding the LinkedIn Audience
The LinkedIn audience consists of busy professionals and recruiters who may glance through hundreds of applications. Your cover letter should be succinct, relevant, and designed to capture attention quickly. It's about making an impact within the first few sentences.

## Personalization is Key
### Identify the Hiring Manager
Go beyond 'To Whom It May Concern.' Try to find out the name of the hiring manager or the person who will be reading your cover letter. Personal touches can make a world of difference.
### Tailor it to the Job
Show that you've done your homework. Mention something about the company that resonates with you, and relate it back to your skills and experiences. Tailoring your cover letter to the company and position shows that you are genuinely interested. [Try our free tool](https://chromewebstore.google.com/detail/linkedin-job-tools/pnbffadghcgnggdmpefiodonaiolfjgm?pli=1) to automatically customize your cover letter for your job.

## Highlight Your Unique Value Proposition
Your cover letter should clearly outline what you bring to the table. What can you offer that others might not? This is your chance to shine and show off that unique blend of skills and experiences that make you an exceptional candidate.

## Use Keywords Strategically
Many companies use Applicant Tracking Systems (ATS) to help filter applications. Use job-related keywords found in the job description to make sure your cover letter aligns with what the recruiter is looking for. However, don't overstuff your letter with keywords – it has to read naturally.

## Showcase Achievements and Competencies
Talk about specific achievements in your career that are relevant to the job. When possible, quantify these achievements. Instead of saying 'increased sales,' say 'increased sales by 20% over six months.' Aligning competencies with the job demands demonstrates that you are competent.

## Keep it Concise
A LinkedIn cover letter should be a brief introduction, not your life story. Aim for three to four short paragraphs that can be read in less than a minute. Make sure every word counts and contributes to your overall message.

## Align with LinkedIn's Culture
LinkedIn has its own etiquette and culture. Professionalism is key, but so is human connection. Write in a professional tone, but let your personality come through as it's also about finding a cultural fit.

## Call to Action
A call to action (CTA) should be clear and direct. Invite the reader to contact you for further discussion, but also state your intention to follow up within a certain time frame. This shows initiative and keeps the ball in your court.

## Proofread, Edit, and Customize
Nothing undermines your professionalism like typos or grammatical errors. Use tools like Grammarly, or get a friend to review it. Customize each cover letter for the specific job you're applying for – no generic letters.

## Conclusion
With the right approach, your LinkedIn cover letter can be the crisp, engaging introduction that sets you apart from the crowd. Remember to personalize, remain relevant, and showcase your most impressive achievements. Finally, a well-crafted cover letter is a reflection of your professionalism, so take the time to get it right. Good luck, and happy job hunting!

## Bonus Tip – Engage with the Platform
Engagement on LinkedIn prior to your application can set a positive precedent. Comment on company posts, share industry-related content, and build a network. It shows that you are proactive and already part of the professional community. When your application lands, you might just be a familiar face.

Remember, your LinkedIn cover letter is more than just your ticket to an interview – it's a personal branding tool. Use it wisely.`.trim(),
  },
  'how-to-customize-your-cover-letter-for-different-jobs-on-linkedin': {
    title: 'How to Customize Your Cover Letter for Different Jobs on LinkedIn',
    slug: 'how-to-customize-your-cover-letter-for-different-jobs-on-linkedin',
    date: '12-2-2023',
    summary:
      'This blog post discusses the importance of customizing cover letters for job applications on LinkedIn and provides practical advice for tailoring your cover letter to different jobs effectively.',
    image: coverLetterEdit,
    imageAltText: 'a person working on a desk with multiple documents',
    markdown: `
With the job market more competitive than ever, customizing your cover letter for each job application on LinkedIn is not only recommended, it's almost a requirement. Here's why it's crucial and how you can effectively tailor your cover letters for different job postings.

## The Importance of Tailoring Your Cover Letter
When applying for jobs on LinkedIn, your cover letter is often your first opportunity to make a strong impression on a potential employer.
It's the space where you can explain why you're the best fit for the position. A generic, one-size-fits-all cover letter is easily recognizable
and can send a message that you're not fully invested in the opportunity. Customizing your cover letter demonstrates that you've put in the time
to understand the company and position and that you have clear reasons for wanting the job.

## Research the Company and Role
Before you start writing, do in-depth research on the company and the job. Look at the company's LinkedIn page, website, and recent news to get a sense of their culture, values, and direction. Understand the job requirements and how they align with your skills and experience.

## Review the Job Description
Read the job posting carefully. Highlight keywords and phrases, especially those related to skills, qualifications, and the company's values. These are the terms you should incorporate into your cover letter to get past automated screening systems and catch the eye of the recruiter.

## Customize the Opening
Your opening paragraph should grab attention. Refer to the job title and state explicitly why you are excited about the role. If you can, mention a recent event or achievement of the company that resonates with you.

## Showcase Relevant Skills and Experience
In the body of your cover letter, connect your past experiences and achievements to the job description. Use specific examples to demonstrate how your skills have helped previous employers or projects.

## Mention Mutual Connections
If you share a connection with the company, like a LinkedIn contact who works there, mention it. This can help build a sense of trust and familiarity.

## Display Company Knowledge
Use your cover letter to demonstrate your knowledge of the company by relating their mission or values to your own professional philosophy or experiences.

## Address the Hiring Manager Directly
If possible, address your cover letter to the specific hiring manager by name. This personal touch shows that you're detail-oriented and adds a level of personalization.

## Close with a Call to Action
In your concluding paragraph, sum up why you're an ideal candidate and express enthusiasm for the possibility of discussing your application in further detail. Politely prompt them to consider your resume and cover letter for a discussion.

## Proofread and Revise
Carefully proofread your letter to ensure there are no spelling or grammatical errors, which can be immediate disqualifiers. Then, revise to make sure that your cover letter reflects the needs of the job and aligns with the company's culture.

## Conclusion
Customizing your cover letter for each job application may seem time-consuming, but it can be the difference between getting an interview and being overlooked. Tailor your cover letter for the specific position and company, showing genuine interest and making a case for why you're the best candidate. Using these tips when applying for jobs on LinkedIn will set your application apart and help you land the job of your dreams.
Remember, the cover letter is your chance to make a memorable first impression. Make it count by customizing it for each unique job opportunity that comes your way on LinkedIn.`.trim(),
  },
};

export function getPosts(): Array<Post> {
  return Object.values(posts);
}

export function getPost(slug: string): Post {
  return posts[`${slug}`];
}
