import Navbar from '../components/navbar';
import Cta from '../components/cta';
import Faq from '../components/faq';
import Container from '~/components/container';

export const meta = () => {
  return [
    {
      title: 'AI Generated Cover Letter Tips - LinkedIn Job Tools',
      description:
        'Tips for using the AI Cover Letter Generator for finding jobs on LinkedIn.',
    },
  ];
};

export default function Index() {
  return (
    <>
      <Navbar />
      <Container
        className={
          'flex w-full flex-col mt-4 items-center justify-center text-center'
        }
      >
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          Cover Letter Customizer Tips
        </h2>
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          <ul className="list-disc">
          <li className="py-4 text-justify leading-7">We recommend that you enter your resume and a template cover letter when generating customized cover letters. This will result in you having less manual editing to do,
          since we will be able to use information from your resume to customize the cover letter.</li>
          <li className="py-4 text-justify leading-7">You are able to mark sections of text that should remain unaltered by the AI process by wrapping text in tags in this way: &#60;KEEP&#62;Some text I want to keep verbatim&#60;END_KEEP&#62; 
            Be sure you don't put any information specific to only one job inside the keep tags, as it will be copied exactly as is into the final cover letter.</li>
          <li className="py-4 text-justify leading-7">If you are not seeing the currently viewed job listed in the "Generate Cover Letter" window, try refreshing the browser page that has the job pulled up in LinkedIn.</li>
          </ul>
        </p>
      </Container>
      <Faq />
      <Cta />
    </>
  );
}
