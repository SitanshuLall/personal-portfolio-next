import Skills from "@/components/skills";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Experience from "@/components/experience";
import Volunteering from "@/components/volunteering";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
export default function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="min-h-screen">
        {/* Home */}
        <Hero />
        
        {/* Skills */}
        <Skills />
        {/* Projects */}
        <Projects />
        {/* Experience */}
        <Experience />
        {/* Volunteering */}
        <Volunteering />
        {/* Contact */}
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
