import { Helmet } from "react-helmet-async"


const PageTitle = ({title}) => {
  return (
    <Helmet>
        <title>{title} - E-store</title>
    </Helmet>
  )
}

export default PageTitle