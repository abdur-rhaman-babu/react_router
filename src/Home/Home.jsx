import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { RotatingLines } from "react-loader-spinner";
import { render } from "react-dom";

const Home = () => {
    const navigation = useNavigation()
    
    return (
        <div>
            <Header/>
            {
                navigation.state === 'loading' ? <div>render(<RotatingLines
                    visible={true}
                    height="96"
                    width="96"
                    color="#000"
                    strokeWidth="5"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    />)</div>:<div style={{minHeight:'60vh'}}>
                <Outlet/>
                </div>
            }
            <Footer/>
        </div>
    );
};

export default Home;