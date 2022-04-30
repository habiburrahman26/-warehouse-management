import classes from './Banner.module.css';
import banner from '../../assets/images/banner.png';

const Banner = () => {
  return (
    <section className={classes.banner}>
      <div className={classes['banner-container']}>
        <div className={classes['banner-text-box']}>
          <h1 className="heading-primary">Enhance your environment</h1>
          <p className={classes.text}>
            You no longer have to worry about calculating the amount of product
            you have in your wirehouse. With our site you can easily calculate
            and see how many products your warehouse has and it will make your
            life a lot easier.
          </p>
          <button className={classes.btnStarted}>Get Started</button>
        </div>
        <div className={classes['banner-img-box']}>
          <img src={banner} alt="" className={classes.img} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
