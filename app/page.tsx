import {
  Navbar,
  Hero,
  AccreditationBar,
  LevelSelector,
  CourseCatalog,
  Testimonials,
  FAQ,
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
        <LevelSelector />
        <CourseCatalog />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
