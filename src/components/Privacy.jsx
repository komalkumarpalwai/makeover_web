import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Privacy = () => {
  return (
    <div className="bg-black text-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-8 pt-20">
        {/* Adding pt-20 for padding top to push content down */}
        <h1 className="text-3xl font-bold text-orange-500 mb-6">Privacy Policy</h1>
        
        <p className="text-lg mb-4">
          At Vijaya Makeovers, we respect your privacy and are committed to protecting the personal information you share with us.
        </p>
        
        <h2 className="text-2xl font-semibold text-orange-500 mt-6">Information Collection</h2>
        <p className="mb-4">
          We collect personal information when you use our services or interact with our website. This may include your name, contact information, and service preferences.
        </p>
        
        <h2 className="text-2xl font-semibold text-orange-500 mt-6">How We Use Your Information</h2>
        <p className="mb-4">
          We use your information to provide and improve our services, process bookings, and communicate with you about updates, promotions, and offers.
        </p>

        <h2 className="text-2xl font-semibold text-orange-500 mt-6">Data Security</h2>
        <p className="mb-4">
          We take all necessary precautions to protect your personal data, ensuring it is stored securely and is only accessible by authorized personnel.
        </p>

        <h2 className="text-2xl font-semibold text-orange-500 mt-6">Your Rights</h2>
        <p className="mb-4">
          You have the right to access, correct, or delete your personal information at any time. You can contact us to make such requests.
        </p>

        <h2 className="text-2xl font-semibold text-orange-500 mt-6">Changes to This Policy</h2>
        <p className="mb-4">
          We may update our privacy policy from time to time. Any changes will be posted on this page, and the date of the last update will be indicated.
        </p>
      </div>
      
      <Footer />
    </div>
  );
}

export default Privacy;

