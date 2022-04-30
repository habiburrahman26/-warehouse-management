import { Route, Routes } from 'react-router-dom';
import Header from './components/Layout/Header/Header';
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
