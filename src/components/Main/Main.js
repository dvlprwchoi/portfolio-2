import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

function Main() {
  return (
    <div className="main">
      <div className="about" id="about">
        <h2>ABOUT WOO-SIK</h2>
        <p>
          I am a <span>SOFTWARE DEVELOPER</span> with a background in{' '}
          <span>STEM</span> education and cancer related research, as well as{' '}
          <span>ARMY NURSING</span>. I am currently located in{' '}
          <span>AUSTIN, TX</span>. I am a critical thinker and like to pay
          attention to details. I play the violin and love cooking, running,
          swimming, biking, and skiing. I also enjoy building and fixing stuff.
        </p>
      </div>
      <Skills />
      <Projects />
      <div className="resume" id="resume">
        <h2>RESUME</h2>
        <p>
          <a
            href="https://drive.google.com/file/d/1OUYnIQoEs8iinhzO_sTwx7YZUc3vxgJ-/view?usp=sharing"
            target="_blank"
          >
            Here
          </a>{' '}
          is a link to my resume.
        </p>
      </div>
      <Contact />
    </div>
  );
}

export default Main;
