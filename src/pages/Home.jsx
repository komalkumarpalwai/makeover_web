import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <main className="relative h-[100vh] w-full">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url('https://w0.peakpx.com/wallpaper/359/343/HD-wallpaper-%E1%83%A6-look-earrings-makeup-face-thumbnail.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
        </div>

        {/* Left-Side Content */}
        <div className="relative z-10 flex items-center h-full px-4 sm:px-10 md:px-20 max-w-screen-xl mx-auto">
          <div className="text-left text-white max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-extrabold font-poppins text-gold mb-4 leading-tight drop-shadow-lg">
              Vijayaa Makeovers
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-white/90 mb-4 leading-snug">
              Where Beauty Meets Perfection
            </h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Pamper yourself with expert beauty services and personalized care designed to highlight your natural elegance.
            </p>
            <a
              href="/services"
              className="inline-block px-8 py-3 rounded-full text-lg font-semibold text-black bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300 hover:from-yellow-400 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl animate-glow"
            >
              Book a Service Now
            </a>
          </div>
        </div>
      </main>

      {/* Featured Card Section */}
      <section className="bg-black py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="bg-white/5 rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-105">
            <div className="md:flex">
              <img
                src="https://t4.ftcdn.net/jpg/06/85/13/63/360_F_685136379_jWQx1sOQEkw1860CrXdgP1jQS4qjrKf0.jpg"
                alt="Featured Service"
                className="w-full md:w-1/2 h-64 object-cover md:h-auto"
              />
              <div className="p-6 text-white md:w-1/2">
                <h3 className="text-2xl font-bold text-orange-400 mb-2">Featured: Bridal Makeover</h3>
                <p className="text-white/80 mb-4">
                  Experience the magic of transformation with our premium bridal makeover. A perfect blend of elegance, grace, and flawless beauty for your special day.
                </p>
                <a
                  href="/booking"
                  className="inline-block mt-2 px-6 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-all duration-300 shadow-md"
                >
                  Book This Service
                </a>
              </div>
            </div>
          </div>

          {/* More Services Button */}
          <div className="text-center">
            <a
              href="/services"
              className="inline-block px-8 py-3 rounded-full text-lg font-semibold text-white bg-orange-500 hover:bg-orange-600 transition-all duration-300 shadow-lg"
            >
              View More Services
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-black py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-white font-bold text-center mb-10">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Ananya Sharma",
                feedback: "Absolutely loved the bridal makeover! I felt like a princess on my wedding day. Highly recommend Vijayaa Makeovers!",
                image: "https://randomuser.me/api/portraits/women/68.jpg",
              },
              {
                name: "Sneha Patel",
                feedback: "Great attention to detail and very friendly staff. I got a facial and hair spa and it was an amazing experience!",
                image: "https://randomuser.me/api/portraits/women/30.jpg",
              },
              {
                name: "Ritu Mehta",
                feedback: "The makeup was flawless, and the hairstyling was exactly what I wanted. I felt so confident during the photoshoot!",
                image: "https://randomuser.me/api/portraits/women/55.jpg",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
                <p className="text-sm text-white/80">{testimonial.feedback}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl text-white font-bold mb-10">Our Transformation Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <iframe
              className="w-full h-64 sm:h-80 rounded-xl"
              src="https://www.youtube.com/embed/5pMJhOQOwlw"
              title="Video 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              className="w-full h-64 sm:h-80 rounded-xl"
              src="https://www.youtube.com/embed/OT7csoxzE1w"
              title="Video 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              className="w-full h-64 sm:h-80 rounded-xl"
              src="https://www.youtube.com/embed/7F9VtD_Cd4w"
              title="Video 3"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Google Map Embed Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl text-white font-bold mb-10">Visit Us</h2>
          <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d166259.01659882003!2d78.64749565874076!3d17.35005425579957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e3d7f42d1f%3A0xe9dbef7553cc28a2!2sTelangana%20Co-Operative%20Bank!5e0!3m2!1sen!2sin!4v1681387131450!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
