import logo from "./logo.svg";
import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Volunteers from "./pages/Volunteers";
import Walk from "./pages/Walk";
import GreenLife from "./pages/GreenLife";
import Linkt from "./pages/Linkt";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='volunteers' element={<Volunteers />} />
          {/* <Route path='walk' element={<Walk />} /> */}
          {/* <Route path='greenLife' element={<GreenLife />} /> */}
          {/* <Route path='Linkt' element={<Linkt />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
