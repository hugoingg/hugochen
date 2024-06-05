import profile from "./media/web header.jpg";
import picMastermind from "./media/mastermind.jpg";
import picFlowremi from "./media/flowremiCoverPhoto.jpg";
import picTLDR from "./media/TLDR+.png";
function HomePage() {
  return (
    <div>
      <div className="homeHeader-container" id="top">
        <div className="homeHeader">
          <div className="header-text">
            <div className="profile-container">
              <img src={profile} className="profile-image" alt=""></img>
            </div>
            <h1>HUGO CHEN</h1>
            <h2>Future Computer Scientist</h2>
            <p className="button-container">
              <a href="#contacs" className="header-buttons">
                <button id="btn-header">Contact</button>
              </a>
              <a href="#knowmore" className="header-buttons" id="knowmore">
                <button id="btn-header-2">Know More</button>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="block-quote">
        <blockquote>Great Dreams Yield Greater Will.</blockquote>
      </div>
      <div className="desc-container">
        <p>
          Hello and welcome to my blog! I am Hugo, currently a Computer Science
          undergraduate studying in Singapore University of Technology of Design
          (SUTD). One of my biggest passion is building systems, such as
          softwares and hardwares, using my knowledge and technologies. There is
          a special kind of satisfaction in bringing the theories I learn to
          reality. I believe that a great use of knowledge shapes useful
          technologies, that in turn ease our lives. I have displayed my
          projects and experiences in this blog, feel free to take a look!
        </p>
      </div>
      <div className="project-highlights">
        <h1>Projects Highlights</h1>
        <div className="breaker-line">
          <hr></hr>
        </div>
        <div className="cards-container">
          <div className="card">
            <img src={picTLDR}></img>
            <div className="card-content">
              <h3>TLDR+</h3>
              <p>
                I made a Telegram bot that can return the summary, author(s),
                and publish date of an article. I utilized Natural Language
                Processing and Serverless Computing.
              </p>
              <div className="icons-container-projects">
                <i className="fa-brands fa-telegram"></i>
                <i className="fa-brands fa-python"></i>
                <i className="fa-brands fa-microsoft"></i>
              </div>
              <a href="/hugochen/projects/TldrPlus" className="btn-card">
                Read More
              </a>
            </div>
          </div>
          <div className="card">
            <img src={picFlowremi}></img>
            <div className="card-content">
              <h3>FLOWREMI</h3>
              <p>
                From Music to Light: an installation to establish greater
                interraction within the campus of SUTD. A project by a team of 5
                freshmen.
              </p>
              <div className="icons-container-projects">
                <i className="fa-brands fa-c"></i>
                <i className="fa-brands fa-arduino-uno"></i>
              </div>
              <a href="/hugochen/projects/Flowremi" className="btn-card">
                Read More
              </a>
            </div>
          </div>
          <div className="card">
            <img src={picMastermind}></img>
            <div className="card-content">
              <h3>MASTERMIND</h3>
              <p>
                Me and my friends made Mastermind a digital game. Comitted to
                only use Python, this project was made by 5 term 1 students of
                SUTD.
              </p>
              <div className="icons-container-projects">
                <i className="fa-brands fa-python"></i>
              </div>
              <a href="/hugochen/projects/Mastermind" className="btn-card">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="ph-button-container">
          <a href="/hugochen/projects">
            <button id="ph-button">See All Projects</button>
          </a>
        </div>
      </div>
      <div className="project-highlights">
        <h1>Experiences Highlights</h1>
        <div className="breaker-line">
          <hr></hr>
        </div>
        <p className="exph-container">
          Awardee of ASEAN Undergraduate Scholarship to SUTD | Community
          Leader/President | Teacher | Events Planner | Website Development Team
        </p>
        <div className="ph-button-container" id="contacs">
          <a href="/hugochen/background">
            <button id="ph-button">Read More</button>
          </a>
        </div>
      </div>
      <div className="project-highlights">
        <h1>My Contacts</h1>
        <div className="breaker-line">
          <hr></hr>
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
  );
}
export default HomePage;
