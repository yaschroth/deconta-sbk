/**
 * Shared Layout Component with Header, Navigation and Footer
 */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Phone,
  MessageCircle,
  Clock,
  Menu,
  X,
  Mail,
  ChevronDown,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CONFIG } from '../config';

interface LayoutProps {
  children: React.ReactNode;
}

const NAV_ITEMS = [
  {
    label: 'Leistungen',
    children: [
      { label: 'Schädlingsprobleme', href: '/schaedlingsprobleme' },
      { label: 'Kammerjäger', href: '/kammerjaeger' },
      { label: 'Vorratsschutz', href: '/vorratsschutz' },
      { label: 'Holzschutz', href: '/holzschutz' },
      { label: 'Desinfektion', href: '/desinfektion' },
      { label: 'Begasung', href: '/begasung' },
      { label: 'Vogelabwehr', href: '/vogelabwehr' },
      { label: 'Insektenschutz', href: '/insektenschutz' },
      { label: 'Schimmelpilz', href: '/schimmelpilz' },
    ],
  },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Referenzen', href: '/referenzen' },
  { label: 'Kontakt', href: '/kontakt' },
];

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <div className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Top Emergency Bar */}
      <div className="bg-brand-primary text-white py-2 px-4 text-center text-sm font-medium">
        <div className="container mx-auto flex justify-center items-center gap-4 flex-wrap">
          <span className="flex items-center gap-1.5">
            <Clock className="size-4 text-brand-highlight" />
            {CONFIG.hours.saturday}
          </span>
          <a href={CONFIG.phoneLink} className="flex items-center gap-1 hover:underline text-white font-bold">
            <Phone className="size-4" /> {CONFIG.phone}
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm py-3' : 'bg-white py-5'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold tracking-tight text-brand-primary">{CONFIG.companyNameFull}</span>
          </Link>

          <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-brand-secondary">
            {NAV_ITEMS.map((item) => (
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center gap-1 hover:text-brand-accent transition-colors py-2">
                    {item.label}
                    <ChevronDown className="size-4" />
                  </button>
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 bg-white shadow-xl rounded-xl py-2 min-w-[200px] border border-slate-100"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className="block px-4 py-2 hover:bg-blue-50 hover:text-brand-accent transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href!}
                  className="hover:text-brand-accent transition-colors"
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${CONFIG.whatsapp}`}
              className="hidden sm:flex items-center gap-2 bg-brand-primary hover:bg-brand-secondary text-white px-4 py-2 rounded-full text-sm font-bold transition-colors shadow-lg"
            >
              <MessageCircle className="size-4" /> WhatsApp
            </a>
            <button
              className="lg:hidden p-2 text-brand-primary cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 rounded-lg"
              aria-label={isMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-4 text-lg font-bold text-brand-primary">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="py-2">Startseite</Link>

              {NAV_ITEMS.map((item) => (
                item.children ? (
                  <div key={item.label}>
                    <p className="py-2 text-slate-500 text-sm uppercase tracking-wider">{item.label}</p>
                    <div className="pl-4 flex flex-col gap-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="py-1 text-base"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href!}
                    onClick={() => setIsMenuOpen(false)}
                    className="py-2"
                  >
                    {item.label}
                  </Link>
                )
              ))}

              <hr className="my-4" />
              <a href={CONFIG.phoneLink} className="text-brand-accent">{CONFIG.phone}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <Link to="/" className="flex items-center mb-6">
                <span className="text-xl font-bold tracking-tight text-white">{CONFIG.companyNameFull}</span>
              </Link>
              <p className="max-w-sm mb-8">
                IHK-zertifizierter Fachbetrieb für Schädlingsbekämpfung im {CONFIG.region}. Qualität und Zuverlässigkeit seit über {CONFIG.yearsExperience} Jahren.
              </p>
              <div className="flex gap-4">
                <a href={`https://wa.me/${CONFIG.whatsapp}`} aria-label="WhatsApp" className="size-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-accent hover:text-white transition-colors cursor-pointer">
                  <MessageCircle className="size-5" />
                </a>
                <a href={CONFIG.phoneLink} aria-label="Anrufen" className="size-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-accent hover:text-white transition-colors cursor-pointer">
                  <Phone className="size-5" />
                </a>
                <a href={`mailto:${CONFIG.email}`} aria-label="E-Mail" className="size-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-accent hover:text-white transition-colors cursor-pointer">
                  <Mail className="size-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Leistungen</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/schaedlingsprobleme" className="hover:text-brand-accent transition-colors">Schädlingsprobleme</Link></li>
                <li><Link to="/kammerjaeger" className="hover:text-brand-accent transition-colors">Kammerjäger</Link></li>
                <li><Link to="/vorratsschutz" className="hover:text-brand-accent transition-colors">Vorratsschutz</Link></li>
                <li><Link to="/holzschutz" className="hover:text-brand-accent transition-colors">Holzschutz</Link></li>
                <li><Link to="/desinfektion" className="hover:text-brand-accent transition-colors">Desinfektion</Link></li>
                <li><Link to="/begasung" className="hover:text-brand-accent transition-colors">Begasung</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Kontakt</h4>
              <ul className="space-y-3 text-sm">
                <li>{CONFIG.phone}</li>
                <li>{CONFIG.mobile}</li>
                <li>{CONFIG.email}</li>
                <li>{CONFIG.address}</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; 2026 {CONFIG.companyLegalName}. Alle Rechte vorbehalten.</p>
            <div className="flex gap-6">
              <Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link>
              <Link to="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button (Mobile) */}
      <a
        href={`https://wa.me/${CONFIG.whatsapp}`}
        className="fixed bottom-6 right-6 z-50 sm:hidden bg-brand-primary text-white p-4 rounded-full shadow-2xl motion-safe:animate-bounce"
        aria-label="WhatsApp Kontakt"
      >
        <MessageCircle className="size-6" />
      </a>
    </div>
  );
}
