import { useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import SideBar from "./components/SideBar";



function App() {

  const [showModal, setShowModal] = useState(false); 
  return (
    <div className="App">
     <Main></Main>
     {showModal && (<SideBar/>)}
     <Footer></Footer>
    </div>
  );
}

export default App;
