import Navbar from '../components/navbar';
import Cta from '../components/cta';
import Faq from '../components/faq';
import Container from '~/components/container';
import gettingStarted from '../images/gettingStarted480.gif';
import Video from '~/components/video';
import LinkToWebstore from '~/components/linkToWebstore';

export const meta = () => {
  return [
    {
      title: 'Getting Started - LinkedIn Job Tools',
      description:
        'Tips for getting started using LinkedIn Job Tools AI Cover Letter Generator and Advanced Search Filters',
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
        <h2 className="max-w-2xl mt-3 mb-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          Getting Started
        </h2>
        <Video
          gif={gettingStarted}
          alt="walkthrough of downloading a chrome extension and adding to pinned extensions in Chrome"
        />
        <p className="max-w-2xl pb-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          <ul className="list-disc">
            <li className="pb-4 text-justify leading-7">
              Download the extension from the <LinkToWebstore linkText='Chrome Web Store' padding={false}/>
            </li>
            <li className="py-4 text-justify leading-7">
              Click the extensions icon (puzzle piece) in the browser toolbar, and pin the extension to the toolbar.
            </li>
            <li className="py-4 text-justify leading-7">
              Click the briefcase icon and select "Start a 7 Day Free Trial"
            </li>
            <li className="py-4 text-justify leading-7">
              Enter your email. You will receive a verification email.
            </li>
            <li className="py-4 text-justify leading-7">
              After clicking the confirmation link in your email, you are ready to use LinkedIn Job Tools! Click the briefcase icon in the Chrome toolbar to
              get started generating AI customized cover letters, or visit a LinkedIn job search page to use the advanced job filters!
            </li>
            <li className="py-4 text-justify leading-7">
              You may need to reload your LinkedIn browser tab after installing the extension.
            </li>
            <li className="py-4 text-justify leading-7">
              Thanks for try out our tool! Let us know if you have any feedback or suggestions. linkedinjobtools[at]gmail.com
            </li>
          </ul>
        </p>
      </Container>
      <Faq />
      <Cta />
    </>
  );
}
