import Navwelcome from "./components/Welcome/Navwelcome/Navwelcome";
import Adminnav from "./components/Admin/AdminNav/Adminnav";
import Usernav from "./components/User/UserNav/Usernav";
import { HomeAdmin } from "./pages/HomeAdmin";
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <>
      <Box className="first">
        <HomeAdmin />
      </Box>
      {/* <br />
      <Adminnav />
      <br />
      <Usernav/> */}
    </>
  );
}

export default App;
