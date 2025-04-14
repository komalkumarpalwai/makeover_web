import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Terms = () => {
  return (
    <div className="bg-black text-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-8 pt-20">
        {/* Adding pt-20 for padding top to push content down */}
        <h1 className="text-3xl font-bold text-orange-500 mb-6">Terms and Conditions</h1>
        
        <p className="text-lg mb-4">
          Welcome to Vijaya Makeovers! These Terms and Conditions outline the rules and regulations for the use of our services.
        </p>

        <h2 className="text-2xl font-semibold text-orange-500 mt-6">Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing or using our services, you agree to comply with these Terms and Conditions. If you do not agree, you must refrain from using our website and services.
        </p>

        <h2 className="text-2xl font-semibold text-orange-500 mt-6">Services</h2>
        <p className="mb-4">
          We provide beauty and makeover services, including but not limited to haircuts, makeup, waxing, and other related services. These services are subject to availability and may change at any time.
        </p>

        <h2 className="text-2xl font-semibold text-orange-500 mt-6">Booking and Payment</h2>
        <p className="mb-4">
          All bookings for our services must be made in advance through our website. Payment for services is required at the time of booking or as per the service package chosen. We accept various payment methods, and charges may vary depending on the service selected.
        </p>

        <h2 className="text-2xl font-semibold text-orange-500 mt-6">Cancellations and Refunds</h2>
        <p className="mb-4">
          Cancellations must be made at least 24 hours in advance to avoid cancellation fees. Refunds are not provided for services that have already been rendered.
        </p>

        <h2 className="text-2xl font-semibold text-orange-500 mt-6">Privacy and Data Protection</h2>
        <p className="mb-4">
          Your privacy is important to us. We collect and use your personal information solely for the purpose of providing our services. For more details, please refer to our Privacy Policy.
        </p>

        <h2 className="text-2xl font-semibold text-orange-500 mt-6">Limitation of Liability</h2>
        <p className="mb-4">
          We are not liable for any damages, injuries, or losses that may arise from using our services. By using our services, you agree to assume all risks associated with their use.
        </p>

        <h2 className="text-2xl font-semibold text-orange-500 mt-6">Modifications to Terms</h2>
        <p className="mb-4">
          We reserve the right to modify these Terms and Conditions at any time. Any changes will be posted on this page, and the date of the last update will be indicated.
        </p>

        <h2 className="text-2xl font-semibold text-orange-500 mt-6">Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns regarding these Terms and Conditions, please feel free to contact us through our website or by emailing us directly.
        </p>
      </div>
      
      <Footer />
    </div>
  );
}

export default Terms;

