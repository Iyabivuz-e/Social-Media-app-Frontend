import Topbar from "../../components/topbar/Topbar"
import Leftbar from '../../components/leftbar/Leftbar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import './Home.css'


const Home = () => {
  return (

    <>
      <Topbar/>
      <div className="home-container">
        <Leftbar/>
        <Feed/>
        <Rightbar/>
      </div>
    </>
  )
}

export default Home
