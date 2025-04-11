import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const serviceData = [
  {
    title: 'Bridal Makeup',
    description: 'Elegant and flawless makeup for your big day.',
    image: 'https://images.pexels.com/photos/2808556/pexels-photo-2808556.jpeg?cs=srgb&dl=pexels-skgphotography-2808556.jpg&fm=jpg',
  },
  {
    title: 'Hair Styling',
    description: 'Trendy and personalized hair styling.',
    image: 'https://media.gettyimages.com/id/1332704585/video/beautiful-latin-american-female-customer-looking-happy-as-hairdresser-finishes-her-new-hairdo.jpg?s=640x640&k=20&c=wDB8cpajt-F18j82P2_W-dY-dRmfr26STu6IqOmHBWk=',
  },
  {
    title: 'Facial Treatments',
    description: 'Rejuvenating facials for glowing skin.',
    image: 'https://media.istockphoto.com/id/1367037346/video/4k-video-footage-of-a-young-woman-enjoying-a-relaxing-facial-at-a-spa.jpg?s=640x640&k=20&c=ah61W-9YfaP7VXg3WeRaR991aaOokTIpzzP7o7GExHc=',
  },
  {
    title: 'Party Makeup',
    description: 'Look stunning for any special occasion.',
    image: 'https://media.istockphoto.com/id/1296431297/photo/a-beautiful-young-woman-with-long-hair-doing-makeup-for-a-wedding-or-photo-shoot.jpg?s=612x612&w=0&k=20&c=btIpSQbq1g5g1j4q-xoiN3oRFvKG0Ko5-9isIk_-yI0=',
  },
  {
    title: 'Nail Art',
    description: 'Beautiful and creative nail designs.',
    image: 'https://i0.wp.com/greenweddingshoes.com/wp-content/uploads/2024/12/cute-glitter-brown-trendy-simple-nail-designs.jpg?fit=728%2C9999',
  },
  {
    title: 'Hair Coloring',
    description: 'Vibrant and lasting hair colors.',
    image: 'https://media.gettyimages.com/id/1664116311/video/changing-hair-color-woman-changing-hair-color.jpg?s=640x640&k=20&c=LHUBxwxPFwTQZtUitF1PwXlPcCLVSREWV9fzM4npSps=',
  },
  {
    title: 'Skincare Treatments',
    description: 'Targeted skincare solutions for every need.',
    image: 'https://media.istockphoto.com/id/1456542548/photo/beautiful-young-woman-at-beauty-clinic.jpg?s=612x612&w=0&k=20&c=nen4JaEOB1Bwq8x7YQNMu7L5mnHB8opKz40GBRiVarg=',
  },
  {
    title: 'Makeup Classes',
    description: 'Learn the art of makeup with pros.',
    image: 'https://media.istockphoto.com/id/669639376/photo/makeup-artist-working-in-studio.jpg?s=612x612&w=0&k=20&c=BYE4PlZqBtRAc98PbdYjD3A7hoNmlAuidgis-L8KRnU=',
  },
];

const Services = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    service: '',
    date: '',
    time: '',
  });

  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingId, setBookingId] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = 'BK' + Math.floor(Math.random() * 100000);
    setBookingId(id);
    setBookingSuccess(true);
    setFormData({
      name: '',
      age: '',
      gender: '',
      service: '',
      date: '',
      time: '',
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold text-center mb-10 text-orange-500">Our Services</h1>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 p-4 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-orange-500/40"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-orange-400 mb-2">{service.title}</h3>
              <p className="text-white/80 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Booking Form */}
        <h2 className="text-3xl font-bold text-orange-500 mb-6 text-center">Book a Service</h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-white/5 p-8 rounded-2xl shadow-xl space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="p-3 rounded-lg bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Your Age"
              className="p-3 rounded-lg bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="p-3 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none"
              required
            >
              <option value="" className="text-gray-400">Select Gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Other">Other</option>
            </select>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="p-3 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none"
              required
            >
              <option value="" className="text-gray-400">Choose a Service</option>
              {serviceData.map((s, i) => (
                <option key={i} value={s.title} className="text-black">
                  {s.title}
                </option>
              ))}
            </select>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="p-3 rounded-lg bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="p-3 rounded-lg bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="inline-block px-8 py-3 rounded-full text-lg font-semibold bg-orange-500 hover:bg-orange-600 transition-all duration-300 shadow-md hover:shadow-lg animate-pulse"
            >
              Book Now
            </button>
          </div>
          {bookingSuccess && (
            <div className="text-center text-green-400 mt-4 font-medium">
              Booking Successful! Your Booking ID: <span className="font-bold">{bookingId}</span>
            </div>
          )}
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
