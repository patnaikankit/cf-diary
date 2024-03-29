import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from './components/NavComponent'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
