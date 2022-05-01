import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
              {inventory.quantity}
            </p>
            <p className={classes.text}>
              <span className={classes.bold}>Price: </span>
              {inventory.price}Tk
            </p>
            <p className={classes.text}>
              <span className={classes.bold}>Supplier name: </span>
              {inventory.supplierName}
            </p>
            <form>
              <input className={classes.input} type="number" required />
              <input type="submit" value="Restock" className={classes.submit}/>
            </form>
            <button className={classes.delivered}>Delivered</button>
          </div>

          <div className={classes.description}>
            <p className={classes.descriptionText}>Description</p>
            <p className={classes.text}>{inventory.description}</p>
          </div>
        </div>

        <div className={classes.action}>
          {/* <button className={classes.delivered}>Delivered</button> */}
        </div>
      </div>
    </section>
  );
};

export default InventoryDetails;
