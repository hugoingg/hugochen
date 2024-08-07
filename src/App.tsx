import NavBar from "./navBar";
import HomePage from "./HomePage";
import ProjectPage from "./ProjectPage";
import PageFooter from "./footer";
import PersonalWeb from "./projectPages/personalWebsite";
import TldrPlus from "./projectPages/TLDRplus";
import Mastermind from "./projectPages/mastermind";
import Flowremi from "./projectPages/flowremi";
import { Outlet } from "react-router-dom";
function App() {
  let component;
  switch (window.location.pathname) {
    case "/hugochen/":
      component = <HomePage />;
      break;
    case "/hugochen/projects":
      component = <ProjectPage />;
      break;
    case "/hugochen/projects/personalWeb":
      component = <PersonalWeb />;
      break;
    case "/hugochen/projects/TldrPlus":
      component = <TldrPlus />;
      break;
    case "/hugochen/projects/Mastermind":
      component = <Mastermind />;
      break;
    case "/hugochen/projects/Flowremi":
      component = <Flowremi />;
      break;
  }
  return (
    <>
      <NavBar />
      <div className="pagecontainer">
        <Outlet />
      </div>
      <PageFooter />
    </>
  );
}

export default App;
