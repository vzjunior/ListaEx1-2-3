import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import Calculadora from './Ex01/Calculadora';
import Massa from './Ex02/Massa';
import Home from './Home/home';
import Compras from './Ex03/Compras';



function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculadora" element={<Calculadora />} />
      <Route path="/massa" element={<Massa />} />
      <Route path="/compras" element={<Compras />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
