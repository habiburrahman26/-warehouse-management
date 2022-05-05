import Banner from '../Banner/Banner';
import ClientReview from '../ClientReview/ClientReview';
import Feature from '../Feature/Feature';
import Footer from '../Footer/Footer';
import Inventory from '../Inventory/Inventory';
import Header from '../Layout/Header/Header';
import PageTitle from '../../UI/PageTitle';

const Home = () => {
  return (
    <>
      <PageTitle title="Home" />
      <Header />
      <div>
        <Banner />
        <Feature />
        <Inventory />
        <ClientReview />
        <Footer />
      </div>
    </>
  );
};

export default Home;
