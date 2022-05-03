import classes from './Feature.module.css';
import amazon from '../../assets/logo/amazon-com-logo-svgrepo-com.svg';
import ebay from '../../assets/logo/ebay-svgrepo-com.svg';
import forbs from '../../assets/logo/forbes-logo-svgrepo-com.svg';
import samsung from '../../assets/logo/samsung-logo-svgrepo-com.svg';
import walmart from '../../assets/logo/walmart-logo-svgrepo-com.svg';
import alibaba from '../../assets/logo/alibaba-dot-com-svgrepo-com.svg';

const Feature = () => {
  return (
    <section className={classes['section-featured']}>
      <div className={classes.container}>
        <h2 className={classes['heading-featured-in']}>
          Trusted by companies
        </h2>
        <div className={classes.logos}>
          <img src={amazon} alt="amazon logo" />
          <img src={ebay} alt="ebay logo" />
          <img src={forbs} alt="forbs logo" />
          <img src={samsung} alt="samsung logo" />
          <img src={walmart} alt="walmart logo" />
          <img src={alibaba} alt="alibaba logo" />
        </div>
      </div>
    </section>
  );
};

export default Feature;
