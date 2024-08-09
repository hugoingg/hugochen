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
        <a href="/hugochen/projects/personalWeb">
          <div className="card">
            <div className="symbols">
              <img src={picturePersonalWeb} className="symbol"></img>
            </div>
            <div className="card-content">
              <h3>s.id/SOCIELLE</h3>
              <p>Restaurant Landing Page.</p>
              <div className="icons-container-projects">
                <i className="fa-brands fa-react"></i>
                <i className="fa-brands fa-html5"></i>
                <i className="fa-brands fa-css3-alt"></i>
              </div>
              <a href="/hugochen/projects/personalWeb" className="btn-card">
                Read More
              </a>
            </div>
          </div>
        </a>
        <a href="/hugochen/projects/Flowremi">
          <div className="card">
            <div className="symbols">
              <img src={picFlowremi} className="symbol"></img>
            </div>
            <div className="card-content">
              <h3>FLOWREMI</h3>
              <p>From Music to Light.</p>
              <div className="icons-container-projects">
                <div className="custom-icon">
                  <img src={cpp}></img>
                </div>
                <div className="custom-icon">
                  <img src={arduino}></img>
                </div>
              </div>
              <a href="/hugochen/projects/Flowremi" className="btn-card">
                Read More
              </a>
            </div>
          </div>
        </a>
        <a href="/hugochen/projects/Mastermind">
          <div className="card">
            <div className="symbols">
              <img src={picMastermind} className="symbol"></img>
            </div>
            <div className="card-content">
              <h3>MASTERMIND</h3>
              <p>Classic Game in Digital.</p>
              <div className="icons-container-projects">
                <i className="fa-brands fa-python"></i>
              </div>
              <a href="/hugochen/projects/Mastermind" className="btn-card">
                Read More
              </a>
            </div>
          </div>
        </a>
        <a href="/hugochen/projects/TldrPlus">
          <div className="card">
            <div className="symbols">
              <img src={picTLDR} className="symbol"></img>
            </div>
            <div className="card-content">
              <h3>TLDR+</h3>
              <p>Summarizer Telegram Bot.</p>
              <div className="icons-container-projects">
                <i className="fa-brands fa-telegram"></i>
                <i className="fa-brands fa-python"></i>
                <div className="custom-icon">
                  <img src={azure}></img>
                </div>
              </div>
              <a href="/hugochen/projects/TldrPlus" className="btn-card">
                Read More
              </a>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default ProjectPage;
