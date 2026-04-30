import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";
import AmbientOrbs from "@/components/AmbientOrbs";

export default function Home() {
  return (
    <>
      <AmbientOrbs />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Credentials />
        <Contact />
      </main>
    </>
  );
}
