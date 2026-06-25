import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Globe2, Factory, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title?: string;
  subtitle?: string;
  backgroundImages?: string[];
  learnMoreTargetId?: string;
  hideExploreButton?: boolean;
  showFeatureCard?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImages = ['/images/hero1.png'],
  learnMoreTargetId = 'hero-learn-more',
  hideExploreButton = false,
  showFeatureCard = true,
}) => {
  const bgImage = backgroundImages[0];
  const isHomePage = showFeatureCard;

  const handleScrollDown = () => {
    const el = document.getElementById(learnMoreTargetId);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const keyPoints = [
    'Genuine parts from leading global manufacturers',
    'Expert technical consultation and on-site support',
    'Streamlined supply chain for rapid delivery',
    'Comprehensive turnkey project implementation',
  ];

  const badges = [
    { Icon: Award, label: 'ISO Certified' },
    { Icon: Globe2, label: 'Global Network' },
    { Icon: Factory, label: 'Since 1984' },
  ];

  const containerVar = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };
  const itemVar = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ paddingTop: '80px' }}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${bgImage}')` }}
        />
        {/* Deep gradient overlay — navy-heavy for drama */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(105deg, rgba(13,27,42,0.92) 0%, rgba(13,27,42,0.78) 50%, rgba(13,27,42,0.55) 100%)',
          }}
        />
        {/* Precision grid overlay */}
        <div className="absolute inset-0 eng-grid-dark opacity-60" />
        {/* Amber radial glow — subtle, on left */}
        <div
          className="absolute bottom-0 left-0 w-96 h-96 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at bottom left, rgba(232,160,32,0.12) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20">
        <motion.div
          variants={containerVar}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto"
        >
          <div className={`grid ${isHomePage ? 'lg:grid-cols-12' : 'lg:grid-cols-1'} gap-10 lg:gap-16 items-center`}>

            {/* Left / Main column */}
            <div className={`${isHomePage ? 'lg:col-span-7' : 'max-w-3xl mx-auto text-center'} space-y-8`}>

              {/* Eyebrow */}
              <motion.div variants={itemVar}>
                <span className="eyebrow">
                  <span className="w-5 h-px bg-amber" />
                  {isHomePage ? 'Textile Machinery Experts' : 'Super Textile Services'}
                  <span className="w-5 h-px bg-amber" />
                </span>
              </motion.div>

              {/* Headline */}
              <motion.div variants={itemVar}>
                <h1 className="text-white" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.75rem)' }}>
                  {title ? (
                    title
                  ) : (
                    <>
                      Precision Parts.
                      <em className="block not-italic" style={{ color: 'var(--amber)' }}>
                        Trusted Service.
                      </em>
                      <span className="block text-steel" style={{ fontSize: '0.6em' }}>
                        Global Reach.
                      </span>
                    </>
                  )}
                </h1>
              </motion.div>

              {/* Thin amber rule */}
              <motion.div variants={itemVar}>
                <span className={`block h-0.5 w-14 rounded-full ${!isHomePage ? 'mx-auto' : ''}`} style={{ background: 'var(--amber)' }} />
              </motion.div>

              {/* Subtitle */}
              <motion.p
                variants={itemVar}
                className="text-lg text-steel leading-relaxed max-w-xl"
                style={!isHomePage ? { marginLeft: 'auto', marginRight: 'auto' } : {}}
              >
                {subtitle || 'Premier supplier of genuine textile machinery spare parts, technical support, and turnkey solutions — serving manufacturers for over 25 years.'}
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={itemVar}
                className={`flex flex-col sm:flex-row gap-3 pt-2 ${!isHomePage ? 'justify-center' : ''}`}
              >
                {!hideExploreButton && (
                  <Link to="/products" className="btn-primary">
                    Explore Parts Catalog
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
                <button onClick={handleScrollDown} className="btn-ghost">
                  Learn More
                  <ArrowRight className="w-4 h-4 rotate-90" />
                </button>
              </motion.div>

              {/* Trust badges */}
              {isHomePage && (
                <motion.div variants={itemVar} className="flex flex-wrap gap-5 pt-4 border-t border-white/10">
                  {badges.map(({ Icon, label }) => (
                    <div key={label} className="flex items-center gap-2">
                      <Icon className="w-4 h-4" style={{ color: 'var(--amber)' }} />
                      <span className="text-sm text-steel font-medium">{label}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Right panel — Why Choose Us card */}
            {isHomePage && (
              <div className="lg:col-span-5">
                <motion.div variants={itemVar}>
                  <div
                    className="rounded-2xl p-7 border"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      backdropFilter: 'blur(20px)',
                      borderColor: 'rgba(255,255,255,0.12)',
                    }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <span className="w-2 h-2 rounded-full amber-pulse" style={{ background: 'var(--amber)' }} />
                      <h3 className="text-white font-bold text-base tracking-wide">Why Manufacturers Choose Us</h3>
                    </div>
                    <div className="space-y-4">
                      {keyPoints.map((pt, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--amber)' }} />
                          <p className="text-steel text-sm leading-relaxed">{pt}</p>
                        </div>
                      ))}
                    </div>
                    <div
                      className="mt-7 pt-5 border-t flex items-center justify-between"
                      style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                    >
                      <div>
                        <div className="text-white font-bold text-2xl" style={{ fontFamily: '"DM Serif Display", serif' }}>500+</div>
                        <div className="text-steel text-xs tracking-wide">Manufacturers Served</div>
                      </div>
                      <div className="w-px h-10 bg-white/10" />
                      <div>
                        <div className="text-white font-bold text-2xl" style={{ fontFamily: '"DM Serif Display", serif' }}>10K+</div>
                        <div className="text-steel text-xs tracking-wide">Parts in Stock</div>
                      </div>
                      <div className="w-px h-10 bg-white/10" />
                      <div>
                        <div className="text-white font-bold text-2xl" style={{ fontFamily: '"DM Serif Display", serif' }}>25+</div>
                        <div className="text-steel text-xs tracking-wide">Years of Excellence</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}

          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer"
        onClick={handleScrollDown}
      >
        <span className="text-steel text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-white/30 flex items-center justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2 rounded-full"
            style={{ background: 'var(--amber)' }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
