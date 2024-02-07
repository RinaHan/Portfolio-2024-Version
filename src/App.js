import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/LandingPage";
import Volunteers from "./pages/Volunteers";
import Walk from "./pages/Walk";
import GreenLife from "./pages/GreenLife";
import Linkt from "./pages/Linkt";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
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
          <Route path='walk' element={<Walk />} />
          <Route path='greenLife' element={<GreenLife />} />
          <Route path='Linkt' element={<Linkt />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
