import Banner from '../Banner/Banner';
import ClientReview from '../ClientReview/ClientReview';
import Feature from '../Feature/Feature';
import Footer from '../Footer/Footer';
import Inventory from '../Inventory/Inventory';
import Header from '../Layout/Header/Header'

const Home = () => {
  return (
    <>
    <Header/>
      <div>
        <Banner />
        <Feature />
        <Inventory />
        <ClientReview/>
        <Footer />
      </div>
    </>
  );
};

export default Home;
