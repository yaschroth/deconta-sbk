/**
 * Holzschutz Page - Wood Protection Services
 */

import { Link } from 'react-router-dom';
import {
  TreePine,
  CheckCircle2,
  Phone,
  ArrowRight,
  AlertTriangle,
  Thermometer,
  Droplets,
  Shield,
} from 'lucide-react';
import { motion } from 'motion/react';
import { CONFIG } from '../config';

const WOOD_PESTS = [
  {
    name: 'Hausbock (Hylotrupes bajulus)',
    description: 'Der gefährlichste Holzschädling in Deutschland. Seine Larven können tragende Holzkonstruktionen über Jahre hinweg zerstören.',
    danger: 'high',
  },
  {
    name: 'Gewöhnlicher Nagekäfer (Anobium punctatum)',
    description: 'Auch "Holzwurm" genannt. Befällt bevorzugt älteres Holz und hinterlässt charakteristische Ausfluglöcher.',
    danger: 'medium',
  },
  {
    name: 'Gescheckter Nagekäfer',
    description: 'Befällt bereits von Pilzen vorgeschädigtes Holz. Oft Indikator für Feuchtigkeitsprobleme.',
    danger: 'medium',
  },
  {
    name: 'Splintholzkäfer',
    description: 'Befällt frisch verarbeitetes Holz mit hohem Stärkegehalt im Splint.',
    danger: 'low',
  },
];

const TREATMENT_METHODS = [
  {
    icon: Thermometer,
    title: 'Heißluftverfahren',
    description: 'Thermische Behandlung nach DIN 68800-4. Das Holz wird auf mindestens 55°C Kerntemperatur erhitzt, was alle Entwicklungsstadien der Schädlinge abtötet.',
    benefits: ['Chemiefrei', 'Sofortige Wirkung', 'Keine Wartezeit', 'Umweltfreundlich'],
  },
  {
    icon: Droplets,
    title: 'Chemische Behandlung',
    description: 'Imprägnierung mit zugelassenen Holzschutzmitteln. Geeignet für präventiven Schutz und kurativ bei geringerem Befall.',
    benefits: ['Langzeitschutz', 'Präventive Wirkung', 'Kostengünstig', 'Einfache Anwendung'],
  },
  {
    icon: Shield,
    title: 'Kombinationsverfahren',
    description: 'Kombination aus thermischer und chemischer Behandlung für maximalen Schutz und Langzeitwirkung.',
    benefits: ['Maximale Sicherheit', 'Langzeitschutz', 'Für schwere Fälle', 'Garantierte Wirkung'],
  },
];

export default function HolzschutzPage() {
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
                <TreePine className="size-4 text-brand-accent" />
                <span className="text-slate-600">DIN 68800 Teil 4</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-brand-primary mb-6">
                Holzschutz gegen Holzschädlinge
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Professionelle Bekämpfung von Hausbock, Nagekäfer und anderen holzzerstörenden Insekten nach DIN 68800 Teil 4.
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
                  src="/mesto-sprayers-spruhgerate-KtU82_xkOJs-unsplash.jpg"
                  alt="Professioneller Holzschutz"
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DIN Standard Info */}
      <section className="py-16 bg-brand-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">DIN 68800 Teil 4 - Der Standard für Holzschutz</h2>
            <p className="text-white/80">
              Wir führen alle Holzschutzmaßnahmen nach DIN 68800 Teil 4 durch. Diese Norm regelt die Bekämpfung von holzzerstörenden Pilzen und Insekten und stellt sicher, dass alle Maßnahmen fachgerecht und nachhaltig ausgeführt werden.
            </p>
          </div>
        </div>
      </section>

      {/* Wood Pests */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Holzschädlinge</h2>
            <h3 className="text-3xl font-bold text-brand-primary">Diese Schädlinge zerstören Ihr Holz</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {WOOD_PESTS.map((pest, idx) => (
              <motion.div
                key={pest.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-6 rounded-xl border border-slate-100"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${
                    pest.danger === 'high' ? 'bg-red-100' :
                    pest.danger === 'medium' ? 'bg-yellow-100' : 'bg-blue-100'
                  }`}>
                    <AlertTriangle className={`size-6 ${
                      pest.danger === 'high' ? 'text-red-500' :
                      pest.danger === 'medium' ? 'text-yellow-600' : 'text-blue-500'
                    }`} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-primary mb-2">{pest.name}</h4>
                    {pest.danger === 'high' && (
                      <span className="inline-block bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full mb-2">
                        Hohe Gefahr
                      </span>
                    )}
                    <p className="text-slate-600 text-sm">{pest.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Methods */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Bekämpfungsmethoden</h2>
            <h3 className="text-3xl font-bold text-brand-primary">Unsere Behandlungsverfahren</h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {TREATMENT_METHODS.map((method, idx) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                  <method.icon className="size-8 text-brand-accent" />
                </div>
                <h4 className="text-xl font-bold text-brand-primary mb-3">{method.title}</h4>
                <p className="text-slate-600 text-sm mb-6">{method.description}</p>
                <div className="space-y-2">
                  {method.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="size-4 text-brand-accent" />
                      <span className="text-slate-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Erkennung</h2>
              <h3 className="text-3xl font-bold text-brand-primary">Anzeichen für Holzschädlingsbefall</h3>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-yellow-700 mb-6 flex items-center gap-2">
                <AlertTriangle className="size-6" /> Warnzeichen erkennen:
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  'Kleine runde Ausfluglöcher (1-2mm) im Holz',
                  'Feines Holzmehl (Bohrmehl) unter dem Holz',
                  'Kratzende oder tickende Geräusche im Holz',
                  'Sichtbare Fraßgänge unter der Oberfläche',
                  'Tote oder lebende Käfer in der Nähe',
                  'Holz wirkt brüchig oder instabil',
                  'Abblätternde Farbe oder Lasur',
                  'Verformungen in Holzkonstruktionen',
                ].map((sign, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-slate-700">
                    <span className="text-yellow-600 mt-1 font-bold">!</span>
                    <span className="text-sm">{sign}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Ablauf</h2>
              <h3 className="text-3xl font-bold text-brand-primary">So gehen wir vor</h3>
            </div>

            <div className="space-y-6">
              {[
                { step: '1', title: 'Befundaufnahme', description: 'Gründliche Inspektion des Holzes, Identifikation der Schädlingsart und Ausmaß des Befalls.' },
                { step: '2', title: 'Gutachten', description: 'Erstellung eines detaillierten Befundberichts mit Empfehlungen für die Bekämpfung.' },
                { step: '3', title: 'Angebot', description: 'Transparentes Angebot mit allen notwendigen Maßnahmen und Kosten.' },
                { step: '4', title: 'Behandlung', description: 'Fachgerechte Durchführung der Bekämpfungsmaßnahmen nach DIN 68800.' },
                { step: '5', title: 'Dokumentation', description: 'Ausführliche Dokumentation aller Maßnahmen und Gewährleistung.' },
              ].map((item, idx) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-6 bg-white p-6 rounded-xl border border-slate-100"
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

      {/* CTA */}
      <section className="py-16 bg-brand-primary">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Verdacht auf Holzschädlinge?</h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Handeln Sie schnell! Je früher ein Befall erkannt wird, desto geringer sind die Schäden und Kosten.
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
