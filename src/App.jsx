import { useState } from "react";

import "./App.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";

function App() {
  const [userCity, setUserCity] = useState();
  return (
    <>
      <Header userCity={userCity} />
      <Home userCity={userCity} setUserCity={setUserCity} />
    </>
  );
}

export default App;
