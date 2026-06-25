import React, { useEffect, useState } from 'react';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const actions = [
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    href: 'https://wa.me/9942909628',
    bg: '#25D366',
    pulse: true,
  },
  {
    icon: FaPhoneAlt,
    label: 'Call Us',
    href: 'tel:+919942909628',
    bg: 'var(--amber)',
    pulse: false,
  },
  {
    icon: FaEnvelope,
    label: 'Email',
    href: 'mailto:spares@supergroupscbe.com',
    bg: 'var(--navy-700)',
    pulse: false,
  },
];

const FloatingContactActions: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`float-contact transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      {actions.map(({ icon: Icon, label, href, bg, pulse }) => (
        <div
          key={label}
          className="relative group flex items-center"
          onMouseEnter={() => setHovered(label)}
          onMouseLeave={() => setHovered(null)}
        >
          {/* Tooltip */}
          <div
            className={`absolute right-14 whitespace-nowrap
              px-3 py-1.5 rounded-lg text-xs font-semibold text-white
              transition-all duration-200 pointer-events-none
              ${hovered === label ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}
            `}
            style={{ background: 'var(--navy)', boxShadow: 'var(--shadow-md)' }}
          >
            {label}
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full"
              style={{
                width: 0, height: 0,
                borderLeft: '6px solid var(--navy)',
                borderTop: '5px solid transparent',
                borderBottom: '5px solid transparent',
              }}
            />
          </div>

          {/* Button */}
          <a
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            aria-label={label}
            className="relative w-12 h-12 rounded-full flex items-center justify-center text-white
                       shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
            style={{ background: bg }}
          >
            {pulse && (
              <span
                className="absolute inset-0 rounded-full animate-ping opacity-20"
                style={{ background: '#25D366' }}
              />
            )}
            <Icon className="w-5 h-5 relative z-10" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default FloatingContactActions;
