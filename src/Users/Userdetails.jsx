import { useLoaderData, useNavigate } from "react-router-dom";
const Userdetails = () => {
    const user = useLoaderData()
    const navigate = useNavigate()
    console.log(user)
    const {name,email,address,company} = user;
    return (
        <div className="card-details">
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{address.city} {address.street}</p>
            <p>{address.zipcode}</p>
            <p>{company.bs}</p>
            <p>{company.name}</p>
            <button onClick={()=>navigate(-1)}>❌</button>
        </div>
    );
};

export default Userdetails;