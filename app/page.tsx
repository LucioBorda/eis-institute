import {
  Navbar,
  Hero,
  AccreditationBar,
  CourseCatalog,
  Testimonials,
  FAQ,
  LevelSelector,
  Footer,
  FloatingWhatsApp,
} from '@/features/landing/components';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] font-sans text-[#001A4D] selection:bg-[#00205B] selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AccreditationBar />
        <CourseCatalog />
        <Testimonials />
        <FAQ />
        <LevelSelector />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
