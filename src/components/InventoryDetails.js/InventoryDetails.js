import { async } from '@firebase/util';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import LoadingSpinner from '../../UI/LoadingSpinner';
import classes from './InventoryDetails.module.css';

const InventoryDetails = () => {
  const [inventory, setInventory] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { inventoryId } = useParams();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const { data } = await axios.get(
        `http://localhost:5000/inventory/${inventoryId}`
      );
      setInventory(data);
      setIsLoading(false);
    };
    getData();
  }, [inventoryId]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const deleveredHandler = async () => {
    const { data } = await axios.post(
      `http://localhost:5000/inventoryDelevered/${inventoryId}`,
      { quantity: 1 }
    );

    if (data.modifiedCount) {
      setInventory({ ...inventory, quantity: inventory.quantity - 1 });
      toast.success('Delivered Successfully');
    }
  };

  const restockHandler = async (e) => {
    e.preventDefault();
    const quantity = +e.target.quantity.value;

    const { data } = await axios.post(
      `http://localhost:5000/inventoryRestore/${inventoryId}`,
      { quantity: quantity }
    );

    if (data.modifiedCount) {
      setInventory({ ...inventory, quantity: inventory.quantity + quantity });
      toast.success('Restore Successfully');
    }
  };

  return (
    <section className={classes['section-details']}>
      <h1 className={classes.heading}>Inventory Details</h1>
      <div className={classes['details-container']}>
        <div className={classes['details-info']}>
          <div className={classes['img-box']}>
            <img src={inventory.image} alt="" className={classes.img} />
          </div>
          <div className={classes['text-box']}>
            <h3 className={classes['inventory-name']}>{inventory.name}</h3>
            <p className={classes.text}>
              <span className={classes.bold}>Quantity: </span>
              {inventory.quantity ? inventory.quantity : 'Stock Out'}
            </p>
            <p className={classes.text}>
              <span className={classes.bold}>Price: </span>
              {inventory.price}Tk
            </p>
            <p className={classes.text}>
              <span className={classes.bold}>Supplier name: </span>
              {inventory.supplierName}
            </p>
            <form onSubmit={restockHandler}>
              <input
                className={classes.input}
                name="quantity"
                type="number"
                required
              />
              <input type="submit" value="Restock" className={classes.submit} />
            </form>
            <button onClick={deleveredHandler} className={classes.delivered}>
              Delivered
            </button>
          </div>

          <div className={classes.description}>
            <p className={classes.descriptionText}>Description</p>
            <p className={classes.text}>{inventory.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InventoryDetails;
