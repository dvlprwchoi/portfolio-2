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
            alt="Woo-Sik Choi Profile Picture"
            width="25%"
            height="auto"
          />
        </div>
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
        <div className="resume-information-container">
          <ul>
            <li className="resume-icon-container">
              <a
                className="icon-link-container"
                href="https://drive.google.com/file/d/1JHYi59nxc2K9ckEuUV2fMarDFswRB0MN/view?usp=sharing"
                target="_blank"
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
