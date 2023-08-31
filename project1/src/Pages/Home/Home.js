import{Link} from 'react-router-dom'
import Nav from '../../Component/Navigation/Navigate'
import "./Home.css"
import HomeDetail from"./sub/HomeDetail/HomeDetail"
import PageButton from "./sub/Button/Button"
import Customer from './sub/Customer/Customer'
import Special from './sub/special/special'

function Home()
{
return(
    <div className="Home">
      <HomeDetail/>
      <PageButton/>
      <Special/>
      <Customer/>      
     
    </div>
)
}
export default Home
