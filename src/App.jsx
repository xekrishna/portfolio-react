import { useEffect, useRef, useState } from "react";
import Loading from "./components/Loading";
import Nav from "./components/Nav";
import { Hero, Projects, Skills, Resume, Contact } from './sections';
import Footer from "./components/Footer";
import './index.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const sectionsRef = useRef([]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <main className="relative lg:w-full min-w-[100vw] w-full bg-black mt-[-2px]">
        <section className="lg:w-full w-[inherit] fixed bg-[#0e0a1173] z-50 backdrop-blur-md flex items-center justify-center">
          <Nav />
        </section>
        <section
          id="hero"
          className="w-full lg:h-[120vh] border-t-2 pt-[100px] fade-in"
          ref={el => sectionsRef.current[0] = el}
        >
          <Hero />
        </section>
        <section
          id="projects"
          className="w-full lg:h-[150vh] h-[80vh] pt-10 fade-in"
          ref={el => sectionsRef.current[1] = el}
        >
          <Projects />
        </section>
        <section
          id="skills"
          className="w-full h-[180vh] pt-15 fade-in"
          ref={el => sectionsRef.current[2] = el}
        >
          <Skills />
        </section>
        {/*<section id="resume" className="w-full h-[150vh] fade-in" ref={el => sectionsRef.current[3] = el}>
          <Resume />
        </section>*/}
        {/*<section id="contact" className="w-full h-[150vh] fade-in" ref={el => sectionsRef.current[4] = el}>
          <Contact />
        </section>*/}
        <section className="w-full h-20">
          <Footer />
        </section>
      </main>
    </>
  );
}

export default App;