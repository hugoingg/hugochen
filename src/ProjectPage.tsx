import picturePersonalWeb from "./media/LogoSC.png";
import picFlowremi from "./media/LogoFR.png";

import picMastermind from "./media/LogoMM.png";
import arduino from "./media/arduino-official.svg";
import azure from "./media/azure-2.svg";
import cpp from "./media/c.svg";

import LogoAI from "./media/LogoAI.png";
import LogoSL from "./media/LogoSL.png";
import header from "./media/projH.gif";
import "./styles/projects.css";
function ProjectPage() {
  return (
    <div className="experiencesPage">
      <div className="projph">
        <img src={header}></img>
      </div>
      <div className="experiencePage-title">
        <h3>MY</h3>
        <h1>Projects</h1>
        <h2>Personal to Professional</h2>
      </div>
    </div>
  );
}

export default ProjectPage;
