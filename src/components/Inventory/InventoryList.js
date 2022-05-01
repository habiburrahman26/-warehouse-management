import classes from './AllInventory.module.css';

const InventoryList = (props) => {
  const { _id, name, price, quantity, image } = props;

  return (
    <tr>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>
        <img src={image} alt="" className={classes.img} />
      </td>
      <td>
        <button className={classes.delete}>Delete</button>
      </td>
    </tr>
  );
};

export default InventoryList;
