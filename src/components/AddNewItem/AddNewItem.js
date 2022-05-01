import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Header from '../Layout/Header/Header';
import classes from './AddNewItem.module.css';

const AddNewItem = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    const res = await axios.post('http://localhost:5000/addInventory', data);
    if (res.data.insertedId) {
      toast.success('Item Added Successfully');
    }
  };

  const forgetPasswordHandler = (data) => {
    if (data.email) {
      console.log(data);
    }
  };

  return (
    <>
      <Header />
      <div className={classes['form-container']}>
        <form
          className={classes['form-control']}
          onSubmit={handleSubmit(onSubmit, forgetPasswordHandler)}
        >
          <h1 className={classes.heading}>Add New Item</h1>
          <div className={classes['input-control']}>
            <input
              type="text"
              {...register('name', { required: true })}
              placeholder="Name"
            />
            <label>
              {errors.name?.type === 'required' && 'Name is required'}
            </label>
          </div>
          <div className={classes['input-control']}>
            <input
              type="email"
              {...register('email')}
              placeholder="Email"
              value={user?.email || ''}
              disabled
              readOnly
            />
            <label></label>
          </div>
          <div className={classes['input-control']}>
            <input
              type="number"
              {...register('quantity', { required: true })}
              placeholder="Quantity"
            />
            <label>
              {errors.quantity?.type === 'required' && 'Quantity is required'}
            </label>
          </div>
          <div className={classes['input-control']}>
            <input
              type="number"
              {...register('price', { required: true })}
              placeholder="Price"
            />
            <label>
              {errors.price?.type === 'required' && 'Price is required'}
            </label>
          </div>
          <div className={classes['input-control']}>
            <input
              type="text"
              {...register('supplierName', { required: true })}
              placeholder="Supplier name"
            />
            <label>
              {errors.supplierName?.type === 'required' &&
                'Supplier name is required'}
            </label>
          </div>
          <div className={classes['input-control']}>
            <textarea
              type="email"
              {...register('description', { required: true })}
              placeholder="Description"
            />
            <label>
              {errors.description?.type === 'required' &&
                'Description is required'}
            </label>
          </div>
          <div className={classes['input-control']}>
            <input
              type="text"
              {...register('image', { required: true })}
              placeholder="Image url"
            />
            <label>
              {errors.image?.type === 'required' && 'Image url is required'}
            </label>
          </div>

          <div>
            <button className={classes['btn-add']}>Add New Item</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddNewItem;
