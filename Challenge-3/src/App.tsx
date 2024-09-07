import { Outlet } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Navbar";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
