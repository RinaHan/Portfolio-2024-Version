import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Volunteers from "./pages/Volunteers";
import Walk from "./pages/Walk";
import GreenLife from "./pages/GreenLife";
import Linkt from "./pages/Linkt";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}/>
          <Route path='volunteers' element={<Volunteers />} />
          <Route path='walk' element={<Walk />} />
          <Route path=':greenLife' element={<GreenLife />} />
          <Route path='Linkt' element={<Linkt />} />
      </Routes>
    </div>
  );
}

export default App;
