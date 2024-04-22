import  PropTypes  from 'prop-types';
import { useNavigate } from 'react-router-dom';
const User = ({user}) => {
    // console.log(user)
    const navigate = useNavigate()
    const {name,phone,website,email,id} = user;
    return (
        <div className='card'>
            <h3>{name}</h3>
            <p>{phone}</p>
            <p>{website}</p>
            <p>{email}</p>
            <button onClick={()=>navigate(`${id}`)}>Show details</button>
        </div>
    );
};

User.propTypes = {
    user:PropTypes.object.isRequired
}

export default User;