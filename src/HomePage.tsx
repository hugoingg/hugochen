import profile from "./media/web header.jpg";
import "./styles/home.css";
import sld1 from "./media/sliders/sliders.png";
import sld2 from "./media/sliders/sliders1.png";
import sld3 from "./media/sliders/sliders2.png";
import sld4 from "./media/sliders/sliders3.png";
import sld5 from "./media/sliders/sliders4.png";
import sld6 from "./media/sliders/sliders5.png";
import sld7 from "./media/sliders/sliders6.png";
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
import openai from "./media/OpenAI.png";
import LogoSoil from "./media/LogoSoil.png";
import LogoCompai from "./media/LogoCompai.png";

function HomePage() {
  return (
    <div className="wrapper">
      <div className="homeHeader-container">
        <div className="homeHeader">
          <div className="header-text">
            <div className="profile-container">
              <img src={profile} className="profile-image" alt=""></img>
            </div>
            <h1>HUGO CHEN</h1>
            <h2>Computer Science</h2>
          </div>
          <div className="mycontacts-icons">
            <a href="https://www.instagram.com/hugochen._?igsh=MTMxaG1hanpxNnVmbA== ">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://github.com/hugoingg">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/hugo-chen-4bb104297/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://mailto:l.hugochen@gmail.com">
              <i className="fa-brands fa-google"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="block-quote">
        <blockquote>Great Dreams Yield Greater Will.</blockquote>
      </div>
      <div className="desc-container">
        <p>
          Welcome to my blog! I am Hugo, a Computer Science undergraduate in
          Singapore University of Technology of Design (SUTD). I have a strong
          passion in building systems, such as softwares and hardwares, using my
          knowledge and technologies. My projects are displayed in this website.
          Feel free to take a look!
        </p>
      </div>
      <div className="slider-body">
        <div className="slider">
          <div className="slide-track">
            <a>
              <div className="slide">
                <img src={sld1}></img>
              </div>
            </a>
            <a>
              <div className="slide">
                <img src={sld2}></img>
              </div>
            </a>
            <a>
              <div className="slide">
                <img src={sld3}></img>
              </div>
            </a>
            <a>
              <div className="slide">
                <img src={sld4}></img>
              </div>
            </a>
            <a>
              <div className="slide">
                <img src={sld5}></img>
              </div>
            </a>
            <a>
              <div className="slide">
                <img src={sld6}></img>
              </div>
            </a>
            <a>
              <div className="slide">
                <img src={sld7}></img>
              </div>
            </a>
            <a>
              <div className="slide">
                <img src={sld1}></img>
              </div>
            </a>
            <a>
              <div className="slide">
                <img src={sld2}></img>
              </div>
            </a>
            <a>
              <div className="slide">
                <img src={sld3}></img>
              </div>
            </a>
            <a>
              <div className="slide">
                <img src={sld4}></img>
              </div>
            </a>
            <a>
              <div className="slide">
                <img src={sld5}></img>
              </div>
            </a>
            <a>
              <div className="slide">
                <img src={sld6}></img>
              </div>
            </a>
            <a>
              <div className="slide">
                <img src={sld7}></img>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="projects-header">
        <h2>Projects</h2>
      </div>
      <div className="cards-container">
        <a href="/hugochen/CompleterAI">
          <div className="card">
            <div className="symbols">
              <img src={LogoCompai} className="symbol"></img>
            </div>
            <div className="card-content">
              <h3>Completer AI</h3>
              <p>Autocompleter Browser Extension</p>
              <div className="icons-container-projects">
                <div className="custom-icon">
                  <img src={openai}></img>
                  <i className="fa-brands "></i>
                </div>
              </div>
              <a href="/hugochen/CompleterAI" className="btn-card">
                Read More
              </a>
            </div>
          </div>
        </a>
        <a href="/hugochen/projects/Nakamura">
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
              <a href="/hugochen/projects/Nakamura" className="btn-card">
                Read More
              </a>
            </div>
          </div>
        </a>
        <a href="/hugochen/projects/DiagnoseAI">
          <div className="card">
            <div className="symbols">
              <img src={LogoAI} className="symbol"></img>
            </div>
            <div className="card-content">
              <h3>Diagnose AI</h3>
              <p>Predictive Diagnosis Model.</p>
              <div className="icons-container-projects">
                <i className="fa-brands fa-python"></i>
              </div>
              <a href="/hugochen/projects/DiagnoseAI" className="btn-card">
                Read More
              </a>
            </div>
          </div>
        </a>
        <a href="/hugochen/projects/Soil">
          <div className="card">
            <div className="symbols">
              <img src={LogoSoil} className="symbol"></img>
            </div>
            <div className="card-content">
              <h3>Soil :)</h3>
              <p>AI to Predict Rice Farming Emission.</p>
              <div className="icons-container-projects">
                <i className="fa-brands fa-python"></i>
              </div>
              <a href="/hugochen/projects/Soil" className="btn-card">
                Read More
              </a>
            </div>
          </div>
        </a>
        <a href="/hugochen/projects/Sign2Speech">
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
              <a href="/hugochen/projects/Sign2Speech" className="btn-card">
                Read More
              </a>
            </div>
          </div>
        </a>
        <a href="/hugochen/projects/Socielle">
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
              <a href="/hugochen/projects/Socielle" className="btn-card">
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
export default HomePage;
