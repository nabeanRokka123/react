import React, {useState} from "react";
import './Register.css'
import { Link } from "react-router-dom";

//making a fucntion Filename

const Register = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [profile, setProfile] = useState('');


  // for storing error massage

  const[firstNameError,setFirstNameError]=useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [profileError, setProfileError] = useState('');


   //storing changes to above variables

   //for Firstname
   const handleChangeFirstName =(e) =>{
    setFirstName(e.target.value)
   }

   //for LastaName
   const handleChangeLastName= (e)=>{
    setLastName(e.target.value);
   };

   //for email error

   const handleChangeEmail=(e)=>{
    setEmail(e.target.value);
   };

   //for phone 
   const handleChangePhone =(e)=>{
    setPhone(e.target.value);
   };

   //for profile pic
   const handleChangeProfile =(e) =>{
    setProfile(e.target.value);
   };

   //Validation

   //make a state that track if form is valid
   
   const VALIDATION = () => {
    let isValid = true;

     // Reset error messages

     setFirstNameError('');
     setLastNameError('');
     setEmailError('');
     setPhoneError('');
     setProfileError('');


  //check firstName is empty
    if (firstName === '') {
      setFirstNameError('First Name is required!');
      isValid = false;
    }
  //check lastName is empty
    if (lastName === '') {
      setLastNameError('Last Name is required!');
      isValid = false;
    }
  //Check email is empty
    if (email === '') {
      setEmailError('Email is required!');
      isValid = false;
    }
  //check phone number is empty
    if (phone === '') {
      setPhoneError('Phone number is required!');
      isValid = false;
    }
  //check profile is empyt
    if (profile === '') {
      setProfileError('Profile picture is required!');
      isValid = false;
    }

    return isValid;
}
  //fucntion for botton
  const handleClickRegister = (e) => {
    e.preventDefault();

    if (!VALIDATION()) {
      return; //stopping the process
    }




    // Logic for handling registration can be added here
  }

  return(
    <div className="register-container">
        <h2>Create a new <spam>account!</spam> </h2>
      <form className="register-form">
        <label htmlFor="firstName">First Name: {firstName}</label>
        <input onChange={handleChangeFirstName} type="text" placeholder="Enter your first name!" />
        {firstNameError && <p className="error">{firstNameError}</p>}
        <br />
        <label htmlFor="lastName">Last Name: {lastName}</label>
        <input onChange={handleChangeLastName} type="text" placeholder="Enter your last name!" />  
        {lastNameError && <p className="error">{lastNameError}</p>}
        <br />
        <label htmlFor="email">Email: {email}</label>
        <input onChange={handleChangeEmail} type="email" placeholder="Enter your email!" /> 
        {emailError && <p className="error">{emailError}</p>}
        <br />
        <label htmlFor="phone">Phone: {phone}</label>
        <input onChange={handleChangePhone} type="tel" placeholder="Enter your phone number!" />
        {phoneError && <p className="error">{phoneError}</p>}
        <br />
        <label htmlFor="profile">Profile Picture</label>
        <input onChange={handleChangeProfile} type="file" accept="image/*" />
        {profileError && <p className="error">{profileError}</p>}
        <br />
        
        <button onClick={handleClickRegister} className="register-btn">Register</button>

        <Link to={'/login'}>Already have an Account? Login here </Link>
      </form>

    </div>
  )

  
}

export default Register

