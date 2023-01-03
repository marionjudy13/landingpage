import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";

export default function Home() {
  return (
    <div className="bg-myGray text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-pink">
      <Head>
        <title>Landing Page Template</title>
      </Head>
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center bg-myGray">
        <About />
      </section>
      <section id="experience" className="snap-center bg-myGray">
        <WorkExperience />
      </section>
      <section id="skills" className="snap-start bg-myGray">
        <Skills />
      </section>
      <section id="projects" className="snap-start bg-myGray">
        <Projects />
      </section>
      <section id="contact" className="snap-start bg-myGray">
        <ContactMe />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="/images/marion.jpg"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}
