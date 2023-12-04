import './Rightbar.css'
import { Users } from '../../Data'
import Online from '../online/Online'

const Rightbar = ({profile}) => {

  const HomeRightBar = () => {
    return (
      <>
        <div className="birthday-container">
          <img 
          src="/assets/gift.png" 
          alt="" 
          className="birthday-img" />
          <span 
          className="birthday-text">
            <strong>Dona Tello</strong> and <strong> 3 other friends</strong> have a birthday today.
            </span>
        </div>
        <img src="/assets/ad.png" alt="" className="advert" />
        <h4 className="rightbar-title">Online Friends</h4>
        <ul className="rightbar-friend-list">
          {
            Users.map((user) => (
              <Online key={user.id} user={user}/>
            ))
          }
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return(

      <>
        <h4 className='user-info-title'>User Information</h4>
        <div className="rightbar-info">
          <span className="rightbar-info-key">City:</span>
          <span className="rightbar-info-value">New York</span>
        </div>
        <div className="rightbar-info">
          <span className="rightbar-info-key">From:</span>
          <span className="rightbar-info-value">Madrid</span>
        </div>
        <div className="rightbar-info">
          <span className="rightbar-info-key">Status:</span>
          <span className="rightbar-info-value">Single</span>
        </div>


        <h4 className='user-info-title'>User friends</h4>
        <div className="rightbar-followings">
          <div className="right-bar-following">
            <img 
              src="/assets/person/1.jpeg" 
              alt="" 
              className="rightbar-following-img" 
              />
              <span className="rightbar-following-name">Donatello</span>
          </div>
          <div className="right-bar-following">
            <img 
              src="/assets/person/2.jpeg" 
              alt="" 
              className="rightbar-following-img" 
              />
              <span className="rightbar-following-name">Donatello</span>
          </div>
          <div className="right-bar-following">
            <img 
              src="/assets/person/3.jpeg" 
              alt="" 
              className="rightbar-following-img" 
              />
              <span className="rightbar-following-name">Donatello</span>
          </div>
          <div className="right-bar-following">
            <img 
              src="/assets/person/4.jpeg" 
              alt="" 
              className="rightbar-following-img" 
              />
              <span className="rightbar-following-name">Donatello</span>
          </div>
          <div className="right-bar-following">
            <img 
              src="/assets/person/5.jpeg" 
              alt="" 
              className="rightbar-following-img" 
              />
              <span className="rightbar-following-name">Donatello</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbar-wrapper">
        {profile? <ProfileRightbar/>: <HomeRightBar/>}
      </div>
    </div>
  )
}

export default Rightbar
