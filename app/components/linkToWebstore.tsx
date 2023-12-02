import { Link } from '@remix-run/react';
import { onDownloadClick } from '~/util/onDownloadClick';

const LinkToWebstore = (props: { linkText: string; padding: boolean }) => {
  return (
    <Link
      to="https://chromewebstore.google.com/detail/linkedin-job-tools/pnbffadghcgnggdmpefiodonaiolfjgm"
      target="_blank"
      rel="noreferrer"
      onClick={onDownloadClick}
      className={`inline-block mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md ${
        props.padding ? 'py-3 px-7 lg:px-10 lg:py-5' : ''
      } `}
    >
      {props.linkText}
    </Link>
  );
};

export default LinkToWebstore;
