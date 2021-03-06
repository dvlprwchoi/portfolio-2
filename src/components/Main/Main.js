import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import profilePicture from '../../img/profile-picture.jpg';
import resumeIcon from '../../img/resume-icon.png';

function Main() {
  return (
    <div className="main">
      <div className="about" id="about">
        <h2>ABOUT WOO-SIK</h2>
        <div className="profile-picture-div">
          <img
            className="profile-picture picture"
            src={profilePicture}
            alt="Woo-Sik Choi Face"
            width="25%"
            height="auto"
          />
        </div>
        <p>
          I built my first website using HTML when I was 10 years old. Coding
          was my first hobby, I may have been Korea’s youngest web editor. These
          abilities that required great attention to detail were instrumental in
          the development of my analytical and problem solving skills. It was
          key in my career path as I pursued roles in food science to reduce
          human disease, and through practical nursing in the Army.
        </p>
        <p>
          I can fix your car, build a Lego International Space Station, update
          you on breast cancer and diet research, all with the same level of
          patience, creativity, and attention to detail that I now bring to
          software development.
        </p>
        <p>
          Merging my life-long interest in coding with updated skill and
          experience, I expanded my software development abilities and am
          pursuing a new career as a software developer. As a recent graduate
          from a Software Engineering coding bootcamp, I am currently working on
          personal projects to challenge and expand my expertise. I am building
          websites for my entrepreneurial friends, working on a restaurant app
          to make dinner choice easier, and refining my skills to be ready for
          my dream role.
        </p>
        <p>
          When I’m not coding, I play the violin, cook, run, swim, and bike.
        </p>
      </div>
      <Skills />
      <Projects />
      <div className="resume" id="resume">
        <h2>RESUME</h2>
        <div className="resume-information-container">
          <ul>
            <li className="resume-icon-container">
              <a
                className="icon-link-container"
                href="https://drive.google.com/file/d/1ZnQjOo3AIKAiChLfJc0APHGKbZMwteEa/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="resume-icon icon"
                  src={resumeIcon}
                  alt="Resume Icon"
                  width="20%"
                  height="auto"
                />
                Resume.pdf
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default Main;
