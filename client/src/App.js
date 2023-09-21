import {Routes, Route} from 'react-router-dom';
import Navwelcome from "./components/Welcome/Navwelcome/Navwelcome";
import Adminnav from "./components/Admin/AdminNav/Adminnav";
import Usernav from "./components/User/UserNav/Usernav";
import { HomeAdmin } from "./pages/HomeAdmin/HomeAdmin";
import { AccountAdmin } from "./pages/AccountAdmin/AccountAdmin";
import Heroadmin from "./components/Admin/HeroAdmin/Heroadmin";
import Herouser from "./components/User/HeroUser/Herouser";

function App() {
  return (
    <>
      {/* <HomeAdmin /> */}
      {/* <br />
      <Adminnav />
      <br />
      <Usernav/> */}
      {/* <Navwelcome /> */}
      {/* <Usernav/> */}
      {/* <Adminnav /> */}
      {/* <Usernav/>
      <Herouser/> */}
      {/* <Heroadmin /> */}
      {/* <Herouser name={name}/> */}
      <Routes>
        <Route path='/' element={<HomeAdmin/>}/>
        <Route path='account' element={<AccountAdmin />}/>
      </Routes>
    </>
  );
}

export default App;
