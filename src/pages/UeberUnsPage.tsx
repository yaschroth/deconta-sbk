/**
 * Über Uns Page - Company History and Team
 */

import { Link } from 'react-router-dom';
import {
  Award,
  CheckCircle2,
  ArrowRight,
  Shield,
  Target,
  Heart,
} from 'lucide-react';
import { motion } from 'motion/react';
import { CONFIG, CERTIFICATIONS } from '../config';

const TIMELINE = [
  { year: '1990', title: 'Gründung', description: 'Gründung der DECONTA GmbH durch Lothar Krämer in Laudenbach.' },
  { year: '1995', title: 'Expansion', description: 'Erweiterung des Einsatzgebiets auf den gesamten Rhein-Neckar-Kreis.' },
  { year: '2000', title: 'Zertifizierung', description: 'Erlangung der IHK-Zertifizierung und Befähigungsschein zur Begasung.' },
  { year: '2010', title: 'DIN 68800', description: 'Qualifizierung für Holzschutzmaßnahmen nach DIN 68800 Teil 4.' },
  { year: '2020', title: '30 Jahre', description: 'Feier des 30-jährigen Firmenjubiläums mit über 1000 zufriedenen Kunden.' },
];

const VALUES = [
  { icon: Shield, title: 'Zuverlässigkeit', description: 'Pünktlich, diskret und professionell - seit über 30 Jahren.' },
  { icon: Target, title: 'Effektivität', description: 'Modernste Methoden und zertifizierte Verfahren für beste Ergebnisse.' },
  { icon: Heart, title: 'Kundennähe', description: 'Persönliche Beratung und individuelle Lösungen für jeden Kunden.' },
];

export default function UeberUnsPage() {
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
                <span className="text-slate-600">Seit 1990</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-brand-primary mb-6">
                Über DECONTA GmbH
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Seit über {CONFIG.yearsExperience} Jahren Ihr zuverlässiger Partner für professionelle Schädlingsbekämpfung im {CONFIG.region}.
              </p>
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
                  alt="DECONTA Schädlingsbekämpfung Team"
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Unsere Geschichte</h2>
              <h3 className="text-3xl font-bold text-brand-primary mb-8">Qualität seit 1990</h3>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Die DECONTA Gesellschaft für Vorratsschutz und Schädlingsbekämpfung mbH wurde 1990 von <strong className="text-brand-primary">{CONFIG.founderName}</strong> in Laudenbach gegründet. Was als kleines Familienunternehmen begann, hat sich zu einem der führenden Schädlingsbekämpfungsbetriebe im Rhein-Neckar-Kreis entwickelt.
                </p>
                <p>
                  Unser Erfolg basiert auf dem konsequenten Streben nach höchster Qualität und Kundenzufriedenheit. Als IHK-zertifizierter Fachbetrieb verfügen wir über alle erforderlichen Qualifikationen, einschließlich des Befähigungsscheins zur Begasung gemäß Gefahrstoffverordnung.
                </p>
                <p>
                  Wir führen Holzschutzmaßnahmen nach DIN 68800 Teil 4 durch und sind spezialisiert auf die Bekämpfung von Gesundheits- und Vorratsschädlingen in Privathaushalten sowie Gewerbebetrieben.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/mesto-sprayers-spruhgerate-KtU82_xkOJs-unsplash.jpg"
                  alt="DECONTA Team"
                  className="w-full object-cover aspect-[4/3]"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-brand-primary text-white p-6 rounded-2xl shadow-xl hidden sm:block">
                <p className="text-3xl font-bold">{CONFIG.yearsExperience}+</p>
                <p className="text-sm">Jahre Erfahrung</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-12">Unsere Qualifikationen</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {CERTIFICATIONS.map((cert) => (
              <motion.div
                key={cert.name}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Award className="size-8 text-brand-accent" />
                </div>
                <h3 className="text-xl font-bold text-brand-primary mb-2">{cert.name}</h3>
                <p className="text-sm text-slate-500">{cert.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Meilensteine</h2>
            <h3 className="text-3xl font-bold text-brand-primary">Unsere Firmengeschichte</h3>
          </div>

          <div className="max-w-3xl mx-auto">
            {TIMELINE.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-6 mb-8"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {item.year}
                  </div>
                  {idx < TIMELINE.length - 1 && (
                    <div className="w-0.5 h-full bg-blue-200 mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h4 className="text-xl font-bold text-brand-primary mb-2">{item.title}</h4>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Unsere Werte</h2>
            <h3 className="text-3xl font-bold text-brand-primary">Wofür wir stehen</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {VALUES.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  <value.icon className="size-8 text-brand-accent" />
                </div>
                <h4 className="text-xl font-bold text-brand-primary mb-3">{value.title}</h4>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Founder */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Geschäftsführung</h2>
              <h3 className="text-3xl font-bold text-brand-primary">Ihr Ansprechpartner</h3>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 bg-brand-primary rounded-full flex items-center justify-center text-white text-4xl font-bold">
                  {CONFIG.founderName.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-2xl font-bold text-brand-primary mb-2">{CONFIG.founderName}</h4>
                  <p className="text-brand-accent font-semibold mb-4">Geschäftsführer</p>
                  <p className="text-slate-600 mb-4">
                    IHK-geprüfter Schädlingsbekämpfer mit über 30 Jahren Berufserfahrung. Inhaber des Befähigungsscheins zur Begasung gemäß Gefahrstoffverordnung.
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <span className="badge-trust">
                      <CheckCircle2 className="size-4 text-brand-accent" />
                      IHK-geprüft
                    </span>
                    <span className="badge-trust">
                      <CheckCircle2 className="size-4 text-brand-accent" />
                      Begasungs-Befähigung
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-primary">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Haben Sie Fragen?</h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns für eine kostenlose Erstberatung. Wir freuen uns auf Sie!
          </p>
          <Link to="/kontakt" className="inline-flex items-center gap-2 bg-white text-brand-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors">
            Kontakt aufnehmen <ArrowRight className="size-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
