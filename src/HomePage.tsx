import profile from "./media/web header.jpg";
import proj from "./media/proj.png";
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
            <div className="slide">
              <img src={sld1}></img>
            </div>
            <div className="slide">
              <img src={sld2}></img>
            </div>
            <div className="slide">
              <img src={sld3}></img>
            </div>
            <div className="slide">
              <img src={sld4}></img>
            </div>
            <div className="slide">
              <img src={sld5}></img>
            </div>
            <div className="slide">
              <img src={sld6}></img>
            </div>
            <div className="slide">
              <img src={sld7}></img>
            </div>
            <div className="slide">
              <img src={sld1}></img>
            </div>
            <div className="slide">
              <img src={sld2}></img>
            </div>
            <div className="slide">
              <img src={sld3}></img>
            </div>
            <div className="slide">
              <img src={sld4}></img>
            </div>
            <div className="slide">
              <img src={sld5}></img>
            </div>
            <div className="slide">
              <img src={sld6}></img>
            </div>
            <div className="slide">
              <img src={sld7}></img>
            </div>
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
      <div className="timeline">
        <div className="checkpoint">
          <div>
            <h2>Awardee of ASEAN Undergraduate Scholarship</h2>
            <p>
              <h5>Jul 2023</h5>I was awarded the ASEAN Undergraduate Scholarship
              to study in the Singapore University of Technology and Design
              (SUTD).
            </p>
          </div>
        </div>
        <div className="checkpoint">
          <div>
            <h2>Teacher at Local Tuition Centre</h2>
            <p>
              <h5>May 2023 - Aug 2023</h5>I was one of the teachers in a tuition
              centre in my hometown of Solo, Indonesia. The place was locally
              known as "Les-lesan Ci Fani".
            </p>
          </div>
        </div>
        <div className="checkpoint">
          <div>
            <h2>Member of Google Student Developer Club</h2>
            <p>
              <h5>Oct 2023 - Oct 2024</h5>There was a Google Student Developer
              Club in SUTD known as Digital Design and Development (3DC). I was
              part of the website building team of the club.
            </p>
          </div>
        </div>
        <div className="checkpoint">
          <div>
            <h2>President of PADI</h2>
            <p>
              <h5>Mar 2024 - Mar 2025</h5>In SUTD. there is a club known as
              PADI, which is the community of Indonesian students in the school.
              This organization is part of a greater community of Indonesian
              students in Singapore, known as PPIS.
            </p>
          </div>
        </div>
        <div className="checkpoint">
          <div>
            <h2>Internship at Nakamura</h2>
            <p>
              <h5>July 2024</h5>I went on an internship in Nakamura, one of
              Indonesia's largest healthcare company.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
