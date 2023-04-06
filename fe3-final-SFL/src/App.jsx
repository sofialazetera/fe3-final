import { useContext } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import { ContextGlobal } from "./Components/utils/global.context";

function App() {
  const { state: { isthemeBlack } } = useContext(ContextGlobal);
  
  return (
    <div className={`App ${isthemeBlack && 'dark'}`}>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;