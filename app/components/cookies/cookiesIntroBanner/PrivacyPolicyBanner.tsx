import { ReactLenis } from '@studio-freight/react-lenis';

import styles from './PrivacyPolicyBanner.module.css';

type Props = {
  setShowPolicyBanner: (isVisible: boolean) => void;
};

const PrivacyPolicyBanner: React.FC<Props> = ({ setShowPolicyBanner }) => (
  <ReactLenis>
    <div className={styles.container}>
      <button
        aria-label="Close Button"
        className={styles.closeButton}
        onClick={() => setShowPolicyBanner(false)}
        type="button"
      />
      <h4>Privacy Policy</h4>
      <p>
        At Adam Planet, we value the privacy of our visitors and users. This
        Privacy Policy outlines the types of personal information that we
        receive and collect when you use our website, as well as how we use,
        protect, and disclose that information.
      </p>
      <h5>Information We Collect</h5>
      <p>
        When you visit our website, we may collect certain information
        automatically, including your IP address, browser type, operating
        system, referring URLs, and other usage information. We may also collect
        personal information that you voluntarily provide to us, such as your
        name, email address, and any other information you choose to provide
        through forms or communications on our website.
      </p>
      <h5>Use of Information</h5>
      <p>
        We may use the information we collect for various purposes, including:
      </p>
      <ul>
        <li>To personalize your experience on our website.</li>
        <li>To improve our website and optimize user experience.</li>
        <li>To respond to inquiries, questions, and requests.</li>
        <li>
          To send periodic emails or newsletters, if you have opted to receive
          them.
        </li>
        <li>To provide, maintain, and improve our products and services.</li>
      </ul>
      <h5>Cookies</h5>
      <p>
        Our website uses cookies to enhance your browsing experience and to
        collect information about how you interact with our website. Please
        refer to our Cookie Policy for more information about the use of cookies
        on our website.
      </p>
      <h5>Third-Party Services</h5>
      <p>
        We may use third-party services, such as Google Analytics, to analyze
        website traffic and usage. These third-party service providers have
        their own privacy policies governing the collection, use, and disclosure
        of your information.
      </p>
      <h5>Data Security</h5>
      <p>
        We are committed to protecting the security of your personal information
        and take reasonable precautions to prevent unauthorized access,
        disclosure, or misuse of your data.
      </p>
      <h5>Your Rights</h5>
      <p>
        You have the right to access, correct, or delete your personal
        information that we hold. If you have any questions or concerns about
        our use of your information, please contact us using the information
        provided below.
      </p>
      <h5>Changes to This Privacy Policy</h5>
      <p>
        We reserve the right to update or change this Privacy Policy at any
        time. Any changes will be effective immediately upon posting the updated
        Privacy Policy on our website.
      </p>
      <h5>Contact Us</h5>
      <p>
        If you have any questions or concerns about this Privacy Policy or our
        data practices, please contact us at adamplanet@gmail.com.
      </p>
    </div>
  </ReactLenis>
);

export default PrivacyPolicyBanner;
