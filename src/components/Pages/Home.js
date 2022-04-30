import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import Inventory from '../Inventory/Inventory';
import classes from './Home.module.css';

const Home = () => {
  return (
    <div>
      <Banner />
      <Feature/>
      <Inventory />
    </div>
  );
};

export default Home;
