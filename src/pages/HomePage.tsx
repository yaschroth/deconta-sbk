/**
 * HomePage Component - Main Landing Page
 */

import { Link } from 'react-router-dom';
import {
  Phone,
  Star,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  ArrowRight,
  Award,
  Users,
  Bug,
  TreePine,
  Flame,
  Building2,
} from 'lucide-react';
import { motion } from 'motion/react';
import { CONFIG, SERVICE_AREAS, CERTIFICATIONS } from '../config';

const SERVICES = [
  { title: 'Schädlingsbekämpfung', description: 'Professionelle Bekämpfung aller Schädlinge im Gesundheits- und Vorratsschutz.', Icon: Bug, emergency: true, href: '/schaedlingsprobleme' },
  { title: 'Begasungen', description: 'Zertifizierte Begasungen nach Gefahrstoffverordnung für effektive Schädlingsvernichtung.', Icon: Flame, emergency: false, href: '/begasung' },
  { title: 'Holzschutz', description: 'Holzschutzmaßnahmen nach DIN 68800 Teil 4 gegen holzzerstörende Insekten.', Icon: TreePine, emergency: false, href: '/holzschutz' },
  { title: 'Gewerbekunden', description: 'Individuelle Lösungen für Industrie, Handel, Gastronomie und Lebensmittelbetriebe.', Icon: Building2, emergency: false, href: '/referenzen' },
];

const SERVICES_EXTENDED = [
  { name: 'Rattenbekämpfung', href: '/schaedlingsprobleme' },
  { name: 'Mäusebekämpfung', href: '/schaedlingsprobleme' },
  { name: 'Taubenabwehr', href: '/vogelabwehr' },
  { name: 'Wespenbekämpfung', href: '/insektenschutz' },
  { name: 'Desinfektion', href: '/desinfektion' },
  { name: 'Schimmelbeseitigung', href: '/schimmelpilz' },
  { name: 'Ameisenbekämpfung', href: '/schaedlingsprobleme' },
  { name: 'Mottenbekämpfung', href: '/vorratsschutz' },
];

const PROCESS_STEPS = [
  { step: '1', title: 'Anruf', description: 'Kontaktieren Sie uns telefonisch oder per E-Mail.' },
  { step: '2', title: 'Beratung', description: 'Kostenlose Erstberatung und Analyse Ihres Problems.' },
  { step: '3', title: 'Termin', description: 'Zeitnahe Terminvergabe - auch am Wochenende.' },
  { step: '4', title: 'Lösung', description: 'Effektive Bekämpfung mit zertifizierten Methoden.' },
];

const FAQ_ITEMS = [
  { q: 'Was kostet eine Schädlingsbekämpfung?', a: 'Die Kosten variieren je nach Art und Umfang des Befalls. Wir erstellen Ihnen ein transparentes, faires Angebot nach der Besichtigung.' },
  { q: 'Führen Sie auch Begasungen durch?', a: 'Ja, wir verfügen über Personal mit Befähigungsschein zur Begasung gemäß Gefahrstoffverordnung.' },
  { q: 'In welchen Regionen sind Sie tätig?', a: 'Wir betreuen den gesamten Rhein-Neckar-Kreis, Mannheim, Heidelberg, Darmstadt, Weinheim, Bensheim und Umgebung.' },
  { q: 'Arbeiten Sie auch am Wochenende?', a: 'Ja, wir sind auch am Wochenende für Sie erreichbar und führen bei Bedarf Notfalleinsätze durch.' },
];

const TESTIMONIALS = [
  { name: 'Bäckerei Schmitt', location: 'Weinheim', text: 'DECONTA betreut uns seit Jahren zuverlässig. Professionell, diskret und immer pünktlich!', rating: 5 },
  { name: 'Familie Hoffmann', location: 'Laudenbach', text: 'Schnelle Hilfe bei unserem Rattenproblem. Kompetente Beratung und faire Preise.', rating: 5 },
  { name: 'Hotel Bergstraße', location: 'Heppenheim', text: 'Top Partner für unsere Schädlingsprävention. Alle Dokumentationen immer perfekt.', rating: 5 },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <div className="inline-flex items-center gap-2 mb-6 badge-trust">
                <Award className="size-4 text-brand-accent" />
                <span className="text-slate-600">IHK-zertifizierter Fachbetrieb</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-brand-primary leading-[1.1] mb-6 tracking-tight">
                {CONFIG.companyNameFull}<br />
                <span className="text-brand-accent">{CONFIG.region}</span>
              </h1>

              <p className="text-xl text-slate-600 mb-4 max-w-lg leading-relaxed">
                <span className="font-bold text-brand-primary">{CONFIG.tagline}</span>
              </p>
              <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                Über <span className="font-bold text-brand-accent">{CONFIG.yearsExperience} Jahre Erfahrung</span> in der professionellen Schädlingsbekämpfung. IHK-zertifiziert mit Befähigungsschein zur Begasung.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href={CONFIG.phoneLink} className="bg-brand-primary hover:bg-brand-secondary text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-xl flex items-center justify-center gap-2 group">
                  <Phone className="size-5" /> Jetzt anrufen
                </a>
                <Link to="/kontakt" className="bg-white border-2 border-slate-200 hover:border-brand-accent px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2">
                  Kostenlose Beratung <ArrowRight className="size-5 text-brand-accent" />
                </Link>
              </div>

              <div className="mt-10 flex items-center gap-6 flex-wrap">
                <div className="flex items-center gap-2">
                  <Award className="text-brand-accent size-5" />
                  <span className="text-sm font-semibold text-slate-700">IHK-zertifiziert</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-brand-accent size-5" />
                  <span className="text-sm font-semibold text-slate-700">Begasungs-Befähigung</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative order-first lg:order-last"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square">
                <img
                  src="/cdc-wz3ijPHvL54-unsplash.jpg"
                  alt="Professionelle Schädlingsbekämpfung"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 to-transparent" />

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 glass-card p-6 rounded-2xl">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <ShieldCheck className="text-brand-accent size-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-brand-accent uppercase tracking-wider">GmbH seit 1990</p>
                      <p className="text-brand-primary font-bold">Zertifizierter Fachbetrieb</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-lg hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="size-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Award className="text-brand-accent size-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Seit über</p>
                    <p className="text-sm font-bold">{CONFIG.yearsExperience} Jahren</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 translate-x-1/2 -z-10" />
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 hover:opacity-100 transition-opacity">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.name} className="flex flex-col items-center">
                <span className="text-xl font-black text-brand-primary">{cert.name}</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">{cert.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Unsere Leistungen</h2>
            <h3 className="text-4xl font-bold text-brand-primary mb-6">Professionelle Schädlingsbekämpfung</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Als IHK-zertifizierter Fachbetrieb bieten wir Ihnen umfassende Lösungen im Bereich Vorratsschutz, Gesundheitsschutz und Holzschutz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <motion.div
                key={service.title}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-pointer relative"
              >
                {service.emergency && (
                  <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Notdienst
                  </div>
                )}
                <div className="mb-6 bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center">
                  <service.Icon className="size-8 text-brand-accent" />
                </div>
                <h4 className="text-xl font-bold text-brand-primary mb-3">{service.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.description}</p>
                <Link to={service.href} className="text-brand-accent font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  Mehr erfahren <ArrowRight className="size-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Extended Services */}
          <div className="mt-16 text-center">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Weitere Leistungen</p>
            <div className="flex flex-wrap justify-center gap-3">
              {SERVICES_EXTENDED.map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  className="bg-white px-4 py-2 rounded-full text-sm font-medium text-slate-600 border border-slate-200 hover:border-brand-accent hover:text-brand-accent transition-colors"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">So funktioniert's</h2>
            <h3 className="text-4xl font-bold text-brand-primary mb-6">In 4 Schritten schädlingsfrei</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Von Ihrem Anruf bis zur effektiven Lösung. Transparent, zuverlässig und professionell.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-primary text-white rounded-full text-2xl font-bold mb-6">
                  {item.step}
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-blue-200" />
                )}
                <h4 className="text-xl font-bold text-brand-primary mb-3">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/mesto-sprayers-spruhgerate-KtU82_xkOJs-unsplash.jpg"
                  alt="Professionelle Schädlingsbekämpfung"
                  className="w-full object-cover aspect-[3/4]"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-brand-primary text-white p-8 rounded-3xl shadow-xl max-w-xs hidden sm:block">
                <p className="italic text-lg mb-4">"Qualität und Zuverlässigkeit"</p>
                <p className="font-bold">- {CONFIG.founderName}, Geschäftsführer</p>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Über uns</h2>
              <h3 className="text-4xl font-bold text-brand-primary mb-8">Ihr Experte vor Ort</h3>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Mit über {CONFIG.yearsExperience} Jahren Erfahrung ist die DECONTA GmbH Ihr kompetenter Ansprechpartner für alle Fragen rund um die Schädlingsbekämpfung im Rhein-Neckar-Kreis.
                </p>
                <p>
                  Als IHK-zertifizierter Fachbetrieb verfügen wir über Personal mit Befähigungsschein zur Begasung gemäß Gefahrstoffverordnung und führen Holzschutzmaßnahmen nach DIN 68800 Teil 4 durch.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Users className="text-brand-accent size-5" />
                    </div>
                    <div>
                      <p className="text-brand-primary font-bold">{CONFIG.yearsExperience}+ Jahre</p>
                      <p className="text-xs">Erfahrung</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Award className="text-brand-accent size-5" />
                    </div>
                    <div>
                      <p className="text-brand-primary font-bold">IHK-zertifiziert</p>
                      <p className="text-xs">Fachbetrieb</p>
                    </div>
                  </div>
                </div>
                <Link to="/ueber-uns" className="inline-flex items-center gap-2 text-brand-accent font-bold hover:gap-3 transition-all">
                  Mehr über uns erfahren <ArrowRight className="size-4" />
                </Link>
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
            <h3 className="text-4xl font-bold text-brand-primary">Das sagen unsere Kunden</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
                <p className="text-slate-700 italic mb-6">"{t.text}"</p>
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

      {/* Commercial Services Callout */}
      <section className="py-16 bg-brand-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-white max-w-2xl">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">Gewerbliche Schädlingsbekämpfung</h3>
              <p className="text-white/80">
                Industrie, Handel, Gastronomie und Lebensmittelbetriebe: Wir bieten professionelle Lösungen mit lückenloser Dokumentation und regelmäßiger Kontrolle.
              </p>
            </div>
            <Link to="/referenzen" className="bg-white text-brand-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors flex items-center gap-2 whitespace-nowrap">
              Gewerbe-Anfrage <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Häufige Fragen</h2>
              <h3 className="text-4xl font-bold text-brand-primary">Was Sie wissen sollten</h3>
            </div>

            <div className="space-y-4">
              {FAQ_ITEMS.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-100"
                >
                  <h4 className="font-bold text-brand-primary mb-2 flex items-start gap-3">
                    <span className="bg-blue-100 text-brand-accent rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">?</span>
                    {item.q}
                  </h4>
                  <p className="text-slate-600 ml-9">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Unser Einsatzgebiet</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            {SERVICE_AREAS.map(city => (
              <span key={city} className="text-slate-600 font-medium">
                Kammerjäger {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-brand-primary mb-6">Schädlingsproblem?</h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns jetzt für eine kostenlose Erstberatung. Wir sind auch am Wochenende für Sie da!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={CONFIG.phoneLink} className="bg-brand-primary hover:bg-brand-secondary text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-xl flex items-center justify-center gap-2">
              <Phone className="size-5" /> {CONFIG.phone}
            </a>
            <Link to="/kontakt" className="bg-white border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2">
              Kontaktformular <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
