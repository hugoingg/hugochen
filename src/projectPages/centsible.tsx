import c1 from "../media/c1.png";
import c2 from "../media/c2.jpg";
import c3 from "../media/c3.jpg";
import c4 from "../media/c4.png";

function Centsible() {
  return (
    <div className="projects-Pages">
      <div className="projects-Pages-title">
        <h1>Centsible</h1>
        <i>
          <h5>Android Studio, Java, Figma</h5>
        </i>
        <p>Jan 2025 - Apr 2025</p>
      </div>
      <div className="projects-Pages-content">
        <p>
          Ever have that fear that your child spends their allowance unwisely?
          Or that your beloved elderlies may get scammed online? Fret not, as we
          introduce our award-winning app: Centsible. Centsible is a group
          expense tracking application that lets users add one another as their
          connections. Then, they will be able to monitor their spendings, and
          will automatically get alerted once they log an unusual amount of
          expense. That way, you can take immediate actions once your beloved
          ones has a risk of getting scammed.
        </p>
        <div className="project-Pages-content">
          <p>
            Centsible was awarded the Outstanding Exhibition Award by the
            Information System Technology and Design (ISTD) pillar of Singapore
            University of Technology and Design (SUTD). Furthermore, this was a
            group project that is part of the school's module: 50.001
            Information Systems Programming.
          </p>
        </div>
        <div className="projects-Pages-content">
          <p>
            In the code design of our project, we implement various tech stacks
            and design patterns to ease code maintenance and readability. This
            includes the Open Close Principle, Singleton, Observer, Adapter
            Design Patterns, and many more alike written purely in Java using
            the Android Studio library. As for data storage, we utilize MongoDB
            as our primary database, and Cloudinary for storing user's profile
            images. The backend cloud server itself is containerized using
            Docker and hosted on Render. Meanwhile, the frontend prototyping was
            done on Figma. Inside the cloud, resides the logic to detect unusual
            spending amount - which is done by statistical detection of an
            outlier data, sampled from the user's spending data. If it
            insufficient, the detection will refer to a hardcoded numerical
            value. Find out more about this project in this{" "}
            <a href="https://www.linkedin.com/posts/kalista-phey_sutd-computing-embeddedsystems-activity-7326999488009588738-Umqi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEe9mc8Bg7F4msnJ_h2lHDwPhJQMl9UiL-0">
              LinkedIn post!
            </a>
          </p>
        </div>
        <div className="project-Pages-Photos-ContainerL">
          <img src={c2}></img>
          <img src={c3}></img>
        </div>
        <div className="project-Pages-Photos-ContainerL">
          <img src={c1}></img>
          <img src={c4}></img>
        </div>
      </div>
    </div>
  );
}

export default Centsible;
