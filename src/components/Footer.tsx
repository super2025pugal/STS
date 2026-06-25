import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';
import logoSHEI from '../components/logo.png';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/group', label: 'Group of Companies' },
    { to: '/products', label: 'Products Catalog' },
    { to: '/contact', label: 'Contact Us' },
  ];

  const socialLinks = [
    { href: 'https://www.facebook.com/profile.php?id=61576335147558', Icon: Facebook, label: 'Facebook' },
    { href: 'https://www.instagram.com/super_group_of_companies/', Icon: Instagram, label: 'Instagram' },
    { href: 'https://www.linkedin.com/in/super-group-9bb6b3365/', Icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://www.youtube.com/@SuperGroupscbe', Icon: Youtube, label: 'YouTube' },
  ];

  return (
    <footer role="contentinfo" style={{ background: 'var(--navy)', color: 'white' }}>
      {/* Top border — amber line */}
      <div className="h-0.5 w-full" style={{ background: 'linear-gradient(90deg, transparent, var(--amber), transparent)' }} />

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <div className="bg-white/10 rounded-xl p-2">
                <img src={logoSHEI} alt="Super Textile Services logo" width="153" height="102" className="h-10 w-auto object-contain" />
              </div>
              <div>
                <div className="text-white font-bold text-base">Super Textile Service</div>
                <div className="text-steel text-xs">A Unit of Super Group</div>
              </div>
            </Link>

            <p className="text-steel text-sm leading-relaxed mb-6 max-w-sm">
              Leading textile machinery spares and service provider specializing in genuine imported components, technical support, project consultancy, and complete turnkey solutions. Established 1984.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center border border-white/10 text-steel hover:text-white hover:border-amber/50 hover:bg-amber/10 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-bold tracking-widest uppercase mb-6" style={{ letterSpacing: '0.1em' }}>
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-steel text-sm hover:text-amber flex items-center gap-2 transition-colors group"
                  >
                    <span className="w-3 h-px bg-steel group-hover:bg-amber group-hover:w-5 transition-all duration-200" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-bold tracking-widest uppercase mb-6" style={{ letterSpacing: '0.1em' }}>
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--amber)' }} />
                <span className="text-steel text-sm leading-relaxed">
                  100/A, Athipalayam Road,<br />
                  Chinnavedempatti,<br />
                  Coimbatore – 641006
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--amber)' }} />
                <a href="tel:+919942909628" className="text-steel text-sm hover:text-amber transition-colors">
                  +91 99429 09628
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--amber)' }} />
                <a href="mailto:spares@supergroupscbe.com" className="text-steel text-sm hover:text-amber transition-colors">
                  spares@supergroupscbe.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-steel text-xs">
            <small>© {currentYear} Super Textile Services. All rights reserved.</small>
          </p>
          <div className="flex items-center gap-5">
            <Link to="/privacy-policy" className="text-steel text-xs hover:text-amber transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-steel text-xs hover:text-amber transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
