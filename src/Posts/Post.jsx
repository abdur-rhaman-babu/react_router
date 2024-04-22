import  PropTypes  from 'prop-types';
import { useNavigate } from 'react-router-dom';
const Post = ({post}) => {
    console.log(post)
    const navigate = useNavigate()
    const {title,body,userId,id} = post;
    return (
        <div className='card'>
            <h1>{title}</h1>
            <p>{body}</p>
            <p>{userId}</p>
            <button onClick={()=>navigate(`${id}`)}>Show More</button>
        </div>
    );
};

Post.propTypes = {
    post:PropTypes.object.isRequired
}

export default Post;