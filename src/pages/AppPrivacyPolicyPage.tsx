const PrivacyPolicyPage = ({ name }: { name: string }) => {
  return (
    <div className="privacy-container">
      <p>
        <strong>Privacy Policy</strong>
      </p>
      <p>Last updated: 31 July 2025</p>

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
        please contact me at jacob@link-king.com.
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;
