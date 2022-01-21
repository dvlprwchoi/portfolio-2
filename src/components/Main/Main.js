import Projects from '../Projects/Projects';

function Main() {
  return (
    <div className="Main">
      <div className="about">ABOUT WOO-SIK</div>
      <div className="skills">SKILLS</div>
      {/* <div className="projects">PROJECTS</div> */}
      <Projects />
      <div className="resume">RESUME</div>
      <div className="contact">CONTACT</div>
    </div>
  );
}

export default Main;
