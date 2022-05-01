import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import Registration from './components/Pages/Registration';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import InventoryDetails from './components/InventoryDetails.js/InventoryDetails';
import RequireAuth from './components/RequireAuth/RequireAuth';
import AlIlnventory from './components/Inventory/AlIlnventory';
import AddNewItem from './components/AddNewItem/AddNewItem';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route
          path="/inventory/:inventoryId"
          element={
            <RequireAuth>
              <InventoryDetails />
            </RequireAuth>
          }
        />
        <Route path="/manageInventories" element={<AlIlnventory />} />
        <Route path="/addItem" element={<AddNewItem />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
