import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, CheckCircle, Shield, Zap, Truck, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';

// ─── Data ──────────────────────────────────────────────────────────────
interface Product {
  id: string;
  image: string;
  category: string;
  title: string;
  alt: string;
  slug: string;
}

const products: Product[] = [
  { id: '1', image: '/images/products/die_casting1.png', category: 'Spare Parts', title: 'Top Arm and Accessories', alt: 'Top arm and accessories for textile machinery', slug: 'top-arm' },
  { id: '2', image: '/images/products/die_casting2.png', category: 'Spare Parts', title: 'Two Way Cleaning Insert', alt: 'Two way cleaning insert for spinning machines', slug: 'cleaning-insert' },
  { id: '3', image: '/images/products/die_casting3.png', category: 'Spare Parts', title: 'Complete Spin Box', alt: 'Complete spin box assembly', slug: 'spin-box' },
  { id: '5', image: '/images/products/navels.png', category: 'Spare Parts', title: 'Spinning Navels', alt: 'Spinning navels for OE machines', slug: 'spinning-navels' },
  { id: '6', image: '/images/products/toprollers.png', category: 'Spare Parts', title: 'Top Rollers', alt: 'Top rollers for ring frame machines', slug: 'top-rollers' },
  { id: '7', image: '/images/products/rotor_cup.png', category: 'Spare Parts', title: 'Rotor Cup with Bearings', alt: 'Rotor cup with bearings assembly', slug: 'rotor-cup' },
  { id: '9', image: '/images/products/spare2.png', category: 'Spare Parts', title: 'Opening Rollers', alt: 'Opening rollers for spinning machines', slug: 'opening-rollers' },
  { id: '10', image: '/images/products/spare3.png', category: 'Spare Parts', title: 'Rotor Body', alt: 'Rotor body for open end spinning', slug: 'rotor-body' },
  { id: '11', image: '/images/products/fluttedroller.png', category: 'Spare Parts', title: 'Bottom Fluted Rollers', alt: 'Bottom fluted rollers for draw frames', slug: 'fluted-rollers' },
  { id: '12', image: '/images/products/spare5.png', category: 'Spare Parts', title: 'Feed Roll Stepper Motor', alt: 'Feed roll stepper motor', slug: 'feed-roll-motor' },
  { id: '13', image: '/images/products/spare6.png', category: 'Spare Parts', title: 'Inserts', alt: 'Textile machinery inserts', slug: 'inserts' },
  { id: '16', image: '/images/products/spare9.png', category: 'Spare Parts', title: 'Coilers', alt: 'Coilers for spinning machines', slug: 'coilers' },
  { id: '18', image: '/images/products/spare13.png', category: 'Spare Parts', title: 'Drawframe Accessories', alt: 'Drawframe accessories', slug: 'drawframe-accessories' },
  { id: '19', image: '/images/products/spare14.png', category: 'Spare Parts', title: 'Drawframe Accessories', alt: 'Drawframe accessories set', slug: 'drawframe-accessories-set' },
  { id: '21', image: '/images/products/winding.png', category: 'Spare Parts', title: 'Winding Drum', alt: 'Winding drum for textile machinery', slug: 'winding-drum' },
  { id: '22', image: '/images/products/yarn_sensor.png', category: 'Spare Parts', title: 'Yarn Sensor', alt: 'Yarn sensor for spinning machines', slug: 'yarn-sensor' },
];

const trustBadges = [
  { icon: Shield, label: 'Genuine Parts' },
  { icon: Zap, label: 'Global Standards' },
  { icon: Truck, label: 'Fast Delivery' },
  { icon: Headphones, label: 'Expert Support' },
];

// ─── Animation Variants ──────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

// ─── Reusable Components ──────────────────────────────────────────────
const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => <div className={`container mx-auto px-4 sm:px-6 ${className}`}>{children}</div>;

const Section: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({
  children,
  className = '',
  id,
}) => (
  <section id={id} className={`py-12 sm:py-16 md:py-20 lg:py-24 ${className}`}>
    {children}
  </section>
);

const Badge: React.FC<{ children: React.ReactNode; color?: 'cyan' | 'amber' | 'indigo' }> = ({
  children,
  color = 'cyan',
}) => {
  const colorMap = {
    cyan: 'bg-cyan-50 text-cyan-600 border-cyan-200',
    amber: 'bg-amber-50 text-amber-600 border-amber-200',
    indigo: 'bg-indigo-50 text-indigo-600 border-indigo-200',
  };
  return (
    <span
      className={`inline-block text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] px-2.5 sm:px-3 py-1 rounded-full border ${colorMap[color]}`}
    >
      {children}
    </span>
  );
};

// ─── Trust Badges Row ──────────────────────────────────────────────────
const TrustBar: React.FC = () => (
  <div className="bg-white/80 backdrop-blur-sm border-b border-slate-200/60 py-4 sm:py-5">
    <Container>
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        {trustBadges.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2 sm:gap-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">
              <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-slate-700">{label}</span>
          </div>
        ))}
      </div>
    </Container>
  </div>
);

// ─── Product Card ──────────────────────────────────────────────────────
interface ProductCardProps {
  product: Product;
  isHovered: boolean;
  onHover: (id: string | null) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isHovered, onHover }) => {
  return (
    <motion.div
      id={product.slug}
      variants={fadeUp}
      onMouseEnter={() => onHover(product.id)}
      onMouseLeave={() => onHover(null)}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/60 hover:border-transparent h-full flex flex-col"
    >
      {/* Colored top accent bar */}
      <div
        className="h-1 w-full transition-all duration-300"
        style={{
          background: isHovered
            ? 'linear-gradient(90deg, #f59e0b, #d97706)'
            : 'linear-gradient(90deg, #e5e7eb, #e5e7eb)',
        }}
      />

      {/* Image */}
      <div className="relative h-40 sm:h-44 md:h-48 bg-slate-50 flex items-center justify-center overflow-hidden flex-shrink-0">
        <img
          src={product.image}
          alt={product.alt}
          width="400"
          height="400"
          className="max-h-full max-w-full object-contain p-3 sm:p-4 transition-transform duration-500"
          style={{ transform: isHovered ? 'scale(1.08)' : 'scale(1)' }}
          draggable={false}
          loading="lazy"
        />
        {/* Gradient overlay on hover */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent transition-opacity duration-300"
          style={{ opacity: isHovered ? 1 : 0 }}
        />
        {isHovered && (
          <span className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 text-[10px] sm:text-xs font-bold text-white bg-amber-500/90 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
            {product.category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col">
        <div className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-amber-600 mb-1 sm:mb-2">
          {product.category}
        </div>
        <h3 className="text-slate-900 font-bold text-sm sm:text-base leading-snug min-h-[2.5rem] sm:min-h-[3rem]">
          {product.title}
        </h3>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 mt-3 sm:mt-4 text-xs sm:text-sm font-semibold text-slate-700 hover:text-amber-600 transition-colors group/link"
        >
          Request Quote
          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

// ─── Bottom CTA ────────────────────────────────────────────────────────
const CTAFooter: React.FC = () => (
  <div className="mt-12 sm:mt-16 rounded-3xl bg-slate-900 text-white p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />
    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
    <div
      className="absolute inset-0 opacity-5"
      style={{
        backgroundImage:
          'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }}
    />
    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
      <div className="space-y-2 sm:space-y-3 text-center md:text-left">
        <Badge color="amber">Custom Sourcing</Badge>
        {/* 👇 Explicitly added text-white to keep heading white */}
        <h3 className="font-serif text-xl sm:text-2xl md:text-3xl leading-tight text-white">
          Can't Find What You Need?
        </h3>
        <p className="text-slate-300 text-xs sm:text-sm max-w-lg leading-relaxed">
          Our global supplier network gives us access to specialised components and custom manufacturing
          capabilities. We source what others can't.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 flex-shrink-0 w-full sm:w-auto">
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 bg-amber-500 text-slate-900 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/25 text-sm sm:text-base"
        >
          Contact Our Team
          <ArrowRight className="w-4 h-4" />
        </Link>
        <a
          href="tel:+919942909628"
          className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-white/10 transition-colors backdrop-blur-sm text-sm sm:text-base"
        >
          <Phone className="w-4 h-4" />
          Call Us
        </a>
      </div>
    </div>
  </div>
);

// ─── Page Component ────────────────────────────────────────────────────
const ProductsPage: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Prevent right-click on images (optional)
  React.useEffect(() => {
    const prevent = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'IMG') e.preventDefault();
    };
    document.addEventListener('contextmenu', prevent);
    return () => document.removeEventListener('contextmenu', prevent);
  }, []);

  return (
    <>
      <SEO
        title="Textile Machinery Spare Parts Catalog | Genuine OE Components | STS"
        description="Browse genuine OE textile machinery spare parts: rotor cups, top arm assemblies, spinning navels, fluted rollers, yarn sensors & more from Coimbatore."
        keywords="spinning machine parts, ring frame spares, OE spinning components, rotor cup, top arm, navels, fluted rollers, yarn sensor"
        canonicalUrl="https://www.supergroupscbe.com/products"
        ogImage="/images/product.png"
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Textile Machinery Spare Parts',
            itemListElement: products.map((product, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: product.title,
              url: `https://www.supergroupscbe.com/products#${product.slug}`,
              image: `https://www.supergroupscbe.com${product.image}`,
            })),
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.supergroupscbe.com/' },
              { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://www.supergroupscbe.com/products' },
            ],
          },
        ]}
      />

      <Hero
        title="Spare Parts Catalog"
        subtitle="Precision-engineered components for peak performance and long-lasting reliability in textile manufacturing."
        backgroundImages={['/images/product.png']}
        hideExploreButton
        showFeatureCard={false}
        learnMoreTargetId="products-catalog"
      />

      <TrustBar />

      <Section className="bg-slate-50 relative overflow-hidden" id="products-catalog">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
        <Container className="relative z-10">
          {/* Section Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
          >
            <Badge color="cyan">Our Product Range</Badge>
            <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900 mt-3 leading-tight">
              Spare Parts{' '}
              <span className="bg-gradient-to-r from-cyan-600 to-indigo-600 bg-clip-text text-transparent">
                Collection
              </span>
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4 sm:mt-5">
              <div className="h-px w-8 sm:w-12 bg-amber-300" />
              <div className="w-2 h-2 rounded-full bg-amber-400" />
              <div className="h-px w-8 sm:w-12 bg-amber-300" />
            </div>
            <p className="text-slate-600 text-sm sm:text-base mt-4 sm:mt-5 leading-relaxed px-4">
              Premium quality components sourced from leading global manufacturers. Every part meets
              rigorous quality standards for industrial applications.
            </p>
          </motion.div>

          {/* Product Grid – responsive columns */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6"
          >
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isHovered={hoveredId === product.id}
                onHover={setHoveredId}
              />
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <CTAFooter />
        </Container>
      </Section>
    </>
  );
};

export default ProductsPage;