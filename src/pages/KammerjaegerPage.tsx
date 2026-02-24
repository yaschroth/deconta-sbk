/**
 * Kammerjäger Page - Professional Pest Control Services
 */

import { Link } from 'react-router-dom';
import {
  Award,
  CheckCircle2,
  Phone,
  ArrowRight,
  Shield,
  Clock,
  Users,
  FileText,
} from 'lucide-react';
import { motion } from 'motion/react';
import { CONFIG, SERVICE_AREAS } from '../config';

const QUALIFICATIONS = [
  {
    title: 'IHK-Sachkundenachweis',
    description: 'Der Sachkundenachweis der IHK ist die grundlegende Qualifikation für die professionelle Schädlingsbekämpfung in Deutschland.',
    details: [
      'Umfassende Ausbildung in allen Bereichen der Schädlingsbekämpfung',
      'Kenntnisse über Schädlingsbiologie und -verhalten',
      'Sachgerechter Umgang mit Bekämpfungsmitteln',
      'Arbeitsschutz und Umweltschutz',
    ],
  },
  {
    title: 'Befähigungsschein Begasung',
    description: 'Die Begasung mit Phosphorwasserstoff erfordert einen speziellen Befähigungsschein gemäß Gefahrstoffverordnung.',
    details: [
      'Erlaubnis zur Durchführung von Begasungen',
      'Regierungspräsidium Karlsruhe Zulassung',
      'Jährliche Fortbildungen',
      'Strenge Sicherheitsauflagen',
    ],
  },
  {
    title: 'DIN 68800 Holzschutz',
    description: 'Qualifikation für Holzschutzmaßnahmen nach DIN 68800 Teil 4 gegen holzzerstörende Insekten.',
    details: [
      'Bekämpfung von Hausbock, Nagekäfer & Co.',
      'Heißluftverfahren',
      'Chemische Behandlung',
      'Sachverständige Begutachtung',
    ],
  },
];

const SERVICES = [
  { name: 'Rattenbekämpfung', description: 'Professionelle Köderauslegung, Monitoring und Prävention.' },
  { name: 'Mäusebekämpfung', description: 'Effektive Fallen und Ködersysteme, auch für Gewerbebetriebe.' },
  { name: 'Schabenbekämpfung', description: 'Gelköder, Sprühverfahren und thermische Behandlung.' },
  { name: 'Wespenbekämpfung', description: 'Sichere Entfernung von Wespen- und Hornissennestern.' },
  { name: 'Ameisenbekämpfung', description: 'Spezialköder und Barriereverfahren.' },
  { name: 'Flohbekämpfung', description: 'Sprühverfahren und Raumbehandlung.' },
  { name: 'Bettwanzenbekämpfung', description: 'Thermische und chemische Verfahren.' },
  { name: 'Taubenabwehr', description: 'Spikes, Netze, Spanndraht und elektrische Systeme.' },
];

export default function KammerjaegerPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-12 pb-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 mb-6 badge-trust">
                <Award className="size-4 text-brand-accent" />
                <span className="text-slate-600">IHK-zertifizierter Fachbetrieb</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-brand-primary mb-6">
                Kammerjäger im {CONFIG.region}
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Professionelle Schädlingsbekämpfung mit IHK-Sachkundenachweis. Schnell, diskret und zuverlässig.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={CONFIG.phoneLink} className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-secondary text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-xl">
                  <Phone className="size-5" /> {CONFIG.phone}
                </a>
                <Link to="/kontakt" className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 hover:border-brand-accent px-8 py-4 rounded-xl font-bold text-lg transition-colors">
                  Kostenlose Beratung <ArrowRight className="size-5" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/cdc-wz3ijPHvL54-unsplash.jpg"
                  alt="Professioneller Kammerjäger"
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Professional */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Warum ein Profi?</h2>
              <h3 className="text-3xl font-bold text-brand-primary mb-8">Vorteile professioneller Schädlingsbekämpfung</h3>
              <div className="space-y-6">
                {[
                  { icon: Shield, title: 'Sichere Methoden', text: 'Geprüfte und zugelassene Bekämpfungsmittel, fachgerecht angewendet.' },
                  { icon: Clock, title: 'Schnelle Hilfe', text: 'Zeitnahe Terminvergabe, auch am Wochenende bei Notfällen.' },
                  { icon: Users, title: 'Erfahrung', text: 'Über 30 Jahre Erfahrung in allen Bereichen der Schädlingsbekämpfung.' },
                  { icon: FileText, title: 'Dokumentation', text: 'Lückenlose Dokumentation für Gewerbebetriebe und Behörden.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <item.icon className="size-6 text-brand-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-primary mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/mesto-sprayers-spruhgerate-KtU82_xkOJs-unsplash.jpg"
                  alt="Professionelle Ausrüstung"
                  className="w-full object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Qualifikationen</h2>
            <h3 className="text-3xl font-bold text-brand-primary">Unsere Zertifizierungen</h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {QUALIFICATIONS.map((qual, idx) => (
              <motion.div
                key={qual.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-primary text-white rounded-xl mb-6">
                  <Award className="size-6" />
                </div>
                <h4 className="text-xl font-bold text-brand-primary mb-3">{qual.title}</h4>
                <p className="text-slate-600 text-sm mb-6">{qual.description}</p>
                <ul className="space-y-2">
                  {qual.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="size-4 text-brand-accent mt-0.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Leistungen</h2>
            <h3 className="text-3xl font-bold text-brand-primary">Unsere Kammerjäger-Dienste</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-slate-50 p-6 rounded-xl border border-slate-100"
              >
                <h4 className="font-bold text-brand-primary mb-2">{service.name}</h4>
                <p className="text-slate-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Einsatzgebiet</h2>
            <h3 className="text-2xl font-bold text-brand-primary">Kammerjäger in Ihrer Nähe</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {SERVICE_AREAS.map((city) => (
              <span key={city} className="bg-white px-6 py-3 rounded-full font-medium text-slate-600 border border-slate-200">
                Kammerjäger {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-primary">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Schädlingsbefall?</h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie Ihren IHK-zertifizierten Kammerjäger für eine schnelle und diskrete Lösung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={CONFIG.phoneLink} className="inline-flex items-center gap-2 bg-white text-brand-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors">
              <Phone className="size-5" /> Jetzt anrufen
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
