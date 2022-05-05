import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import LoadingSpinner from '../../UI/LoadingSpinner';
import PageTitle from '../../UI/PageTitle';
import InventoryList from '../Inventory/InventoryList';
import Header from '../Layout/Header/Header';
import classes from './MyItem.module.css';

const MyItem = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [user] = useAuthState(auth);
  const email = user?.email;
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(
          `https://fathomless-coast-62063.herokuapp.com/myItem?email=${email}`,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        );
        setItems(res.data);
        setIsLoading(false);
      } catch (err) {
        if (err.response.status === 401 || err.response.status === 403) {
          navigate('/login', { replace: true });
          signOut(auth);
        }
      }
    };
    getData();
  }, [email, navigate]);

  const deleteHandler = (id) => {
    const filterItem = items.filter((item) => item._id !== id);
    setItems(filterItem);
  };

  return (
    <div>
      <PageTitle title="My item" />
      <Header />
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <div className={classes['my-items']}>
          {items.length > 0 ? (
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
                {items.map((item) => (
                  <InventoryList
                    key={item._id}
                    {...item}
                    onDelete={deleteHandler}
                  />
                ))}
              </tbody>
            </table>
          ) : (
            <p
              style={{
                textAlign: 'center',
                fontSize: '2rem',
                marginTop: '20rem',
              }}
            >
              No Item added yet
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default MyItem;
