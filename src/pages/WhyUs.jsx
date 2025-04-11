import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FiSmile, FiStar, FiUsers, FiCheckCircle, FiTrendingUp } from 'react-icons/fi';

const WhyUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 pt-20 pb-16">
        <h1 className="text-4xl font-bold text-center text-orange-500 mb-12">
          Why Choose Vijayaa Makeovers?
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: <FiSmile size={40} />,
              title: 'Expert Artists',
              desc: 'Our team consists of professionally trained artists who specialize in the latest beauty trends and techniques.'
            },
            {
              icon: <FiStar size={40} />,
              title: 'Premium Products',
              desc: 'We use only high-quality, skin-safe products to ensure the best experience and results for every client.'
            },
            {
              icon: <FiUsers size={40} />,
              title: 'Personalized Services',
              desc: 'We tailor every service to your unique preferences and facial features, enhancing your natural beauty.'
            },
            {
              icon: <FiCheckCircle size={40} />,
              title: 'Trusted by Many',
              desc: 'With countless happy clients and glowing reviews, Vijayaa Makeovers is a name you can trust.'
            },
            {
              icon: <FiTrendingUp size={40} />,
              title: 'Modern Techniques',
              desc: 'From airbrush to HD makeup, we bring the latest beauty tech straight to your special occasions.'
            },
            {
              icon: <FiSmile size={40} />,
              title: 'Feel-Good Experience',
              desc: 'It’s not just about how you look—it’s how you feel. We promise you’ll leave glowing inside and out.'
            }
          ].map(({ icon, title, desc }, idx) => (
            <div
              key={idx}
              className="bg-white/5 hover:bg-white/10 transition-all duration-300 p-6 rounded-xl shadow-lg text-center border border-orange-500/20"
            >
              <div className="text-orange-400 mb-4 mx-auto">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-white/80 text-sm">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="/services"
            className="inline-block px-8 py-3 rounded-full text-lg font-semibold text-black bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300 hover:from-yellow-400 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Book Your Glow-Up Now
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WhyUs;
