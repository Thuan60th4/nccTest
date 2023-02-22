import { useRef } from "react";
import "./App.css";
import Content from "./Component/Content";
import Header from "./Component/Header/Header";
import SiderBar from "./Component/SideBar";

function App() {
  const sideBarRef = useRef();

  const handleShowSidebar = () => {
    sideBarRef.current.classList.toggle("visible");
  };

  const handleOuteSideBar = () => {
    if (sideBarRef.current.classList.contains("visible")) {
      sideBarRef.current.classList.remove("visible");
    }
  };
  return (
    <div className="App">
      <Header onClick={handleShowSidebar} className="header" />
      <SiderBar onClick={handleOuteSideBar} ref={sideBarRef} />
      <Content />
    </div>
  );
}

export default App;
