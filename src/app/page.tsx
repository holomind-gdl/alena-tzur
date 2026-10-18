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
import {
  getSiteSettings,
  getCourse,
  getModules,
  getCurriculum,
  getInstructor,
  getResults,
  getPricing,
  getFAQ,
} from "@/lib/sanity-fetch";

export default async function Home() {
  const [
    siteSettings,
    course,
    modules,
    curriculum,
    instructor,
    results,
    pricing,
    faqs,
  ] = await Promise.all([
    getSiteSettings(),
    getCourse(),
    getModules(),
    getCurriculum(),
    getInstructor(),
    getResults(),
    getPricing(),
    getFAQ(),
  ]);

  return (
    <div id="top">
      <Navbar brand={siteSettings?.brand} navLinks={siteSettings?.navLinks ?? []} />
      <main id="main-content">
        <ErrorBoundary>
          <Hero course={course} />
        </ErrorBoundary>
        <ErrorBoundary>
          <Modules modules={modules} />
        </ErrorBoundary>
        <ErrorBoundary>
          <Curriculum modules={modules} />
        </ErrorBoundary>
        <ErrorBoundary>
          <Instructor instructor={instructor} />
        </ErrorBoundary>
        <ErrorBoundary>
          <Results results={results} />
        </ErrorBoundary>
        <ErrorBoundary>
          <Pricing pricing={pricing} />
        </ErrorBoundary>
        <ErrorBoundary>
          <FAQ faqs={faqs} />
        </ErrorBoundary>
        <ErrorBoundary>
          <Contact email={siteSettings?.email ?? undefined} phone={siteSettings?.phone ?? undefined} />
        </ErrorBoundary>
      </main>
      <Footer siteSettings={siteSettings} />
    </div>
  );
}
