import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../../UI/LoadingSpinner';
import InventoryList from './InventoryList';
import classes from './AllInventory.module.css'

const AlIlnventory = () => {
  const [inventories, seTInventories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const { data } = await axios.get('http://localhost:5000/inventorys');
      seTInventories(data);
      setIsLoading(false);
    };
    getData();
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className={classes['tables']}>
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
            <InventoryList key={item._id} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AlIlnventory;
