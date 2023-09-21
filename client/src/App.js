import {Routes, Route} from 'react-router-dom';
import Navwelcome from "./components/Welcome/Navwelcome/Navwelcome";
import Adminnav from "./components/Admin/AdminNav/Adminnav";
import Usernav from "./components/User/UserNav/Usernav";
import { HomeAdmin } from "./pages/HomeAdmin/HomeAdmin";
import { HomeUser } from "./pages/HomeUser/HomeUser";
import { AccountAdmin } from "./pages/AccountAdmin/AccountAdmin";
import { AccountUser } from "./pages/AccountUser/AccountUser";
import Heroadmin from "./components/Admin/HeroAdmin/Heroadmin";
import Herouser from "./components/User/HeroUser/Herouser";

function App() {
  return (
    <>
      {/*****  Navbars  *****/}

      {/* <Navwelcome /> */}
      {/* <Adminnav /> */}
      {/* <Usernav/> */}


      {/*****  Admin  *****/}
       {/* <Routes>
        <Route path='/' element={<HomeAdmin/>}/>
        <Route path='account' element={<AccountAdmin />}/>
      </Routes> */}


      {/*****  User  *****/}
       <Routes>
        <Route path='/' element={<HomeUser/>}/>
        <Route path='account' element={<AccountUser />}/>
      </Routes>
    </>
  );
}

export default App;
