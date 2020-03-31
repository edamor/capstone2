import React, { useState } from 'react';
import './css/style.css';
import loginLogo from '../../images/weightlifting.png';


function LoginForm(props) {
   let usersAPI = "http://localhost:8080/users";

   let [username, setUsername] = useState("");
   let [password, setPassword] = useState("");

   let unChangeHandler = (e) => {
      setUsername(e.target.value.trim())
   }

   let pwChangeHandler = (e) => {
      setPassword(e.target.value.trim())
   }

   let userLoginHandler = () => {
      let user = {
         username,
         password
      }
      fetch(usersAPI + "/login", {
         method: 'post',
         headers: {
            'Content-type': 'application/json'
         },
         body: JSON.stringify(user)
      })
         .then(res => res.json())
         .then(data => {
            // localStorage.setItem("userRole", data.username);
            console.log(data);
            localStorage.setItem("currentUser", data);
            props.loginHandler(true);
         })
         .catch(e => {
            alert("Login Failed")
         })
   }


   return (
      <React.Fragment>
         <div className="loginForm jumbotron">
            <form>
               <div className="form-group">
                  <div className="input-group">
                     <div className="input-group-prepend">
                        <div className="input-group-text"><i className="fas fa-user"></i></div>
                     </div>
                     <input className="form-control"
                        type="text"
                        autoComplete="false"
                        placeholder="username"
                        value={username}
                        onChange={unChangeHandler} />
                  </div>
               </div>
               <div className="form-group">
                  <div className="input-group">
                     <div className="input-group-prepend">
                        <div className="input-group-text"><i className="fas fa-lock"></i></div>
                     </div>
                     <input className="form-control"
                        type="password"
                        autoComplete="false"
                        placeholder="password"
                        value={password}
                        onChange={pwChangeHandler} />
                     </div>
               </div>
               <div className="form-group pt-3">
                  <button 
                     className="loginBtn btn btn-block"
                     type="button"
                     onClick={userLoginHandler}
                     >login
                  </button>
                  <p className="registerText">
                     Not a member? 
                     <span className="registerLink ml-2" onClick={props.toggleRegForm}>
                        Sign up here
                     </span>
                  </p>
                  </div>
            </form>
         </div>
      </React.Fragment>
   )
}

export default LoginForm;