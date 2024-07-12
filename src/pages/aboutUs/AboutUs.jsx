import React, { useState } from "react";
import { registerApi } from "../../api/Api";

const AboutUs = () => {
  //making usestate for each input
  // Making state for input fields

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [profile, setProfile] = useState(null);

  // State for storing error messages
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [profileError, setProfileError] = useState("");

  // Storing changes to above variables
  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeProfile = (e) => {
    setProfile(e.target.files[0]);
  };

  // Form validation
  const validation = () => {
    let isValid = true;

    if (firstName === "") {
      setFirstNameError("First Name is Required!");
      isValid = false;
    } else {
      setFirstNameError("");
    }

    if (lastName === "") {
      setLastNameError("Last Name is Required!");
      isValid = false;
    } else {
      setLastNameError("");
    }

    if (email === "") {
      setEmailError("Email is Required!");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (phone === "") {
      setPhoneError("Phone Number is Required!");
      isValid = false;
    } else {
      setPhoneError("");
    }

    if (password.length < 6) {
      setPasswordError("Password must be 6 charcter");
      isValid = false;
    }
    //submit function

    if (profile === null) {
      setProfileError("Profile is Required!");
      isValid = false;
    } else {
      setProfileError("");
    }

    return isValid;
  };

  // Function for button
  const handleClickRegister = (e) => {
    // e = event
    e.preventDefault();
    if (!validation()) {
      return; // stopping the process
    }

    // Registration logic here

    // now, form is valid
    //data -json
    //making json /key : value /key should be match to db

    const data = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password,
      phone: phone,
    };
    //Calling Api

    registerApi(data)
      .then((response) => {
        console.log(response);

        if (response.status === 201) {
          alert("user created successfull!");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("server error");
        //???
      });
  };

  return (
    <div className="container m-3  d-flex">
      <div className="container w-50 "></div>
      <div className="container w-50">
        <h3>
          {" "}
          <span>Create Your <spam className="text-danger"> Account! </spam> </span>
        </h3>
        <form className="w-80 mx-auto shadow p-3 rounded-4">
          <label htmlFor="firstName">First Name</label>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Enter your first name"
          />
          {firstNameError && <p className="text-danger">{firstNameError}</p>}

          <label className="mt-2 mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Enter your last name"
          />
          {lastNameError && <p className="text-danger">{lastNameError}</p>}

          <label className="mt-2 mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            placeholder="Enter your email"
          />
          {emailError && <p className="text-danger">{emailError}</p>}

          <label className="mt-2 mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Enter your phone number"
          />
          {phoneError && <p className="text-danger">{phoneError}</p>}

          <label className="mt-2 mb-2" htmlFor="password">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            placeholder="Enter your password"
          />
          {passwordError && <p className="text-danger">{passwordError}</p>}

          <label className="mt-2 mb-2" htmlFor="profile">
            Profile
          </label>
          <input
            onChange={(e) => setProfile(e.target.value)}
            type="file"
            className="form-control"
            placeholder="Choose your profile file"
          />
          {profileError && <p className="text-danger">{profileError}</p>}
          <br />

          <button
            onClick={handleClickRegister}
            className="btn btn-dark mt-3 w-100"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AboutUs;

// https://codeshare.io/wLPOYD
