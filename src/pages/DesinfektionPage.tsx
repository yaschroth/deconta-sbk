/**
 * Desinfektion Page - Disinfection Services
 */

import { Link } from 'react-router-dom';
import {
  Sparkles,
  CheckCircle2,
  Phone,
  ArrowRight,
  Shield,
  Building2,
  AlertTriangle,
  Award,
} from 'lucide-react';
import { motion } from 'motion/react';
import { CONFIG } from '../config';

const DISINFECTION_TYPES = [
  {
    title: 'Virendesinfektion',
    description: 'Professionelle Desinfektion gegen Viren, einschließlich Corona, Norovirus und Influenza.',
    applications: ['Büros', 'Schulen', 'Pflegeheime', 'Arztpraxen'],
  },
  {
    title: 'Bakteriendesinfektion',
    description: 'Bekämpfung von Bakterien wie Salmonellen, E.coli, MRSA und anderen Krankheitserregern.',
    applications: ['Küchen', 'Krankenhäuser', 'Lebensmittelbetriebe'],
  },
  {
    title: 'Schimmelpilzdesinfektion',
    description: 'Behandlung von Schimmelpilzbefall zur Vermeidung von Gesundheitsrisiken.',
    applications: ['Wohnräume', 'Keller', 'Feuchträume', 'Dachböden'],
  },
  {
    title: 'Geruchsneutralisation',
    description: 'Beseitigung hartnäckiger Gerüche wie Urin, Verwesungsgeruch oder Rauchgeruch.',
    applications: ['Mietwohnungen', 'Fahrzeuge', 'Tatorte', 'Messie-Wohnungen'],
  },
];

const METHODS = [
  { title: 'Sprühdesinfektion', description: 'Flächendesinfektion mit geprüften Desinfektionsmitteln.' },
  { title: 'Vernebelung', description: 'Kalt- oder Heißvernebelung für großflächige Räume.' },
  { title: 'Wischdesinfektion', description: 'Gezielte Desinfektion von Kontaktflächen.' },
  { title: 'UV-C Desinfektion', description: 'Chemiefreie Desinfektion mit UV-Licht.' },
  { title: 'Ozonbehandlung', description: 'Tiefendesinfektion und Geruchsneutralisation.' },
  { title: 'Hochdruckreinigung', description: 'Kombination aus Reinigung und Desinfektion.' },
];

export default function DesinfektionPage() {
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
                <span className="text-slate-600">Staatlich geprüfte Desinfektoren</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-brand-primary mb-6">
                Professionelle Desinfektion
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Staatlich geprüfte Desinfektoren für die Bekämpfung von Viren, Bakterien und Schimmelpilzen.
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
                  src="/cdc-pIn6MMEoK-c-unsplash.jpg"
                  alt="Professionelle Desinfektion"
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Qualification */}
      <section className="py-16 bg-brand-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Staatlich geprüfte Desinfektoren</h2>
            <p className="text-white/80">
              Unsere Mitarbeiter verfügen über die staatliche Prüfung als Desinfektor. Diese Qualifikation garantiert die fachgerechte Durchführung aller Desinfektionsmaßnahmen nach den aktuellen RKI-Richtlinien.
            </p>
          </div>
        </div>
      </section>

      {/* Disinfection Types */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Leistungen</h2>
            <h3 className="text-3xl font-bold text-brand-primary">Unsere Desinfektionsleistungen</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {DISINFECTION_TYPES.map((type, idx) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <Sparkles className="size-6 text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-primary mb-2">{type.title}</h4>
                    <p className="text-slate-600 text-sm mb-4">{type.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {type.applications.map((app) => (
                    <span key={app} className="bg-white px-3 py-1 rounded-full text-xs text-slate-600 border border-slate-200">
                      {app}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methods */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Methoden</h2>
            <h3 className="text-3xl font-bold text-brand-primary">Unsere Desinfektionsverfahren</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {METHODS.map((method, idx) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-6 rounded-xl border border-slate-100"
              >
                <h4 className="font-bold text-brand-primary mb-2">{method.title}</h4>
                <p className="text-slate-600 text-sm">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Disinfect */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Anwendungsfälle</h2>
              <h3 className="text-3xl font-bold text-brand-primary">Wann ist eine Desinfektion nötig?</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                <h4 className="font-bold text-red-700 mb-4 flex items-center gap-2">
                  <AlertTriangle className="size-5" /> Akute Fälle
                </h4>
                <ul className="space-y-3 text-sm">
                  {[
                    'Nach Infektionskrankheiten (Corona, Norovirus)',
                    'Bei Schädlingsbefall (Schaben, Ratten)',
                    'Nach Wasserschäden und Schimmelbefall',
                    'Todesfälle und Tatortreinigung',
                    'Messie-Haushalte',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-700">
                      <span className="text-red-500">!</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <h4 className="font-bold text-blue-700 mb-4 flex items-center gap-2">
                  <Shield className="size-5" /> Präventive Maßnahmen
                </h4>
                <ul className="space-y-3 text-sm">
                  {[
                    'Regelmäßige Desinfektion in Pflegeheimen',
                    'Hygienekonzepte für Lebensmittelbetriebe',
                    'Mieterwechsel in Wohnungen',
                    'Fahrzeugdesinfektion (Krankentransport)',
                    'Büro- und Praxisreinigung',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle2 className="size-4 text-blue-500 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Branchen</h2>
            <h3 className="text-2xl font-bold text-brand-primary">Wir desinfizieren für</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              'Pflegeheime',
              'Krankenhäuser',
              'Arztpraxen',
              'Schulen & Kitas',
              'Hotels',
              'Gastronomie',
              'Büros',
              'Fahrzeuge',
            ].map((industry) => (
              <span key={industry} className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full border border-slate-200">
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
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Desinfektion benötigt?</h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Unsere staatlich geprüften Desinfektoren sind schnell für Sie da. Kontaktieren Sie uns für eine unverbindliche Beratung.
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
