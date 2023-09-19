import Navwelcome from "./components/Welcome/Navwelcome/Navwelcome";
import Adminnav from "./components/Admin/AdminNav/Adminnav";
import Usernav from "./components/User/UserNav/Usernav";
import Heroadmin from "./components/Admin/HeroAdmin/Heroadmin";

function App() {
  return (
    <>
      {/* <Navwelcome /> */}
      {/* <Usernav/> */}
      <Adminnav />
      <Heroadmin/>
    </>
  );
}

export default App;
