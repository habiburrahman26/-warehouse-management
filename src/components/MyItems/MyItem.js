import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import LoadingSpinner from '../../UI/LoadingSpinner';
import InventoryList from '../Inventory/InventoryList';
import Header from '../Layout/Header/Header';
import classes from './MyItem.module.css';

const MyItem = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [user] = useAuthState(auth);
  const email = user?.email;

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const { data } = await axios.get(
        `http://localhost:5000/myItem?email=${email}`
      );
      setItems(data);
      setIsLoading(false);
    };
    getData();
  }, [email]);

  const deleteHandler = (id) => {
    const filterItem = items.filter((item) => item._id !== id);
    setItems(filterItem);
  };

  return (
    <div>
      <Header />
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <div className={classes['my-items']}>
          {items.length > 0 ? (
            <table className={classes.inventories}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <InventoryList
                    key={item._id}
                    {...item}
                    onDelete={deleteHandler}
                  />
                ))}
              </tbody>
            </table>
          ) : (
            <p
              style={{
                textAlign: 'center',
                fontSize: '2rem',
                marginTop: '20rem',
              }}
            >
              No Item added yet
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default MyItem;
