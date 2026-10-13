import {
  Navbar,
  HeroSection,
  AccreditationBar,
  LevelSelector,
  AcademicOffer,
  PrideAndCampusGallery,
  FaqAccordion,
  Footer,
  FloatingWhatsApp,
} from '@/features/landing/components';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900 selection:bg-blue-900 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AccreditationBar />
        <LevelSelector />
        <AcademicOffer />
        <PrideAndCampusGallery />
        <FaqAccordion />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
