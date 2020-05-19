import React from 'react';
import './css/style.css';


function Navbar(props) {


   return (
      <React.Fragment>
         <div className="navWrap d-flex w-100">
            <ul>
               <li>
                  Home
               </li>
               <li>
                  Equipments
               </li>
               <li>
                  My Activity
               </li>
            </ul>
            <p className="logoutNavBtn secondFont" onClick={props.logoutHandler}>
               logout
            </p>

         </div>
      </React.Fragment>
   )
   
}

export default Navbar;