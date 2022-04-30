import classes from './Feature.module.css';
import amazon from '../../assets/logo/amazon-com-logo-svgrepo-com.svg';
import ebay from '../../assets/logo/ebay-svgrepo-com.svg';
import forbs from '../../assets/logo/forbes-logo-svgrepo-com.svg';
import samsung from '../../assets/logo/samsung-logo-svgrepo-com.svg';
import walmart from '../../assets/logo/walmart-logo-svgrepo-com.svg';
import alibaba from '../../assets/logo/alibaba-dot-com-svgrepo-com.svg'

const Feature = () => {
  return (
    <section class={classes['section-featured']}>
      <div class={classes.container}>
        <h2 class={classes['heading-featured-in']}>
          Trusted by companies of all sizes
        </h2>
        <div class={classes.logos}>
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
