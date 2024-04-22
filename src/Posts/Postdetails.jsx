import { useLoaderData, useNavigate } from "react-router-dom";

const Postdetails = () => {
    const post = useLoaderData()
    const navigate = useNavigate()
    const {title,body,userId} = post;
    return (
            <div className='card-details'>
            <h1>{title}</h1>
            <p>{body}</p>
            <p>{userId}</p>
            <button onClick={()=>navigate(-1)}>Go Back</button>
        </div>
    );
};

export default Postdetails;