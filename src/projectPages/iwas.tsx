import iwas1 from "../media/iwas1.jpg";
import iwas2 from "../media/iwas2.jpg";

function Iwas() {
  return (
    <div className="projects-Pages">
      <div className="projects-Pages-title">
        <h1>I Want a Sushi</h1>
        <i>
          <h5>FPGA</h5>
        </i>
        <p>Jan 2025 - Apr 2025</p>
      </div>
      <div className="projects-Pages-content">
        <p>
          I Want a Sushi is an arcade-style hardware game made using an FPGA, or
          Field-Programmable Gate Array. Each player has access to four lanes,
          where sushi continuously spawn in each lane. Their goal? Direct the
          sushi to their end and eat as much as possible!
        </p>
        <div className="project-Pages-content">
          <p>
            This project was awarded the Outstanding Exhibition Award by the
            Information System Technology and Design (ISTD) pillar of Singapore
            University of Technology and Design (SUTD). Furthermore, this was a
            group project that is part of the school's module: 50.002
            Computation Structure. Find out more about this project in this{" "}
            <a href="https://www.linkedin.com/posts/kalista-phey_sutd-computing-embeddedsystems-activity-7326999488009588738-Umqi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEe9mc8Bg7F4msnJ_h2lHDwPhJQMl9UiL-0">
              LinkedIn post!
            </a>
          </p>
        </div>
        <div className="project-Pages-Photos-ContainerL">
          <img src={iwas1}></img>
          <img src={iwas2}></img>
        </div>
      </div>
    </div>
  );
}

export default Iwas;
