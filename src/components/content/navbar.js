import snkrs from '../assets/images/snkrs.jpg';
function Navbar() {
    return (
        <div>
        <div>
<ul className="list-group ">
  <li className="list-group-item navbarLeft">NEW RELEASES </li>
  <li className="list-group-item navbarLeft">JORDAN</li>
  <li className="list-group-item navbarLeft"> SB DUNK</li>
  <li className="list-group-item navbarLeft">AIR MAX</li>
  <li className="list-group-item navbarLeft">AIR FORCE</li>
  <li className="list-group-item navbarLeft">FLYKINIT</li>
  <li className="list-group-item navbarLeft">AIR PEGASUS</li>
</ul>
</div>
<div>
<img className='mt-4' src={snkrs} width="95%" alt="snkrs QR"/>
        </div>
        </div>
    )
}
export default Navbar;