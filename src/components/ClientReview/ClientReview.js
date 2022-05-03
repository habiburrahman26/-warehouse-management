import person1 from '../../assets/images/person 1.png';
import person2 from '../../assets/images/person 2.png';
import person3 from '../../assets/images/person 3.png';
import classes from './Client.module.css';

const ClientReview = () => {
  return (
    <section className={classes['section-client']}>
      <div className={classes.container}>
        <h2 className="heading-secondary">Our Clients says</h2>
        <div className={classes.reviews}>
          <div className={classes.review}>
            <p className={classes.text}>
              I truly loved the venue. The staffs were so good, they were best
              at hospitality and services. The venue was very beautiful, the
              decor was superbly done.
            </p>
            <img src={person1} alt="person 1" />
            <p className={classes.name}>Amit Saha</p>
          </div>
          <div className={classes.review}>
            <p className={classes.text}>
              I truly loved the venue. The staffs were so good, they were best
              at hospitality and services. The venue was very beautiful, the
              decor was superbly done.
            </p>
            <img src={person2} alt="person 2" />
            <p className={classes.name}>Maxmimullan</p>
          </div>
          <div className={classes.review}>
            <p className={classes.text}>
              I truly loved the venue. The staffs were so good, they were best
              at hospitality and services. The venue was very beautiful, the
              decor was superbly done.
            </p>
            <img src={person3} alt="person 3" />
            <p className={classes.name}>Rahul Depp</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReview;
