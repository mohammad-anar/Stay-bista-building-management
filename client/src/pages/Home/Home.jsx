
import { Helmet } from "react-helmet-async"
import Categories from "../../components/Categories/Categories"
import Rooms from "../../components/Rooms/Rooms"

const Home = () => {
  return (
    <div>
    <Helmet>
      <title>StayVista | Vacation Homes & Condo Rentals</title>
    </Helmet>
      {/* category section */}
      <Categories></Categories>
      {/* room section */}
      <Rooms></Rooms>
    </div>
  )
}

export default Home
