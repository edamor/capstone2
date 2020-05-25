import React from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
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
               <Switch>
                  <Route path="/home">
                     <ComingSoonBox />
                     <h3>home</h3>
                  </Route>
                  <Route path="/equipment">
                     <ComingSoonBox />
                     <h3>equipments</h3>
                  </Route>
                  <Route path="/activity">
                     <ComingSoonBox />
                     <h3>activity</h3>
                  </Route>
               </Switch>
            </div>
         }
      </React.Fragment>
   )
}


export default MainPage;