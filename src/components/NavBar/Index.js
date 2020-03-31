import React from 'react';
import './css/style.css';


function Navbar(props) {


   return (
      <React.Fragment>
         <div className="navWrap d-flex w-100">
            <ul>
               <li>
                  Equipments
               </li>
               <li>
                  Activities
               </li>
            </ul>
            <button className="logoutNavBtn" onClick={props.logoutHandler}>
               logout
            </button>

         </div>
      </React.Fragment>
   )
   
}

export default Navbar;