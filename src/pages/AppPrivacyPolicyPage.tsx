const PrivacyPolicyPage = ({ name }: { name: string }) => {
  return name === "Link-King" ? (
    <div className="privacy-container">
      <p>
        <strong>Privacy Policy</strong>
      </p>
      <p>Last updated: 21 Oct 2025</p>

      <p>
        This Privacy Policy explains how Link-King (“I,” “me,” or “my”)
        collects, uses, and protects your personal data through the Link-King
        language learning app (“App”) and website (“Website”).
      </p>

      <p>
        <strong>1. Data Controller</strong>
      </p>
      <p>
        Name: Jacob Miller
        <br />
        Address: Rua Prof. Roberto João Forster, 199, Campinas, São Paulo
        <br />
        Email: millerjr@tcd.ie
      </p>

      <p>
        <strong>2. Data Collected</strong>
      </p>
      <p>
        The App collects limited personal data, such as your name, email
        address, and progress metrics (e.g., words learned and performance
        history). Automatically collected data may include device information,
        browser type, and usage data.
      </p>

      <p>
        <strong>3. Purpose and Legal Basis</strong>
      </p>
      <p>
        Your data is processed to operate and improve the App and Website,
        manage subscriptions, and enhance your learning experience. Processing
        is based on contract performance, legitimate interest, legal obligation,
        or your consent.
      </p>

      <p>
        <strong>4. Data Use</strong>
      </p>
      <p>
        Your data is used to provide access to the App, personalize your
        experience, process payments, send updates (if consented), and comply
        with legal requirements.
      </p>

      <p>
        <strong>5. Data Sharing</strong>
      </p>
      <p>
        Link-King does not sell your data. Limited sharing may occur with
        trusted service providers (e.g., hosting or payment processing) or legal
        authorities when required.
      </p>

      <p>
        <strong>6. Data Storage and Retention</strong>
      </p>
      <p>
        Data is securely stored with encryption and technical safeguards.
        Account data is retained until deleted. Payment data may be retained for
        up to 7 years for tax and audit purposes.
      </p>

      <p>
        <strong>7. Data Security</strong>
      </p>
      <p>
        The App uses HTTPS encryption, secure servers, and access control to
        protect your data. You are encouraged to protect your account and device
        with a strong password or biometric lock.
      </p>

      <p>
        <strong>8. Your Rights</strong>
      </p>
      <p>
        Under the GDPR, you may request access, correction, deletion,
        restriction, portability, or object to processing. You may also withdraw
        consent at any time by emailing millerjr@tcd.ie.
      </p>

      <p>
        <strong>9. Cookies</strong>
      </p>
      <p>
        The Website uses cookies to improve functionality and analyze usage. You
        can disable cookies through your browser settings.
      </p>

      <p>
        <strong>10. Children’s Privacy</strong>
      </p>
      <p>
        Link-King is not intended for individuals under 16 years old and does
        not knowingly collect data from children.
      </p>

      <p>
        <strong>11. International Data Transfers</strong>
      </p>
      <p>
        If data is transferred outside the EEA, adequate safeguards such as
        standard contractual clauses are applied to ensure protection.
      </p>

      <p>
        <strong>12. Updates to This Policy</strong>
      </p>
      <p>
        This Privacy Policy may be updated to reflect changes in operations or
        regulations. Updates will be communicated via the Website or App.
      </p>

      <p>
        <strong>13. Contact</strong>
      </p>
      <p>
        For questions, concerns, or data deletion requests, contact:
        <br />
        Address: Rua Prof. Roberto João Forster, 199, Campinas, São Paulo
        <br />
        Email: millerjr@tcd.ie
      </p>

      <p>
        By using the App or Website, you consent to this Privacy Policy and
        agree to its terms.
      </p>
    </div>
  ) : (
    <div className="privacy-container">
      <p>
        <strong>Privacy Policy</strong>
      </p>
      <p>Last updated: 21 Oct 2025</p>

      <p>This privacy policy explains how {name} handles your personal data.</p>

      <p>
        <strong>1. Data Storage</strong>
      </p>
      <p>
        {name} stores all user data locally on your device. No personal or usage
        data is collected, transmitted, or stored on any server.
      </p>

      <p>
        <strong>2. No Data Transmission</strong>
      </p>
      <p>
        Your data remains on your device only. The app does not send any
        information over the internet or to any third party.
      </p>

      <p>
        <strong>3. Developer Access</strong>
      </p>
      <p>
        The developers of {name} have no access to your data since it never
        leaves your device.
      </p>

      <p>
        <strong>4. Data Security</strong>
      </p>
      <p>
        While we take care to keep your data secure within the app, we recommend
        securing your device with a password or biometric lock to protect your
        information.
      </p>

      <p>
        <strong>5. User Control</strong>
      </p>
      <p>
        You have full control over your data. You can delete or reset your data
        at any time within the app.
      </p>

      <p>
        <strong>6. Contact</strong>
      </p>
      <p>
        If you have any questions or concerns regarding this privacy policy,
        please contact me at millerjr@tcd.ie
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;
