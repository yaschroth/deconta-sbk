/**
 * Vorratsschutz Page - Storage Protection and HACCP Services
 */

import { Link } from 'react-router-dom';
import {
  Package,
  CheckCircle2,
  Phone,
  ArrowRight,
  Shield,
  FileText,
  AlertTriangle,
  Building2,
  ClipboardCheck,
} from 'lucide-react';
import { motion } from 'motion/react';
import { CONFIG } from '../config';

const STORAGE_PESTS = [
  { name: 'Mehlmotten', description: 'Befallen Mehl, Getreide, Nüsse und andere trockene Lebensmittel.' },
  { name: 'Kornkäfer', description: 'Zerstören Getreidekörner von innen heraus.' },
  { name: 'Brotkäfer', description: 'Befallen Backwaren, Gewürze und Trockenprodukte.' },
  { name: 'Speckkäfer', description: 'Befallen tierische Produkte, Felle und Trockenwaren.' },
  { name: 'Mäuse & Ratten', description: 'Kontaminieren Lebensmittel und fressen Verpackungen an.' },
  { name: 'Schaben', description: 'Verunreinigen Lebensmittel und übertragen Krankheiten.' },
];

const HACCP_SERVICES = [
  { title: 'Monitoring-Systeme', description: 'Installation und Wartung von Köderstationen und Fallen.' },
  { title: 'Dokumentation', description: 'Lückenlose Aufzeichnung aller Maßnahmen für Audits.' },
  { title: 'Risikoanalyse', description: 'Identifikation von Schwachstellen und Eintrittspunkten.' },
  { title: 'Präventivmaßnahmen', description: 'Empfehlungen zur Vermeidung von Schädlingsbefall.' },
  { title: 'Regelmäßige Kontrollen', description: 'Planmäßige Inspektionen nach vereinbartem Intervall.' },
  { title: 'Sofortmaßnahmen', description: 'Schnelle Reaktion bei akutem Befall.' },
];

const INDUSTRIES = [
  'Lebensmittelproduktion',
  'Bäckereien & Konditoreien',
  'Gastronomie & Hotels',
  'Supermärkte & Einzelhandel',
  'Großküchen & Kantinen',
  'Lagerhäuser',
  'Mühlen',
  'Brauereien',
];

export default function VorratsschutzPage() {
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
                <Package className="size-4 text-brand-accent" />
                <span className="text-slate-600">HACCP-konforme Lösungen</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-brand-primary mb-6">
                Vorratsschutz & Gesundheitsschutz
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Professioneller Schutz Ihrer Lebensmittel und Vorräte. HACCP-konformes Monitoring für Gewerbebetriebe.
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
                  src="/cdc-pIn6MMEoK-c-unsplash.jpg"
                  alt="Vorratsschutz und HACCP Monitoring"
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Storage Pests */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Vorratsschädlinge</h2>
            <h3 className="text-3xl font-bold text-brand-primary">Diese Schädlinge bedrohen Ihre Vorräte</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STORAGE_PESTS.map((pest, idx) => (
              <motion.div
                key={pest.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-slate-50 p-6 rounded-xl border border-slate-100"
              >
                <div className="flex items-start gap-3">
                  <AlertTriangle className="size-5 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-brand-primary mb-2">{pest.name}</h4>
                    <p className="text-slate-600 text-sm">{pest.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HACCP Services */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">HACCP-Monitoring</h2>
              <h3 className="text-3xl font-bold text-brand-primary mb-6">Schädlingsmonitoring für Gewerbebetriebe</h3>
              <p className="text-slate-600 mb-8">
                Als Partner der Lebensmittelindustrie bieten wir HACCP-konforme Schädlingsüberwachung mit lückenloser Dokumentation. Unsere Monitoring-Systeme erfüllen alle Anforderungen für IFS, BRC und andere Zertifizierungen.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {HACCP_SERVICES.map((service) => (
                  <div key={service.title} className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-brand-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-brand-primary text-sm">{service.title}</p>
                      <p className="text-slate-500 text-xs">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/cdc-wz3ijPHvL54-unsplash.jpg"
                  alt="HACCP Monitoring"
                  className="w-full object-cover aspect-square"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3">
                  <ClipboardCheck className="size-8 text-brand-accent" />
                  <div>
                    <p className="font-bold text-brand-primary">HACCP-konform</p>
                    <p className="text-xs text-slate-500">IFS & BRC zertifiziert</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Branchen</h2>
            <h3 className="text-3xl font-bold text-brand-primary">Wir betreuen alle Lebensmittelbetriebe</h3>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {INDUSTRIES.map((industry) => (
              <span key={industry} className="inline-flex items-center gap-2 bg-slate-50 px-6 py-3 rounded-full border border-slate-200">
                <Building2 className="size-4 text-brand-accent" />
                <span className="font-medium text-slate-700">{industry}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Ihre Vorteile</h2>
              <h3 className="text-3xl font-bold text-brand-primary">Warum professioneller Vorratsschutz?</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Shield, title: 'Produktschutz', text: 'Schützen Sie Ihre Waren vor Verderb und Kontamination.' },
                { icon: FileText, title: 'Audit-Sicherheit', text: 'Lückenlose Dokumentation für alle Zertifizierungen.' },
                { icon: Building2, title: 'Imageschutz', text: 'Vermeiden Sie Reklamationen und negative Publicity.' },
                { icon: CheckCircle2, title: 'Rechtssicherheit', text: 'Erfüllung aller gesetzlichen Anforderungen.' },
              ].map((benefit) => (
                <div key={benefit.title} className="bg-white p-6 rounded-xl border border-slate-100">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <benefit.icon className="size-6 text-brand-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-primary mb-2">{benefit.title}</h4>
                      <p className="text-slate-600 text-sm">{benefit.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-primary">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Vorratsschutz für Ihr Unternehmen</h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Lassen Sie sich unverbindlich beraten. Wir erstellen Ihnen ein individuelles Konzept für Ihren Betrieb.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={CONFIG.phoneLink} className="inline-flex items-center gap-2 bg-white text-brand-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors">
              <Phone className="size-5" /> Jetzt beraten lassen
            </a>
            <Link to="/referenzen" className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors">
              Unsere Referenzen <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
