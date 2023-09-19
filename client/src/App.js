import Navwelcome from "./components/Welcome/Navwelcome/Navwelcome";
import Adminnav from "./components/Admin/AdminNav/Adminnav";
import Usernav from "./components/User/UserNav/Usernav";
import Heroadmin from "./components/Admin/HeroAdmin/Heroadmin";

function App() {
  return (
    <>
      {/* Welcome Navbar */}
      {/* <Navwelcome /> */}
      {/* Admin Navbar */}
      <Adminnav />
      <Heroadmin/>
      {/* User Navbar */}
      {/* <Usernav/> */}
    </>
  );
}

export default App;
