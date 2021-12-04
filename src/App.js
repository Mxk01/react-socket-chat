import logo from './logo.svg';
import './App.css';

import { Routes, Route, Link } from "react-router-dom";
import Login from './components/Login/Login';

import Container from './components/Container/Container';
import UserInfo from './components/UserInfo/UserInfo';
function App() {
  return (
    <div className="App">


      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/room" element={<Container />} />
        {/* <Route path="about" element={ } /> */}
      </Routes>
    </div>
  );
}

export default App;
