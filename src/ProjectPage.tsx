import picturePersonalWeb from "./media/LogoSC.png";
import picFlowremi from "./media/LogoFR.png";
import picTLDR from "./media/LogoTLDR.png";
import picMastermind from "./media/LogoMM.png";
import arduino from "./media/arduino-official.svg";
import azure from "./media/azure-2.svg";
import cpp from "./media/c.svg";
function ProjectPage() {
  return (
    <div className="experiencesPage">
      <div className="experiencePage-title">
        <h1>Projects</h1>
        <p>Some of My Crafts</p>
      </div>
      <div className="cards-container">
        <div className="card">
          <div className="symbols">
            <img src={picturePersonalWeb} className="symbol"></img>
          </div>
          <div className="card-content">
            <h3>Blog Website</h3>
            <p>
              The fourth website that I worked on and the only one I made by
              myself. It was and will always be a wonderful experience working
              on this blog.
            </p>
            <div className="icons-container-projects">
              <i className="fa-brands fa-react"></i>
              <i className="fa-brands fa-html5"></i>
              <i className="fa-brands fa-css3-alt"></i>
            </div>
            <br></br>
            <a href="/hugochen/projects/personalWeb" className="btn-card">
              Read More
            </a>
          </div>
        </div>
        <div className="card">
          <div className="symbols">
            <img src={picFlowremi} className="symbol"></img>
          </div>
          <div className="card-content">
            <h3>FLOWREMI</h3>
            <p>
              From Music to Light: an installation to establish greater
              interraction within the campus of SUTD. A project by a team of 5
              freshmen.
            </p>
            <div className="icons-container-projects">
              <div className="custom-icon">
                <img src={cpp}></img>
              </div>
              <div className="custom-icon">
                <img src={arduino}></img>
              </div>
            </div>
            <br></br>
            <a href="/hugochen/projects/Flowremi" className="btn-card">
              Read More
            </a>
          </div>
        </div>
        <div className="card">
          <div className="symbols">
            <img src={picMastermind} className="symbol"></img>
          </div>
          <div className="card-content">
            <h3>MASTERMIND</h3>
            <p>
              Me and my friends made Mastermind a digital game. Comitted to only
              use Python, this project was made by 5 term 1 students of SUTD.
            </p>
            <div className="icons-container-projects">
              <i className="fa-brands fa-python"></i>
            </div>
            <br></br>
            <a href="/hugochen/projects/Mastermind" className="btn-card">
              Read More
            </a>
          </div>
        </div>
        <div className="card">
          <div className="symbols">
            <img src={picTLDR} className="symbol"></img>
          </div>
          <div className="card-content">
            <h3>TLDR+</h3>
            <p>
              I made a Telegram bot that can return the summary, author(s), and
              publish date of an article. I utilized Natural Language Processing
              and Serverless Computing.
            </p>
            <div className="icons-container-projects">
              <i className="fa-brands fa-telegram"></i>
              <i className="fa-brands fa-python"></i>
              <div className="custom-icon">
                <img src={azure}></img>
              </div>
            </div>
            <br></br>
            <a href="/hugochen/projects/TldrPlus" className="btn-card">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
