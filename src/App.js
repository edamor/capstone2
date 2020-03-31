import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './pages/Login/Index';
import MainPage from './pages/Main/Index';



function App() {

  let [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("currentUser") ? true : false);

  let logoutHandler = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  }

  let loginHandler = (e) => {
    setIsLoggedIn(e)
  }


  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/">
            {
              isLoggedIn ? <Redirect to="/user" /> 
              : 
              (props) => <LoginPage {...props} loginHandler={loginHandler} />
            }
          </Route>
          <Route path="/user">
            {
              (props) =>
              <MainPage
                {...props}
                logoutHandler={logoutHandler}
                isLoggedIn={isLoggedIn}
              />
            }
          </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
