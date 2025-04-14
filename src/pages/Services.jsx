import React, { useState, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import categorizedServices from '../data/Dservices';

const ServicesPage = () => {
  const [openCategory, setOpenCategory] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingId, setBookingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    date: '',
    time: '',
    gender: '',
  });
  const [errors, setErrors] = useState({});
  const bookingFormRef = useRef(null);

  const toggleCategory = (category) => {
    setOpenCategory(prev => (prev === category ? null : category));
  };

  const handleServiceSelect = (service) => {
    if (selectedServices.some((s) => s.title === service.title)) {
      setSelectedServices(selectedServices.filter((s) => s.title !== service.title));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const generateBookingId = () => {
    return Math.floor(Math.random() * 1000000);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const newBookingId = generateBookingId();
      setBookingId(newBookingId);
      setBookingSuccess(true);

      setSelectedServices([]);
      setFormData({
        name: '',
        mobile: '',
        date: '',
        time: '',
        gender: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Full Name is required.';
    if (!formData.mobile || !/^\d{10}$/.test(formData.mobile)) newErrors.mobile = 'Valid Mobile Number is required.';
    if (!formData.date) newErrors.date = 'Date is required.';
    if (!formData.time) newErrors.time = 'Time is required.';
    if (!formData.gender) newErrors.gender = 'Gender is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const totalAmount = selectedServices.reduce((total, service) => total + parseFloat(service.price.replace('₹', '').replace(',', '')), 0).toFixed(2);

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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className={`bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer ${selectedServices.some((s) => s.title === service.title) ? 'bg-pink-100' : ''}`}
                      onClick={() => handleServiceSelect(service)}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
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

        {selectedServices.length > 0 && (
          <div ref={bookingFormRef} className="mt-12 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center text-pink-600">Book Your Service</h2>
            <div className="mb-4">
              <p className="font-semibold text-gray-700">Selected Services:</p>
              <ul className="list-disc pl-5">
                {selectedServices.map((service, index) => (
                  <li key={index} className="text-gray-600">{service.title}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <p className="font-semibold text-gray-700">Total Amount: ₹{totalAmount}</p>
            </div>
            <form onSubmit={handleBookingSubmit}>
              <div className="mb-4">
                <label className="block text-gray-600 font-semibold" htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className={`w-full px-4 py-2 border rounded-md shadow-sm ${errors.name ? 'border-red-500' : ''}`}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 font-semibold" htmlFor="mobile">Mobile Number</label>
                <input
                  id="mobile"
                  type="text"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  placeholder="Enter your mobile number"
                  className={`w-full px-4 py-2 border rounded-md shadow-sm ${errors.mobile ? 'border-red-500' : ''}`}
                />
                {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 font-semibold" htmlFor="date">Date</label>
                <input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className={`w-full px-4 py-2 border rounded-md shadow-sm ${errors.date ? 'border-red-500' : ''}`}
                />
                {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 font-semibold" htmlFor="time">Time</label>
                <input
                  id="time"
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className={`w-full px-4 py-2 border rounded-md shadow-sm ${errors.time ? 'border-red-500' : ''}`}
                />
                {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 font-semibold" htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  className={`w-full px-4 py-2 border rounded-md shadow-sm ${errors.gender ? 'border-red-500' : ''}`}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
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
          </div>
        )}

        {bookingSuccess && bookingId && (
          <div className="mt-8 text-center text-green-600">
            <h2 className="text-xl font-semibold">Booking Successful!</h2>
            <p>Your booking ID is: <span className="font-bold">{bookingId}</span></p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
