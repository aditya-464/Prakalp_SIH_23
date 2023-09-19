import Navwelcome from "./components/Welcome/Navwelcome/Navwelcome";
import Adminnav from "./components/Admin/AdminNav/Adminnav";
import Usernav from "./components/User/UserNav/Usernav";
import Heroadmin from "./components/Admin/HeroAdmin/Heroadmin";
import Herouser from "./components/User/HeroUser/Herouser";
import Footer from "./components/Footer/Footer";
import HeroWelcome from "./components/Welcome/HeroWelcome/HeroWelcome";

function App() {
  return (
    <>
      <Navwelcome />
      <HeroWelcome/>
{/* 
      <Usernav/>
      <Herouser/> */}


      {/* * <Adminnav /> */}
      {/*<Heroadmin/> */}
      <Footer/>
    </>
  );
}

export default App;
