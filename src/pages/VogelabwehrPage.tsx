/**
 * Vogelabwehr Page - Bird Control Services
 */

import { Link } from 'react-router-dom';
import {
  Bird,
  CheckCircle2,
  Phone,
  ArrowRight,
  AlertTriangle,
  Building2,
} from 'lucide-react';
import { motion } from 'motion/react';
import { CONFIG } from '../config';

const BIRD_PROBLEMS = [
  { title: 'Verschmutzung', description: 'Vogelkot beschädigt Fassaden, Fahrzeuge und Außenmöbel.' },
  { title: 'Gesundheitsrisiken', description: 'Taubenkot kann Krankheitserreger wie Salmonellen übertragen.' },
  { title: 'Verstopfungen', description: 'Nistmaterial verstopft Regenrinnen und Lüftungsanlagen.' },
  { title: 'Lärmbelästigung', description: 'Gurren und Flattern stört Bewohner und Mitarbeiter.' },
  { title: 'Imageschäden', description: 'Vogelkot an Geschäftsfassaden wirkt unprofessionell.' },
  { title: 'Materialschäden', description: 'Säurehaltige Ausscheidungen greifen Baumaterialien an.' },
];

const SOLUTIONS = [
  {
    title: 'Taubenspikes',
    description: 'Edelstahl- oder Kunststoffspikes verhindern das Landen von Vögeln auf Simsen, Vorsprüngen und anderen Flächen.',
    benefits: ['Unauffällig', 'Wartungsfrei', 'Langlebig', 'Tierfreundlich'],
  },
  {
    title: 'Vogelschutznetze',
    description: 'Maßgefertigte Netze schließen größere Bereiche wie Innenhöfe, Unterführungen oder Hallen ab.',
    benefits: ['Große Flächen', 'UV-beständig', 'Verschiedene Farben', 'Flexible Montage'],
  },
  {
    title: 'Spanndrahtsysteme',
    description: 'Nahezu unsichtbare Edelstahldrähte verhindern das Landen auf Fensterbänken und schmalen Flächen.',
    benefits: ['Kaum sichtbar', 'Denkmalschutz geeignet', 'Langlebig', 'Elegante Lösung'],
  },
  {
    title: 'Elektrische Systeme',
    description: 'Niedrigstrom-Systeme geben leichte Impulse ab und konditionieren Vögel, Bereiche zu meiden.',
    benefits: ['Sehr effektiv', 'Tierfreundlich', 'Unsichtbar', 'Für alle Flächen'],
  },
];

export default function VogelabwehrPage() {
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
                <Bird className="size-4 text-brand-accent" />
                <span className="text-slate-600">Professionelle Vogelabwehr</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-brand-primary mb-6">
                Vogelabwehr & Taubenvertreibung
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Effektive und tierfreundliche Lösungen gegen Tauben und andere Vögel. Schutz für Gebäude, Fassaden und Außenanlagen.
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
                  src="/vogelabwehr.jpg"
                  alt="Tauben auf Gebäude - Vogelabwehr"
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Probleme</h2>
            <h3 className="text-3xl font-bold text-brand-primary">Warum Vogelabwehr wichtig ist</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BIRD_PROBLEMS.map((problem, idx) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-slate-50 p-6 rounded-xl border border-slate-100"
              >
                <div className="flex items-start gap-3">
                  <AlertTriangle className="size-5 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-brand-primary mb-2">{problem.title}</h4>
                    <p className="text-slate-600 text-sm">{problem.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Lösungen</h2>
            <h3 className="text-3xl font-bold text-brand-primary">Unsere Vogelabwehrsysteme</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {SOLUTIONS.map((solution, idx) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm"
              >
                <h4 className="text-xl font-bold text-brand-primary mb-3">{solution.title}</h4>
                <p className="text-slate-600 mb-6">{solution.description}</p>
                <div className="flex flex-wrap gap-2">
                  {solution.benefits.map((benefit) => (
                    <span key={benefit} className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                      <CheckCircle2 className="size-3" />
                      {benefit}
                    </span>
                  ))}
                </div>
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
              <h3 className="text-3xl font-bold text-brand-primary">So gehen wir vor</h3>
            </div>

            <div className="space-y-6">
              {[
                { step: '1', title: 'Besichtigung', description: 'Wir analysieren die Situation vor Ort und identifizieren Problemzonen.' },
                { step: '2', title: 'Konzept', description: 'Wir erstellen ein maßgeschneidertes Konzept für Ihr Gebäude.' },
                { step: '3', title: 'Angebot', description: 'Sie erhalten ein transparentes Angebot mit allen Kosten.' },
                { step: '4', title: 'Montage', description: 'Fachgerechte Installation der Vogelabwehrsysteme.' },
                { step: '5', title: 'Reinigung', description: 'Optional: Professionelle Reinigung der verschmutzten Bereiche.' },
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

      {/* Industries */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Einsatzbereiche</h2>
            <h3 className="text-2xl font-bold text-brand-primary">Vogelabwehr für</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              'Wohngebäude',
              'Geschäftshäuser',
              'Industrieanlagen',
              'Lagerhallen',
              'Bahnhöfe',
              'Parkhäuser',
              'Kirchen',
              'Denkmäler',
            ].map((area) => (
              <span key={area} className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full border border-slate-200">
                <Building2 className="size-4 text-brand-accent" />
                <span className="font-medium text-slate-700">{area}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-primary">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Taubenplage?</h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Wir finden die optimale Lösung für Ihr Gebäude. Kontaktieren Sie uns für eine kostenlose Erstberatung.
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
