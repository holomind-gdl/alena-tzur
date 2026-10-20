import {
  Navbar,
  Hero,
  Modules,
  Curriculum,
  Instructor,
  Results,
  Pricing,
  FAQ,
  Contact,
  Footer,
} from "@/components/sections";
import ErrorBoundary from "@/components/ui/ErrorBoundary";

export default function Home() {
  return (
    <div id="top">
      <Navbar />
      <main id="main-content">
        <ErrorBoundary>
          <Hero />
        </ErrorBoundary>
        <ErrorBoundary>
          <Modules />
        </ErrorBoundary>
        <ErrorBoundary>
          <Curriculum />
        </ErrorBoundary>
        <ErrorBoundary>
          <Instructor />
        </ErrorBoundary>
        <ErrorBoundary>
          <Results />
        </ErrorBoundary>
        <ErrorBoundary>
          <Pricing />
        </ErrorBoundary>
        <ErrorBoundary>
          <FAQ />
        </ErrorBoundary>
        <ErrorBoundary>
          <Contact />
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
}
