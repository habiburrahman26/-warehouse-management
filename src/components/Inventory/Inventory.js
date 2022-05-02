import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Inventory.module.css';
import InventoryItem from './InventoryItem';

const Inventory = () => {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get('https://fathomless-coast-62063.herokuapp.com/inventory').then(({ data }) => {
      setInventoryItems(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
    {isLoading && <p className='center'>Loading...</p>}
      {!isLoading && (
        <section className={classes['section-inventory']}>
          <div className={classes['inventory-container']}>
            <h2 className="heading-secondary">Inventory Items</h2>
            <div className={classes.inventorys}>
              {inventoryItems.slice(0, 6).map((item) => (
                <InventoryItem key={item._id} {...item} />
              ))}
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link className={classes.link} to="/manageInventories">
              Manage Inventories &rarr;
            </Link>
          </div>
        </section>
      )}
    </>
  );
};

export default Inventory;
