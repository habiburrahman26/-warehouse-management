import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import Registration from './components/Pages/Registration';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import InventoryDetails from './components/InventoryDetails.js/InventoryDetails';
import RequireAuth from './components/RequireAuth/RequireAuth';
import AlIlnventory from './components/Inventory/AlIlnventory';
import Header from './components/Layout/Header/Header';

function App() {
  return (
    <div>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/inventory/:inventoryId"
            element={
              <RequireAuth>
                <InventoryDetails />
              </RequireAuth>
            }
          />
          <Route path="/manageInventories" element={<AlIlnventory />} />
        </Routes>
      </>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
