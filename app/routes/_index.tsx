import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Video from "../components/video";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PiwikPro from '@piwikpro/react-piwik-pro';

if (typeof document !== "undefined") {
  PiwikPro.initialize('074f1826-32ca-442f-b6a1-610d3abae020', 'https://falofofo.containers.piwik.pro');
}

export const meta = () => {
  return [
    {
      title: "LinkedIn Job Tools",
      description:
        "Stop Scrolling, Start Appyling. Powerful tools for finding the right jobs for you on LinkedIn. Use AI to customize your cover letter and land your next role.",
    },
  ];
};

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
        to apply for. Then, harness the power of AI to customize your cover letter for
        your job, and get your application in the hands of a hiring manager more quickly.
      </SectionTitle>
      <SectionTitle
        pretitle="Checkout a demo"
        title="No more cover letter headaches"
      >
        Let AI do the heavy lifting. Check it out!
      </SectionTitle>
      <Video />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
      </SectionTitle>
      <Faq />
      <Cta />
    </>
  );
}
