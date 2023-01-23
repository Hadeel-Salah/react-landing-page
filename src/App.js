import {LandingPage} from "./pages/LandingPage/LandingPage";
import "./App.css"
import { Header } from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
   <>
   <Header />
    <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/home" element={<LandingPage />} />
    </Routes>
   </>
  
  );
}

export default App;
