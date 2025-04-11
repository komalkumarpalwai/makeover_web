import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center px-4 pt-20 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-6 text-center drop-shadow-lg animate-fade-in">
          Get In Touch
        </h1>
        <p className="text-white/70 max-w-xl text-center mb-10">
          Have questions, suggestions, or just want to say hello? We'd love to hear from you!
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-2xl bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-orange-400/30 shadow-xl space-y-6 animate-fade-up"
          >
            <div>
              <label className="block mb-1 text-white/80">Your Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-white/50"
              />
            </div>

            <div>
              <label className="block mb-1 text-white/80">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-white/50"
              />
            </div>

            <div>
              <label className="block mb-1 text-white/80">Your Message</label>
              <textarea
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-white/50"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-block px-8 py-3 rounded-full text-lg font-semibold text-black bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300 hover:from-yellow-400 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-2xl animate-pulse"
              >
                Send Message
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center mt-16 text-xl text-white animate-fade-in">
            <p className="mb-4">
              Thank you, <span className="text-orange-400 font-semibold">{formData.name}</span>! 🎉
            </p>
            <p>We've received your message and will get back to you shortly.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
