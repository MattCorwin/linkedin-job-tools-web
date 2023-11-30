import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Cta from "../components/cta";

export const meta = () => {
  return [
    {
      title: "LinkedIn Job Tools - Privacy Policy",
      description:
        "Stop Scrolling, Start Appyling. Powerful tools for finding the right jobs for you on LinkedIn. Privacy Policy page.",
    },
  ];
};

export default function Index() {
  return (
    <>
      <Navbar />
      <SectionTitle title="Privacy Policy" >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1em'}}>
        <h2>Effective Date: 11/26/2023</h2>
        <h3>Introduction</h3>
        <p>
          Welcome to LinkedIn Job Tools ("Extension," "we," "us," or "our"). We
          are committed to protecting your privacy and ensuring the security of
          your personal information. This Privacy Policy is designed to help you
          understand how we collect, use, and safeguard your data when you use
          our Chrome extension.
        </p>
        <p>
          By using our Chrome extension, you consent to the practices described
          in this Privacy Policy. Please take a moment to review this policy
          carefully. If you do not agree with the practices described herein,
          please do not use our extension.
        </p>
        <h2>Information We Collect</h2>
        <h3>2.1. User Email Address</h3>
        <p>
          When you install and use our Chrome extension, we may collect and
          store your email address. We collect this information for the
          following purposes:
        </p>
        <p>
          To track user API usage and enforce account API limits. For user
          onboarding and to provide you with relevant information and updates
          about our extension. To inform you about promotions, special offers,
          or updates directly related to our extension.
        </p>
        <h3>2.2. Payment Information</h3>
        <p>
          We do not collect or store any payment information. Any payment
          transactions are handled directly by Stripe, a secure third-party
          payment processor. Please review Stripe's Privacy Policy for
          information on how they handle your payment data.
        </p>
        <h3>How We Use Your Information</h3>
        <p>
          We use your email address for the following purposes: To monitor and
          track your API usage to ensure compliance with our API limits. To send
          you important notifications, updates, and information about our
          extension. To communicate with you about promotions, special offers,
          and other relevant content directly related to our extension.
        </p>
        <h3>Data Security</h3>
        <p>
          We take data security seriously and have implemented measures to
          protect your information. All data transferred between your browser
          and our servers is encrypted in transit using industry-standard
          encryption protocols. Additionally, we ensure that your data is stored
          securely, with appropriate safeguards to protect it from unauthorized
          access or disclosure.
        </p>
        <h3>Third-Party Services</h3>
        <p>
          We do not share your email address or any other personal information
          with third parties. Any data you provide to our extension is used
          solely for the purposes outlined in this Privacy Policy.
        </p>
        <h3>Changes to this Privacy Policy</h3>
        <p>
          We reserve the right to update or modify this Privacy Policy at any
          time. If we make any material changes to this policy, we will notify
          you by posting a revised version of the Privacy Policy on our website
          or through other appropriate channels. Your continued use of our
          extension following any changes constitutes your acceptance of those
          changes.
        </p>
        <h3>Contact Us</h3>
        <p>
          If you have any questions, concerns, or requests related to this
          Privacy Policy or your personal information, please contact us at:
          linkedinjobtools(at)gmail.com
        </p>
        Thank you for using LinkedIn Job Tools. We value your trust and are
        committed to protecting your privacy.
        </div>
      </SectionTitle>
      <Cta />
    </>
  );
}
