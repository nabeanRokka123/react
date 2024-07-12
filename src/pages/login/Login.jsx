import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { loginApi } from "../../api/Api";



//Make a function (filename)
const Login = () => {
  //space for our logic
  //making state for email and password
  //for storing what we type

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  //state, for storing error message

  const [emailError, setEmailError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  //storing changes to above variables
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  //for password
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  

  // FORM VALIDATION
  const validation = () => {
    //make a state that track if form is valid
    let isValid = true;

    //check email is empty
    if (email === null) {
      
      setEmailError("email is Required!");
      isValid = false;
    }

    //check passwrod is empty
    if (password === "") {
      setpasswordError("passwod is required!");
      isValid = false;
    }
    return isValid;
  };

  // funcrtion for btton

  const handleClickLogin = (e) => {
    //if button is click dont reload
    e.preventDefault();
    console.log('dsds')

    

    //validation
    if (!validation()) {
      return; //stopping the process
    
    }

    //open dashboarrd(only for testing)

    loginApi(email).then((response)=>{
      if(response.data.length===0){
        alert('user Nt found!')
      }
      else if(response.data[0].password!==password){
       alert("Incorrect pasword")
      }
        else{
          alert("login successfull!")
        }
    }).catch((error)=>{
      console.log(error)
      alert('server error!')

    })
  };
  return (
    <div className="login-container">
      
      <h3>Login to your account!</h3>
      <form className="login-form">
        <label htmlFor="email">Email Address:{email}</label>
        <input
          onChange={handleChangeEmail}
          type="email"
          placeholder="Enter your email!"
        />
        <br />

        {/* space for email error messsage */}

        {emailError && <p className="error-text">{emailError}</p>}

        <label htmlFor="password">password</label>
        <input
          onChange={handleChangePassword}
          type="password"
          placeholder="Enter your password!"
        />
        <br />

        {/* space for password error messgae  */}
        {passwordError && <p className="error-text">{passwordError}</p>}

        <p>Forgot your password?</p>
        <button onClick={handleClickLogin} className="login-btn">
          Login
        </button>

        <Link to={'/register'}>Create new account</Link>
      </form>
    </div>
  );
};

export default Login;

//what we did
//1. Loginpage banayam
//2. Implemented css
//3. Make a state for temporary saving (input,error)
//4. Function for changing state
//5. Assigned to respective input (onChange)
//6. Validation (input are empty ?, setting error )
//7. Function for button(prevent page form Reload)
//8. Function - validation (form)
//9. Botton (onlcick - Assigned)

//task 10. make same for Register page \\firstANme lastname email phone and profile.
