
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginNGO from './Components/LoginNGO';
import LoginDonor from './Components/LoginDonor';
import Container from './Components/Container';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route index element={<Container />} />
          <Route path="LoginNGO" element={<LoginNGO />} />
          <Route path="LoginDonor" element={<LoginDonor />} />
          

        
      </Routes>
    </BrowserRouter>
  )
    
}

export default App;
