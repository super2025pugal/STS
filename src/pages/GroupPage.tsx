import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  ArrowUpRight,
  Factory,
  Award,
  Users,
  Globe,
  Clock,
  Building2,
  TrendingUp,
} from 'lucide-react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';

// ─── Data ──────────────────────────────────────────────────────────────
const companies = [
  {
    id: 1,
    title: 'Super Machine Works',
    logo: '/images/superlogo.png',
    alt: 'Super Machine Works company logo',
    established: 'Est. 1984',
    description:
      'Super Machine Works is a leading manufacturer of textile and general engineering machinery. With innovations including Open End Spinning Machines (SUPER OS 480) and Auto Leveler Draw Frames, the company is renowned for durable, high-performance machines that meet global quality standards.',
    linkTo: 'https://www.supergroupscbe.com/',
    features: ['Carding Machines', 'Drawframe', 'Open End Spinning Machine'],
    accent: '#4f8f63',
    accentLight: '#c1dbc4',
  },
  {
    id: 2,
    title: 'Sudharsan Heavy Engineering Industry',
    logo: '/images/sheilogo.png',
    alt: 'Sudharsan Heavy Engineering Industry logo',
    established: 'Precision Engineering',
    description:
      'SHEI supports diversified engineering solutions including High Pressure Die Casting, Sheet Metal Fabrication, CNC/VMC Machining, advanced tooling, and global product engineering — delivering precision components for industrial applications worldwide.',
    linkTo: 'https://shei.co.in/',
    features: ['Die Casting', 'CNC/VMC Machining', 'Global Solutions'],
    accent: '#3a59af',
    accentLight: '#bdcbe0',
  },
];

// ─── Animation ─────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const fadeSlideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const fadeSlideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

// ─── Reusable Components ──────────────────────────────────────────────
const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => <div className={`container mx-auto px-4 sm:px-6 ${className}`}>{children}</div>;

// 🔁 Updated Section to accept id prop
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

const FeatureChip: React.FC<{ children: React.ReactNode; color: string }> = ({
  children,
  color,
}) => (
  <span
    className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg border bg-slate-50"
    style={{ borderColor: `${color}40`, color }}
  >
    <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5" style={{ color }} />
    {children}
  </span>
);

interface CompanyCardProps {
  title: string;
  logo: string;
  alt: string;
  established: string;
  description: string;
  linkTo: string;
  features: string[];
  accent: string;
  accentLight: string;
}

const CompanyCard: React.FC<CompanyCardProps> = ({
  title,
  logo,
  alt,
  established,
  description,
  linkTo,
  features,
  accent,
  accentLight,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-slate-200/60 overflow-hidden group h-full flex flex-col">
      <div className="h-1.5 w-full" style={{ background: accent }} />
      <div className="p-5 sm:p-6 md:p-8 lg:p-10 flex-1 flex flex-col">
        {/* Header: Logo + Badge */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4 sm:mb-6">
          <div className="flex items-center justify-center h-16 w-24 sm:h-20 sm:w-28 md:h-24 md:w-32 rounded-xl p-2 sm:p-3 bg-slate-50 border border-slate-200/50 flex-shrink-0">
            <img src={logo} alt={alt} width="200" height="150" className="max-h-12 sm:max-h-14 md:max-h-16 max-w-full object-contain" loading="lazy" />
          </div>
          <span
            className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold tracking-widest uppercase px-2 sm:px-3 py-1 sm:py-1.5 rounded-full whitespace-nowrap"
            style={{
              background: accentLight + '80',
              color: accent,
              border: `1px solid ${accent}30`,
            }}
          >
            <Clock className="w-3 h-3" />
            {established}
          </span>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-slate-900 mb-3 sm:mb-4">{title}</h3>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 flex-1">{description}</p>

        {/* Features */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
          {features.map((feat) => (
            <FeatureChip key={feat} color={accent}>
              {feat}
            </FeatureChip>
          ))}
        </div>

        {/* Button */}
        <a
          href={linkTo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 sm:px-5 sm:py-3 md:px-6 md:py-3.5 rounded-xl border-2 font-bold text-xs sm:text-sm transition-all duration-300 group/btn"
          style={{
            borderColor: accent,
            color: accent,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = accent;
            (e.currentTarget as HTMLElement).style.color = 'white';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = 'transparent';
            (e.currentTarget as HTMLElement).style.color = accent;
          }}
        >
          <Factory className="w-4 h-4" />
          Visit Official Website
          <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
};

// ─── EcosystemBlock – Premium Split Layout ────────────────────────────
interface StatCardProps {
  icon: React.ElementType;
  label: string;
  detail: string;
  delay: number;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, label, detail, delay }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ delay }}
    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-5 flex items-center gap-4 sm:gap-5 hover:bg-white/10 transition-all group cursor-default"
  >
    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
    </div>
    <div className="min-w-0">
      <div className="font-bold text-white text-base sm:text-lg truncate">{label}</div>
      <div className="text-[10px] sm:text-xs text-slate-400 tracking-wide uppercase truncate">{detail}</div>
    </div>
  </motion.div>
);

const EcosystemBlock: React.FC = () => {
  return (
    <div className="mt-12 sm:mt-16 rounded-3xl bg-slate-900 text-white p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
      {/* Premium background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />
      <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
        {/* Left: Narrative */}
        <motion.div
          variants={fadeSlideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-3 space-y-4 sm:space-y-6"
        >
          <Badge color="amber">One Ecosystem</Badge>
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
            Building India's <br />
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Industrial Backbone
            </span>
          </h3>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
            The SUPER Group's diversified companies work in concert to provide comprehensive
            engineering and manufacturing solutions. By combining expertise across textiles, heavy
            engineering, and precision manufacturing, we deliver end-to-end capabilities that few
            organisations can match.
          </p>
          <div className="flex items-center gap-3">
            <div className="h-px w-12 sm:w-16 bg-amber-500/50" />
            <span className="text-[10px] sm:text-xs text-amber-400/60 tracking-[0.2em] uppercase font-medium">
              Synergy in action
            </span>
            <div className="h-px w-12 sm:w-16 bg-amber-500/50" />
          </div>
        </motion.div>

        {/* Right: Stats Grid – responsive columns */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-3 sm:gap-4"
        >
          <StatCard icon={Award} label="ISO Certified" detail="Quality Management" delay={0.1} />
          <StatCard icon={Users} label="1,200+ Employees" detail="Skilled Workforce" delay={0.2} />
          <StatCard icon={Globe} label="Global Footprint" detail="15+ Countries" delay={0.3} />
        </motion.div>
      </div>
    </div>
  );
};

// ─── Page Component ────────────────────────────────────────────────────
const GroupPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Super Group of Companies | Textile & Engineering Manufacturing | Coimbatore"
        description="The SUPER Group is a diversified industrial engineering network with expertise in textile machinery, die casting, CNC machining, and system automation based in Coimbatore, India."
        keywords="industrial manufacturing group India, engineering group Coimbatore, Super Machine Works, SHEI engineering"
        canonicalUrl="https://www.supergroupscbe.com/group"
        ogImage="/images/hero1.png"
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'SUPER Group of Companies',
            alternateName: 'Super Group',
            url: 'https://www.supergroupscbe.com/group',
            logo: 'https://www.supergroupscbe.com/images/logo.png',
            description:
              'The SUPER Group is a diversified industrial engineering network headquartered in Coimbatore, India, with member companies spanning textile machinery manufacturing, high-pressure die casting, CNC/VMC machining, and turnkey engineering solutions.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '100/A, Athipalayam Road, Chinnavedempatti',
              addressLocality: 'Coimbatore',
              addressRegion: 'Tamil Nadu',
              postalCode: '641006',
              addressCountry: 'IN',
            },
            subOrganization: companies.map((co) => ({
              '@type': 'Organization',
              name: co.title,
              description: co.description,
              logo: `https://www.supergroupscbe.com${co.logo}`,
              url: co.linkTo,
            })),
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.supergroupscbe.com/' },
              { '@type': 'ListItem', position: 2, name: 'Group', item: 'https://www.supergroupscbe.com/group' },
            ],
          },
        ]}
      />

      <Hero
        title="The SUPER Group of Companies"
        subtitle="A multi-industry enterprise known for high-precision manufacturing across textile, die casting, and engineering sectors."
        backgroundImages={[
          'https://png.pngtree.com/thumb_back/fh260/background/20240604/pngtree-cnc-machine-working-with-workpiece-on-smart-factory-image_15739298.jpg',
        ]}
        hideExploreButton
        showFeatureCard={false}
        learnMoreTargetId="group-portfolio"
      />

      {/* 🔁 Added id="group-portfolio" to the main section */}
      <Section className="bg-slate-50" id="group-portfolio">
        <Container>
          {/* Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center mb-12 sm:mb-16"
          >
            <Badge color="cyan">Our Companies</Badge>
            <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900 mt-3 leading-tight">
              A Legacy of{' '}
              <span className="bg-gradient-to-r from-cyan-600 to-indigo-600 bg-clip-text text-transparent">
                Engineering Excellence
              </span>
            </h2>
            <div className="flex justify-center items-center gap-3 mt-4 sm:mt-5">
              <div className="h-px w-8 sm:w-12 bg-amber-300" />
              <div className="w-2 h-2 rounded-full bg-amber-400" />
              <div className="h-px w-8 sm:w-12 bg-amber-300" />
            </div>
            <p className="text-slate-600 text-sm sm:text-base mt-4 sm:mt-6 leading-relaxed px-4">
              Founded with a vision to create an integrated manufacturing ecosystem, the SUPER Group
              has strategically expanded its capabilities across complementary industries.
            </p>
          </motion.div>

          {/* Company Cards – responsive grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {companies.map((co) => (
              <motion.div
                key={co.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="h-full"
              >
                <CompanyCard {...co} />
              </motion.div>
            ))}
          </div>

          {/* EcosystemBlock */}
          <EcosystemBlock />
        </Container>
      </Section>
    </>
  );
};

export default GroupPage;