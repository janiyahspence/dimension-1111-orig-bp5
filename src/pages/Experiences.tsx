import { Mountain, Clock, TrendingUp, Star, Phone, MapPin } from 'lucide-react';
import { siteData } from '../constants/siteData';

const Experiences = () => {
  const difficultyColors: { [key: string]: string } = {
    Easy: 'bg-green-100 text-green-700',
    Moderate: 'bg-yellow-100 text-yellow-700',
    Difficult: 'bg-red-100 text-red-700'
  };

  const nearbyAttractions = [
    {
      name: 'Manikaran Gurudwara',
      distance: '1.9 km',
      description: 'Sacred Sikh shrine with natural hot springs',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80'
    },
    {
      name: 'Chalal Village',
      distance: '2 km',
      description: 'Peaceful riverside village perfect for walks',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
    },
    {
      name: 'Tosh Village',
      distance: '15 km',
      description: 'Scenic mountain village with stunning views',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Adventures & <span className="text-amber-400">Experiences</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Discover the magic of Parvati Valley through treks, stargazing, and unforgettable mountain experiences
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Curated Experiences
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Whether you seek adventure, spiritual awakening, or peaceful contemplation, we offer experiences that connect you with the essence of the Himalayas.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {siteData.experiences.map((experience) => (
                <div
                  key={experience.id}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={experience.image}
                      alt={experience.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {experience.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {experience.description}
                    </p>

                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Clock className="h-5 w-5 text-amber-600" />
                        <span className="font-medium">{experience.duration}</span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <TrendingUp className="h-5 w-5 text-amber-600" />
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            difficultyColors[experience.difficulty] || 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {experience.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 text-center text-white">
              <Mountain className="h-16 w-16 text-amber-400 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">Need Expert Guidance?</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Our staff provides local trekking information and can help arrange experienced guides for all your adventures
              </p>
              <a
                href="https://wa.me/918580731659"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-all duration-300"
              >
                <Phone className="h-5 w-5" />
                <span>Contact for Trek Info</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Signature Experiences
              </h2>
              <p className="text-xl text-gray-300">
                Unique to Dimension 11:11
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative">
                <div className="h-80 rounded-2xl overflow-hidden shadow-2xl mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80"
                    alt="Stargazing"
                    className="w-full h-full object-cover"
                  />
                </div>
                <Star className="h-12 w-12 text-amber-400 mb-4" />
                <h3 className="text-3xl font-bold mb-4">
                  Stargazing Sessions
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  Experience the universe like never before. Away from city lights, the Parvati Valley sky reveals millions of stars. Join our guided stargazing sessions to witness constellations, planets, and the breathtaking Milky Way.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span>Clear mountain sky views</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span>Comfortable seating arrangements</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span>Hot beverages included</span>
                  </li>
                </ul>
              </div>

              <div className="relative">
                <div className="h-80 rounded-2xl overflow-hidden shadow-2xl mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1523438097201-512ae7d59c44?w=800&q=80"
                    alt="Bonfire Nights"
                    className="w-full h-full object-cover"
                  />
                </div>
                <Star className="h-12 w-12 text-amber-400 mb-4" />
                <h3 className="text-3xl font-bold mb-4">
                  Bonfire Nights
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  Gather around the warmth of our bonfire as the mountain air turns crisp. Share stories, make new friends, enjoy live music, and experience the camaraderie that makes Dimension 11:11 special.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span>Nightly bonfire sessions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span>BBQ and snacks available</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span>Music and entertainment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Nearby Attractions
              </h2>
              <p className="text-xl text-gray-700">
                Explore the wonders around Dimension 11:11
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {nearbyAttractions.map((attraction, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={attraction.image}
                      alt={attraction.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {attraction.name}
                    </h3>
                    <div className="flex items-center space-x-2 text-amber-600 mb-3">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm font-semibold">{attraction.distance}</span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {attraction.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Best Time to Visit
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-slate-800 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-amber-400 mb-3">
                  Summer
                </h3>
                <p className="text-gray-400 text-sm mb-2">March - June</p>
                <p className="text-gray-300">
                  Pleasant weather, perfect for trekking and outdoor activities. Temperature: 15-25°C
                </p>
              </div>
              <div className="bg-slate-800 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-amber-400 mb-3">
                  Monsoon
                </h3>
                <p className="text-gray-400 text-sm mb-2">July - September</p>
                <p className="text-gray-300">
                  Lush greenery and fewer crowds. Some treks may be closed. Temperature: 12-20°C
                </p>
              </div>
              <div className="bg-slate-800 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-amber-400 mb-3">
                  Winter
                </h3>
                <p className="text-gray-400 text-sm mb-2">December - February</p>
                <p className="text-gray-300">
                  Snow-covered landscapes, cozy atmosphere. Best for stargazing. Temperature: 0-10°C
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experiences;
