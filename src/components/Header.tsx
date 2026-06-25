import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logoSHEI from '../components/logo.png';

const navLinks = [
  { to: '/', label: 'Home', exact: true },
  { to: '/group', label: 'Group' },
  { to: '/products', label: 'Products' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <>
      <header
        role="banner"
        className={`fixed w-full z-50 transition-all duration-400 ${
          scrolled
            ? 'bg-navy shadow-navy py-2'
            : 'bg-transparent py-4'
        }`}
        style={{ backdropFilter: scrolled ? 'blur(16px)' : 'none' }}
      >
        <div className="container mx-auto px-5 max-w-7xl">
          <div className="flex items-center justify-between h-14">

            {/* Logo + Brand */}
            <Link to="/" className="flex items-center gap-3 group flex-shrink-0" onClick={() => setIsMenuOpen(false)}>
              <div className={`rounded-xl p-1.5 transition-all duration-300 ${
                scrolled ? 'bg-white/10' : 'bg-white/15 group-hover:bg-white/20'
              }`}>
                <img
                  src={logoSHEI}
                  alt="Super Textile Services logo"
                  width="153"
                  height="102"
                  className="h-9 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-base tracking-tight">
                  Super Textile Service
                </span>
                <span className="text-steel text-[11px] tracking-wide opacity-80">
                  A Unit of Super Group
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav role="navigation" aria-label="Main navigation" className="hidden lg:flex items-center gap-8">
              {navLinks.map(({ to, label, exact }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={exact}
                  className={({ isActive }) =>
                    `nav-item text-sm font-semibold tracking-wide transition-colors duration-200 pb-0.5 ${
                      isActive ? 'text-amber active' : 'text-white/85 hover:text-white'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className="btn-primary text-sm px-5 py-2.5"
              >
                Get a Quote
              </Link>
            </nav>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-navy/95"
          style={{ backdropFilter: 'blur(20px)' }}
          onClick={() => setIsMenuOpen(false)}
        />
        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 w-72 h-full bg-navy-800 border-l border-white/10
                      flex flex-col pt-24 px-8 pb-10 transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ background: '#162233' }}
        >
          <nav role="navigation" aria-label="Mobile navigation" className="flex flex-col gap-1">
            {[...navLinks, { to: '/contact', label: 'Contact Us' }].map(({ to, label, exact }: any) => (
              <NavLink
                key={to}
                to={to}
                end={exact}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-semibold transition-all ${
                    isActive
                      ? 'bg-amber/15 text-amber border border-amber/30'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {label}
                <ChevronDown className="w-4 h-4 -rotate-90 opacity-40" />
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto">
            <div className="h-px bg-white/10 mb-6" />
            <div className="space-y-1.5 text-steel text-xs">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber flex-shrink-0" />
                +91 99429 09628
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber flex-shrink-0" />
                spares@supergroupscbe.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
