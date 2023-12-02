import Container from "./container";
import heroImg from "../images/hero.png";
import { Link } from "@remix-run/react";
import { onDownloadClick } from "~/util/onDownloadClick";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Stop Scrolling, Start Applying
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Simplify your job application experience. Automatically tailor your cover letter to your job, and use advanced searching to find the right jobs for you.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                to="https://chromewebstore.google.com/detail/linkedin-job-tools/pnbffadghcgnggdmpefiodonaiolfjgm"
                target="_blank"
                rel='noreferrer'
                onClick={onDownloadClick}
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md "
              >
                Download for Free
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <img
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;