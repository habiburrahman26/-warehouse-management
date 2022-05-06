import notFound from '../../assets/images/notFound.jpg';
import PageTitle from '../../UI/PageTitle';
import classes from './NotFound.module.css'

const NotFound = () => {
  return (
   <>
   <PageTitle title="Not Found"/>
    <div className={classes.notFound}>
        <img src={notFound} alt="" className={classes.img} />
    </div>
   </>
  )
}

export default NotFound