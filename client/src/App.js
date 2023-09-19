import Navwelcome from "./components/Welcome/Navwelcome/Navwelcome";
import Adminnav from "./components/Admin/AdminNav/Adminnav";
import Usernav from "./components/User/UserNav/Usernav";
import { HomeAdmin } from "./pages/HomeAdmin";
import { Box } from '@chakra-ui/react';
import Heroadmin from "./components/Admin/HeroAdmin/Heroadmin";
import Herouser from "./components/User/HeroUser/Herouser";

function App() {
  return (
    <>
      <HomeAdmin />
      {/* <br />
      <Adminnav />
      <br />
      <Usernav/> */}
      {/* <Navwelcome /> */}


      {/* <Usernav/>
      <Herouser/> */}


      {/* <Adminnav />
      <Heroadmin/> */}
    </>
  );
}

export default App;
