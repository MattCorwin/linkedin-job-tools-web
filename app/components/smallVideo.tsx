import Container from './container';
import demo from '../images/coverLetterGenOnlyDemo480.gif';

const SmallVideo = () => {
  return (
    <Container className='flex flex-col items-center'>
      <p className="max-w-2xl py-4 text-lg text-center leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
        Use AI to easily customize your cover letter
      </p>
      <div className="w-96 mx-auto overflow-hidden rounded-2xl">
        <div className="relative bg-indigo-300 cursor-pointer aspect-w-16 aspect-h-9 bg-gradient-to-tr from-purple-400 to-indigo-700">
          <img
            src={demo}
            alt="user clicking through LinkedIn and generating an automatically customized cover letter"
          />
        </div>
      </div>
    </Container>
  );
};

export default SmallVideo;
