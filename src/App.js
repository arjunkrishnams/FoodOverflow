
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginNGO from './Components/LoginNGO';
import LoginDonor from './Components/LoginDonor';
import Container from './Components/Container';
import NgoSignup from './Components/NgoSignup'; 
import DashboardDonor from './Components/DashboardDonor';
import DashboardNGO from './Components/DashboardNGO';
import Donation from './Components/Donation';
import DonorSignup from './Components/DonorSignup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route index element={<Container />} />
          <Route path="LoginNGO" element={<LoginNGO />} />
          <Route path="LoginDonor" element={<LoginDonor />} />
          <Route path="NgoSignup" element={<NgoSignup />} />
          <Route path="DashboardDonor" element={<DashboardDonor />} />
          <Route path="DashboardNGO" element={<DashboardNGO />} />
          <Route path="Donation" element={<Donation />} />
          <Route path="DonorSignup" element={<DonorSignup />} />

          

        
      </Routes>
    </BrowserRouter>
  )
    
}

export default App;
