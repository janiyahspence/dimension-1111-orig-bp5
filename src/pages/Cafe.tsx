import { Coffee, Flame, Moon, Sun, Leaf, Phone } from 'lucide-react';
import { siteData } from '../constants/siteData';

const Cafe = () => {
  const menuCategories = [
    {
      name: 'Breakfast',
      icon: Sun,
      items: [
        'Israeli Breakfast',
        'Pancakes with Honey',
        'Fresh Fruit Bowls',
        'Omelettes & Eggs',
        'Parathas & Indian Breakfast'
      ]
    },
    {
      name: 'Main Course',
      icon: Flame,
      items: [
        'Wood-Fired Pizza',
        'Pasta Varieties',
        'Indian Thalis',
        'Tibetan Momos',
        'Falafel Wraps',
        'Local Himachali Dishes'
      ]
    },
    {
      name: 'Beverages',
      icon: Coffee,
      items: [
        'Fresh Mountain Coffee',
        'Masala Chai',
        'Herbal Teas',
        'Fresh Juices',
        'Smoothies',
        'Hot Chocolate'
      ]
    },
    {
      name: 'Special Experiences',
      icon: Moon,
      items: [
        'Candlelight Dinners',
        'Bonfire BBQ Nights',
        'Traditional Himachali Feast',
        'Live Music Dinners'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Cafe & <span className="text-amber-400">Dining</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Savor delicious meals with breathtaking mountain views in our beautifully decorated cafe
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                A Culinary Journey in the Mountains
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Our cafe offers a diverse menu featuring local Himachali flavors, international favorites, and healthy options. Every dish is prepared with fresh ingredients and served with love in an ambiance that's both cozy and inspiring.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
                  alt="Cafe Interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                  alt="Food Spread"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
              <div className="flex items-center justify-center space-x-8 flex-wrap gap-4">
                <div className="flex items-center space-x-3">
                  <Leaf className="h-6 w-6 text-green-600" />
                  <span className="font-semibold text-slate-900">Vegetarian Options</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Leaf className="h-6 w-6 text-green-600" />
                  <span className="font-semibold text-slate-900">Vegan Friendly</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Coffee className="h-6 w-6 text-amber-600" />
                  <span className="font-semibold text-slate-900">Fresh & Local</span>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Menu</h2>
              <p className="text-xl text-gray-300">
                From hearty breakfasts to candlelight dinners under the stars
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {menuCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div
                    key={index}
                    className="bg-slate-800 rounded-2xl p-8 hover:bg-slate-700 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-14 h-14 bg-amber-500/20 rounded-full flex items-center justify-center">
                        <Icon className="h-7 w-7 text-amber-400" />
                      </div>
                      <h3 className="text-2xl font-bold">{category.name}</h3>
                    </div>
                    <ul className="space-y-3">
                      {category.items.map((item, i) => (
                        <li key={i} className="flex items-center space-x-3 text-gray-300">
                          <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-400 text-lg mb-6">
                Menu items and availability may vary by season
              </p>
              <a
                href="https://wa.me/918580731659"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-all duration-300"
              >
                <Phone className="h-5 w-5" />
                <span>Contact for Full Menu</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Special Dining Experiences
              </h2>
              <p className="text-xl text-gray-700">
                Elevate your mountain getaway with our signature dining experiences
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative">
                <div className="h-80 rounded-2xl overflow-hidden shadow-2xl mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1523438097201-512ae7d59c44?w=800&q=80"
                    alt="Bonfire BBQ"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  Bonfire & BBQ Nights
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Experience the magic of outdoor dining under a blanket of stars. Our bonfire nights feature freshly grilled BBQ, warm conversations, and the soothing sounds of the Parvati River in the background.
                </p>
                <p className="text-amber-600 font-semibold">
                  Available nightly • Prior booking required
                </p>
              </div>

              <div className="relative">
                <div className="h-80 rounded-2xl overflow-hidden shadow-2xl mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80"
                    alt="Candlelight Dinner"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  Candlelight Dinners
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Create unforgettable moments with our romantic candlelight dinner setup. Enjoy a specially curated meal in an intimate setting with stunning mountain views and ambient lighting.
                </p>
                <p className="text-amber-600 font-semibold">
                  By arrangement • 24 hours advance notice
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Cafe Timings</h2>
            </div>

            <div className="bg-slate-800 rounded-2xl p-12 text-center">
              <div className="flex justify-center space-x-12 mb-8">
                <div>
                  <Sun className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                  <p className="text-2xl font-bold mb-2">{siteData.timings.cafeOpen}</p>
                  <p className="text-gray-400">Opens</p>
                </div>
                <div className="w-px bg-white/20"></div>
                <div>
                  <Moon className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                  <p className="text-2xl font-bold mb-2">{siteData.timings.cafeClose}</p>
                  <p className="text-gray-400">Closes</p>
                </div>
              </div>
              <p className="text-gray-400">
                Open daily for breakfast, lunch, and dinner
              </p>
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-3xl font-bold mb-6">Ready to Dine with Us?</h3>
              <p className="text-xl text-gray-300 mb-8">
                Reserve your table or order your favorite meal
              </p>
              <a
                href="https://wa.me/918580731659"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-all duration-300"
              >
                <Phone className="h-5 w-5" />
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cafe;
