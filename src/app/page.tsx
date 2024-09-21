import Navbar from "./component/navbar";
import Showcase from "./component/showcase";
import ExpertHire from "./component/expert-hire";
import About from "./component/about";
import Skills from "./component/skills";
import Contact from "./component/contact";
import Project from "./component/project";
import Testiominals from "./component/testiominals";
import "react-multi-carousel/lib/styles.css";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <Showcase />
      <ExpertHire />
      <About />
      <Skills />
      <Contact />
      <Project />
      <Testiominals />
    </div>
  );
}
