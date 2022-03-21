import './Skills.css';

function Skills() {
  return (
    <div className="skills" id="skills">
      <h2>SKILLS</h2>
      <div className="skills-container">
        <div className="frontend-skills-container single-skills-container">
          <h3 className="container-title">FRONTEND</h3>
          <ul className="single-skills-container-ul">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>Bootstrap</li>
            <li>Material UI</li>
          </ul>
        </div>
        <div className="backend-skills-container single-skills-container">
          <h3 className="container-title">BACKEND</h3>
          <ul className="single-skills-container-ul">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Python</li>
            <li>Django</li>
            <li>PostgreSQL</li>
            <li>Google Firebase</li>
          </ul>
        </div>
        <div className="other-skills-container single-skills-container">
          <h3 className="container-title">OTHER</h3>
          <ul className="single-skills-container-ul">
            <li>Git/GitHub</li>
            <li>Netlify</li>
            <li>Heroku</li>
            <li>Slack</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
