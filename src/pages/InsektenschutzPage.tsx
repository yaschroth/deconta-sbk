/**
 * Insektenschutz Page - Insect Protection Services
 */

import { Link } from 'react-router-dom';
import {
  Bug,
  CheckCircle2,
  Phone,
  ArrowRight,
  Zap,
  Building2,
} from 'lucide-react';
import { motion } from 'motion/react';
import { CONFIG } from '../config';

const INSECT_TYPES = [
  { name: 'Wespen & Hornissen', description: 'Professionelle Entfernung von Nestern, auch unter Naturschutz.', urgent: true },
  { name: 'Fliegen & Mücken', description: 'UV-Lichtfallen und Insektenvorhänge für Gewerbebetriebe.' },
  { name: 'Ameisen', description: 'Köderverfahren und Barrierenbehandlung.' },
  { name: 'Schaben', description: 'Gelköder und Sprühverfahren für dauerhafte Bekämpfung.' },
  { name: 'Motten', description: 'Pheromonfallen und thermische Behandlung.' },
  { name: 'Bettwanzen', description: 'Wärmeentwesung und chemische Bekämpfung.' },
];

const UV_TRAPS = [
  {
    title: 'P+L Systems Lichtfallen',
    description: 'Professionelle UV-Lichtfallen für die Fliegenbekämpfung in Lebensmittelbetrieben.',
    features: ['HACCP-konform', 'Energieeffizient', 'Designvarianten', 'Einfache Wartung'],
  },
  {
    title: 'Insektenvorhänge',
    description: 'PVC-Streifenvorhänge und Luftschleier für offene Türen.',
    features: ['Transparent', 'Lebensmittelecht', 'Selbstschließend', 'Langlebig'],
  },
  {
    title: 'Monitoring-Systeme',
    description: 'Pheromonfallen und Klebefallen zur Überwachung.',
    features: ['Früherkennung', 'Dokumentation', 'IFS-tauglich', 'Diskret'],
  },
];

export default function InsektenschutzPage() {
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
                <Bug className="size-4 text-brand-accent" />
                <span className="text-slate-600">Professioneller Insektenschutz</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-brand-primary mb-6">
                Insektenschutz & Wespenabwehr
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Effektive Lösungen gegen Wespen, Fliegen und andere Insekten. UV-Lichtfallen und Insektenvorhänge für Gewerbebetriebe.
              </p>
              <a href={CONFIG.phoneLink} className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-secondary text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-xl">
                <Phone className="size-5" /> Soforthilfe: {CONFIG.phone}
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
                  src="/insektenschutz.jpg"
                  alt="Wespen und Insektenbekämpfung"
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Insect Types */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Bekämpfung</h2>
            <h3 className="text-3xl font-bold text-brand-primary">Diese Insekten bekämpfen wir</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INSECT_TYPES.map((insect, idx) => (
              <motion.div
                key={insect.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-slate-50 p-6 rounded-xl border border-slate-100 relative"
              >
                {insect.urgent && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    Notdienst
                  </span>
                )}
                <h4 className="font-bold text-brand-primary mb-2">{insect.name}</h4>
                <p className="text-slate-600 text-sm">{insect.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wasp Service Highlight */}
      <section className="py-16 bg-yellow-50 border-y border-yellow-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="bg-yellow-100 p-6 rounded-2xl">
              <Bug className="size-16 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-yellow-800 mb-2">Wespen- & Hornissennester</h3>
              <p className="text-yellow-700 mb-4">
                Wir entfernen Wespennester schnell und sicher. Hornissen stehen unter Naturschutz - wir arbeiten bei Bedarf mit der Naturschutzbehörde zusammen für eine fachgerechte Umsiedlung.
              </p>
              <a href={CONFIG.phoneLink} className="inline-flex items-center gap-2 bg-yellow-600 text-white px-6 py-3 rounded-xl font-bold transition-colors hover:bg-yellow-700">
                <Phone className="size-4" /> Notdienst anrufen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* UV Traps for Business */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Für Gewerbebetriebe</h2>
            <h3 className="text-3xl font-bold text-brand-primary">UV-Lichtfallen & Insektenschutzsysteme</h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {UV_TRAPS.map((trap, idx) => (
              <motion.div
                key={trap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-6">
                  <Zap className="size-6 text-brand-accent" />
                </div>
                <h4 className="text-xl font-bold text-brand-primary mb-3">{trap.title}</h4>
                <p className="text-slate-600 text-sm mb-6">{trap.description}</p>
                <div className="space-y-2">
                  {trap.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="size-4 text-brand-accent" />
                      <span className="text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Branchen</h2>
            <h3 className="text-2xl font-bold text-brand-primary">Insektenschutz für Gewerbebetriebe</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              'Lebensmittelindustrie',
              'Gastronomie',
              'Bäckereien',
              'Supermärkte',
              'Krankenhäuser',
              'Pflegeheime',
              'Hotels',
              'Schulen',
            ].map((industry) => (
              <span key={industry} className="inline-flex items-center gap-2 bg-slate-50 px-6 py-3 rounded-full border border-slate-200">
                <Building2 className="size-4 text-brand-accent" />
                <span className="font-medium text-slate-700">{industry}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-primary">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Insektenproblem?</h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Ob Wespennest oder Fliegenplage - wir haben die passende Lösung. Kontaktieren Sie uns für eine Beratung.
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
