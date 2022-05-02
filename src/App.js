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
import MyItem from './components/MyItems/MyItem';
import Blogs from './components/Blogs/Blogs';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
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
        <Route
          path="/myItems"
          element={
            <RequireAuth>
              <MyItem />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
