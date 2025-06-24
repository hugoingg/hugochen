import "./styles/home.css";
import sld2 from "./media/sliders/sliders1.png";
import picFlowremi from "./media/flower.png";
import picTLDR from "./media/bird.png";
import arduino from "./media/arduino-official.svg";
import azure from "./media/azure-2.svg";
import cpp from "./media/c.svg";
import LogoAI from "./media/apple.png";
import LogoSL from "./media/hands.png";
import LogoSoil from "./media/cactus.png";

import profile from "./media/k.png";
import about from "./media/web header.jpg";

import cube from "./media/cube.png";
import speaker from "./media/speaker.png";
import fish from "./media/fish.png";

import jellybean from "./media/jellybean.jpg";
import gened from "./media/gened_pic.png";
import onemilab from "./media/1milabs.jpg";

import dell from "./media/dell.jpg";
import singtel from "./media/singtel.png";
import lb from "./media/lb.png";

import sutd from "./media/sutd.png";

function HomePage() {
  return (
    <div className="wrapper">
      <div className="homeHeader-container">
        <div className="homeHeader">
          <div className="header-text">
            <div className="left-header">
              <div className="profile-container">
                <img src={profile} className="profile-image" alt=""></img>
              </div>
            </div>
            <div className="right-header">
              <h1>Hugo Chen</h1>
              <h2>Software & AI Engineer</h2>
              <p>
                <a href="#education">Education</a> |{" "}
                <a href="#exp">Experience</a> | <a href="#projects">Projects</a>{" "}
                | <a href="#about">About</a>
              </p>
              <div className="mycontacts-icons">
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
        </div>
      </div>
      <div className="education">
        <div className="edu-left">
          <img src={cube}></img>
        </div>
        <div className="edu-right">
          <h2 id="education">Education</h2>
          <div className="edu-segments">
            <div className="edu-segment">
              <h4>Undergraduate - ASEAN Scholar</h4>
              <h3>Singapore University of Technology and Design (SUTD)</h3>
              <p>Computer Science and Design | 2023-2027</p>
            </div>
            <div className="edu-segment">
              <h4>High School</h4>
              <h3>Regina Pacis Surakarta High School</h3>
              <p>Science and Mathematics | 2021-2023</p>
            </div>
          </div>
        </div>
      </div>
      <div className="experience">
        <div className="exp-h">
          <div className="exp-h-left">
            <h2 id="exp">Work Experience</h2>
            {/* <h3>Internship | Mentorship | Partnership</h3> */}
          </div>
          {/* <div className="exp-h-right">
            <img src={gears}></img>
          </div> */}
        </div>
        <div className="exp-images">
          <div className="internships">
            <div className="internship-item">
              <img src={sld2}></img>
              <h4>June - Aug 2024</h4>
              <h2>Website Development Intern</h2>
              <h3>Nakamura, Indonesia</h3>
            </div>
            <div className="internship-item">
              <img src={gened}></img>
              <h4>Mar 2025 - Present</h4>
              <h2>Founder, Software/AI Engineer</h2>
              <h3>GenEd, Singapore</h3>
            </div>
            <div className="internship-item">
              <img src={jellybean}></img>
              <h4>Mar - May 2025</h4>
              <h2>R&D in AI Intern</h2>
              <h3>JellyBean AI, Singapore</h3>
            </div>
          </div>
          {/* <div className="vertical-line"></div>
          <div className="internships">
            <img src={singtel}></img>
            <img src={dell}></img>
            <img src={lb}></img>
          </div>
          <div className="vertical-line"></div>
          <div className="internships">
            <img src={onemilab}></img>
            <img src={sutd}></img>
          </div> */}
        </div>
        <div className="exp-footnote">
          <h4>
            *Logos shown represent companies I’ve worked with. All trademarks
            are property of their respective owners.
          </h4>
        </div>
      </div>
      <div className="projects-header">
        <h2 id="projects">Projects</h2>
      </div>
      <div className="cards-container">
        {/* <a href="/hugochen/CompleterAI">
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
        </a> */}
        <a href="/hugochen/projects/Centsible">
          <div className="card">
            <div className="symbols">
              <img src={speaker} className="symbol"></img>
            </div>
            <div className="card-content">
              <h3>Centsible</h3>
              <p>Group Expense Tracking App</p>
              <div className="icons-container-projects">
                <i className="fa-brands fa-android"></i>
                <i className="fa-brands fa-java"></i>
                <i className="fa-brands fa-figma"></i>
                <i className="fa-brands fa-docker"></i>
              </div>
              <a href="/hugochen/projects/Centsible" className="btn-card">
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
              <p>Predictive Diagnosis Model</p>
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
              <p>AI to Predict Rice Farming Emission</p>
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
              <p>Sign Language Interpreter</p>
              <div className="icons-container-projects">
                <i className="fa-brands fa-python"></i>
              </div>
              <a href="/hugochen/projects/Sign2Speech" className="btn-card">
                Read More
              </a>
            </div>
          </div>
        </a>
        <a href="/hugochen/projects/iwas">
          <div className="card">
            <div className="symbols">
              <img src={fish} className="symbol"></img>
            </div>
            <div className="card-content">
              <h3>I Want A Sushi</h3>
              <p>Multiplayer Game Built Using FPGA</p>
              <div className="icons-container-projects">
                <i className="fa fa-battery-full"></i>
              </div>
              <a href="/hugochen/projects/iwas" className="btn-card">
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
              <p>From Music to Light</p>
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
        {/* <a href="/hugochen/projects/Mastermind">
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
        </a> */}
        <a href="/hugochen/projects/TldrPlus">
          <div className="card">
            <div className="symbols">
              <img src={picTLDR} className="symbol"></img>
            </div>
            <div className="card-content">
              <h3>TLDR+</h3>
              <p>Summarizer Telegram Bot</p>
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
      <div className="about">
        <div className="about-content">
          <div className="mobile-profile">
            <img src={about} className="about-image" alt=""></img>
          </div>
          <div className="about-content-left">
            <h2 id="about">About Me</h2>
            <p>
              Hi! I am Hugo, a Software/AI Engineer. From countless projects at
              work and school, I am experienced in full stack development,
              familiar in group works, and specialized in building and
              integrating Artificial Intelligence (AI). My lifelong goal is to
              solve real-world problems through technology.
            </p>
            <div className="mycontacts-icons2">
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
          <div className="about-content-right">
            <img src={about} className="about-image" alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
