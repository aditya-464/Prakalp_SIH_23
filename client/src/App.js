import Navwelcome from "./components/Welcome/Navwelcome/Navwelcome";
import Adminnav from "./components/Admin/AdminNav/Adminnav";
import Usernav from "./components/User/UserNav/Usernav";
import Heroadmin from "./components/Admin/HeroAdmin/Heroadmin";
import Herouser from "./components/User/HeroUser/Herouser";
import HeroWelcome from "./components/Welcome/HeroWelcome/HeroWelcome";
import About from "./components/About/About";

function App() {
  return (
    <>
      <Navwelcome />
      <HeroWelcome/>
      <About/>
      {/* <Usernav/> */}
      {/* <Herouser/>  */}


      {/* * <Adminnav /> */}
      {/* <Heroadmin/> */}
      
    </>
  );
}

export default App;
