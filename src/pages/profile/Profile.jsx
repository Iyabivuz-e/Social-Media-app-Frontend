import Topbar from "../../components/topbar/Topbar"
import Leftbar from '../../components/leftbar/Leftbar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import './Profile.css'

const Profile = () => {
  return (
    <>
      <Topbar/>
      <div className="profile">
        <Leftbar/>
        <div className="profile-right">
            <div className="profile-right-top">
                    <div className="profile-cover-image">
                        <img 
                        src="/assets/post/3.jpeg"
                        alt="" 
                        className="cover-image" 
                        />
                        <img 
                        src="/assets/person/7.jpeg"
                        alt="" 
                        className="profile-user-image" 
                        />
                    </div>
                    <div className="profile-info">
                        <h4 className="profile-username">Dieudonne Iyabivuze</h4>
                        <span className="profile-info-descr">Heeeyoo guys.... How yo dey??</span>
                    </div>
                </div>            
            <div className="profile-right-bottom">
                    <Feed/>
                    <Rightbar profile/>         
                </div>   
            </div>
        </div>
    </>
  )
}

export default Profile
