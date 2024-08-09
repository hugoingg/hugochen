import profile from "./media/web header.jpg";
import proj from "./media/proj.png";
import exp from "./media/catx.png";
import "./styles/home.css";
import sld1 from "./media/sliders/sliders.png";
import sld2 from "./media/sliders/sliders1.png";
import sld3 from "./media/sliders/sliders2.png";
import sld4 from "./media/sliders/sliders3.png";
import sld5 from "./media/sliders/sliders4.png";
import sld6 from "./media/sliders/sliders5.png";
import sld7 from "./media/sliders/sliders6.png";

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
      <div className="experience-highlights">
        <ul>
          <li>
            <img src={exp}></img>
          </li>
          <li>
            <h3>MY</h3>
            <h1>Experiences</h1>
            <h2>Timeline</h2>
          </li>
        </ul>
      </div>
      <div className="timeline-container">
        <div className="timeline">
          <div className="checkpoint">
            <div>
              <h2>Awardee of ASEAN Scholarship</h2>
              <h5>Jul 2023</h5>I was awarded the ASEAN Undergraduate Scholarship
              to study in Singapore University of Technology and Design (SUTD).
            </div>
          </div>
          <div className="checkpoint">
            <div>
              <h2>Teacher at Local Tuition Centre</h2>
              <h5>May 2023 - Aug 2023</h5>I taught high school students in my
              hometown of Solo, Indonesia. The tuition centre was locally known
              as "Les-lesan Ci Fani".
            </div>
          </div>
          <div className="checkpoint">
            <div>
              <h2>Member of Google Student Developer Club</h2>
              <h5>Oct 2023 - Oct 2024</h5>I was part of the website team of the
              club.
            </div>
          </div>
          <div className="checkpoint">
            <div>
              <h2>President of PADI</h2>
              <h5>Mar 2024 - Mar 2025</h5>I was president of PADI, a community
              of Indonesian students in SUTD. This organization is part of the
              community of Indonesian students in Singapore, PPIS.
            </div>
          </div>
          <div className="checkpoint">
            <div>
              <h2>Web Developer Free Lance at Socielle</h2>
              <h5>June 2024</h5>I offered to be a free lance website developer
              for a local restaurant in Solo, Indonesia.
            </div>
          </div>
          <div className="checkpoint">
            <div>
              <h2>UI/UX Intern at Nakamura</h2>
              <h5>July 2024</h5>I went on an internship as a UI/UX designer in
              Nakamura, one of Indonesia's largest healthcare company.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
