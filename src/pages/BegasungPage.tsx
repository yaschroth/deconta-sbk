/**
 * Begasung Page - Fumigation Services
 */

import { Link } from 'react-router-dom';
import {
  Flame,
  CheckCircle2,
  Phone,
  ArrowRight,
  AlertTriangle,
  Shield,
  Award,
  FileText,
} from 'lucide-react';
import { motion } from 'motion/react';
import { CONFIG } from '../config';

const FUMIGATION_METHODS = [
  {
    title: 'Phosphorwasserstoff (PH3)',
    description: 'Begasung mit Phosphorwasserstoff für die Bekämpfung von Vorratsschädlingen in Lagerhallen, Silos und Transportbehältern.',
    applications: ['Getreidesilos', 'Lagerhallen', 'Container', 'Mühlen'],
    requires: 'Befähigungsschein nach ChemVerbotsV',
  },
  {
    title: 'Sulfuryldifluorid',
    description: 'Alternative Begasungsmethode für die Bekämpfung von Holzschädlingen und Vorratsschädlingen.',
    applications: ['Historische Gebäude', 'Museen', 'Archive', 'Holzkonstruktionen'],
    requires: 'Spezielle Zulassung erforderlich',
  },
];

const PROCESS_STEPS = [
  { title: 'Vorbesprechung', description: 'Analyse der Situation, Festlegung des Objekts und der Methode.' },
  { title: 'Risikoanalyse', description: 'Sicherheitskonzept und Abstimmung mit Behörden.' },
  { title: 'Abdichtung', description: 'Hermetische Abdichtung des zu begasenden Objekts.' },
  { title: 'Begasung', description: 'Einleitung des Begasungsmittels und Überwachung.' },
  { title: 'Einwirkzeit', description: 'Kontrollierte Einwirkzeit für vollständige Abtötung.' },
  { title: 'Lüftung', description: 'Fachgerechte Entlüftung und Freigabemessung.' },
];

export default function BegasungPage() {
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
              <Award className="size-4 text-brand-accent" />
              <span className="text-slate-600">Befähigungsschein Begasung</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-brand-primary mb-6">
              Begasung & Raumfumigation
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Zertifizierte Begasungen mit Phosphorwasserstoff gemäß Gefahrstoffverordnung. Erlaubnis durch das Regierungspräsidium Karlsruhe.
            </p>
            <a href={CONFIG.phoneLink} className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-secondary text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-xl">
              <Phone className="size-5" /> Beratung: {CONFIG.phone}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Qualification Banner */}
      <section className="py-16 bg-brand-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-2">Befähigungsschein zur Begasung</h2>
                <p className="text-white/80">
                  Unser Personal verfügt über den Befähigungsschein zur Begasung gemäß Chemikalien-Verbotsverordnung (ChemVerbotsV), erteilt vom Regierungspräsidium Karlsruhe.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-4 rounded-xl">
                  <Shield className="size-8 text-white" />
                </div>
                <div className="bg-white/10 p-4 rounded-xl">
                  <FileText className="size-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warning */}
      <section className="py-12 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex items-start gap-4 p-6 bg-red-100 border border-red-200 rounded-2xl">
            <AlertTriangle className="size-8 text-red-500 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-red-700 mb-2">Wichtiger Hinweis</h3>
              <p className="text-red-700 text-sm">
                Begasungen mit Phosphorwasserstoff und anderen giftigen Gasen dürfen nur von Personen mit entsprechendem Befähigungsschein durchgeführt werden. Versuchen Sie niemals, eine Begasung selbst durchzuführen - Lebensgefahr!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fumigation Methods */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Verfahren</h2>
            <h3 className="text-3xl font-bold text-brand-primary">Unsere Begasungsmethoden</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {FUMIGATION_METHODS.map((method, idx) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-brand-primary/10 p-3 rounded-xl">
                    <Flame className="size-6 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-primary mb-2">{method.title}</h4>
                    <p className="text-slate-600 text-sm">{method.description}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs font-bold text-slate-500 uppercase mb-2">Anwendungen</p>
                  <div className="flex flex-wrap gap-2">
                    {method.applications.map((app) => (
                      <span key={app} className="bg-white px-3 py-1 rounded-full text-xs text-slate-600 border border-slate-200">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl">
                  <p className="text-xs text-blue-700">
                    <strong>Voraussetzung:</strong> {method.requires}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Ablauf</h2>
            <h3 className="text-3xl font-bold text-brand-primary">So läuft eine Begasung ab</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-6 rounded-xl border border-slate-100"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  <h4 className="font-bold text-brand-primary">{step.title}</h4>
                </div>
                <p className="text-slate-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Fumigate */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Anwendungsfälle</h2>
              <h3 className="text-3xl font-bold text-brand-primary">Wann ist eine Begasung sinnvoll?</h3>
            </div>

            <div className="space-y-4">
              {[
                { title: 'Starker Befall', text: 'Bei massivem Befall von Vorratsschädlingen, wenn andere Methoden nicht ausreichen.' },
                { title: 'Große Lagerhallen', text: 'Effektive Behandlung großer Flächen, die anders nicht zugänglich sind.' },
                { title: 'Container & Silos', text: 'Begasung von Import-/Exportgütern und Getreidesilos.' },
                { title: 'Holzschädlinge', text: 'Bekämpfung von Hausbock und anderen Holzschädlingen in Dachstühlen.' },
                { title: 'Quarantänemaßnahmen', text: 'Import/Export-Quarantäne nach internationalen Standards (ISPM 15).' },
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4 bg-slate-50 p-6 rounded-xl"
                >
                  <CheckCircle2 className="size-6 text-brand-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-brand-primary mb-1">{item.title}</h4>
                    <p className="text-slate-600 text-sm">{item.text}</p>
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
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Begasung erforderlich?</h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns für eine fachkundige Beratung. Wir prüfen, ob eine Begasung in Ihrem Fall die richtige Lösung ist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={CONFIG.phoneLink} className="inline-flex items-center gap-2 bg-white text-brand-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors">
              <Phone className="size-5" /> Jetzt beraten lassen
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
