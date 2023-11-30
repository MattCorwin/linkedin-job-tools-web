import signpost from '../images/signpost2.webp';

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
    date: "11-28-2023",
    summary: "Learn how to effectively use LinkedIn to find your dream job.",
    image: signpost,
    imageAltText: 'text',
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
};

export function getPosts(): Array<Post> {
    return Object.values(posts);
}

export function getPost(slug: string): Post {
    return posts[`${slug}`];
}

