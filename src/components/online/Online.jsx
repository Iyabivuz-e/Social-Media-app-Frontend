import './Online.css'

const Online = ({user}) => {
  return (
    <>
      <li className="rightbar-friend">
            <div className="rightbar-profile-container">
              <img 
                src={user.profilePicture} 
                alt="" 
                className="rightbar-profile"
               />
               <span className="rightbar-online"></span>
            </div>
            <span className="username">{user.username}</span>
          </li>
    </>
  )
}

export default Online
