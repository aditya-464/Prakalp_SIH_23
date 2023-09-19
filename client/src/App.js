import Navwelcome from "./components/Welcome/Navwelcome/Navwelcome";
import Adminnav from "./components/Admin/AdminNav/Adminnav";
import Usernav from "./components/User/UserNav/Usernav";
import Heroadmin from "./components/Admin/HeroAdmin/Heroadmin";
import Herouser from "./components/User/HeroUser/Herouser";

function App() {
  return (
    <>
      {/* <Navwelcome /> */}


      <Usernav/>
      <Herouser/>


      {/* <Adminnav />
      <Heroadmin/> */}
    </>
  );
}

export default App;
