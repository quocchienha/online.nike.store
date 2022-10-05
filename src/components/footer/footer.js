
import './footer.css'
import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
function Footer (){
    var FontAwesome = require('react-fontawesome');
    return (
        <div>
<div className="row jumbotron footer">
  <div className='footerContent'>
<i className="fa-brands fa-facebook fa-2x"></i>&nbsp;&nbsp;
<i className="fa-brands fa-instagram fa-2x"></i>&nbsp;&nbsp;
<i className="fa-brands fa-telegram fa-2x"></i>&nbsp;&nbsp;
<i className="fa-brands fa-twitter fa-2x"></i>&nbsp;&nbsp;
<i className="fa-brands fa-viber fa-2x"></i>&nbsp;&nbsp;
<h1 className='mt-3'>DEVCAMP <FontAwesome
        name='star'
        spin
      /></h1>
      <p>_____________________________________________</p>
</div>

<div className='row textFooter'>
    <div className='col-sm-3'>
    <ul className=" list-group-flush">
        <h4>Air Jordan</h4>
  <li className="list-group-item">Air Jordan 1</li>
  <li className="list-group-item">Air Jordan</li>
  <li className="list-group-item">Womens Jordans</li>
  <li className="list-group-item">Air Jordan 4</li>
  <li className="list-group-item">Air Jordan 11</li>
  <li className="list-group-item">Jordan 1 Mid</li>
</ul>
    </div>
    <div className='col-sm-3'>
    <ul className=" list-group-flush">
        <h4>Yeezy</h4>
  <li className="list-group-item">Yeezy Boost 350</li>
  <li className="list-group-item">Yeezy Boost 350 V2</li>
  <li className="list-group-item">Yeezy Boost 700</li>
  <li className="list-group-item">Yeezy Boots</li>
  <li className="list-group-item">Yeezy Slides</li>
  <li className="list-group-item">Yeezy Foam RNNR</li>
</ul>
    </div>
    <div className='col-sm-3'>
    <ul className=" list-group-flush">
        <h4>Recent Updates</h4>
  <li className="list-group-item">Best Sneakers</li>
  <li className="list-group-item">Air Jordan</li>
  <li className="list-group-item">Charts</li>
  <li className="list-group-item">Hoka Shoes</li>
  <li className="list-group-item">Xbox Series X</li>
  <li className="list-group-item">Salomon Shoes</li>
</ul>
    </div>
    <div className='col-sm-3'>
    <ul className=" list-group-flush">
        <h4>Nike</h4>
  <li className="list-group-item">Nike Dunk</li>
  <li className="list-group-item">Nike Blazer</li>
  <li className="list-group-item">Nike Air Force 1</li>
  <li className="list-group-item">Women's Air Force 1s</li>
  <li className="list-group-item">Women's Nike Dunks</li>
  <li className="list-group-item">Women's Nike Shoes</li>
</ul>
    </div>

</div>
</div>
        </div>
    )
}
export default Footer;