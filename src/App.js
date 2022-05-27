import "./App.css";
import { Getdata } from "./components/apiCalls/Getdata";

import { Navbar } from "./components/Header/Navbar/Navbar.jsx";
import { Images } from "./components/Images/Images";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Images />
      <Getdata></Getdata>
    </div>
  );
};

export { App };
