/**
 * DECONTA GmbH - Schädlingsbekämpfung Website
 * Gesellschaft für Vorratsschutz und Schädlingsbekämpfung mbH
 */

import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import {
  HomePage,
  UeberUnsPage,
  SchaedlingsproblemePage,
  KammerjaegerPage,
  VorratsschutzPage,
  HolzschutzPage,
  DesinfektionPage,
  BegasungPage,
  VogelabwehrPage,
  InsektenschutzPage,
  SchimmelpilzPage,
  ReferenzenPage,
  KontaktPage,
  ImpressumPage,
  DatenschutzPage,
} from './pages';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ueber-uns" element={<UeberUnsPage />} />
        <Route path="/schaedlingsprobleme" element={<SchaedlingsproblemePage />} />
        <Route path="/kammerjaeger" element={<KammerjaegerPage />} />
        <Route path="/vorratsschutz" element={<VorratsschutzPage />} />
        <Route path="/holzschutz" element={<HolzschutzPage />} />
        <Route path="/desinfektion" element={<DesinfektionPage />} />
        <Route path="/begasung" element={<BegasungPage />} />
        <Route path="/vogelabwehr" element={<VogelabwehrPage />} />
        <Route path="/insektenschutz" element={<InsektenschutzPage />} />
        <Route path="/schimmelpilz" element={<SchimmelpilzPage />} />
        <Route path="/referenzen" element={<ReferenzenPage />} />
        <Route path="/kontakt" element={<KontaktPage />} />
        <Route path="/impressum" element={<ImpressumPage />} />
        <Route path="/datenschutz" element={<DatenschutzPage />} />
        {/* Catch-all redirect to home */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}
