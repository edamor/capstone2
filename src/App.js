import React, { useState } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
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
              isLoggedIn ?
                (props) =>
                <MainPage
                  {...props}
                  logoutHandler={logoutHandler}
                  isLoggedIn={isLoggedIn}
                />
              :
                <Redirect to ="/" />
            }
          </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
