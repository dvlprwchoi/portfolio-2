import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

function Main() {
  return (
    <div className="main">
      <div className="about" id="about">
        <h2>ABOUT WOO-SIK</h2>
        <p>This is my story</p>
      </div>
      <Skills />
      <Projects />
      <div className="resume" id="resume">
        <h2>RESUME</h2>
        <p>Here is a link to my resume</p>
      </div>
      <Contact />
    </div>
  );
}

export default Main;
