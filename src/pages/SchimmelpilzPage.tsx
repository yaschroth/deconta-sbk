/**
 * Schimmelpilz Page - Mold Removal Services
 */

import { Link } from 'react-router-dom';
import {
  Droplets,
  CheckCircle2,
  Phone,
  ArrowRight,
  AlertTriangle,
  Shield,
  Thermometer,
} from 'lucide-react';
import { motion } from 'motion/react';
import { CONFIG } from '../config';

const MOLD_CAUSES = [
  { title: 'Wasserschäden', description: 'Rohrbrüche, undichte Dächer oder Überschwemmungen.' },
  { title: 'Hohe Luftfeuchtigkeit', description: 'Unzureichende Belüftung in Küche, Bad oder Keller.' },
  { title: 'Wärmebrücken', description: 'Kalte Wandbereiche, an denen Feuchtigkeit kondensiert.' },
  { title: 'Baumängel', description: 'Fehlende oder beschädigte Dampfsperren und Abdichtungen.' },
  { title: 'Falsches Heizen', description: 'Zu niedrige Raumtemperaturen begünstigen Kondensation.' },
  { title: 'Undichte Fenster', description: 'Feuchtigkeit dringt von außen ein.' },
];

const HEALTH_RISKS = [
  'Allergische Reaktionen',
  'Atemwegserkrankungen',
  'Kopfschmerzen',
  'Müdigkeit und Konzentrationsstörungen',
  'Hautreizungen',
  'Asthma-Verschlechterung',
];

const SERVICES = [
  {
    title: 'Schimmelpilzanalyse',
    description: 'Professionelle Analyse und Identifikation der Schimmelpilzart sowie Ursachenermittlung.',
    icon: Droplets,
  },
  {
    title: 'Schimmelsanierung',
    description: 'Fachgerechte Entfernung des Schimmelbefalls mit geprüften Methoden.',
    icon: Shield,
  },
  {
    title: 'Trocknung',
    description: 'Professionelle Bautrocknung zur Beseitigung der Feuchtigkeit.',
    icon: Thermometer,
  },
  {
    title: 'Desinfektion',
    description: 'Behandlung der betroffenen Flächen mit Spezial-Desinfektionsmitteln.',
    icon: CheckCircle2,
  },
];

export default function SchimmelpilzPage() {
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
                <Droplets className="size-4 text-brand-accent" />
                <span className="text-slate-600">Schimmelpilzsanierung</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-brand-primary mb-6">
                Schimmelpilzbeseitigung
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Professionelle Schimmelsanierung und Dekontamination. Wir beseitigen Schimmel nachhaltig und verhindern erneuten Befall.
              </p>
              <a href={CONFIG.phoneLink} className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-secondary text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-xl">
                <Phone className="size-5" /> Beratung: {CONFIG.phone}
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/mold.jpg"
                  alt="Schimmelpilzbeseitigung"
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Health Warning */}
      <section className="py-12 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex items-start gap-4 p-6 bg-red-100 border border-red-200 rounded-2xl">
            <AlertTriangle className="size-8 text-red-500 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-red-700 mb-2">Gesundheitsrisiken durch Schimmelpilze</h3>
              <p className="text-red-700 text-sm mb-4">
                Schimmelpilze können ernsthafte Gesundheitsprobleme verursachen. Bei sichtbarem Schimmelbefall sollten Sie schnell handeln.
              </p>
              <div className="flex flex-wrap gap-2">
                {HEALTH_RISKS.map((risk) => (
                  <span key={risk} className="bg-white text-red-700 px-3 py-1 rounded-full text-xs font-medium">
                    {risk}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Causes */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Ursachen</h2>
            <h3 className="text-3xl font-bold text-brand-primary">Wie entsteht Schimmel?</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOLD_CAUSES.map((cause, idx) => (
              <motion.div
                key={cause.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-slate-50 p-6 rounded-xl border border-slate-100"
              >
                <div className="flex items-start gap-3">
                  <Droplets className="size-5 text-brand-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-brand-primary mb-2">{cause.title}</h4>
                    <p className="text-slate-600 text-sm">{cause.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Leistungen</h2>
            <h3 className="text-3xl font-bold text-brand-primary">Unsere Schimmelsanierung</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-6">
                  <service.icon className="size-6 text-brand-accent" />
                </div>
                <h4 className="text-xl font-bold text-brand-primary mb-3">{service.title}</h4>
                <p className="text-slate-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Ablauf</h2>
              <h3 className="text-3xl font-bold text-brand-primary">So sanieren wir Schimmel</h3>
            </div>

            <div className="space-y-6">
              {[
                { step: '1', title: 'Besichtigung', description: 'Begutachtung des Schadens und Identifikation der Ursachen.' },
                { step: '2', title: 'Analyse', description: 'Bei Bedarf Probenentnahme zur Bestimmung der Schimmelart.' },
                { step: '3', title: 'Konzept', description: 'Erstellung eines Sanierungsplans mit Kostenangebot.' },
                { step: '4', title: 'Sanierung', description: 'Fachgerechte Entfernung des Schimmels unter Schutzmaßnahmen.' },
                { step: '5', title: 'Trocknung', description: 'Professionelle Trocknung der betroffenen Bereiche.' },
                { step: '6', title: 'Prävention', description: 'Empfehlungen zur Vermeidung von erneutem Befall.' },
              ].map((item, idx) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-6 bg-slate-50 p-6 rounded-xl"
                >
                  <div className="w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-primary mb-1">{item.title}</h4>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Erkennung</h2>
              <h3 className="text-3xl font-bold text-brand-primary">Anzeichen für Schimmelbefall</h3>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
              <h4 className="font-bold text-yellow-700 mb-6 flex items-center gap-2">
                <AlertTriangle className="size-5" /> Warnzeichen erkennen:
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Sichtbare Flecken (schwarz, grün, weiß) an Wänden',
                  'Muffiger, modriger Geruch',
                  'Abblätternde Tapeten oder Farbe',
                  'Feuchte Stellen an Wänden oder Decken',
                  'Kondenswasser an Fenstern',
                  'Gesundheitsbeschwerden der Bewohner',
                ].map((sign, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-slate-700">
                    <span className="text-yellow-600 font-bold">!</span>
                    <span className="text-sm">{sign}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-primary">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Schimmel entdeckt?</h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Handeln Sie schnell! Schimmel kann sich ausbreiten und Ihre Gesundheit gefährden. Wir beraten Sie kostenlos.
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
