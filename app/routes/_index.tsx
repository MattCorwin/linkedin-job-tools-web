import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
// import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
// import Benefits from "../components/benefits";
import Cta from "../components/cta";
import Faq from "../components/faq";
// import PopupWidget from "../components/popupWidget";

export const meta = () => {
  return [
    {
      title: "LinkedIn Job Tools",
      description:
        "Stop Scrolling, Start Appyling. Powerful tools for finding the right jobs for you on LinkedIn. Save time, and find the perfect job.",
    },
  ];
};

// import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Benefits"
        title="Sifting through job descriptions is a waste of your time"
      >
        LinkedIn Job Tools helps you filter down to the jobs you actually want
        to apply for, allowing you to apply for more of the right jobs and
        increasing your chances of landing the perfect job for you.
      </SectionTitle>
      <SectionTitle
        pretitle="Checkout a demo"
        title="Easily find the right jobs for you"
      >
        Better jobs with less time spent searching. Check it out!
      </SectionTitle>
      <Video />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
      </SectionTitle>
      <Faq />
      <Cta />
    </>
  );
}
