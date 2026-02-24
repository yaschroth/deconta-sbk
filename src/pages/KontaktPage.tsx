/**
 * Kontakt Page - Contact Form and Information
 */

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  MessageCircle,
} from 'lucide-react';
import { motion } from 'motion/react';
import { CONFIG } from '../config';

export default function KontaktPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-brand-primary mb-6">
              Kontaktieren Sie uns
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Schildern Sie uns Ihr Schädlingsproblem. Wir beraten Sie kostenlos und unverbindlich.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-brand-primary rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            {/* Contact Info */}
            <div className="p-12 lg:w-1/2 text-white">
              <h3 className="text-3xl font-bold mb-6">Ihre Ansprechpartner</h3>
              <p className="text-slate-300 mb-8">
                Wir sind von Montag bis Freitag für Sie da. Bei Notfällen erreichen Sie uns auch am Wochenende.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <Phone className="size-6 text-brand-highlight" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">Telefon</p>
                    <a href={CONFIG.phoneLink} className="text-xl font-bold hover:text-brand-highlight transition-colors">{CONFIG.phone}</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <Phone className="size-6 text-brand-highlight" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">Mobil</p>
                    <a href={CONFIG.mobileLink} className="text-lg font-bold hover:text-brand-highlight transition-colors">{CONFIG.mobile}</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <MessageCircle className="size-6 text-brand-highlight" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">WhatsApp</p>
                    <a href={`https://wa.me/${CONFIG.whatsapp}`} className="text-lg font-bold hover:text-brand-highlight transition-colors">Nachricht senden</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <Mail className="size-6 text-brand-highlight" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">E-Mail</p>
                    <a href={`mailto:${CONFIG.email}`} className="text-lg font-bold hover:text-brand-highlight transition-colors">{CONFIG.email}</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <MapPin className="size-6 text-brand-highlight" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">Adresse</p>
                    <p className="text-lg font-bold">{CONFIG.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <Clock className="size-6 text-brand-highlight" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">Erreichbarkeit</p>
                    <p className="text-sm font-bold">{CONFIG.hours.weekdays}</p>
                    <p className="text-sm font-bold">{CONFIG.hours.saturday}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-brand-accent/20 rounded-2xl border border-brand-accent/30">
                <p className="text-brand-highlight font-bold mb-2 flex items-center gap-2">
                  <Award className="size-5" /> IHK-zertifizierter Fachbetrieb
                </p>
                <p className="text-sm text-slate-300">
                  Mit Befähigungsschein zur Begasung gemäß Gefahrstoffverordnung.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-12 lg:w-1/2">
              <h3 className="text-2xl font-bold text-brand-primary mb-6">Nachricht senden</h3>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Ihr Name *</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-accent focus:ring-0 transition-colors outline-none" placeholder="Max Mustermann" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Telefon *</label>
                    <input type="tel" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-accent focus:ring-0 transition-colors outline-none" placeholder="+49..." />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">E-Mail</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-accent focus:ring-0 transition-colors outline-none" placeholder="ihre@email.de" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Schädlingsart</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-accent focus:ring-0 transition-colors outline-none appearance-none">
                    <option value="">Bitte wählen...</option>
                    <option value="ratten">Ratten / Mäuse</option>
                    <option value="wespen">Wespen / Hornissen</option>
                    <option value="holz">Holzschädlinge</option>
                    <option value="schaben">Schaben / Kakerlaken</option>
                    <option value="ameisen">Ameisen</option>
                    <option value="tauben">Tauben / Vogelabwehr</option>
                    <option value="begasung">Begasung erforderlich</option>
                    <option value="desinfektion">Desinfektion</option>
                    <option value="schimmel">Schimmel</option>
                    <option value="gewerbe">Gewerbliche Anfrage</option>
                    <option value="sonstiges">Sonstiges</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">PLZ / Ort</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-accent focus:ring-0 transition-colors outline-none" placeholder="69514 Laudenbach" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Ihre Nachricht *</label>
                  <textarea required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-accent focus:ring-0 transition-colors outline-none h-32" placeholder="Beschreiben Sie die Situation..."></textarea>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" id="privacy" required className="mt-1" />
                  <label htmlFor="privacy" className="text-xs text-slate-500">
                    Ich habe die <a href="/datenschutz" className="text-brand-accent hover:underline">Datenschutzerklärung</a> gelesen und erkläre mich mit der Verarbeitung meiner Daten einverstanden. *
                  </label>
                </div>
                <button type="submit" className="w-full bg-brand-primary hover:bg-brand-secondary text-white py-4 rounded-xl font-bold text-lg transition-colors shadow-lg">
                  Anfrage senden
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-brand-primary mb-8 text-center">Unser Standort</h2>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-[16/9] bg-slate-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="size-12 text-brand-accent mx-auto mb-4" />
                  <p className="text-lg font-bold text-brand-primary">{CONFIG.companyLegalName}</p>
                  <p className="text-slate-600">{CONFIG.address}</p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONFIG.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-brand-accent font-semibold hover:underline"
                  >
                    In Google Maps öffnen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
