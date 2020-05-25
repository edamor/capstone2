import React from 'react';
import './css/style.css';
import { Link } from 'react-router-dom';


function Navbar(props) {


   return (
      <React.Fragment>
         <div className="navWrap d-flex w-100">
            <ul>
               <Link to="/user/home">
                  <li>
                     Home
                  </li>
               </Link>
               <Link to="/user/equipment">
                  <li>
                     Equipments
                  </li>
               </Link>
               <Link to="/user/activity">
                  <li>
                     My Activity
                  </li>
               </Link>
            </ul>
            <p className="logoutNavBtn secondFont" onClick={props.logoutHandler}>
               logout
            </p>

         </div>
      </React.Fragment>
   )
   
}

export default Navbar;