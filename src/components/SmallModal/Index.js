import React from 'react';
import './css/style.css';


function SmallModal({isOpen, toggle, content}) {

   
   
   
   return (
      <React.Fragment>
         { 
            isOpen ?
            <div className="smModalWrap" onClick={toggle} >
               <div className="smModalOverlay" ></div>
               <div className="smModalContent">
                  <p className="smModalText">
                     {content}
                  </p>
               </div>
            </div>
            :
            <div></div>
         }
      </React.Fragment>
   )
}


export default SmallModal;