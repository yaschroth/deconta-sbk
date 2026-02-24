/**
 * Impressum Page - Legal Notice
 */

import { motion } from 'motion/react';
import { CONFIG } from '../config';

export default function ImpressumPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-brand-primary mb-6">
              Impressum
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-slate">
            <h2 className="text-2xl font-bold text-brand-primary mb-4">Angaben gemäß § 5 TMG</h2>

            <div className="bg-slate-50 p-6 rounded-xl mb-8">
              <p className="font-bold text-brand-primary text-lg mb-2">{CONFIG.companyLegalName}</p>
              <p className="text-slate-600">{CONFIG.address}</p>
            </div>

            <h3 className="text-xl font-bold text-brand-primary mt-8 mb-4">Vertreten durch</h3>
            <p className="text-slate-600">{CONFIG.founderName} (Geschäftsführer)</p>

            <h3 className="text-xl font-bold text-brand-primary mt-8 mb-4">Kontakt</h3>
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="py-2 text-slate-500 w-24">Telefon:</td>
                  <td className="py-2 text-slate-700">{CONFIG.phone}</td>
                </tr>
                <tr>
                  <td className="py-2 text-slate-500">Mobil:</td>
                  <td className="py-2 text-slate-700">{CONFIG.mobile}</td>
                </tr>
                <tr>
                  <td className="py-2 text-slate-500">E-Mail:</td>
                  <td className="py-2 text-slate-700">{CONFIG.email}</td>
                </tr>
              </tbody>
            </table>

            <h3 className="text-xl font-bold text-brand-primary mt-8 mb-4">Registereintrag</h3>
            <p className="text-slate-600">
              Eintragung im Handelsregister.<br />
              Registergericht: Amtsgericht Mannheim<br />
              Registernummer: HRB [Handelsregisternummer]
            </p>

            <h3 className="text-xl font-bold text-brand-primary mt-8 mb-4">Umsatzsteuer-ID</h3>
            <p className="text-slate-600">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE [Umsatzsteuer-ID]
            </p>

            <h3 className="text-xl font-bold text-brand-primary mt-8 mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h3>
            <p className="text-slate-600">
              Berufsbezeichnung: IHK-geprüfter Schädlingsbekämpfer<br />
              Zuständige Kammer: Industrie- und Handelskammer Rhein-Neckar<br />
              Verliehen in: Deutschland
            </p>

            <h3 className="text-xl font-bold text-brand-primary mt-8 mb-4">Qualifikationen</h3>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>IHK-Sachkundenachweis Schädlingsbekämpfung</li>
              <li>Befähigungsschein zur Begasung gemäß Chemikalien-Verbotsverordnung (ChemVerbotsV)</li>
              <li>Sachkunde Holzschutz nach DIN 68800 Teil 4</li>
              <li>Staatlich geprüfter Desinfektor</li>
            </ul>

            <h3 className="text-xl font-bold text-brand-primary mt-8 mb-4">Aufsichtsbehörde</h3>
            <p className="text-slate-600">
              Regierungspräsidium Karlsruhe<br />
              (zuständig für die Erteilung des Befähigungsscheins zur Begasung)
            </p>

            <h3 className="text-xl font-bold text-brand-primary mt-8 mb-4">Streitschlichtung</h3>
            <p className="text-slate-600">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline ml-1">
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p className="text-slate-600 mt-4">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h3 className="text-xl font-bold text-brand-primary mt-8 mb-4">Haftung für Inhalte</h3>
            <p className="text-slate-600">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="text-slate-600 mt-4">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>

            <h3 className="text-xl font-bold text-brand-primary mt-8 mb-4">Haftung für Links</h3>
            <p className="text-slate-600">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>

            <h3 className="text-xl font-bold text-brand-primary mt-8 mb-4">Urheberrecht</h3>
            <p className="text-slate-600">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
