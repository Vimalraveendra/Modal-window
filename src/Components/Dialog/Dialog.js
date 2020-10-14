import React from 'react';
import './Dialog.css'

const Dialog = ({title,subTitle,isOpen})=>{
    
    return isOpen?(
    <div className='modal'>
 <div className="modal-content" action="/action_page.php">
    <div className="container">
      <h1>{title}</h1>
      <p>{subTitle}</p>
    
      <div className="clearFix">
        <button type="button"  className="cancelBtn">Cancel</button>
        <button type="button"  className="deleteBtn">Delete</button>
      </div>
    </div>
  </div>
  </div>
    ):null
}

export default Dialog;