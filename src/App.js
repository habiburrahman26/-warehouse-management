import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import Registration from './components/Pages/Registration';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
