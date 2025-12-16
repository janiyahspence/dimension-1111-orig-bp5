import { Link } from 'react-router-dom';
import { Bed, Users, Wifi, Coffee, Wind, Droplet, Mountain, Check, Phone } from 'lucide-react';
import { siteData } from '../constants/siteData';

const Accommodations = () => {
  const allAmenities = [
    { icon: Bed, text: 'Comfortable Bedding' },
    { icon: Mountain, text: 'Mountain Views' },
    { icon: Coffee, text: 'Cafe Access' },
    { icon: Wind, text: 'Fresh Mountain Air' },
    { icon: Droplet, text: 'Hot Water' },
    { icon: Wifi, text: 'Common Area WiFi' }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Your Home in the <span className="text-amber-400">Mountains</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Choose from our riverside camps and cozy homestay rooms, each offering a unique way to experience the magic of Kasol
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-20">
            {siteData.accommodations.map((accommodation, index) => (
              <div
                key={accommodation.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group h-[400px]">
                    <img
                      src={accommodation.image}
                      alt={accommodation.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center space-x-2 text-white mb-2">
                        <Users className="h-5 w-5" />
                        <span className="font-semibold">{accommodation.capacity}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="text-4xl font-bold text-slate-900 mb-4">
                    {accommodation.name}
                  </h2>
                  <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                    {accommodation.description}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">
                      Amenities Included
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {accommodation.amenities.map((amenity, i) => (
                        <div
                          key={i}
                          className="flex items-center space-x-3 text-gray-700"
                        >
                          <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                            <Check className="h-4 w-4 text-amber-600" />
                          </div>
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-slate-900">Pricing</span>
                      <span className="text-gray-600 font-medium">Contact for Rates</span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Our rates vary by season and availability. Contact us for the best rates and special packages.
                    </p>
                  </div>

                  <a
                    href="https://wa.me/918580731659"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-semibold rounded-lg hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-lg"
                  >
                    <Phone className="h-5 w-5" />
                    <span>Book {accommodation.name}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              All Accommodations Include
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allAmenities.map((amenity, index) => {
                const Icon = amenity.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center space-x-4 bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-all"
                  >
                    <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-amber-400" />
                    </div>
                    <span className="text-lg font-medium">{amenity.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-12">
              Booking Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Check-in & Check-out
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <span className="font-semibold text-amber-600">Check-in:</span>{' '}
                    {siteData.timings.checkIn}
                  </p>
                  <p>
                    <span className="font-semibold text-amber-600">Check-out:</span>{' '}
                    {siteData.timings.checkOut}
                  </p>
                  <p className="text-sm text-gray-600 mt-4">
                    Early check-in and late check-out may be available on request, subject to availability.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Payment & Policies
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <span className="font-semibold text-amber-600">Payment:</span> Cash Only
                  </p>
                  <p>
                    <span className="font-semibold text-amber-600">Pets:</span> Welcome
                  </p>
                  <p className="text-sm text-gray-600 mt-4">
                    Please ensure you have sufficient cash as ATMs in Kasol can sometimes run out. Advance booking is recommended during peak season.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 text-center text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-4">Ready to Experience the Magic?</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact us today to check availability and book your perfect mountain escape
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/918580731659"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-all duration-300"
                >
                  WhatsApp Us
                </a>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  View Contact Info
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accommodations;
