import Container from "./container";
import demo480 from "../images/full-demo-480p.gif";

const Video = () => {
  return (
    <Container>
      <div className="w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl ">
        <div className="relative bg-indigo-300 cursor-pointer aspect-w-16 aspect-h-9 bg-gradient-to-tr from-purple-400 to-indigo-700">
          <img
            src={demo480}
            alt="user clicking through LinkedIn and filtering a job list"
          />
        </div>
      </div>
    </Container>
  );
};

export default Video;
