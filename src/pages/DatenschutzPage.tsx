/**
 * Datenschutz Page - Privacy Policy
 */

import { motion } from 'motion/react';
import { CONFIG } from '../config';

export default function DatenschutzPage() {
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
              Datenschutzerklärung
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-slate">

            <h2 className="text-2xl font-bold text-brand-primary mb-4">1. Datenschutz auf einen Blick</h2>

            <h3 className="text-xl font-bold text-brand-primary mt-8 mb-4">Allgemeine Hinweise</h3>
            <p className="text-slate-600">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>

            <h3 className="text-xl font-bold text-brand-primary mt-8 mb-4">Datenerfassung auf dieser Website</h3>
            <p className="text-slate-600">
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>

            <h2 className="text-2xl font-bold text-brand-primary mt-12 mb-4">2. Verantwortliche Stelle</h2>
            <div className="bg-slate-50 p-6 rounded-xl mb-8">
              <p className="font-bold text-brand-primary">{CONFIG.companyLegalName}</p>
              <p className="text-slate-600">{CONFIG.address}</p>
              <p className="text-slate-600 mt-2">
                Telefon: {CONFIG.phone}<br />
                E-Mail: {CONFIG.email}
              </p>
            </div>

            <h2 className="text-2xl font-bold text-brand-primary mt-12 mb-4">3. Datenerfassung auf dieser Website</h2>

            <h3 className="text-xl font-bold text-brand-primary mt-8 mb-4">Kontaktformular</h3>
            <p className="text-slate-600">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="text-slate-600 mt-4">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
            </p>

            <h3 className="text-xl font-bold text-brand-primary mt-8 mb-4">Anfrage per E-Mail oder Telefon</h3>
            <p className="text-slate-600">
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>

            <h2 className="text-2xl font-bold text-brand-primary mt-12 mb-4">4. Server-Log-Dateien</h2>
            <p className="text-slate-600">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc list-inside text-slate-600 mt-4 space-y-2">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="text-slate-600 mt-4">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
            </p>

            <h2 className="text-2xl font-bold text-brand-primary mt-12 mb-4">5. Ihre Rechte</h2>
            <p className="text-slate-600">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
            </p>

            <h3 className="text-xl font-bold text-brand-primary mt-8 mb-4">Recht auf Auskunft</h3>
            <p className="text-slate-600">
              Sie haben das Recht, von uns eine Bestätigung darüber zu verlangen, ob Sie betreffende personenbezogene Daten verarbeitet werden.
            </p>

            <h3 className="text-xl font-bold text-brand-primary mt-8 mb-4">Recht auf Berichtigung</h3>
            <p className="text-slate-600">
              Sie haben das Recht, von uns unverzüglich die Berichtigung Sie betreffender unrichtiger personenbezogener Daten zu verlangen.
            </p>

            <h3 className="text-xl font-bold text-brand-primary mt-8 mb-4">Recht auf Löschung</h3>
            <p className="text-slate-600">
              Sie haben das Recht, von uns zu verlangen, dass Sie betreffende personenbezogene Daten unverzüglich gelöscht werden.
            </p>

            <h3 className="text-xl font-bold text-brand-primary mt-8 mb-4">Recht auf Einschränkung der Verarbeitung</h3>
            <p className="text-slate-600">
              Sie haben das Recht, von uns die Einschränkung der Verarbeitung zu verlangen.
            </p>

            <h3 className="text-xl font-bold text-brand-primary mt-8 mb-4">Recht auf Datenübertragbarkeit</h3>
            <p className="text-slate-600">
              Sie haben das Recht, die Sie betreffenden personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.
            </p>

            <h3 className="text-xl font-bold text-brand-primary mt-8 mb-4">Widerspruchsrecht</h3>
            <p className="text-slate-600">
              Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten Widerspruch einzulegen.
            </p>

            <h2 className="text-2xl font-bold text-brand-primary mt-12 mb-4">6. Beschwerderecht</h2>
            <p className="text-slate-600">
              Sie haben das Recht, sich bei der zuständigen Aufsichtsbehörde zu beschweren:
            </p>
            <div className="bg-slate-50 p-6 rounded-xl mt-4">
              <p className="text-slate-600">
                Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg<br />
                Postfach 10 29 32<br />
                70025 Stuttgart<br />
                E-Mail: poststelle@lfdi.bwl.de
              </p>
            </div>

            <h2 className="text-2xl font-bold text-brand-primary mt-12 mb-4">7. Änderung dieser Datenschutzerklärung</h2>
            <p className="text-slate-600">
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen.
            </p>

            <p className="text-slate-500 text-sm mt-12">
              Stand: Januar 2026
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
