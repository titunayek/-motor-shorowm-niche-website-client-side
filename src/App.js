
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AddOrderService from './Components/AddOrderService/AddOrderService';
import Booking from './Components/Booking/Booking/Booking';
import Footer from './Components/Footer/Footer';
import Exports from './Components/Home/Exports/Exports';

import Home from './Components/Home/Home/Home';
import AllServices from './Components/Home/Services/AllServices/AllServices';
import Servises from './Components/Home/Services/Servises';
import Login from './Components/Login/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Herder from './Components/Shared/Herder/Herder';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Herder/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Servises />} />
        <Route path="/motors" element={<Exports />} />
        <Route path="/footer" element={<Footer />} />
        
        <Route exact path='/login' element={<Login/>}/>
        <Route path="/allServices" element={ <AllServices/>}/>
        
        <Route path="/booking/:serviceId" element={<Booking/>} />
        <Route path='/addOrderService' element={<AddOrderService />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      </AuthProvider>
    </div>
  );
}

export default App;
