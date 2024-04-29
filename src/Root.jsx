import { Outlet } from "react-router-dom";
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Helmet } from "react-helmet-async";
AOS.init();
const Root = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Turio
                </title>
            </Helmet>
            <div className="container mx-auto mb-5">
            <Header></Header>
            </div>
            <div  className="container mx-auto mb-5  min-h-[calc(100vh-80px)]">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;