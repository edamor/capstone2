import React from "react";
import { Redirect, Route } from 'react-router-dom';
import Navbar from '../../components/NavBar/Index';
import WelcomeBox from '../../components/members/WelcomeMsg/Index';
import ComingSoonBox from '../../components/Temp/Index';
import './css/style.css';


function MainPage(props) {

   

   return (
      <React.Fragment>
         {
            !props.isLoggedIn ? 
            <Redirect to="/" />
            :
            <div className="mainPageWrap">
               <Navbar logoutHandler={props.logoutHandler} />
               <Route path="/">
                  <ComingSoonBox />
               </Route>
            </div>
         }
      </React.Fragment>
   )
}


export default MainPage;