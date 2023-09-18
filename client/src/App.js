import Navwelcome from "./components/Welcome/Navwelcome/Navwelcome";
import Adminnav from "./components/Admin/AdminNav/Adminnav";
import Usernav from "./components/User/UserNav/Usernav";

function App() {
  return (
    <>
      {/* Welcome Navbar */}
      <Navwelcome /><br />
      {/* Admin Navbar */}
      <Adminnav /><br />
      {/* User Navbar */}
      <Usernav/>
    </>
  );
}

export default App;
