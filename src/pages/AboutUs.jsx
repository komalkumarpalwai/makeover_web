import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 pt-20 pb-16">
        <h1 className="text-4xl font-bold text-center text-orange-500 mb-12">
          About Vijayaa Makeovers
        </h1>

        <div className="max-w-5xl mx-auto text-center space-y-8">
          <p className="text-white/80 text-lg leading-relaxed">
            At <span className="text-orange-400 font-semibold">Vijayaa Makeovers</span>, we believe beauty is more than just appearance — it's confidence, care, and transformation.
            With a passion for enhancing natural beauty and years of professional experience, we offer a personalized and luxurious experience to every client.
          </p>

          <p className="text-white/70 text-md leading-relaxed">
            Founded with a mission to deliver exceptional beauty services using only the finest products and modern techniques, Vijayaa Makeovers has become a trusted name
            in the industry. From bridal transformations to everyday glam, we’re here to help you shine your brightest.
          </p>

          <p className="text-white/60 text-md leading-relaxed">
            Every client is unique — and so is every look we create. Our team of certified professionals is dedicated to making you feel beautiful, empowered, and radiant inside and out.
          </p>
        </div>

        <div className="mt-16 text-center">
          <a
            href="/services"
            className="inline-block px-8 py-3 rounded-full text-lg font-semibold text-black bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300 hover:from-yellow-400 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Our Services
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
