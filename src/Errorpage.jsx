import { useNavigate, useRouteError } from "react-router-dom";
const Errorpage = () => {
    const error = useRouteError()
    const navigate = useNavigate()
    console.log(error)
   
    return (
        <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <button onClick={()=>navigate(-1)}>Go Back</button>
      </div>
    );
};

export default Errorpage;