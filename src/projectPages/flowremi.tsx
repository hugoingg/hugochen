import photo1 from "../media/flwrm-pics/flwrm1.jpg";
import video1 from "../media/flwrm-pics/flwrm2.mp4";
import video2 from "../media/flwrm-pics/flwrm3.mp4";
import video3 from "../media/flwrm-pics/flwrm4.mp4";

function Flowremi() {
  return (
    <div className="projects-Pages">
      <div className="projects-Pages-title">
        <h1>FLOWREMI</h1>
        <i>
          <h5>Arduino, C++</h5>
        </i>
        <p>January - April 2024</p>
      </div>
      <div className="projects-Pages-content">
        <p>
          This project that is named from a word play of flower and do-re-mi was
          part of SUTD's Design Thinking and Innovation subject. It was a
          flower-shaped light installation, that will bloom and light up when
          music is played near it. The light will then change dynamically
          according to the music pattern that it hears. Our goal with making
          this product is to establish greater social intertaction in SUTD's
          Campus Centre by using light and music.
        </p>
        <div className="projects-Pages-content">
          <p>
            Our workflow started out by doing a site analysis on where our
            product will be deployed, which is the SUTD Campus Centre. We
            analyzed the movement of crowd during different times of the day,
            the light and noise variations of the site, as well as physical
            dimensions of items on the site. Afterwards, we utilize the data
            that we collected to design our product. We then proceed to make the
            product.
          </p>
          <p>
            My delegation of task for Flowremi was on the electronics. We used
            Arduino Uno for our electronics and programming backbone. The
            circuit that we set up was rather simple with a mic to receive sound
            input, an RGB ring light to display the light, a servo motor to do
            the blooming mechanism, and a power supply terminal, all connected
            to a Arduino board via breadboard.
          </p>
        </div>
        <div className="project-Pages-Photos-Container">
          <video src={video1} controls></video>
          <video src={video2} controls></video>
          <video src={video3} controls></video>
        </div>
      </div>
    </div>
  );
}

export default Flowremi;
