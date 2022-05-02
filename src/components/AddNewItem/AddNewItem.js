import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Header from '../Layout/Header/Header';
import classes from './AddNewItem.module.css';

const AddNewItem = () => {
  const [user] = useAuthState(auth);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    formState,
    setValue,
  } = useForm({
    defaultValues: {
      name: '',
      email: user?.email,
      quantity: '',
      price: '',
      description: '',
      supplierName: '',
      image: '',
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    const res = await axios.post('https://fathomless-coast-62063.herokuapp.com/addInventory', data);
    if (res.data.insertedId) {
      toast.success('Item Added Successfully');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        name: '',
        quantity: '',
        price: '',
        description: '',
        supplierName: '',
        image: '',
      });
    }
  }, [formState, reset]);

  return (
    <>
      <Header />
      <div className={classes['form-container']}>
        <form
          className={classes['form-control']}
          onSubmit={handleSubmit(onSubmit)}
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
            <button
              className={classes['btn-add']}
              onClick={() => setValue('email', user?.email)}
            >
              {isLoading ? 'Adding...' : 'Add New Item'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddNewItem;
