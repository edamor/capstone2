import React from "react";
import { Redirect } from 'react-router-dom';
import Navbar from '../../components/NavBar/Index';


function MainPage(props) {

   let logoutHandler = () => {
      props.logoutHandler();
   }

   return (
      <React.Fragment>
         {
            !props.isLoggedIn ? 
            <Redirect to="/" />
            :
            <Navbar logoutHandler={props.logoutHandler} />
         }
      </React.Fragment>
   )
}


export default MainPage;