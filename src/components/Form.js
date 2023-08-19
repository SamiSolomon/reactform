import React from "react";


function Form(props){
    return (
        <div className="container">
        <h1>
            Hello 
        </h1>
        <form className="form">
            <input name="username" placeholder="User Name" />
            <input name="password" placeholder="password" />
           {!props.isRegistered  && <input name="password" placeholder="Confirm password" />}
            <button type="submit">
                  { props.isRegistered ? "Login" : "Register" } 
            </button>
        </form>
        </div>
    )
}


export default Form;