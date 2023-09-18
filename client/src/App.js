// import { Text, Box } from "@chakra-ui/react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navwelcome from './components/Welcome/Navwelcome/Navwelcome';

function App() {
  return (
    <Router>
      <Navwelcome/>
    </Router>
  );
}

export default App;
