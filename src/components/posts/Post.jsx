import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Post.css'
import { Users } from '../../Data';
import { useState } from 'react';

const Post = ({post}) => {
  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)

  const handleLikes = () => {
    setLike(isLiked? like-1 : like+1)
    setIsLiked(!isLiked)
  }

  const getUser = Users.filter(user => user.id === post?.userId)[0]


  return (
    <div className='post'>
      <div className="post-wrapper">
        <div className="post-top">
            <div className="post-top-left">
                <img 
                    src={getUser.profilePicture} 
                    alt="profile" 
                    className="profile-picture" 
                />
                <span className="post-username">{getUser.username}</span>
                <span className="post-date">{post.date}</span>
            </div>
            <div className="post-top-right">
                <MoreVertIcon/>
            </div>
        </div>

        {/* Post text */}
        <div className="post-middle">
            <span className="post-text">{post?.desc}</span>
            <img 
                src={post.photo}
                alt="post 1"
                className='post-img'
             />
        </div>
        <div className="post-bottom">
            <div className="post-bottom-left">
                <img src="/assets/like.png" alt="" onClick={handleLikes} className="like-icon" />
                <img src="/assets/heart.png" alt="" onClick={handleLikes} className="like-icon" />
                <span className="like-counter">{like} likes</span>
            </div>

            <div className="post-bottom-left">
                <span className="post-comments">{post.comment} comments</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Post
