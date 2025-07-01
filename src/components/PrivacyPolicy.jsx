import React, { useEffect } from 'react';
import '../assets/css/styles.css';

const PrivacyPolicy = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-policy">
      <div className="container" style={{ paddingTop: '120px', paddingBottom: '50px' }}>
        <div className="row">
          <div className="col-md-10 col-md-offset-1 col-sm-12">
            <div className="privacy-content">
              <h1>Privacy Policy – Phence.me</h1>
            <p><em>Last Updated: July 1, 2025</em></p>
            
            <hr />
            
            <h2>1. Introduction</h2>
            <p>This Privacy Policy ("Policy") describes how Phence.me ("Phence," "we," "us," or "our") accesses, collects, stores, uses, and shares ("processes") your personal information when you:</p>
            <ul>
              <li>Visit phence.io or any affiliated website that links to this Policy</li>
              <li>Download or use our mobile app (Phence.me) or any related applications</li>
              <li>Use our secure communication and safety platform, available for <strong>users of all ages</strong></li>
              <li>Engage with us via marketing, events, or customer support activities</li>
            </ul>
            <p>Your privacy is fundamental to our mission of providing secure communication tools. If you disagree with this Policy, please do not use our Services. For questions or concerns, contact us at <strong>privacy@phence.io</strong>.</p>
            
            <hr />
            
            <h2>2. Table of Contents</h2>
            <ol>
              <li>What information do we collect?</li>
              <li>How do we process your information?</li>
              <li>What legal bases do we rely on?</li>
              <li>When and with whom do we share your personal information?</li>
              <li>Do we use cookies and tracking technologies?</li>
              <li>How long do we retain your information?</li>
              <li>How do we secure your information?</li>
              <li>All-ages platform policy</li>
              <li>What are your privacy rights?</li>
              <li>Do-Not-Track (DNT) signals</li>
              <li>U.S. residents' specific privacy rights</li>
              <li>Updates to this Policy</li>
              <li>Contact information</li>
              <li>How to review, update, or delete your data</li>
            </ol>
            
            <hr />
            
            <h2>3. What Information Do We Collect?</h2>
            
            <h3>Information You Provide to Us</h3>
            <ul>
              <li><strong>Account Information:</strong> Names, email addresses, phone numbers, usernames, and passwords</li>
              <li><strong>Communications:</strong> Messages, media files, and other content you share through our platform</li>
              <li><strong>Device Permissions:</strong> Location data, camera access, microphone access, and contacts (only when explicitly granted)</li>
              <li><strong>Support Data:</strong> Information provided when contacting customer support</li>
            </ul>
            
            <h3>Automatically Collected Information</h3>
            <ul>
              <li><strong>Device Data:</strong> Device identifiers, operating system, browser type, IP address</li>
              <li><strong>Usage Data:</strong> App interactions, feature usage, session duration, crash logs</li>
              <li><strong>Location Data:</strong> GPS coordinates, Wi-Fi network information, cell tower data (when location services are enabled)</li>
              <li><strong>Analytics Data:</strong> Performance metrics and user behavior patterns</li>
            </ul>
            
            <h3>Third-Party Services</h3>
            <ul>
              <li><strong>Google APIs:</strong> When using location-based features, Google Maps APIs may access GPS, Wi-Fi, or cellular data</li>
              <li><strong>Analytics Tools:</strong> We use services like Google Analytics to understand platform usage</li>
            </ul>
            
            <p><strong>We do not collect</strong> sensitive personal information such as health records, financial data, biometric data, or information about religious beliefs.</p>
            
            <hr />
            
            <h2>4. How Do We Process Your Information?</h2>
            
            <p>We process your information to:</p>
            <ul>
              <li><strong>Provide Core Services:</strong> Account creation, authentication, secure messaging, and platform functionality</li>
              <li><strong>Enhance Safety:</strong> Fraud prevention, security monitoring, and compliance with safety protocols</li>
              <li><strong>Improve Experience:</strong> Platform personalization, feature development, and performance optimization</li>
              <li><strong>Communications:</strong> Service updates, marketing messages (with opt-out options), and customer support</li>
              <li><strong>Legal Compliance:</strong> Meeting regulatory requirements and responding to legal requests</li>
              <li><strong>Emergency Situations:</strong> Protecting vital interests in critical safety scenarios</li>
            </ul>
            
            <p>We only process data with a valid legal basis or your explicit consent.</p>
            
            <hr />
            
            <h2>5. Legal Bases for Processing</h2>
            
            <ul>
              <li><strong>Consent:</strong> Explicit permission you provide, which can be withdrawn at any time</li>
              <li><strong>Contract Performance:</strong> Processing necessary to deliver our Services as agreed</li>
              <li><strong>Legal Obligations:</strong> Compliance with applicable laws, regulations, or court orders</li>
              <li><strong>Legitimate Interests:</strong> Security measures, fraud prevention, and operational business needs</li>
              <li><strong>Vital Interests:</strong> Protection of health and safety in emergency situations</li>
            </ul>
            
            <p>For users in Canada, we rely on express or implied consent under applicable privacy legislation.</p>
            
            <hr />
            
            <h2>6. When and With Whom We Share Your Information</h2>
            
            <p>We may share your personal information with:</p>
            
            <h3>Service Providers</h3>
            <p>Third-party vendors who provide:</p>
            <ul>
              <li>Cloud hosting and data storage</li>
              <li>Analytics and performance monitoring</li>
              <li>Customer support tools</li>
              <li>Security and fraud prevention services</li>
            </ul>
            
            <h3>Google Services</h3>
            <ul>
              <li><strong>Google Maps Platform:</strong> For location-based features and mapping services</li>
              <li><strong>Google Analytics:</strong> For usage analytics and platform improvement</li>
            </ul>
            
            <h3>Legal and Regulatory Authorities</h3>
            <p>When required by law or to:</p>
            <ul>
              <li>Respond to legal process or government requests</li>
              <li>Investigate potential violations of our Terms of Service</li>
              <li>Protect against fraud, security threats, or illegal activities</li>
              <li>Safeguard the rights and safety of Phence.me, our users, or the public</li>
            </ul>
            
            <h3>Business Transfers</h3>
            <p>In connection with mergers, acquisitions, asset sales, or other business transactions</p>
            
            <p><strong>We do not sell, rent, or trade your personal data to third parties for commercial purposes.</strong></p>
            
            <hr />
            
            <h2>7. Cookies and Tracking Technologies</h2>
            
            <p>We use the following technologies:</p>
            
            <h3>Essential Cookies</h3>
            <ul>
              <li>Account authentication and session management</li>
              <li>Security features and fraud prevention</li>
              <li>Basic site functionality and user preferences</li>
            </ul>
            
            <h3>Analytics Cookies</h3>
            <ul>
              <li>Usage pattern analysis</li>
              <li>Performance monitoring</li>
              <li>Feature effectiveness measurement</li>
            </ul>
            
            <h3>Marketing Cookies</h3>
            <ul>
              <li>Personalized advertising (where permitted)</li>
              <li>Marketing campaign effectiveness</li>
              <li>Social media integration</li>
            </ul>
            
            <p>You can manage cookie preferences through your browser settings. Disabling certain cookies may limit platform functionality.</p>
            
            <hr />
            
            <h2>8. Data Retention</h2>
            
            <p>We retain your personal information:</p>
            <ul>
              <li><strong>Active Accounts:</strong> For as long as your account remains active</li>
              <li><strong>Inactive Accounts:</strong> Up to 24 months after last activity, unless longer retention is required</li>
              <li><strong>Legal Requirements:</strong> As mandated by applicable laws, regulations, or legal proceedings</li>
              <li><strong>Security Purposes:</strong> For fraud prevention and security monitoring as reasonably necessary</li>
            </ul>
            
            <p>Upon account deletion or data retention period expiration, personal data is securely deleted or anonymized.</p>
            
            <hr />
            
            <h2>9. Data Security</h2>
            
            <p>We implement comprehensive security measures including:</p>
            <ul>
              <li><strong>Encryption:</strong> End-to-end encryption for communications and data-at-rest encryption</li>
              <li><strong>Access Controls:</strong> Role-based access limitations and multi-factor authentication</li>
              <li><strong>Security Monitoring:</strong> Continuous threat detection and incident response procedures</li>
              <li><strong>Regular Audits:</strong> Security assessments and vulnerability testing</li>
              <li><strong>Staff Training:</strong> Privacy and security awareness programs</li>
            </ul>
            
            <p>While we maintain industry-standard security practices, no electronic transmission or storage method is completely secure. You transmit information at your own risk.</p>
            
            <hr />
            
            <h2>10. All-Ages Platform Policy</h2>
            
            <p>Phence.me is designed as a secure communication platform for <strong>users of all ages</strong>. We:</p>
            <ul>
              <li>Do not restrict or delete accounts based solely on age</li>
              <li>Implement enhanced safety features suitable for all users</li>
              <li>Provide privacy controls appropriate for different age groups</li>
              <li>Comply with applicable child privacy laws (such as COPPA) when processing information from users under 13</li>
            </ul>
            
            <p>Parents and guardians can contact us at privacy@phence.io for questions about their child's use of our platform.</p>
            
            <hr />
            
            <h2>11. Your Privacy Rights</h2>
            
            <p>Depending on your location, you may have the following rights:</p>
            
            <h3>Universal Rights</h3>
            <ul>
              <li><strong>Access:</strong> Request information about data we process</li>
              <li><strong>Correction:</strong> Update or correct inaccurate personal information</li>
              <li><strong>Deletion:</strong> Request removal of your personal data</li>
              <li><strong>Portability:</strong> Receive your data in a machine-readable format</li>
              <li><strong>Objection:</strong> Object to certain types of processing</li>
              <li><strong>Restriction:</strong> Limit how we process your information</li>
              <li><strong>Withdraw Consent:</strong> Revoke previously given consent</li>
            </ul>
            
            <h3>Jurisdiction-Specific Rights</h3>
            <ul>
              <li><strong>California (CCPA/CPRA):</strong> Right to know, delete, opt-out of sale, and non-discrimination</li>
              <li><strong>Colorado, Connecticut, Virginia:</strong> Similar comprehensive privacy rights</li>
              <li><strong>European Union (GDPR):</strong> Enhanced rights including data protection officer access</li>
              <li><strong>Canada:</strong> Rights under PIPEDA and provincial privacy legislation</li>
            </ul>
            
            <p><strong>To Exercise Your Rights:</strong></p>
            <ul>
              <li>Log into your account settings</li>
              <li>Email privacy@phence.io</li>
              <li>Submit a formal Data Subject Access Request through our support portal</li>
            </ul>
            
            <p>We will verify your identity and respond within applicable legal timeframes. You may appeal our decisions where permitted by law.</p>
            
            <hr />
            
            <h2>12. Do-Not-Track Signals</h2>
            
            <p>We currently <strong>do not</strong> respond to browser Do-Not-Track (DNT) signals due to the lack of consistent industry standards for DNT signal interpretation.</p>
            
            <hr />
            
            <h2>13. Policy Updates</h2>
            
            <p>This Privacy Policy may be updated periodically to reflect:</p>
            <ul>
              <li>Changes in our data practices</li>
              <li>New features or services</li>
              <li>Legal or regulatory requirements</li>
              <li>Industry best practices</li>
            </ul>
            
            <p>We will:</p>
            <ul>
              <li>Update the "Last Updated" date</li>
              <li>Notify users of material changes via email or in-app notifications</li>
              <li>Provide reasonable notice before changes take effect</li>
            </ul>
            
            <p>Continued use of our Services after policy updates constitutes acceptance of the revised terms.</p>
            
            <hr />
            
            <h2>14. Contact Information</h2>
            
            <h3>Privacy Inquiries and Data Requests</h3>
            <ul>
              <li><strong>Email:</strong> privacy@phence.io</li>
              <li><strong>General Support:</strong> support@phence.io</li>
            </ul>
            
            <h3>Mailing Address</h3>
            <p>
              Phence.me<br />
              10627 Brookshire Ln<br />
              Houston, TX 77041<br />
              United States
            </p>
            
            <h3>Response Times</h3>
            <ul>
              <li><strong>General Inquiries:</strong> Within 5 business days</li>
              <li><strong>Data Subject Requests:</strong> Within 30 days (or as required by applicable law)</li>
              <li><strong>Security Incidents:</strong> Within 72 hours of discovery</li>
            </ul>
            
            <hr />
            
            <h2>15. Reviewing, Updating, or Deleting Your Data</h2>
            
            <p>You have comprehensive control over your personal information:</p>
            
            <h3>Account Management</h3>
            <ul>
              <li><strong>Profile Updates:</strong> Modify personal information through account settings</li>
              <li><strong>Privacy Controls:</strong> Adjust sharing and visibility preferences</li>
              <li><strong>Communication Preferences:</strong> Manage notification and marketing settings</li>
            </ul>
            
            <h3>Data Requests</h3>
            <ul>
              <li><strong>Data Export:</strong> Download your information in portable formats</li>
              <li><strong>Account Deletion:</strong> Permanently remove your account and associated data</li>
              <li><strong>Selective Deletion:</strong> Remove specific types of information</li>
            </ul>
            
            <h3>Authorized Representatives</h3>
            <p>You may designate an authorized agent to make requests on your behalf. We require:</p>
            <ul>
              <li>Written authorization from you</li>
              <li>Verification of the agent's identity</li>
              <li>Proof of authorization to act on your behalf</li>
            </ul>
            
            <p><strong>To Submit Requests:</strong></p>
            <ol>
              <li>Log into your Phence.me account settings</li>
              <li>Email privacy@phence.io with your request</li>
              <li>Complete our online Data Subject Access Request form</li>
              <li>Contact our support team for assistance</li>
            </ol>
            
            <p>We will verify your identity and process legitimate requests in accordance with applicable privacy laws.</p>
            
            <hr />
            
            <p><em>This Privacy Policy is effective as of the date listed above and governs your use of Phence.me services available through phence.io and our mobile applications.</em></p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default PrivacyPolicy;
