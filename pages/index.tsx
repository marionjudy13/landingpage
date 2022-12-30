import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";

export default function Home() {
  return (
    <div className="bg-myGray text-white h-screen snap-y snap-mandatory overflow-x-scroll z-0">
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
      <section id="skills" className="snap-center bg-myGray">
        <Skills />
      </section>

      {/* Project */}

      {/* Contact Me */}
    </div>
  );
}
