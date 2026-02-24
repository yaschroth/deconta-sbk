/**
 * Referenzen Page - References and Client Types
 */

import { Link } from 'react-router-dom';
import {
  Building2,
  CheckCircle2,
  Phone,
  ArrowRight,
  Star,
  MapPin,
  ShoppingCart,
  Utensils,
  Factory,
  Hotel,
  GraduationCap,
  Heart,
  Warehouse,
} from 'lucide-react';
import { motion } from 'motion/react';
import { CONFIG } from '../config';

const CLIENT_TYPES = [
  { icon: Factory, title: 'Lebensmittelindustrie', description: 'Produktion, Verarbeitung und Lagerung von Lebensmitteln.' },
  { icon: Utensils, title: 'Gastronomie', description: 'Restaurants, Cafés, Kantinen und Catering-Unternehmen.' },
  { icon: ShoppingCart, title: 'Einzelhandel', description: 'Supermärkte, Discounter und Fachgeschäfte.' },
  { icon: Hotel, title: 'Hotellerie', description: 'Hotels, Pensionen und Ferienwohnungen.' },
  { icon: Heart, title: 'Pflegeeinrichtungen', description: 'Pflegeheime, Seniorenresidenzen und Krankenhäuser.' },
  { icon: GraduationCap, title: 'Bildungseinrichtungen', description: 'Schulen, Kindergärten und Universitäten.' },
  { icon: Warehouse, title: 'Logistik', description: 'Lagerhallen, Speditionen und Distributionszentren.' },
  { icon: Building2, title: 'Hausverwaltungen', description: 'Wohnungsbaugesellschaften und private Vermieter.' },
];

const TESTIMONIALS = [
  { name: 'Bäckerei Schmitt', location: 'Weinheim', text: 'DECONTA betreut uns seit Jahren zuverlässig. Professionell, diskret und immer pünktlich! Die Dokumentation ist immer perfekt für unsere Audits.', rating: 5 },
  { name: 'Hotel Bergstraße', location: 'Heppenheim', text: 'Top Partner für unsere Schädlingsprävention. Schnelle Reaktion bei Problemen und alle Dokumentationen immer auf dem neuesten Stand.', rating: 5 },
  { name: 'Seniorenresidenz Sonnenhof', location: 'Mannheim', text: 'Sehr zufrieden mit dem diskreten und professionellen Service. Die regelmäßigen Kontrollen geben uns Sicherheit.', rating: 5 },
  { name: 'Metzgerei Hoffmann', location: 'Laudenbach', text: 'Seit über 10 Jahren unser zuverlässiger Partner. Kompetent, fair und immer erreichbar wenn es drauf ankommt.', rating: 5 },
  { name: 'Supermarkt Frischeparadies', location: 'Bensheim', text: 'Hervorragendes HACCP-Monitoring. Die Zusammenarbeit klappt reibungslos und die Preise sind fair.', rating: 5 },
  { name: 'Familie Müller', location: 'Heidelberg', text: 'Schnelle Hilfe bei unserem Wespenproblem. Freundlich, kompetent und sauber gearbeitet. Sehr zu empfehlen!', rating: 5 },
];

const BENEFITS = [
  'Lückenlose Dokumentation für Audits',
  'HACCP-konformes Schädlingsmonitoring',
  'Feste Ansprechpartner',
  'Schnelle Reaktionszeiten',
  'Flexible Terminvereinbarung',
  'Transparente Preisgestaltung',
  'Regelmäßige Schulungen für Ihr Personal',
  'Notdienst bei akutem Befall',
];

export default function ReferenzenPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-16 pb-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 mb-6 badge-trust">
              <Building2 className="size-4 text-brand-accent" />
              <span className="text-slate-600">Gewerbliche Kunden</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-brand-primary mb-6">
              Unsere Referenzen
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Vertrauen Sie auf über {CONFIG.yearsExperience} Jahre Erfahrung. Wir betreuen Unternehmen aus allen Branchen im {CONFIG.region}.
            </p>
            <a href={CONFIG.phoneLink} className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-secondary text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-xl">
              <Phone className="size-5" /> Gewerbe-Anfrage: {CONFIG.phone}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Client Types */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Branchen</h2>
            <h3 className="text-3xl font-bold text-brand-primary">Wir betreuen alle Branchen</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CLIENT_TYPES.map((type, idx) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-xl mb-4">
                  <type.icon className="size-7 text-brand-accent" />
                </div>
                <h4 className="font-bold text-brand-primary mb-2">{type.title}</h4>
                <p className="text-slate-600 text-sm">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits for Commercial */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Ihre Vorteile</h2>
              <h3 className="text-3xl font-bold text-brand-primary mb-8">Warum Gewerbekunden uns wählen</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {BENEFITS.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-brand-accent mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/mesto-sprayers-spruhgerate-KtU82_xkOJs-unsplash.jpg"
                  alt="Gewerbliche Schädlingsbekämpfung"
                  className="w-full object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Kundenstimmen</h2>
            <h3 className="text-3xl font-bold text-brand-primary">Das sagen unsere Kunden</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="size-4 fill-current" />)}
                </div>
                <p className="text-slate-700 italic mb-6 text-sm">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="size-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-700">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-brand-primary text-sm">{t.name}</p>
                    <p className="text-xs text-slate-500 flex items-center gap-1">
                      <MapPin className="size-3" /> {t.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-primary">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Werden Sie Teil unserer zufriedenen Kunden</h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns für ein unverbindliches Angebot. Wir erstellen Ihnen ein individuelles Konzept für Ihren Betrieb.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={CONFIG.phoneLink} className="inline-flex items-center gap-2 bg-white text-brand-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors">
              <Phone className="size-5" /> Jetzt anfragen
            </a>
            <Link to="/kontakt" className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors">
              Kontaktformular <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
