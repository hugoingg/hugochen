import picturePersonalWeb from "./media/LogoSC.png";
import picFlowremi from "./media/LogoFR.png";
import picTLDR from "./media/LogoTLDR.png";
import picMastermind from "./media/LogoMM.png";
import arduino from "./media/arduino-official.svg";
import azure from "./media/azure-2.svg";
import cpp from "./media/c.svg";
import LogoUIUX from "./media/LogoUIUX.png";
import LogoAI from "./media/LogoAI.png";
import LogoSL from "./media/LogoSL.png";
import header from "./media/projH.gif";
import "./styles/projects.css";
function ProjectPage() {
  return (
    <div className="experiencesPage">
      <div className="projph">
        <img src={header}></img>
      </div>
      <div className="experiencePage-title">
        <h3>MY</h3>
        <h1>Projects</h1>
        <h2>Personal to Professional</h2>
      </div>
      <div className="cards-container">
        <a href="/hugochen/projects/personalWeb">
          <div className="card">
            <div className="symbols">
              <img src={LogoUIUX} className="symbol"></img>
            </div>
            <div className="card-content">
              <h3>Nakamura UI/UX</h3>
              <p>UI/UX for a Business Landing Page.</p>
              <div className="icons-container-projects">
                <i className="fa-brands fa-figma"></i>
              </div>
              <a href="/hugochen/projects/personalWeb" className="btn-card">
                Read More
              </a>
            </div>
          </div>
        </a>
        <a href="/hugochen/projects/personalWeb">
          <div className="card">
            <div className="symbols">
              <img src={LogoAI} className="symbol"></img>
            </div>
            <div className="card-content">
              <h3>Diagnosis AI</h3>
              <p>Predictive Diagnosis Model.</p>
              <div className="icons-container-projects">
                <i className="fa-brands fa-python"></i>
              </div>
              <a href="/hugochen/projects/personalWeb" className="btn-card">
                Read More
              </a>
            </div>
          </div>
        </a>
        <a href="/hugochen/projects/personalWeb">
          <div className="card">
            <div className="symbols">
              <img src={LogoSL} className="symbol"></img>
            </div>
            <div className="card-content">
              <h3>Sign to Text</h3>
              <p>Sign Language Interpreter.</p>
              <div className="icons-container-projects">
                <i className="fa-brands fa-python"></i>
              </div>
              <a href="/hugochen/projects/personalWeb" className="btn-card">
                Read More
              </a>
            </div>
          </div>
        </a>
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
