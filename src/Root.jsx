import { Outlet } from "react-router-dom";
import Nav from "./ProductsList/Nav";
import Footer from "./ProductsList/Footer";




const Root = () => {
    return (
        <div>
              <Nav></Nav>
              <Outlet></Outlet>
              <Footer></Footer>


            
        </div>
    );
};

export default Root;