import { Link } from 'react-router-dom';
import classes from './InventoryItem.module.css';

const InventoryItem = (props) => {
  const { _id, name, image, quantity, price, description, supplierName } = props;
  return (
    <div className={classes.inventory}>
      <div className={classes.line}>
        <img src={image} alt="" className={classes.img} />
      </div>
      <div className={classes['inventory-text-box']}>
        <h3 className={classes['inventory-name']}>{name}</h3>
        <p className={classes.text}>
          <span className="bold">Description:</span>{' '}
          {description.length > 60
            ? description.slice(0, 60) + '...'
            : description}
        </p>

        <p className={classes.text}>
          <span className="bold">Quantity:</span> {quantity}
        </p>
        <p className={classes.text}>
          <span className="bold">Supplier name:</span> {supplierName}
        </p>
        <p>
          <span className="bold">Price:</span> {price}Tk
        </p>
        <Link to={`/inventory/${_id}`} className={classes.updateBtn}>
          Update
        </Link>
      </div>
    </div>
  );
};

export default InventoryItem;
