import { Route, Routes } from 'react-router-dom';
import Header from './components/Layout/Header/Header';
import Home from './components/Pages/Home';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
