import React from "react";
import Form from "./components/Form.js";

var userIsRegistered = true;

function App(){ 
   return (
    <div>
          <Form 
          isRegistered ={userIsRegistered} 
          />
   </div>
    );
}



export default App;
