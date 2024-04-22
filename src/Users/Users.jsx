import { useLoaderData } from "react-router-dom";
import User from "./User";
import '../Users/User.css'
const Users = () => {
    const users = useLoaderData()
    console.log(users)
    return (
        <div>
            <h1 className="heading">Users</h1>
            <div className="container">
            {
                users && users.map((user)=><User key={user.id} user = {user}/>)
            }
            </div>
        </div>
    );
};

export default Users;