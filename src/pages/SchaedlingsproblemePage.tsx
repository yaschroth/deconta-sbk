/**
 * Schädlingsprobleme Page - Pest Problem Categories
 */

import { Link } from 'react-router-dom';
import {
  Bug,
  Rat,
  Bird,
  Leaf,
  ArrowRight,
  AlertTriangle,
  ShieldCheck,
  Phone,
} from 'lucide-react';
import { motion } from 'motion/react';
import { CONFIG } from '../config';

const PEST_CATEGORIES = [
  {
    icon: Bug,
    title: 'Hygieneschädlinge',
    description: 'Schädlinge, die Krankheiten übertragen können und eine direkte Gefahr für die menschliche Gesundheit darstellen.',
    examples: ['Schaben/Kakerlaken', 'Pharaoameisen', 'Flöhe', 'Bettwanzen', 'Fliegen'],
    urgency: 'high',
  },
  {
    icon: Rat,
    title: 'Vorratsschädlinge',
    description: 'Schädlinge, die Lebensmittel und Vorräte befallen und unbrauchbar machen.',
    examples: ['Ratten & Mäuse', 'Mehlmotten', 'Kornkäfer', 'Brotkäfer', 'Speckkäfer'],
    urgency: 'high',
  },
  {
    icon: Leaf,
    title: 'Materialschädlinge',
    description: 'Schädlinge, die Gebäude, Möbel, Textilien und andere Materialien beschädigen.',
    examples: ['Holzwürmer', 'Kleidermotten', 'Teppichkäfer', 'Silberfischchen', 'Hausbock'],
    urgency: 'medium',
  },
  {
    icon: Bird,
    title: 'Lästlinge',
    description: 'Tiere, die zwar keine direkten Schäden verursachen, aber dennoch als störend empfunden werden.',
    examples: ['Wespen', 'Ameisen', 'Spinnen', 'Kellerasseln', 'Ohrwürmer'],
    urgency: 'low',
  },
];

const COMMON_PESTS = [
  { name: 'Ratten', description: 'Übertragen Krankheiten, verursachen Fraßschäden und sind meldepflichtig.', link: '/kammerjaeger' },
  { name: 'Mäuse', description: 'Kontaminieren Lebensmittel und nagen an Kabeln und Materialien.', link: '/kammerjaeger' },
  { name: 'Schaben', description: 'Hygieneschädlinge, die Krankheitserreger verbreiten können.', link: '/kammerjaeger' },
  { name: 'Wespen', description: 'Gefährlich für Allergiker, Nester sollten professionell entfernt werden.', link: '/insektenschutz' },
  { name: 'Motten', description: 'Befallen Textilien oder Lebensmittelvorräte.', link: '/vorratsschutz' },
  { name: 'Holzschädlinge', description: 'Zerstören tragende Holzkonstruktionen und Möbel.', link: '/holzschutz' },
];

export default function SchaedlingsproblemePage() {
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
                <AlertTriangle className="size-4 text-red-500" />
                <span className="text-slate-600">Schädlingsbefall erkennen</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-brand-primary mb-6">
                Schädlingsprobleme erkennen & lösen
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Erfahren Sie mehr über verschiedene Schädlingsarten und wie wir Ihnen bei der Bekämpfung helfen können.
              </p>
              <a href={CONFIG.phoneLink} className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-xl">
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
                  src="/cdc-wz3ijPHvL54-unsplash.jpg"
                  alt="Schädlingsbekämpfung Experte"
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pest Categories */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Schädlingsarten</h2>
            <h3 className="text-3xl font-bold text-brand-primary">Die vier Hauptkategorien</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {PEST_CATEGORIES.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-4 rounded-2xl ${
                    category.urgency === 'high' ? 'bg-red-100' :
                    category.urgency === 'medium' ? 'bg-yellow-100' : 'bg-blue-100'
                  }`}>
                    <category.icon className={`size-8 ${
                      category.urgency === 'high' ? 'text-red-500' :
                      category.urgency === 'medium' ? 'text-yellow-600' : 'text-brand-accent'
                    }`} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-primary mb-2">{category.title}</h4>
                    {category.urgency === 'high' && (
                      <span className="inline-block bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        Sofort handeln
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-slate-600 mb-6">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.examples.map((example) => (
                    <span key={example} className="bg-white px-3 py-1 rounded-full text-sm text-slate-600 border border-slate-200">
                      {example}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Pests */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Häufige Schädlinge</h2>
            <h3 className="text-3xl font-bold text-brand-primary">Diese Schädlinge bekämpfen wir</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMMON_PESTS.map((pest, idx) => (
              <motion.div
                key={pest.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow"
              >
                <h4 className="text-lg font-bold text-brand-primary mb-2">{pest.name}</h4>
                <p className="text-slate-600 text-sm mb-4">{pest.description}</p>
                <Link to={pest.link} className="text-brand-accent font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  Mehr erfahren <ArrowRight className="size-4" />
                </Link>
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
              <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Warnzeichen</h2>
              <h3 className="text-3xl font-bold text-brand-primary">Anzeichen für Schädlingsbefall</h3>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-red-700 mb-6 flex items-center gap-2">
                <AlertTriangle className="size-6" /> Achten Sie auf diese Warnsignale:
              </h4>
              <ul className="space-y-4">
                {[
                  'Kotspuren (klein und dunkel bei Mäusen, größer bei Ratten)',
                  'Nagespuren an Kabeln, Verpackungen oder Holz',
                  'Ungewöhnliche Geräusche (Kratzen, Rascheln) besonders nachts',
                  'Fraßschäden an Lebensmitteln oder Textilien',
                  'Nester oder Gespinste in dunklen Ecken',
                  'Tote oder lebende Schädlinge',
                  'Unangenehme Gerüche (süßlich-modrig)',
                  'Hautreizungen oder Stiche am Körper',
                ].map((sign, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700">
                    <span className="text-red-500 mt-1">!</span>
                    {sign}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Unser Vorgehen</h2>
              <h3 className="text-3xl font-bold text-brand-primary mb-8">Professionelle Schädlingsbekämpfung</h3>
              <div className="space-y-6">
                {[
                  { title: 'Analyse', description: 'Gründliche Inspektion und Identifikation der Schädlingsart.' },
                  { title: 'Beratung', description: 'Transparente Erklärung der Situation und möglicher Maßnahmen.' },
                  { title: 'Bekämpfung', description: 'Einsatz effektiver, zertifizierter Methoden und Mittel.' },
                  { title: 'Prävention', description: 'Empfehlungen zur Vermeidung eines erneuten Befalls.' },
                ].map((step, idx) => (
                  <div key={step.title} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-primary mb-1">{step.title}</h4>
                      <p className="text-slate-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/cdc-wz3ijPHvL54-unsplash.jpg"
                  alt="Professionelle Schädlingsbekämpfung"
                  className="w-full object-cover aspect-square"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="size-8 text-brand-accent" />
                  <div>
                    <p className="font-bold text-brand-primary">IHK-zertifiziert</p>
                    <p className="text-xs text-slate-500">Geprüfte Qualität</p>
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
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Schädlingsbefall erkannt?</h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Handeln Sie schnell! Je früher Sie handeln, desto einfacher und kostengünstiger ist die Bekämpfung.
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
