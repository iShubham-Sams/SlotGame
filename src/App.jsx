import React from 'react';
import './index.css';


const SlotM =(props)=>{
  let x=props.x;
  let y=props.y;
  let z=props.z;
  if(x===y && y===z){
    return(
      <div className='slot_inner'>
        <h1>{x} {y} {z}</h1>
        <h1>this is matching</h1>
        <hr/>
      </div>
    )

    
  }else{
    return(
    <div className='slot_inner'>
      <h1>{x} {y} {z}</h1>
      <h1>this is notmatching</h1>
      
      <hr/>
    </div>
  )}
}




function App() {
  return (
    <>
      <h1 className='heading_style'> π° welcom to <span style={{fontWeight:'bold'}}>slot machine gameπ° </span></h1>
      <div className='slotMachine'>
      <SlotM x='β€'
        y='β€'
        z='β€'
      />
      <SlotM x='π'
        y='π±βπ'
        z='β'
      />
      <SlotM x='πΆ'
        y='β'
        z='β€'
      />
      </div>
    </>
 
  );
}

export default App;


