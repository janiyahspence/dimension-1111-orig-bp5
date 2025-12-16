import { Heart, Users, Leaf, Music, Mountain, Star } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Hospitality',
      description: 'We treat every guest like family, ensuring comfort and warmth throughout your stay.'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Committed to eco-friendly practices that preserve the natural beauty of Parvati Valley.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building connections between travelers and fostering a sense of belonging.'
    },
    {
      icon: Music,
      title: 'Art & Culture',
      description: 'Celebrating local culture, music, and artistic expression in everything we do.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-amber-400">Dimension 11:11</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            A sanctuary where synchronicity meets serenity in the heart of the Himalayas
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                  The 11:11 Philosophy
                </h2>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    The number 11:11 has long been associated with spiritual awakening, synchronicity, and alignment with the universe. It represents a moment of clarity, a portal to higher consciousness, and the perfect harmony between the physical and spiritual realms.
                  </p>
                  <p>
                    At Dimension 11:11, we've created a space where these principles come alive. Nestled in the mystical Parvati Valley, our sanctuary offers more than just accommodation - it's a gateway to experiences that transform, connections that inspire, and moments that align with your highest self.
                  </p>
                  <p>
                    Whether you're seeking adventure in the mountains, peace by the river, or simply a pause from the chaos of everyday life, Dimension 11:11 welcomes you to your own personal awakening.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
                    alt="Mountain Landscape"
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-400 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Star className="h-12 w-12 text-slate-900 mx-auto mb-2" />
                    <p className="text-5xl font-bold text-slate-900">11:11</p>
                    <p className="text-sm text-slate-900 font-semibold">Synchronicity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From a vision to a beloved sanctuary
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <p>
                    Dimension 11:11 was born from a simple yet profound vision: to create a space where travelers could disconnect from the noise of modern life and reconnect with nature, themselves, and like-minded souls.
                  </p>
                  <p>
                    Located in the enchanting Choj Village of Kasol, alongside the pristine Parvati River, our property has become a beloved destination for those seeking authentic Himalayan experiences. From humble beginnings, we've grown into a thriving community of travelers, artists, and seekers.
                  </p>
                  <p>
                    What sets us apart is our commitment to creating meaningful experiences. Every element - from our riverside camps to our mountain view cafe, from our stargazing sessions to our bonfire nights - is designed to help you find your own moment of 11:11.
                  </p>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80"
                    alt="Camps at Night"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
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
                Our Values
              </h2>
              <p className="text-xl text-gray-700">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                      <Icon className="h-8 w-8 text-amber-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Kasol & Parvati Valley?
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
                    alt="Parvati Valley"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mountain className="h-8 w-8 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Natural Beauty</h3>
                    <p className="text-gray-300">
                      Surrounded by snow-capped peaks, dense forests, and the crystal-clear Parvati River, this valley is nature at its most pristine.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Users className="h-8 w-8 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Traveler's Paradise</h3>
                    <p className="text-gray-300">
                      Known as "Mini Israel of India," Kasol attracts travelers from around the world, creating a unique multicultural atmosphere.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Star className="h-8 w-8 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Spiritual Energy</h3>
                    <p className="text-gray-300">
                      The valley's ancient temples, hot springs, and serene atmosphere make it a perfect place for spiritual seekers and meditation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mountain className="h-8 w-8 text-amber-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Adventure Hub</h3>
                    <p className="text-gray-300">
                      Gateway to numerous treks including Kheerganga, Tosh, and Malana, offering adventures for all skill levels.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 text-center text-white shadow-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Join Our Community
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Become part of the Dimension 11:11 family. Whether you're staying for a night or a month, you'll always have a home in the mountains.
              </p>
              <div className="inline-flex items-center space-x-4 text-amber-400">
                <Star className="h-8 w-8 animate-pulse" />
                <span className="text-3xl font-bold">11:11</span>
                <Star className="h-8 w-8 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
