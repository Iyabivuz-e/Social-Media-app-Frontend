import './Friends.css'

const Friends = ({friend}) => {
  return (
    <>
      <li className="sidebar-friend">
            <img src={friend.profilePicture} alt="" className="sidebar-friend-img" />
            <span className="sidebar-friend-name">{friend.username}</span>
          </li>
    </>
  )
}

export default Friends
