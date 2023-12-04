import './Topbar.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonIcon from '@mui/icons-material/Person';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';



const Topbar = () => {
  return (
    <div className='topbar-container'>

      {/* Logo */}
      <div className="topbar-left">
        <span className="logo">Diosocial</span>
      </div>

      {/* Search input */}
      <div className="topbar-middle">
        <div className="search-bar">
          <SearchOutlinedIcon className='search-icon'/>
          <input 
            type="text" 
            className="search-input"
            placeholder='Search for friends, post ,video'
           />
        </div>
      </div>

      {/* Important Links */}
      <div className="topbar-right">
        <div className="topbar-links">
          <span className="topbar-link">Homepage</span>
          <span className="topbar-link">Timeline</span>
        </div>

        {/* Topbar Icon */}
        <div className="topbar-icons">
          <div className="topbar-icon-items">
            <PersonIcon/>
            <span className="topbar-icon-badge">1</span>
          </div>
          <div className="topbar-icon-items">
            <MapsUgcIcon/>
            <span className="topbar-icon-badge">2</span>
          </div>
          <div className="topbar-icon-items">
            <CircleNotificationsIcon/>
            <span className="topbar-icon-badge">1</span>
          </div>
          <img src="/assets/person/1.jpeg" alt="profile-pic" 
            className="topbar-profile-pic" 
            />
        </div>
      </div>
    </div>
  )
}

export default Topbar
