import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import {
  Package,
  Wrench,
  Settings,
  TrendingUp,
  ChevronRight,
} from 'lucide-react';
import Slider from 'react-slick';

import SEO from '../components/SEO';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// ─── Slider Settings ────────────────────────────────────────────────────────
// NOTE: Tailwind's default breakpoints don't include "xs" — all xs:* classes
// are removed and replaced with base / sm / md / lg equivalents.
const partsInventorySettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  cssEase: 'ease-in-out',
  responsive: [
    { breakpoint: 1536, settings: { slidesToShow: 4, slidesToScroll: 1 } }, // 2xl
    { breakpoint: 1280, settings: { slidesToShow: 3, slidesToScroll: 1 } }, // xl
    { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } }, // lg
    { breakpoint: 768,  settings: { slidesToShow: 2, slidesToScroll: 1 } }, // md
    { breakpoint: 640,  settings: { slidesToShow: 2, slidesToScroll: 1 } }, // sm
    { breakpoint: 480,  settings: { slidesToShow: 1, slidesToScroll: 1 } }, // small
    { breakpoint: 360,  settings: { slidesToShow: 1, slidesToScroll: 1 } }, // very small
  ],
};

// ─── Parts Categories ────────────────────────────────────────────────────────
const partsCategories = [
  { name: 'Gears & Transmission', count: '1,200+', image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=300&q=80' },
  { name: 'Belts & Pulleys',       count: '800+',   image: 'https://v4i.rweb-images.com/www.torsion-th.com/images/editor/blog8.jpg' },
  { name: 'Bearings',              count: '2,500+', image: 'https://tse2.mm.bing.net/th/id/OIP.gzmjprlDuRoZ0lhVeK5NSAHaEJ?pid=ImgDet&w=474&h=265&rs=1&o=7&rm=3' },
  { name: 'Rollers',               count: '900+',   image: '/images/products/spare2.png' },
  { name: 'Rotor Body',            count: '600+',   image: '/images/products/spare3.png' },
  { name: 'Yarn Sensor',           count: '1,100+', image: '/images/products/yarn_sensor.png' },
  { name: 'Drawframe Accessories', count: '750+',   image: '/images/products/spare14.png' },
  { name: 'Inserts',               count: '950+',   image: '/images/products/spare6.png' },
];

// ─── Component ───────────────────────────────────────────────────────────────
const HomePage: React.FC = () => {
  const fadeInUp = {
    hidden:  { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <>
      <SEO
        title="Textile Machinery Spare Parts Supplier | Super Textile Services"
        description="Genuine textile machinery spare parts supplier in Coimbatore, India. Spinning, ring frame & draw frame components exported to Bangladesh, Vietnam, UAE & beyond."
        keywords="spinning machine parts, ring frame spares, draw frame parts, OE spares, textile machinery supplier India"
        canonicalUrl="https://www.supergroupscbe.com/"
        ogImage="/images/hero1.png"
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Super Textile Services',
            alternateName: 'STS',
            url: 'https://www.supergroupscbe.com',
            logo: 'https://www.supergroupscbe.com/images/logo.png',
            description:
              'Premier supplier of genuine textile machinery spare parts, technical support, and turnkey solutions, serving global textile manufacturers from Coimbatore, India for over 25 years.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '100/A, Athipalayam Road, Chinnavedempatti',
              addressLocality: 'Coimbatore',
              addressRegion: 'Tamil Nadu',
              postalCode: '641006',
              addressCountry: 'IN',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+91-99429-09628',
              contactType: 'sales',
              email: 'spares@supergroupscbe.com',
              areaServed: ['IN', 'BD', 'PK', 'VN', 'TR', 'AE', 'US'],
            },
            sameAs: [
              'https://www.facebook.com/profile.php?id=61576335147558',
              'https://www.instagram.com/super_group_of_companies/',
              'https://www.linkedin.com/in/super-group-9bb6b3365/',
              'https://www.youtube.com/@SuperGroupscbe',
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': ['LocalBusiness', 'ProfessionalService'],
            name: 'Super Textile Services',
            image: 'https://www.supergroupscbe.com/images/hero1.png',
            '@id': 'https://www.supergroupscbe.com/#localbusiness',
            url: 'https://www.supergroupscbe.com/',
            telephone: '+91-99429-09628',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '100/A, Athipalayam Road, Chinnavedempatti',
              addressLocality: 'Coimbatore',
              addressRegion: 'Tamil Nadu',
              postalCode: '641006',
              addressCountry: 'IN',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 11.056621,
              longitude: 76.9810948,
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                opens: '09:00',
                closes: '18:00',
              },
            ],
            priceRange: '$$',
            currenciesAccepted: 'INR, USD',
            paymentAccepted: 'Cash, Bank Transfer, UPI',
          },
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            url: 'https://www.supergroupscbe.com/',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://www.supergroupscbe.com/products?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          },
        ]}
      />

      <Hero learnMoreTargetId="textile-excellence" />

      {/* ── Visual Impact Section ─────────────────────────────────────────── */}
      {/*
        FIX NOTES:
        • overflow-x-hidden added to prevent animated elements bleeding past the
          viewport on narrow screens.
        • All `xs:*` classes replaced — Tailwind's default config has no "xs"
          breakpoint, so those classes were silent no-ops.
        • motion x offsets reduced to ±15px (was ±30px) to prevent scroll bars
          on mobile during animation.
        • Image grid column heights re-calibrated for 360 px–480 px range.
        • Button row uses flex-wrap so buttons never overflow their container.
      */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-indigo-50/60 relative overflow-hidden">
        {/* Decorative blobs — clipped so they never cause horizontal scroll */}
        <div className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden">
          <div className="absolute top-0 -right-20 w-64 h-64 sm:w-80 sm:h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-64 h-64 sm:w-80 sm:h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl" />
        </div>

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">

            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 text-center lg:text-left"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-indigo-100/80 border border-indigo-200/60 rounded-full mb-4 sm:mb-6 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-indigo-600 rounded-full animate-pulse" />
                <span className="text-[10px] sm:text-xs font-semibold text-indigo-800 tracking-wide uppercase">
                  Trusted by 500+ Manufacturers
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
                Keeping the World's Textile{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
                  Machinery Running
                </span>
              </h2>

              {/* Body */}
              <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                From spinning frames to ring frames, from draw frames to roving machines—we supply
                the critical components that keep textile production flowing. Every bearing, every
                gear, every belt matters when efficiency is measured in seconds.
              </p>

              {/* CTAs — flex-wrap prevents overflow on 360 px */}
              <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
                <a
                  href="/products"
                  className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:bg-indigo-700 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                >
                  Explore Parts <ChevronRight className="w-4 h-4" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-white text-gray-700 font-semibold rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all duration-300 text-sm sm:text-base"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>

            {/* Right: Staggered Image Grid
                Heights calibrated per breakpoint (no xs:*):
                  mobile  (<640)  : col-A top 120px / bottom 148px
                  sm      (640+)  : col-A top 160px / bottom 200px
                  md      (768+)  : col-A top 200px / bottom 240px
                  lg      (1024+) : col-A top 240px / bottom 272px
            */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-2 sm:gap-4 order-1 lg:order-2"
            >
              {/* Column A */}
              <div className="space-y-2 sm:space-y-4">
                <div className="relative h-[120px] sm:h-40 md:h-52 lg:h-60 rounded-2xl overflow-hidden shadow-lg shadow-indigo-100/50 group">
                  <img
                    src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80"
                    alt="Textile manufacturing"
                    width="600"
                    height="400"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                  <span className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 text-[9px] sm:text-xs font-semibold text-white bg-black/30 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full backdrop-blur-sm">
                    Manufacturing
                  </span>
                </div>
                <div className="relative h-[148px] sm:h-52 md:h-60 lg:h-72 rounded-2xl overflow-hidden shadow-lg shadow-blue-100/50 group">
                  <img
                    src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=600&q=80"
                    alt="Quality control"
                    width="600"
                    height="400"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                  <span className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 text-[9px] sm:text-xs font-semibold text-white bg-black/30 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full backdrop-blur-sm">
                    Quality Control
                  </span>
                </div>
              </div>

              {/* Column B — offset downward for the stagger look */}
              <div className="space-y-2 sm:space-y-4 pt-4 sm:pt-6 md:pt-8 lg:pt-12">
                <div className="relative h-[148px] sm:h-52 md:h-60 lg:h-72 rounded-2xl overflow-hidden shadow-lg shadow-indigo-100/50 group">
                  <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80"
                    alt="Precision parts"
                    width="600"
                    height="400"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                  <span className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 text-[9px] sm:text-xs font-semibold text-white bg-black/30 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full backdrop-blur-sm">
                    Precision Parts
                  </span>
                </div>
                <div className="relative h-[120px] sm:h-40 md:h-52 lg:h-60 rounded-2xl overflow-hidden shadow-lg shadow-blue-100/50 group">
                  <img
                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=80"
                    alt="R&D"
                    width="600"
                    height="400"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                  <span className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 text-[9px] sm:text-xs font-semibold text-white bg-black/30 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full backdrop-blur-sm">
                    R&amp;D
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Core Services ─────────────────────────────────────────────────── */}
      <section id="textile-excellence" className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            title="Our Core Services"
            subtitle="Comprehensive solutions for textile manufacturing operations"
            className="text-gray-800"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-10 md:mt-12">
            <Suspense fallback={<div className="col-span-4 text-center py-8">Loading…</div>}>
              <ServiceCard
                icon={<Package className="w-7 h-7 md:w-8 md:h-8 text-indigo-600" />}
                title="Genuine Spare Parts"
                description="Authentic imported components and premium alternatives for all textile machinery."
                link="/products"
                delay={0.1}
                className="group bg-gray-50/80 backdrop-blur-sm border border-gray-100 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-100/50 rounded-2xl p-4 sm:p-5 md:p-6 transition-all duration-300 hover:-translate-y-1"
              />
              <ServiceCard
                icon={<Wrench className="w-7 h-7 md:w-8 md:h-8 text-blue-600" />}
                title="Technical Support"
                description="Expert maintenance, repair services, and comprehensive on-site assistance."
                link="/services"
                delay={0.2}
                className="group bg-gray-50/80 backdrop-blur-sm border border-gray-100 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 rounded-2xl p-4 sm:p-5 md:p-6 transition-all duration-300 hover:-translate-y-1"
              />
              <ServiceCard
                icon={<Settings className="w-7 h-7 md:w-8 md:h-8 text-violet-600" />}
                title="Project Consultancy"
                description="Professional guidance for installations, upgrades, and optimization."
                link="/services"
                delay={0.3}
                className="group bg-gray-50/80 backdrop-blur-sm border border-gray-100 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-100/50 rounded-2xl p-4 sm:p-5 md:p-6 transition-all duration-300 hover:-translate-y-1"
              />
              <ServiceCard
                icon={<TrendingUp className="w-7 h-7 md:w-8 md:h-8 text-emerald-600" />}
                title="Turnkey Solutions"
                description="Complete project implementation from planning through commissioning."
                link="/services"
                delay={0.4}
                className="group bg-gray-50/80 backdrop-blur-sm border border-gray-100 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-100/50 rounded-2xl p-4 sm:p-5 md:p-6 transition-all duration-300 hover:-translate-y-1"
              />
            </Suspense>
          </div>
        </div>
      </section>

      {/* ── Parts Inventory Slider ─────────────────────────────────────────── */}
      {/*
        FIX NOTES:
        • Slider card image height uses fixed px values instead of xs:* classes:
            mobile: 128px  |  sm: 160px  |  md: 192px
        • Slider wrapper gets overflow-hidden so dots/arrows never overflow.
        • CTA button is always full-width on mobile (w-full sm:w-auto).
      */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-72 sm:h-72 bg-indigo-100 rounded-full filter blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-72 sm:h-72 bg-blue-100 rounded-full filter blur-3xl" />
        </div>

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <SectionTitle
            title="Extensive Parts Inventory"
            subtitle="10,000+ premium components ready for immediate dispatch"
            className="text-gray-800"
          />

          {/* Slider — overflow-hidden prevents slick track from bleeding out */}
          <div className="mt-8 sm:mt-10 md:mt-12 overflow-hidden parts-inventory-slider">
            <Suspense fallback={<div className="text-center py-12">Loading inventory…</div>}>
              <Slider {...partsInventorySettings}>
                {partsCategories.map((category, index) => (
                  <div key={index} className="px-1.5 sm:px-2 lg:px-3">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="group bg-white rounded-2xl overflow-hidden border border-gray-200
                                 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-100/50
                                 transition-all duration-300 hover:-translate-y-1"
                    >
                      {/* Image — no xs:* classes; uses plain px values */}
                      <div className="relative h-[128px] sm:h-40 md:h-48 overflow-hidden">
                        <img
                          src={category.image}
                          alt={category.name}
                          width="300"
                          height="300"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                        <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
                          <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-indigo-600 text-white text-[10px] sm:text-xs font-bold rounded-full shadow-md">
                            {category.count}
                          </span>
                        </div>
                        <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3">
                          <Package className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white/80" />
                        </div>
                      </div>

                      {/* Card footer */}
                      <div className="p-2.5 sm:p-3 md:p-4">
                        <h3 className="text-xs sm:text-sm md:text-base font-bold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                          {category.name}
                        </h3>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </Slider>
            </Suspense>
          </div>

          {/* CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-8 sm:mt-10 md:mt-12 text-center"
          >
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto px-2 sm:px-0">
              Can't find the specific part you need? Our sourcing team can locate specialized
              components from our global network.
            </p>
            {/* Full-width on mobile so it's easy to tap; auto width from sm up */}
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:bg-indigo-700 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              Contact Our Experts
              <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;