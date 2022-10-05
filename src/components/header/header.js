
  
import './header.css';
import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
function Header () {
    var FontAwesome = require('react-fontawesome');
    return (
        <div>
            <div>
            <nav className=" navbar nav">
  <div className="container">
  
   <h3><strong><i className="mx-3 mt-3 fas fa-house"></i> Devecamp</strong></h3>
    <form className="col-sm-5 d-flex mx-5" role="search">
      <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
      <button className="me-3 mx-3 btn btn-outline-light">Search</button>
    </form>
    <div className ='mx-3'>
    <i className=" mx-3 fas fa-heart"></i>&nbsp;<i className="mx-3 fa-solid fa-cart-plus"></i>
        <button className = 'mx-2 btn btn-outline-light'>Sign In <FontAwesome
        name='star'
        spin
      /></button>
    </div>
  </div>
</nav>
</div>
</div>
    )
}
export default Header;