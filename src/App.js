import React from "react";
import Navbar from "./navbar/Navbar";
import Allroutes from "./routes/Allroutes";
import Sidebar from "./navbar/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
     <div style={{display:"flex", flexDirection:"row",gap:"20px"}}>
      <Sidebar/>
      <Allroutes/>
     </div>
    </div>
  );
}

export default App;
