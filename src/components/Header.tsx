import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mountain } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Accommodations', path: '/accommodations' },
    { name: 'Cafe', path: '/cafe' },
    { name: 'Experiences', path: '/experiences' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-xl'
          : 'bg-gradient-to-b from-slate-900/80 to-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="flex items-center space-x-3 group"
          >
            <Mountain className="h-8 w-8 text-amber-400 group-hover:text-amber-300 transition-colors" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white tracking-tight">
                Dimension 11:11
              </span>
              <span className="text-xs text-amber-400 tracking-widest">
                KASOL, PARVATI VALLEY
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'bg-amber-500 text-slate-900'
                    : 'text-gray-200 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <a
            href="https://wa.me/918580731659"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-semibold rounded-lg hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-lg hover:shadow-amber-500/50"
          >
            Book Now
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10 animate-fadeIn">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    location.pathname === link.path
                      ? 'bg-amber-500 text-slate-900'
                      : 'text-gray-200 hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://wa.me/918580731659"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-semibold rounded-lg text-center"
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
