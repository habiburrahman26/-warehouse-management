import axios from 'axios';
import { toast } from 'react-toastify';
import classes from './AllInventory.module.css';

const InventoryList = (props) => {
  const { _id, name, price, quantity, image, onDelete } = props;

  const deleteHandler = async (id) => {
    const confirm = window.confirm('Are You sure you want to delete?');
    if (confirm) {
      const { data } = await axios.delete(`https://fathomless-coast-62063.herokuapp.com/delete/${id}`);
      if (data.deletedCount) {
        toast.success('Item deleted successfully');
        onDelete(id);
      }
    }
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>
        <img src={image} alt="" className={classes.img} />
      </td>
      <td>
        <button onClick={() => deleteHandler(_id)} className={classes.delete}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default InventoryList;
