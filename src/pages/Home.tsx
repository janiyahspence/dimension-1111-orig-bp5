import { Link } from 'react-router-dom';
import { Mountain, Tent, Coffee, Compass, Star, MapPin, Phone, ChevronRight } from 'lucide-react';
import { siteData } from '../constants/siteData';

const Home = () => {
  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/70"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="animate-fadeIn">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
              Dimension <span className="text-amber-400">11:11</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-4 font-light tracking-wide">
              {siteData.tagline}
            </p>
            <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Experience the mystical charm of Parvati Valley in Kasol, where mountains meet magic and every moment is a journey to another dimension.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/918580731659"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-semibold rounded-lg hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-amber-500/50 flex items-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Book Your Stay</span>
              </a>
              <Link
                to="/experiences"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center space-x-2"
              >
                <Compass className="h-5 w-5" />
                <span>Explore Experiences</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Welcome to Your Sanctuary
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A place where the rhythm of nature aligns with the beat of your heart. Discover peace, adventure, and spiritual awakening in the heart of the Himalayas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                The 11:11 Experience
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At Dimension 11:11, we believe in the magic of synchronicity. Our name represents the powerful alignment of energies, a moment of spiritual awakening, and the perfect harmony between nature and the soul.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Nestled along the pristine Parvati River in Choj Village, our sanctuary offers more than just accommodation - it's a gateway to experiences that transform and memories that last forever.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-semibold group"
              >
                <span>Learn More About Us</span>
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="order-1 md:order-2">
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80"
                alt="Mountain Landscape"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Offerings
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose your perfect escape in the mountains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Link
              to="/accommodations"
              className="group relative overflow-hidden rounded-2xl bg-slate-800 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80"
                  alt="Camping"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <Tent className="h-12 w-12 text-amber-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Riverside Camping</h3>
                <p className="text-gray-300 mb-4">
                  Sleep under the stars in our comfortable camps with stunning valley views and the soothing sound of the Parvati River.
                </p>
                <span className="text-amber-400 font-semibold inline-flex items-center group-hover:gap-2 transition-all">
                  Explore Camps <ChevronRight className="h-5 w-5" />
                </span>
              </div>
            </Link>

            <Link
              to="/cafe"
              className="group relative overflow-hidden rounded-2xl bg-slate-800 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&q=80"
                  alt="Cafe"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <Coffee className="h-12 w-12 text-amber-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Mountain View Cafe</h3>
                <p className="text-gray-300 mb-4">
                  Savor delicious local and international cuisine in our beautifully decorated cafe with breathtaking mountain views.
                </p>
                <span className="text-amber-400 font-semibold inline-flex items-center group-hover:gap-2 transition-all">
                  View Menu <ChevronRight className="h-5 w-5" />
                </span>
              </div>
            </Link>

            <Link
              to="/experiences"
              className="group relative overflow-hidden rounded-2xl bg-slate-800 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80"
                  alt="Experiences"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <Compass className="h-12 w-12 text-amber-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Trek & Explore</h3>
                <p className="text-gray-300 mb-4">
                  Embark on unforgettable treks to Kheerganga, Grahan, and beyond. Expert guidance and local insights included.
                </p>
                <span className="text-amber-400 font-semibold inline-flex items-center group-hover:gap-2 transition-all">
                  Discover More <ChevronRight className="h-5 w-5" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Featured Experiences
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create memories that last a lifetime
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {siteData.experiences.slice(0, 6).map((experience) => (
              <div
                key={experience.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {experience.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {experience.description}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-amber-600 font-semibold">
                      {experience.duration}
                    </span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs">
                      {experience.difficulty}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/experiences"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all duration-300"
            >
              <span>View All Experiences</span>
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Guest Experiences
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              What our guests say about their journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {siteData.testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Why Choose Dimension 11:11?
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {siteData.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mountain className="h-6 w-6 text-amber-600" />
                </div>
                <p className="font-semibold text-slate-900 text-sm">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <MapPin className="h-16 w-16 text-amber-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Find Your Way to Paradise
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Located in the heart of Kasol, Parvati Valley. Just 1.4 km from Kasol center, across the Parvati River.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-all duration-300"
              >
                Get Directions
              </Link>
              <a
                href={`tel:${siteData.contact.phone}`}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
