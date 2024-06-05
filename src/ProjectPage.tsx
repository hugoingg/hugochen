import picturePersonalWeb from "./media/personalblog.jpg";
import picFlowremi from "./media/flowremiCoverPhoto.jpg";
import picTLDR from "./media/TLDR+.png";
import picMastermind from "./media/mastermind.jpg";

function ProjectPage() {
  return (
    <div className="experiencesPage">
      <div className="experiencePage-title">
        <h1>Projects</h1>
        <p>Some of My Crafts</p>
      </div>
      <div className="cards-container">
        <div className="card">
          <img src={picturePersonalWeb}></img>
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
            <br></br>
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
          <img src={picTLDR}></img>
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
              <i className="fa-brands fa-microsoft"></i>
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
