import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/LandingPage";
import Volunteers from "./pages/Volunteers";
import Walk from "./pages/Walk";
import GreenLife from "./pages/GreenLife";
import Linkt from "./pages/Linkt";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TicTacToe from "./pages/TicTacToe";
import DisneyPlus from "./pages/DisneyPlus";

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
          <Route path='disneyplus' element={<DisneyPlus />} />
          <Route path='tictactoe' element={<TicTacToe />} />
          <Route path='walk' element={<Walk />} />
          <Route path='volunteers' element={<Volunteers />} />
          <Route path='Linkt' element={<Linkt />} />
          <Route path='greenLife' element={<GreenLife />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
