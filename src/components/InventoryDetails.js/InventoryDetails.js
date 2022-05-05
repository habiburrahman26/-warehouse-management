import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import LoadingSpinner from '../../UI/LoadingSpinner';
import PageTitle from '../../UI/PageTitle';
import classes from './InventoryDetails.module.css';

const InventoryDetails = () => {
  const [inventory, setInventory] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [deleverLoading, setDeleverLoading] = useState(false);
  const [restockLoading, setRestockLoading] = useState(false);
  const { inventoryId } = useParams();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://fathomless-coast-62063.herokuapp.com/inventory/${inventoryId}`
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
    setDeleverLoading(true);
    const { data } = await axios.post(
      `https://fathomless-coast-62063.herokuapp.com/inventoryDelevered/${inventoryId}`,
      { quantity: 1 }
    );
    setDeleverLoading(false);

    if (data.modifiedCount) {
      setInventory({ ...inventory, quantity: inventory.quantity - 1 });
      toast.success('Delivered Successfully');
    }
  };

  const restockHandler = async (e) => {
    e.preventDefault();
    const quantity = +e.target.quantity.value;

    setRestockLoading(true);
    const { data } = await axios.post(
      `https://fathomless-coast-62063.herokuapp.com/inventoryRestore/${inventoryId}`,
      { quantity: quantity }
    );
    setRestockLoading(false);

    if (data.modifiedCount) {
      setInventory({ ...inventory, quantity: inventory.quantity + quantity });
      toast.success('Restore Successfully');
    }
  };

  return (
    <>
      <PageTitle title="Inventory Details" />

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
                <input
                  type="submit"
                  value={restockLoading ? 'Restock...' : 'Restock'}
                  className={classes.submit}
                />
              </form>
              <button onClick={deleveredHandler} className={classes.delivered}>
                {deleverLoading ? 'Delevering...' : 'Delivered'}
              </button>
            </div>

            <div className={classes.description}>
              <p className={classes.descriptionText}>Description</p>
              <p className={classes.text}>{inventory.description}</p>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Link className={classes.link} to="/manageInventories">
            Manage Inventories &rarr;
          </Link>
        </div>
      </section>
    </>
  );
};

export default InventoryDetails;
