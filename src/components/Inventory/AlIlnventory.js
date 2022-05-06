import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../../UI/LoadingSpinner';
import InventoryList from './InventoryList';
import classes from './AllInventory.module.css';
import Header from '../Layout/Header/Header';
import { Link } from 'react-router-dom';
import PageTitle from '../../UI/PageTitle';

const AlIlnventory = () => {
  const [inventories, setInventories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [ClickedPage, setClickedPage] = useState(0);

  // load page count
  useEffect(() => {
    axios.get('http://localhost:5000/pageCount').then(({ data }) => {
      const inventoryNumber = data.count;
      const totalPageCount = Math.ceil(inventoryNumber / 10);
      setPageNumber(totalPageCount);
    });
  }, []);

  //load inventory
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const { data } = await axios.get(
        `http://localhost:5000/inventorys?page=${ClickedPage}`
      );
      setInventories(data);
      setIsLoading(false);
    };
    getData();
  }, [ClickedPage]);

  const deleteHandler = (id) => {
    const filterItem = inventories.filter((item) => item._id !== id);
    setInventories(filterItem);
  };

  return (
    <>
      <PageTitle title="Manage Inventory" />
      <Header />
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <div className={classes['tables']}>
          <Link className="btn btnRegistration" to="/addItem">
            Add New Item
          </Link>
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
              {inventories.map((item) => (
                <InventoryList
                  key={item._id}
                  {...item}
                  onDelete={deleteHandler}
                />
              ))}
            </tbody>
          </table>
          <div className={classes.pagination}>
            {[...Array(pageNumber).keys()].map((page) => (
              <button
                key={page}
                onClick={() => {
                  setClickedPage(page);
                }}
                className={page === ClickedPage ? `${classes.selected}` : ''}
              >
                {page + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AlIlnventory;
