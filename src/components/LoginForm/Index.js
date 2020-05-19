import React, { useState } from 'react';
import SmallModal from '../SmallModal/Index';
import './css/style.css';


function LoginForm(props) {
   let usersAPI = "http://localhost:8080/users";

   let [username, setUsername] = useState("");
   let [password, setPassword] = useState("");

   let [openModal, setOpenModal] = useState(false);
   let modalContent = "unable to login";

   let toggleModal = () => {
      setOpenModal(!openModal)
   }

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
         .then(res => res)
         .then(data => {
            // localStorage.setItem("userRole", data.username);
            console.log(data);
            localStorage.setItem("currentUser", data);
            props.loginHandler(true);
         })
         .catch(e => {
            toggleModal();
            console.log(e)
         })
   }


   return (
      <React.Fragment>
         <div className="loginFormWrap jumbotron">
            <form className="loginForm">
               <div className="form-group">
                  <div className="input-group">
                     <div className="input-group-prepend">
                        <div className="input-group-text"><i className="fas fa-user"></i></div>
                     </div>
                     <input className="form-control secondFont"
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
                     <input className="form-control secondFont"
                        type="password"
                        autoComplete="false"
                        placeholder="password"
                        value={password}
                        onChange={pwChangeHandler} />
                     </div>
               </div>
               <div className="form-group pt-3">
                  <button 
                     className="loginBtn btn btn-block firstFont"
                     type="button"
                     onClick={userLoginHandler}
                     >SIGN IN
                  </button>
                  <p className="registerText secondFont">
                     Not yet a member? 
                     <span className="registerLink ml-2" onClick={props.toggleRegForm}>
                        Sign up here!
                     </span>
                  </p>
               </div>
            </form>
            <SmallModal isOpen={openModal} toggle={toggleModal} content={modalContent} />
         </div>
      </React.Fragment>
   )
}

export default LoginForm;