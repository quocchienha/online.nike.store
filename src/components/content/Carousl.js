import { Carousel } from 'react-responsive-carousel'; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
import Carousel1 from '../assets/images/carousel1.jpg';
import Carousel2 from '../assets/images/carousel2.jpg';
import Carousel3 from '../assets/images/carousel3.jpg';

function carousel(){
    return(
<Carousel autoPlay="false" width="100%" interval="1500" infiniteLoop="false">  
                <div>  
                    <img  src={Carousel1} alt='carousel1'/>  
                    <p className="legend">ZION 2</p>  
                </div>  
                <div>  
                    <img src={Carousel2} alt='carousel2'/>  
                    <p className="legend">ZOOM FREAK 4</p>  
                </div>  
                <div>  
                    <img src={Carousel3} alt='carousel3'/>  
                    <p className="legend">JORDAN</p>  
                </div>  
            </Carousel>  
    )
}
export default carousel;