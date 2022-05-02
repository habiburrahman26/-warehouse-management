import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../../UI/LoadingSpinner';
import InventoryList from './InventoryList';
import classes from './AllInventory.module.css';
import Header from '../Layout/Header/Header';
import { Link } from 'react-router-dom';

const AlIlnventory = () => {
  const [inventories, setInventories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const { data } = await axios.get('https://fathomless-coast-62063.herokuapp.com/inventorys');
      setInventories(data);
      setIsLoading(false);
    };
    getData();
  }, []);

  const deleteHandler = (id) => {
    const filterItem = inventories.filter((item) => item._id !== id);
    setInventories(filterItem);
  };

  return (
    <>
      <Header />
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <div className={classes['tables']}>
          <Link className="btn btnRegistration" to="/addItem">
            Add New Item
          </Link>
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
              {inventories.map((item) => (
                <InventoryList
                  key={item._id}
                  {...item}
                  onDelete={deleteHandler}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default AlIlnventory;
