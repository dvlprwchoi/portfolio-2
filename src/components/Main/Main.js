import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

function Main() {
  return (
    <div className="main">
      <div className="about">
        <h2>ABOUT WOO-SIK</h2>
      </div>
      <Skills />
      <Projects />
      <div className="resume">
        <h2>RESUME</h2>
      </div>
      <div className="contact">
        <h2>CONTACT</h2>
      </div>
    </div>
  );
}

export default Main;
