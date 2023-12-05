import React from 'react';
import { Link } from '@remix-run/react';
import { onDownloadClick } from '~/util/onDownloadClick';

const Cta = () => {
  return (
    <div className="flex items-center justify-between mx-auto md:w-130 md:mx-4 max-w-[280px] text-white bg-indigo-600 rounded-xl">
      <div className="flex flex-col p-4 lg:p-10">
        <h2 className="text-2xl font-medium lg:text-3xl text-white">
          Don't Let Cover Letters Slow You Down
        </h2>
        <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
          Our AI tools can help
        </p>

        <Link
          to="https://chromewebstore.google.com/detail/linkedin-job-tools/pnbffadghcgnggdmpefiodonaiolfjgm"
          target="_blank"
          rel="noreferrer"
          onClick={onDownloadClick}
          className="flex self-center p-4 w-full mt-2 lg:mt-8 mx-auto justify-center text-lg font-medium text-center text-indigo-600 bg-white rounded-md"
        >
          Try It Out
        </Link>
      </div>
    </div>
  );
};

export default Cta;