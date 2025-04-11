import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Feedback = () => {
  const [formData, setFormData] = useState({ name: '', feedback: '' });
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
        <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-6 text-center drop-shadow-lg">
          We Value Your Feedback
        </h1>
        <p className="text-white/70 max-w-xl text-center mb-10">
          Your thoughts help us improve and provide better experiences. Please take a moment to share your feedback!
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-xl bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-orange-400/30 shadow-xl space-y-6 animate-fade-up"
          >
            <div>
              <label className="block mb-1 text-white/80">Your Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-white/50"
              />
            </div>

            <div>
              <label className="block mb-1 text-white/80">Your Feedback</label>
              <textarea
                name="feedback"
                rows="5"
                required
                value={formData.feedback}
                onChange={handleChange}
                placeholder="Write your feedback..."
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-white/50"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-block px-8 py-3 rounded-full text-lg font-semibold text-black bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300 hover:from-yellow-400 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Submit Feedback
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center mt-16 text-xl text-white animate-fade-in">
            <p className="mb-4 text-orange-400 font-semibold text-2xl">Thank you for your feedback! 🙏</p>
            <p className="mb-6">We appreciate your input and will use it to improve our services.</p>
            <Link
              to="/"
              className="inline-block px-6 py-3 rounded-full text-lg font-semibold text-black bg-gradient-to-r from-yellow-300 via-orange-400 to-amber-400 hover:from-orange-400 hover:to-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Back to Home
            </Link>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Feedback;
