import profile from "./media/web header.jpg";
import picMastermind from "./media/mastermind.jpg";
import picFlowremi from "./media/flowremiCoverPhoto.jpg";
import picTLDR from "./media/TLDR+.png";
import arduino from "./media/arduino-official.svg";
import azure from "./media/azure-2.svg";
import cpp from "./media/c.svg";
import "./styles/home.css";

function HomePage() {
  return (
    <div className="wrapper">
      <div className="homeHeader-container" id="top">
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
          Singapore University of Technology of Design (SUTD). One of my biggest
          passion is building systems, such as softwares and hardwares, using my
          knowledge and technologies. I believe that a great use of knowledge
          shapes useful technologies, that in turn ease our lives. I have
          displayed my projects and experiences in this blog, feel free to take
          a look!
        </p>
      </div>
      <div className="project-highlights">
        <ul className="formatter">
          <li></li>
          <li>
            <p>
              <h3 className="technical">TECHNICAL</h3>
              <h1>Projects</h1>
              <h2>From personal to professional works.</h2>
              <div className="gap"></div>
              <a>
                <h3 className="see-projects">See Projects</h3>
              </a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default HomePage;
