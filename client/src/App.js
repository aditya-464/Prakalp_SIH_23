import Navwelcome from "./components/Welcome/Navwelcome/Navwelcome";
import Adminnav from "./components/Admin/AdminNav/Adminnav";
import Usernav from "./components/User/UserNav/Usernav";
import Heroadmin from "./components/Admin/HeroAdmin/Heroadmin";
import Herouser from "./components/User/HeroUser/Herouser";
import Largebtn from "./components/LargeButton/Largebtn";

function App() {
  const name = "Aditya"
  return (
    <>
      {/* <Navwelcome /> */}
      {/* <Usernav/> */}
      <Adminnav />


      <Heroadmin/>
      {/* <Herouser name={name}/> */}


      <Largebtn/>


    </>
  );
}

export default App;
