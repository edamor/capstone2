import React, { useState } from 'react';
import SmallModal from '../../SmallModal/Index';
import './css/style.css';

function RegistrationForm(props) {
   let [first_name, setFirstname] = useState("");
   let [last_name, setLastname] = useState("");
   let [username, setUsername] = useState("");
   let [password, setPassword] = useState("");
   let [confirmpassword, setConfirmPassword] = useState("");

   let [validator, setValidator] = useState(true);
   let [usernameExists, setUsernameExists] = useState();

   let [modalMsg, setModalMsg] = useState("success!")


   let fnValidationHandler = (e) => {
      if (first_name === "") {
         setValidator(true);
         document.querySelector("#regFirstname").style.visibility = "visible";
      } else {
         document.querySelector("#regFirstname").style.visibility = "hidden";
      }
   }

   let lnValidationHandler = (e) => {
      if (last_name === "") {
         setValidator(true);
         document.querySelector("#regLastname").style.visibility = "visible";
      } else {
         document.querySelector("#regLastname").style.visibility = "hidden";
      }
   }

   let unValidationHandler = (e) => {
      if (username === "") {
         console.log(username)
         console.log(e.target)
         setValidator(true);
         document.querySelector("#regUsername").style.visibility = "visible";
         document.querySelector("#regUsername").innerHTML = "*This field is required";
      } else if (usernameExists) {
         document.querySelector("#regUsername").innerHTML = "*Username already exists";
         document.querySelector("#regUsername").style.visibility = "visible";
      } else {
         document.querySelector("#regUsername").style.visibility = "hidden";
         regBtnValidationHandler();
      }
   }

   let pwValidationHandler = () => {
      if (password === "") {
         setValidator(true);
         document.querySelector("#regPassword").style.visibility = "visible";
         document.querySelector("#regPassword").innerHTML =
            "*This field is required";
      }
      if (password !== "" && confirmpassword !== "") {
         if (password !== confirmpassword) {
            setValidator(true);
            document.querySelector("#regConfirmPW").style.visibility = "visible";
            document.querySelector("#regConfirmPW").innerHTML =
               "***Passwords do not match";
            document.querySelector("#regPassword").style.visibility = "visible";
            document.querySelector("#regPassword").innerHTML =
               "***Passwords do not match";
         } else {
            document.querySelector("#regConfirmPW").style.visibility = "hidden";
            document.querySelector("#regPassword").style.visibility = "hidden";
         }
      }
   };

   let cpwValidationHandler = () => {
      if (confirmpassword === "") {
         setValidator(true);
         document.querySelector("#regConfirmPW").style.visibility = "visible";
         document.querySelector("#regConfirmPW").innerHTML =
            "*This field is required";
      }
      if (confirmpassword !== "") {
         if (password !== confirmpassword) {
            setValidator(true);
            document.querySelector("#regConfirmPW").style.visibility = "visible";
            document.querySelector("#regConfirmPW").innerHTML =
               "***Passwords do not match";
            document.querySelector("#regPassword").style.visibility = "visible";
            document.querySelector("#regPassword").innerHTML =
               "***Passwords do not match";
         } else {
            document.querySelector("#regConfirmPW").style.visibility = "hidden";
            document.querySelector("#regPassword").style.visibility = "hidden";
         }
      }
   };


   let regBtnValidationHandler = () => {
      if (first_name !== "" &&
         last_name !== "" &&
         username !== "" &&
         password !== "" &&
         confirmpassword !== "" &&
         usernameExists !== true) {
         setValidator(false);
      } else setValidator(true);
   }


   let firstnameChangeHandler = (e) => {
      if (e.target.value.trim() !== "") {
         setFirstname(e.target.value);
         regBtnValidationHandler();
      } else setFirstname("")
   }

   let lastnameChangeHandler = (e) => {
      if (e.target.value.trim() !== "") {
         setLastname(e.target.value);
         regBtnValidationHandler();
      } else setLastname("")
   }

   let checkIfUsernameExists = (un) => {
      fetch('http://localhost:8080/users/username/' + un)
         .then(res => res.json())
         .then(data => {
            setUsernameExists(data);
            if (data) {
               document.querySelector("#regUsername").innerHTML =
                  "*Username already exists";
               document.querySelector("#regUsername").style.visibility = "visible";
               setValidator(data);
            }
            else {
               document.querySelector("#regUsername").style.visibility = "hidden";
               document.querySelector("#regUsername").innerHTML =
                  "*This field is required";
            }
         })
   }

   let usernameChangeHandler = (e) => {
      if (e.target.value.trim() !== "") {
         setUsername(e.target.value);
         checkIfUsernameExists(e.target.value.trim())
         regBtnValidationHandler();
      } else {
         setUsername("")
      }
   }



   let passwordChangeHandler = (e) => {
      if (e.target.value.trim() !== "") {
         setPassword(e.target.value);
         regBtnValidationHandler();
      } else setPassword("")
   }

   let confirmPasswordChangeHandler = (e) => {
      if (e.target.value.trim() !== "") {
         setConfirmPassword(e.target.value);
         regBtnValidationHandler();
      } else setConfirmPassword("")
   }



   let registerBtnClickHandler = (e) => {
      let member = {
         username,
         password,
         first_name,
         last_name
      }
      fetch("http://localhost:8080/users/register/member", {
         method: 'post',
         headers: {
            'Content-type': 'application/json',
         },
         body: JSON.stringify(member)
      })
         .then(res => res.json())
         .then(data => {
            setModalMsg("success!");
            toggleModal()
            
         })
         .catch(e => {
            console.log(e);
            setModalMsg("sign up failed");
            toggleModal();
         })

      setUsername("")
      setPassword("")
      setConfirmPassword("")
      setFirstname("")
      setLastname("")
   }

   let [openModal, setOpenModal] = useState(false);

   let toggleModal = () => {
      if (openModal) {
         setOpenModal(!openModal);
         props.toggleRegForm();
      } else {
         setOpenModal(!openModal);
      }
   }


   
   return (
      <React.Fragment>
      <div className="regFormWrap py-4">
         <form className="col-12 col-md-8 mx-auto ">
            <div className="form-group text-center">
               <h2>Registration</h2>
            </div>
            <div className="form-group text-left">
               <div>
                  <input 
                     className="form-control"
                     type="text"
                     id="username"
                     autoComplete="off"
                     onBlur={unValidationHandler}
                     onChange={usernameChangeHandler}
                     value={username}
                     placeholder="Pick a unique username..."
                  />
                  <small id="regUsername" style={{ "visibility": "hidden" }}>
                     *This field is required
                  </small>
               </div>
               <div>
                  <input 
                     className="form-control"
                     type="text"
                     id="firstname"
                     autoComplete="off"
                     onBlur={fnValidationHandler}
                     onChange={firstnameChangeHandler}
                     value={first_name}
                     placeholder="First Name..."
                  />
                  <small id="regFirstname" style={{ "visibility": "hidden" }}>
                     *This field is required
                  </small>
               </div>
               <div>
                  <input 
                     className="form-control"
                     type="text"
                     id="lastname"
                     autoComplete="off"
                     onBlur={lnValidationHandler}
                     onChange={lastnameChangeHandler}
                     value={last_name}
                     placeholder="Last Name..."
                  />
                  <small id="regLastname" style={{ "visibility": "hidden" }}>
                     *This field is required
                  </small>
               </div>
               <div>
                  <input 
                     className="form-control"
                     type="password"
                     id="password"
                     autoComplete="off"
                     onBlur={pwValidationHandler}
                     onChange={passwordChangeHandler}
                     value={password}
                     placeholder="Choose a password..."
                  />
                  <small id="regPassword" style={{ "visibility": "hidden" }}>
                     *This field is required
                  </small>
               </div>
               <div>
                  <input 
                     className="form-control"
                     type="password"
                     id="confirmpassword"
                     autoComplete="off"
                     onBlur={cpwValidationHandler}
                     onChange={confirmPasswordChangeHandler}
                     value={confirmpassword}
                     placeholder="Confirm chosen password..."
                  />
                  <small id="regConfirmPW" style={{ "visibility": "hidden" }}>
                     ***Passwords do not match
                  </small>
               </div>
            </div>
            <div className="form-group">
               <button 
                  className="btn btn-block form-control"
                  id="regBtn"
                  onClick={registerBtnClickHandler}
                  disabled={validator}
                  type="button"
                  >submit
               </button>
               <p className="registerText">
                  Already a member? 
                  <span className="registerLink ml-2" onClick={props.toggleRegForm}>
                     Sign in here
                  </span>
               </p>
            </div>
         </form>
         <SmallModal isOpen={openModal} toggle={toggleModal} content={modalMsg} />
      </div>
      </React.Fragment>
   )
}



export default RegistrationForm;