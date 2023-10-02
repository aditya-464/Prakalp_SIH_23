import Navwelcome from "./components/Welcome/Navwelcome/Navwelcome";
import Adminnav from "./components/Admin/AdminNav/Adminnav";
import Usernav from "./components/User/UserNav/Usernav";
import Heroadmin from "./components/Admin/HeroAdmin/Heroadmin";
import Herouser from "./components/User/HeroUser/Herouser";
import HeroWelcome from "./components/Welcome/HeroWelcome/HeroWelcome";
import About from "./components/About/About";
import AdminLogin from "./components/Authentication/AdminLogin/AdminLogin";
import AdminSignUp from "./components/Authentication/AdminSignUp/AdminSignUp";
import UserLogin from "./components/Authentication/UserLogin/UserLogin";
import GetOTP from "./components/Authentication/GetOTP/GetOTP";
import UserSignUp from "./components/Authentication/UserSignUp/UserSignUp";

function App() {
  return (
    <>
      {/* <Navwelcome />
      <HeroWelcome/> */}
      {/* <About/> */}

      {/* <Usernav/> */}
      {/* <Herouser/>  */}


      {/* * <Adminnav /> */}
      {/* <Heroadmin/> */}
      <AdminLogin/>
      <AdminSignUp/>
      <UserLogin/>
      <UserSignUp/>
      <GetOTP/>
    </>
  );
}

export default App;
