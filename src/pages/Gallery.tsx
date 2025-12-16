import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { siteData } from '../constants/siteData';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'property', name: 'Property' },
    { id: 'views', name: 'Mountain Views' },
    { id: 'activities', name: 'Activities' },
    { id: 'food', name: 'Food & Dining' }
  ];

  const filteredGallery =
    filter === 'all'
      ? siteData.gallery
      : siteData.gallery.filter((item) => item.category === filter);

  const handlePrevious = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null && selectedImage < filteredGallery.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape') setSelectedImage(null);
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
            Our <span className="text-amber-400">Gallery</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            A visual journey through the beauty of Dimension 11:11 and Parvati Valley
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    filter === category.id
                      ? 'bg-amber-500 text-slate-900 shadow-lg'
                      : 'bg-white text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredGallery.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedImage(index)}
                  className="relative h-64 rounded-xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <img
                    src={item.url}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-semibold text-sm">{item.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredGallery.length === 0 && (
              <div className="text-center py-20">
                <p className="text-xl text-gray-600">
                  No images found in this category
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          onKeyDown={handleKeyPress}
          tabIndex={0}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all z-10"
          >
            <X className="h-6 w-6 text-white" />
          </button>

          {selectedImage > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all z-10"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
          )}

          {selectedImage < filteredGallery.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all z-10"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          )}

          <div
            className="relative max-w-7xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredGallery[selectedImage].url}
              alt={filteredGallery[selectedImage].alt}
              className="w-full h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <p className="text-white text-lg font-semibold">
                {filteredGallery[selectedImage].alt}
              </p>
              <p className="text-gray-300 text-sm mt-1">
                {selectedImage + 1} / {filteredGallery.length}
              </p>
            </div>
          </div>
        </div>
      )}

      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Share Your Experience
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Tag us in your photos and become part of the Dimension 11:11 story
            </p>
            <div className="flex justify-center space-x-8">
              <a
                href={siteData.social.instagram}
                className="text-amber-400 hover:text-amber-300 transition-colors"
              >
                <span className="text-2xl font-semibold">#Dimension1111</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
