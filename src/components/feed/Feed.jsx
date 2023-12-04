import Post from '../posts/Post'
import Share from '../share/Share'
import './Feed.css'
import {Posts} from '../../Data'

const Feed = () => {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>

        {Posts.map((post) => (
          <Post key={post.id} post={post}/>
        ))}

      </div>
    </div>
  )
}

export default Feed
