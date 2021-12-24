import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./component/pages/Home";
import Service from "./component/pages/Service";
import Contact from "./component/pages/Contact";
import About from "./component/pages/About";
import MenuBar from "./component/layout/MenuBar";

function App() {
  const NoPage = () => {
    return (
      <div>
        <h1>OOps! Page Not Found !</h1>
      </div>
    );
  };
  return (
    <div className="App">
      <MenuBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
