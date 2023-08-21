// App.js
import React, { useState } from "react";
import Navbar from "./navbar/Navbar";
import Allroutes from "./routes/Allroutes";
import Sidebar from "./navbar/Sidebar";

function App() {
  const [sortByPrice, setSortByPrice] = useState(false);

  return (
    <div className="App">
      <Navbar />
      <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        <Sidebar setSortByPrice={setSortByPrice} sortByPrice={sortByPrice} />
        <Allroutes sortByPrice={sortByPrice} />
      </div>
    </div>
  );
}

export default App;
