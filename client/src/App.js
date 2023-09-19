import Navwelcome from "./components/Welcome/Navwelcome/Navwelcome";
import Adminnav from "./components/Admin/AdminNav/Adminnav";
import Usernav from "./components/User/UserNav/Usernav";
import Heroadmin from "./components/Admin/HeroAdmin/Heroadmin";
import Herouser from "./components/User/HeroUser/Herouser";

function App() {
  const name = "Aditya"
  return (
    <>
      {/* <Navwelcome /> */}


      <Usernav/>
      <Herouser name={name}/>


      {/* <Adminnav />
      <Heroadmin/> */}
    </>
  );
}

export default App;
