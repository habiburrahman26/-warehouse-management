import notFound from '../../assets/images/notFound.jpg';
import classes from './NotFound.module.css'

const NotFound = () => {
  return (
    <div className={classes.notFound}>
        <img src={notFound} alt="" className={classes.img} />
    </div>
  )
}

export default NotFound