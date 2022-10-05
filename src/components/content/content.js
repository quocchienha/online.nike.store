import './content.css';
import Carousel from "./Carousl";
import Navbar from './navbar';
import Shop from './shop';
import ViewButton from './view';
function Content (){
    return(
        <div className="row ">
            <div className="mx-4 col-sm-2">
            <Navbar></Navbar>
            </div>
         <div className="col-sm-9">
<Carousel></Carousel>
<Shop></Shop>
<ViewButton></ViewButton>
        </div>
        </div>
        
    )
}
export default Content;