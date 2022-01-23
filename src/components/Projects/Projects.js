import './Projects.css';
import weatherDashboardScreenshot from '../../img/weather-dashboard-img-20211219.png';
import covidNumbersScreenshot from '../../img/covid-19-numbers-img-20211223.png';
import tictactoeScreenshot from '../../img/tictactoe-img-20211209.png';
import tdlScreenshot from '../../img/tdl-img-20211206.png';
import coffeeholicScreenshot from '../../img/coffeeholic-img-20220122.png';
import jsCalculatorScreenshot from '../../img/js-calculator-img-20220122.png';
import gitnomsScreenshot from '../../img/gitnoms-img-20220122.png';
import miniOmokScreenshot from '../../img/mini-omok-img-20220122.png';
import githubIcon from '../../img/github-icon.png';

function Projects() {
  return (
    <div className="projects" id="projects">
      <h2>PROJECTS</h2>
      <p>
        CLICK screenshot images for live sites or GitHub logos for my codes!
      </p>
      <div className="projects-container">
        {/*  */}
        {/* weather-dashboard */}
        {/*  */}
        <div className="weather-dashboard-project single-project-container">
          <h3 className="project-title">WEATHER DASHBOARD</h3>
          <a
            href="https://woosik-weather-dashboard.netlify.app"
            target="_blank"
          >
            <img
              className="screenshot"
              src={weatherDashboardScreenshot}
              alt="Weather Dashboard Screenshot"
              width="97%"
              height="auto"
            />
          </a>
          <div className="one-git-repo">
            <a
              href="https://github.com/dvlprwchoi/weather-dashboard"
              target="_blank"
            >
              <img
                className="git-repo-icon"
                src={githubIcon}
                alt="GitHub Repository"
                width="25vw"
                height="auto"
              />
            </a>
          </div>
          <p>
            The <span>Weather Dashboard</span> is a single page web application
            built with ReactJS and 3rd party weather API. A user can get weather
            information by typing a city name or a zip code. This app has a
            carousel view that displays weather detail page, 3 days forecast,
            and weather alert messages. This app has a mobile responsive design
            depends on a device's screen size. It also features toggling
            dark/light mode and toggling celsius/fahrenheit function.
            <br />
            &nbsp;
            <br />
            Technologies used:{' '}
            <span>HTML, CSS, JavaScript, ReactJS, and 3rd party API</span>.
          </p>
        </div>
        {/*  */}
        {/* covid-19-numbers */}
        {/*  */}
        <div className="covid-19-numbers-project single-project-container">
          <h3 className="project-title">COVID-19 NUMBERS APP</h3>
          <a
            href="https://woosik-covid-19-numbers.netlify.app/"
            target="_blank"
          >
            <img
              className="screenshot"
              src={covidNumbersScreenshot}
              alt="Covid-19 Numbers App Screenshot"
              width="97%"
              height="auto"
            />
          </a>
          <div className="one-git-repo">
            <a
              href="https://github.com/dvlprwchoi/covid-19-numbers"
              target="_blank"
            >
              <img
                className="git-repo-icon"
                src={githubIcon}
                alt="GitHub Repository"
                width="25vw"
                height="auto"
              />
            </a>
          </div>
          <p>
            The <span>COVID-19 Numbers App</span> is a single page web
            application built with ReactJS and 3rd party COVID-19 API. This app
            has a mobile responsive design depends on a device's screen size. It
            shows on-demand COVID-19 related numerical data. A user also can get
            data by typing a county name.
            <br />
            &nbsp;
            <br />
            Technologies used:{' '}
            <span>HTML, CSS, JavaScript, ReactJS, and 3rd party API</span>.
          </p>
        </div>
        {/*  */}
        {/* tictactoe */}
        {/*  */}
        <div className="tictactoe-project single-project-container">
          <h3 className="project-title">TIC TAC TOE</h3>
          <a href="https://dvlprwchoi.github.io/tictactoe" target="_blank">
            <img
              className="screenshot"
              src={tictactoeScreenshot}
              alt="Tictactoe Screenshot"
              width="97%"
              height="auto"
            />
          </a>
          <div className="one-git-repo">
            <a href="https://github.com/dvlprwchoi/tictactoe" target="_blank">
              <img
                className="git-repo-icon"
                src={githubIcon}
                alt="GitHub Repository"
                width="25vw"
                height="auto"
              />
            </a>
          </div>
          <p>
            The <span>Tic Tac Toe</span> game is built with JavaScript. This
            application has a mobile responsive design depends on a device's
            screen size. It also features toggling dark/light mode and game
            reset function. The winner of the game will be displayed on the top
            with an animation.
            <br />
            &nbsp;
            <br />
            Technologies used: <span>HTML, CSS, and JavaScript</span>.
          </p>
        </div>
        {/*  */}
        {/* tdl */}
        {/*  */}
        <div className="tdl-project single-project-container">
          <h3 className="project-title">TODO LIST APP</h3>
          <a href="https://woosik-tdl.netlify.app" target="_blank">
            <img
              className="screenshot"
              src={tdlScreenshot}
              alt="Todo List App Screenshot"
              width="97%"
              height="auto"
            />
          </a>
          <div className="one-git-repo">
            <a href="https://github.com/dvlprwchoi/tdl" target="_blank">
              <img
                className="git-repo-icon"
                src={githubIcon}
                alt="GitHub Repository"
                width="25vw"
                height="auto"
              />
            </a>
          </div>
          <p>
            The <span>Todo List App</span> is a simple task management web
            application built with ReactJS. A user can add and remove to-do from
            the list. It displays total and remaining to-do number.
            <br />
            &nbsp;
            <br />
            Technologies used: <span>HTML, CSS, JavaScript, and ReactJS</span>.
          </p>
        </div>
        {/*  */}
        {/* coffeeholic */}
        {/*  */}
        <div className="coffeeholic-project single-project-container">
          <h3 className="project-title">COFFEEHOLIC</h3>
          <a href="https://woosik-coffeeholic.netlify.app/" target="_blank">
            <img
              className="screenshot"
              src={coffeeholicScreenshot}
              alt="Coffeeholic Screenshot"
              width="97%"
              height="auto"
            />
          </a>
          <div className="two-git-repos">
            <a
              href="https://github.com/dvlprwchoi/coffeeholic-frontend"
              target="_blank"
            >
              <img
                className="git-repo-icon"
                src={githubIcon}
                alt="GitHub Repository"
                width="25vw"
                height="auto"
              />
            </a>
            <a
              href="https://github.com/dvlprwchoi/coffeeholic-backend"
              target="_blank"
            >
              <img
                className="git-repo-icon"
                src={githubIcon}
                alt="GitHub Repository"
                width="25vw"
                height="auto"
              />
            </a>
          </div>
          <p>
            The <span>Coffeeholic</span> is an online memo application for your
            favorite coffee shops. This is a full-stack application with CRUD
            functionality and user authentication.
            <br />
            &nbsp;
            <br />
            Technologies used:{' '}
            <span>
              HTML, CSS, JavaScript, ReactJS, Python, Django, and PostgreSQL
            </span>
            .
          </p>
        </div>
        {/*  */}
        {/* javascript calculator */}
        {/*  */}
        <div className="js-calculator-project single-project-container">
          <h3 className="project-title">JAVASCRIPT CALCULATOR</h3>
          <a href="https://dvlprwchoi.github.io/js-calculator" target="_blank">
            <img
              className="screenshot"
              src={jsCalculatorScreenshot}
              alt="JavaScript Calculator Screenshot"
              width="97%"
              height="auto"
            />
          </a>
          <div className="one-git-repo">
            <a
              href="https://github.com/dvlprwchoi/js-calculator"
              target="_blank"
            >
              <img
                className="git-repo-icon"
                src={githubIcon}
                alt="GitHub Repository"
                width="25vw"
                height="auto"
              />
            </a>
          </div>
          <p>
            The <span>JavaScript Calculator</span> is a calculator with basic
            functionality.
            <br />
            &nbsp;
            <br />
            Technologies used: <span>HTML, CSS, and JavaScript</span>.
          </p>
        </div>
        {/*  */}
        {/* gitnoms */}
        {/*  */}
        <div className="gitnoms-project single-project-container">
          <h3 className="project-title">GITNOMS</h3>
          <a href="https://gitnoms.netlify.app/" target="_blank">
            <img
              className="screenshot"
              src={gitnomsScreenshot}
              alt="Gitnoms App Screenshot"
              width="97%"
              height="auto"
            />
          </a>
          <div className="one-git-repo">
            <a href="https://github.com/TheCodingChefs" target="_blank">
              <img
                className="git-repo-icon"
                src={githubIcon}
                alt="GitHub Repository"
                width="25vw"
                height="auto"
              />
            </a>
          </div>
          <p>
            The <span>gitNoms</span> is an online recipe application. Users can
            easily upload, edit, or delete their own receipes. This full-stack
            application project was a group project with 3 other developers.
            <br />
            &nbsp;
            <br />
            Technologies used:{' '}
            <span>HTML, CSS, JavaScript, ReactJS, Mongoose, and MongoDB</span>.
          </p>
        </div>
        {/*  */}
        {/*  mini omok */}
        {/*  */}
        <div className="mini-omok-project single-project-container">
          <h3 className="project-title">MINI OMOK (오목)</h3>
          <a href="https://dvlprwchoi.github.io/omok-game/" target="_blank">
            <img
              className="screenshot"
              src={miniOmokScreenshot}
              alt="Mini Omok Screenshot"
              width="97%"
              height="auto"
            />
          </a>
          <div className="one-git-repo">
            <a href="https://github.com/dvlprwchoi/omok-game" target="_blank">
              <img
                className="git-repo-icon"
                src={githubIcon}
                alt="GitHub Repository"
                width="25vw"
                height="auto"
              />
            </a>
          </div>
          <p>
            The <span>MINI OMOK</span> is a simplified version of a Korean game
            called Omok. To win the game, connect 5 stones with same color in
            the vertical, horizontal or diagonal direction.
            <br />
            &nbsp;
            <br />
            Technologies used: <span>HTML, CSS, and JavaScript</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
