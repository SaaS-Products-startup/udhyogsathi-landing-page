// pages/index.js
import {
  Navbar,
  HomeSection,
  AppFeatures,
  AdminFeatures,
  Testimonials,
  Pricing,
  FAQs,
  Footer,
} from "@/components";
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Udhyog Sathi</title>
        <meta name="description" content="Your company description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section id="home">
        <HomeSection />
      </section>
      <section id="features">
        <AppFeatures />
        <AdminFeatures />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="faqs">
        <FAQs />
      </section>
      <Footer />
    </div>
  );
}
