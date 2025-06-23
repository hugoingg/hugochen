import NavBar from "./navBar";
import HomePage from "./HomePage";
import ProjectPage from "./ProjectPage";
import PageFooter from "./footer";
import PersonalWeb from "./projectPages/personalWebsite";
import TldrPlus from "./projectPages/TLDRplus";
import Mastermind from "./projectPages/mastermind";
import Flowremi from "./projectPages/flowremi";
import CompleterAI from "./projectPages/completerai";
import DiagnoseAI from "./projectPages/diagnoseai";
import Sign2Speech from "./projectPages/sign2speech";
import Centsible from "./projectPages/centsible";
import Soil from "./projectPages/soil";
import { Outlet } from "react-router-dom";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/hugochen/":
      component = <HomePage />;
      break;
    case "/hugochen/projects/TldrPlus":
      component = <TldrPlus />;
      break;
    case "/hugochen/projects/Mastermind":
      component = <Mastermind />;
      break;
    case "/hugochen/CompleterAI/":
      component = <CompleterAI />;
      break;
    case "/hugochen/projects/Sign2Speech":
      component = <Sign2Speech />;
      break;
    case "/hugochen/projects/DiagnoseAI":
      component = <DiagnoseAI />;
      break;
    case "/hugochen/projects/Soil":
      component = <Soil />;
      break;
    case "/hugochen/projects/Centsible":
      component = <Centsible />;
      break;
  }
  return (
    <>
      {/* <NavBar />*/}
      <div className="pagecontainer">
        <Outlet />
      </div>
      <PageFooter />
    </>
  );
}

export default App;
