import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, MessageCircle } from 'lucide-react';
import { siteData } from '../constants/siteData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    inquiryType: 'general'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hello! I'm ${formData.name}.\n\nInquiry Type: ${formData.inquiryType}\n\nMessage: ${formData.message}\n\nEmail: ${formData.email}\nPhone: ${formData.phone}`;
    const whatsappUrl = `https://wa.me/918580731659?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-20">
      <section
        className="relative h-[50vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get in <span className="text-amber-400">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            We're here to help plan your perfect mountain escape
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-8">
                  Contact Information
                </h2>

                <div className="space-y-6 mb-12">
                  <div className="flex items-start space-x-4 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">Phone</h3>
                      <a
                        href={`tel:${siteData.contact.phone}`}
                        className="text-gray-700 hover:text-amber-600 transition-colors"
                      >
                        {siteData.contact.phone}
                      </a>
                      <p className="text-sm text-gray-500 mt-1">
                        Call us anytime (9 AM - 9 PM)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">WhatsApp</h3>
                      <a
                        href={siteData.social.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-amber-600 transition-colors"
                      >
                        {siteData.contact.phone}
                      </a>
                      <p className="text-sm text-gray-500 mt-1">
                        Quick replies on WhatsApp
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">Email</h3>
                      <a
                        href={`mailto:${siteData.contact.email}`}
                        className="text-gray-700 hover:text-amber-600 transition-colors"
                      >
                        {siteData.contact.email}
                      </a>
                      <p className="text-sm text-gray-500 mt-1">
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">Address</h3>
                      <p className="text-gray-700">
                        {siteData.contact.address}<br />
                        {siteData.contact.city}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        1.4 km from Kasol center, across the river
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
                  <Clock className="h-12 w-12 text-amber-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Property Timings</h3>
                  <div className="space-y-2 text-gray-300">
                    <p><span className="text-amber-400 font-semibold">Check-in:</span> {siteData.timings.checkIn}</p>
                    <p><span className="text-amber-400 font-semibold">Check-out:</span> {siteData.timings.checkOut}</p>
                    <p><span className="text-amber-400 font-semibold">Cafe:</span> {siteData.timings.cafeOpen} - {siteData.timings.cafeClose}</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-8">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="inquiryType" className="block text-sm font-semibold text-slate-900 mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      required
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="booking">Booking / Reservation</option>
                      <option value="camping">Camping Information</option>
                      <option value="homestay">Homestay Information</option>
                      <option value="cafe">Cafe / Dining</option>
                      <option value="trekking">Trekking / Activities</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all resize-none"
                      placeholder="Tell us about your plans, questions, or special requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-semibold rounded-lg hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>Send via WhatsApp</span>
                  </button>

                  <p className="text-sm text-gray-500 text-center mt-4">
                    This will open WhatsApp with your message pre-filled
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                How to Reach Us
              </h2>
              <p className="text-xl text-gray-300">
                Your journey to Dimension 11:11
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800 rounded-xl p-8 text-center hover:bg-slate-700 transition-all">
                <Navigation className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">From Delhi</h3>
                <p className="text-gray-300 mb-4">
                  Take an overnight bus to Kasol (12-14 hours) or drive via Chandigarh-Mandi route.
                </p>
                <p className="text-amber-400 text-sm font-semibold">~530 km</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-8 text-center hover:bg-slate-700 transition-all">
                <Navigation className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">From Bhuntar Airport</h3>
                <p className="text-gray-300 mb-4">
                  The nearest airport. Take a taxi to Kasol (31 km, 1.5 hours) through scenic mountain roads.
                </p>
                <p className="text-amber-400 text-sm font-semibold">~31 km</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-8 text-center hover:bg-slate-700 transition-all">
                <Navigation className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">From Kasol Center</h3>
                <p className="text-gray-300 mb-4">
                  Walk 1.4 km towards Manikaran, cross the bridge over Parvati River. We're in Choj Village.
                </p>
                <p className="text-amber-400 text-sm font-semibold">~1.4 km</p>
              </div>
            </div>

            <div className="mt-12 bg-slate-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Location Map</h3>
              <div className="aspect-video rounded-xl overflow-hidden bg-slate-700">
                <iframe
                  src={`https://www.google.com/maps?q=${siteData.contact.coordinates.lat},${siteData.contact.coordinates.lng}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dimension 11:11 Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {siteData.faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
