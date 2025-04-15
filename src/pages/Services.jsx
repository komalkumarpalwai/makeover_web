import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
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

  // Scroll to form when services are selected
  useEffect(() => {
    if (selectedServices.length > 0 && bookingFormRef.current) {
      bookingFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedServices]);

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8 pt-20">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-6 text-center text-pink-600 dark:text-pink-400"
        >
          Our Services
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {Object.entries(categorizedServices).map(([category, services]) => (
            <motion.div 
              key={category} 
              className="mb-8"
              variants={itemVariants}
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full text-left text-xl font-semibold py-3 px-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:bg-pink-100 dark:hover:bg-gray-700 transition duration-300"
                onClick={() => toggleCategory(category)}
              >
                <span className="text-gray-800 dark:text-white">{category.trim()}</span>
              </motion.button>

              {openCategory === category && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                    {services.map((service, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                        className={`bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer ${
                          selectedServices.some((s) => s.title === service.title) 
                            ? 'bg-pink-100 dark:bg-pink-900' 
                            : ''
                        }`}
                        onClick={() => handleServiceSelect(service)}
                      >
                        <motion.img
                          src={service.image}
                          alt={service.title}
                          loading="lazy"
                          className="w-full h-40 object-cover rounded-md mb-3"
                          whileHover={{ scale: 1.03 }}
                        />
                        <h3 className="text-lg font-bold text-pink-600 dark:text-pink-400">{service.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                        <p className="text-pink-500 dark:text-pink-400 font-semibold mt-2">{service.price}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {selectedServices.length > 0 && (
          <motion.div 
            ref={bookingFormRef} 
            className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-center text-pink-600 dark:text-pink-400">Book Your Service</h2>
            <div className="mb-4">
              <p className="font-semibold text-gray-700 dark:text-gray-300">Selected Services:</p>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                {selectedServices.map((service, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {service.title}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <p className="font-semibold text-gray-700 dark:text-gray-300">Total Amount: ₹{totalAmount}</p>
            </div>
            <form onSubmit={handleBookingSubmit}>
              <div className="mb-4">
                <label className="block text-gray-600 dark:text-gray-300 font-semibold" htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className={`w-full px-4 py-2 border rounded-md shadow-sm dark:bg-gray-700 dark:text-white dark:border-gray-600 ${
                    errors.name ? 'border-red-500' : ''
                  }`}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 dark:text-gray-300 font-semibold" htmlFor="mobile">Mobile Number</label>
                <input
                  id="mobile"
                  type="text"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  placeholder="Enter your mobile number"
                  className={`w-full px-4 py-2 border rounded-md shadow-sm dark:bg-gray-700 dark:text-white dark:border-gray-600 ${
                    errors.mobile ? 'border-red-500' : ''
                  }`}
                />
                {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 dark:text-gray-300 font-semibold" htmlFor="date">Date</label>
                <input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className={`w-full px-4 py-2 border rounded-md shadow-sm dark:bg-gray-700 dark:text-white dark:border-gray-600 ${
                    errors.date ? 'border-red-500' : ''
                  }`}
                />
                {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 dark:text-gray-300 font-semibold" htmlFor="time">Time</label>
                <input
                  id="time"
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className={`w-full px-4 py-2 border rounded-md shadow-sm dark:bg-gray-700 dark:text-white dark:border-gray-600 ${
                    errors.time ? 'border-red-500' : ''
                  }`}
                />
                {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 dark:text-gray-300 font-semibold" htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  className={`w-full px-4 py-2 border rounded-md shadow-sm dark:bg-gray-700 dark:text-white dark:border-gray-600 ${
                    errors.gender ? 'border-red-500' : ''
                  }`}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
              </div>
              <div className="text-center">
                <motion.button
                  type="submit"
                  className="px-8 py-3 bg-pink-600 text-white dark:text-white rounded-lg shadow-lg hover:bg-pink-700 transition duration-300 flex items-center justify-center gap-2"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0px 5px 15px rgba(236, 72, 153, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span>Book Now</span>
                  <motion.span
                    animate={{ 
                      x: [0, 4, 0],
                      transition: { 
                        repeat: Infinity, 
                        duration: 1.5,
                        ease: "easeInOut"
                      } 
                    }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}

        {bookingSuccess && bookingId && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="mt-8 text-center text-green-600 dark:text-green-400 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
          >
            <motion.h2 
              className="text-2xl font-semibold mb-2"
              initial={{ y: -10 }}
              animate={{ y: 0 }}
            >
              Booking Successful!
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Your booking ID is: <span className="font-bold text-lg">{bookingId}</span>
            </motion.p>
            <motion.div
              className="mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-gray-600 dark:text-gray-300">We'll contact you shortly to confirm your appointment.</p>
            </motion.div>
          </motion.div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
