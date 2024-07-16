import profile from "./media/web header.jpg";
import proj from "./media/proj.png";
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
          Singapore University of Technology of Design (SUTD). I have a strong
          passion in building systems, such as softwares and hardwares, using my
          knowledge and technologies. My projects and experiences are displayed
          in this website. Feel free to take a look!
        </p>
      </div>
      <div className="project-highlights">
        <ul className="formatter">
          <li>
            <img src={proj} alt="" />
          </li>
          <li>
            <p>
              <h3 className="technical">TECHNICAL</h3>
              <h1>Projects</h1>
              <h2>From personal to professional works.</h2>
              <div className="gap"></div>
              <a href="/hugochen/projects">
                <div className="see-projects">
                  <h3>See Projects</h3>
                  <span className="arrow"> &#129170;</span>
                </div>
              </a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default HomePage;
