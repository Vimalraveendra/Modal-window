import React,{useState} from 'react';
import Dialog from './Components/Dialog/Dialog'
import './App.css';

const  App=()=> {
  const [isOpen,setIsOpen]=useState(false)
  const openWindow = () =>{
    
    setIsOpen(!isOpen)
  }
  return (
    <div className="App">
      <header className="App-header">
         <h3>Modal window</h3>
         
      </header>
      <button type='button' onClick={openWindow}>Delete</button>
      <Dialog title={'Confirm'} subTitle={'Are you sure you want to delete ?'} isOpen={isOpen} openWindow={openWindow}/>
    </div>
  );
}

export default App;
