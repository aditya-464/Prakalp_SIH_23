import Navwelcome from "./components/Welcome/Navwelcome/Navwelcome";
import Adminnav from "./components/Admin/AdminNav/Adminnav";
import Usernav from "./components/User/UserNav/Usernav";
import Heroadmin from "./components/Admin/HeroAdmin/Heroadmin";
import Switchbutton from "./components/Admin/SwitchButton/Switchbutton";

function App() {
  return (
    <>
      {/* Welcome Navbar */}
      {/* <Navwelcome /> */}
      {/* Admin Navbar */}
      <Adminnav />
      <Heroadmin/>
      <Switchbutton/>
      {/* User Navbar */}
      {/* <Usernav/> */}
    </>
  );
}

export default App;
