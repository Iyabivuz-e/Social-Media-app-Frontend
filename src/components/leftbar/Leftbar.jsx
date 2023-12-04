import './Leftbar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import HelpIcon from '@mui/icons-material/Help';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Users } from '../../Data';
import Friends from '../Friends/Friends';


const Leftbar = () => {
  return (
    <div className='leftbar'>
      <div className="side-wrapper">
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <RssFeedIcon className='feed-icon'/>
            <span className="sidebar-text">Feed</span>
          </li>
          <li className="sidebar-item">
            <ChatIcon className='feed-icon'/>
            <span className="sidebar-text">Chats</span>
          </li>
          <li className="sidebar-item">
            <PlayCircleIcon className='feed-icon'/>
            <span className="sidebar-text">Videos</span>
          </li>
          <li className="sidebar-item">
            <PeopleIcon className='feed-icon'/>
            <span className="sidebar-text">Group</span>
          </li>
          <li className="sidebar-item">
            <WorkIcon className='feed-icon'/>
            <span className="sidebar-text">Jobs</span>
          </li>
          <li className="sidebar-item">
            <SchoolIcon className='feed-icon'/>
            <span className="sidebar-text">Courses</span>
          </li>
          <li className="sidebar-item">
            <EventIcon className='feed-icon'/>
            <span className="sidebar-text">Events</span>
          </li>
          <li className="sidebar-item">
            <HelpIcon className='feed-icon'/>
            <span className="sidebar-text">Questions</span>
          </li>
          <li className="sidebar-item">
            <BookmarkIcon className='feed-icon'/>
            <span className="sidebar-text">Bookmark</span>
          </li>
        </ul>
        {/* Show more button */}
        <button className="sidebar-button">Show More</button>
        <hr className="showmore-hr" />
        <ul className="sidebar-friend-list">
          {Users.map((friend) => 
            <Friends key={friend.id} friend={friend}/>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Leftbar
