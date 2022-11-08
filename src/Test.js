import React from 'react';
import axios from 'axios';





  // axios.get('test/home.do')
  // .then((Response)=>{
  //   if(Response.data === 'ok'){
  //     alert("ok");
  //     window.location.href = "http://www.google.com";
  //   }
    
    
  // })
  // .catch((Error)=>{console.log(Error)})

export function Test(){

  axios.get('test/hashMap.do')
  .then((Response)=>{
    console.log(Response.data);
  })
  .catch((Error)=>{console.log(Error)})
  
  console.log("TestPage");
  return (
    <div>
      <h1>Test</h1>
    </div>
  );
}