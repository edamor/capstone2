import React, { useState } from 'react';
import LoginForm from '../../components/LoginForm/Index';
import RegisterMemberForm from '../../components/members/RegistrationForm/Index';
import './css/style.css';


function LoginPage(props) {

   let [isRegFormVisible, setIsRegFormVisible] = useState(false);

   let toggleRegForm = () => {
      setIsRegFormVisible(!isRegFormVisible)
   }

   let showForm = (props) => (
      !isRegFormVisible ?
         <LoginForm {...props} loginHandler={props.loginHandler}  toggleRegForm={toggleRegForm} /> 
      : 
         <RegisterMemberForm toggleRegForm={toggleRegForm} />
   )
   


   return (
      <React.Fragment>
         <div className="loginPage row m-0">
            {showForm(props)}
         </div>
      </React.Fragment>
   )
}


export default LoginPage;