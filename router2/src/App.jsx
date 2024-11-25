import { Outlet } from "react-router-dom";
import About from "./pages/About";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
