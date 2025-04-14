import React, { useState, useRef, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import categorizedServices from '../data/Dservices'; // assuming this file exists

const ServicesPage = () => {
  const [openCategory, setOpenCategory] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [bookingId, setBookingId] = useState(null);

  const bookingFormRef = useRef(null);

  // Load booking ID from localStorage on mount
  useEffect(() => {
    const storedId = localStorage.getItem('bookingId');
    if (storedId) {
      setBookingId(storedId);
    }
  }, []);

  const toggleCategory = (category) => {
    setOpenCategory((prev) => (prev === category ? null : category));
    setSelectedService(null);
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    if (bookingFormRef.current) {
      bookingFormRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const id = 'BOOK' + Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    setBookingId(id);
    localStorage.setItem('bookingId', id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-pink-600">Our Services</h1>

        {Object.entries(categorizedServices).map(([category, services]) => (
          <div key={category} className="mb-8">
            <button
              className="w-full text-left text-xl font-semibold py-3 px-4 bg-white rounded-lg shadow hover:bg-pink-100 transition duration-300"
              onClick={() => toggleCategory(category)}
            >
              {category.trim()}
            </button>

            {openCategory === category && (
              <div>
                {selectedService === null && (
                  <div className="mt-4 text-center text-gray-600">
                    <p className="font-semibold text-lg">
                      Please click on a service below to proceed with booking.
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
                      onClick={() => handleServiceSelect(service)}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-40 object-cover rounded-md mb-3"
                      />
                      <h3 className="text-lg font-bold text-pink-600">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                      <p className="text-pink-500 font-semibold mt-2">{service.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Booking Form */}
        {selectedService && (
          <div ref={bookingFormRef} className="mt-12 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center text-pink-600">Book Your Service</h2>
            <div className="mb-4">
              <p className="font-semibold text-gray-700">Service: {selectedService.title}</p>
              <p className="text-gray-600">{selectedService.description}</p>
              <p className="text-pink-500 font-semibold">{selectedService.price}</p>
            </div>
            <form onSubmit={handleBookingSubmit}>
              <div className="mb-4">
                <label className="block text-gray-600 font-semibold" htmlFor="name">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border rounded-md shadow-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 font-semibold" htmlFor="mobile">
                  Mobile Number
                </label>
                <input
                  id="mobile"
                  type="text"
                  placeholder="Enter your mobile number"
                  className="w-full px-4 py-2 border rounded-md shadow-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 font-semibold" htmlFor="date">
                  Date
                </label>
                <input
                  id="date"
                  type="date"
                  className="w-full px-4 py-2 border rounded-md shadow-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 font-semibold" htmlFor="time">
                  Time
                </label>
                <input
                  id="time"
                  type="time"
                  className="w-full px-4 py-2 border rounded-md shadow-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 font-semibold" htmlFor="gender">
                  Gender
                </label>
                <select
                  id="gender"
                  className="w-full px-4 py-2 border rounded-md shadow-sm"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-2 bg-pink-600 text-black rounded-md shadow hover:bg-pink-700 transition duration-300"
                >
                  Book Now
                </button>
              </div>
            </form>

            {bookingId && (
              <div className="mt-6 text-center">
                <p className="text-lg font-semibold text-green-600">
                  Booking successful! Your Booking ID is:
                </p>
                <p className="text-xl font-bold text-green-800">{bookingId}</p>
              </div>
            )}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
