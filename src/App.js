import './App.css';
import React, { useState } from "react";






import {
  BrowserRouter,
  Routes,                                     // for login  (routing is necessary for routing Dashboard and Preferences components.)
  Route,
} from "react-router-dom";

import MuiAddJob from './components/MuiAddJob';
import MuiUpdateJob from './components/MuiUpdateJob';

import { MuiNavbar } from './components/MuiNavbar';

import MuiShowJob from './components/MuiShowJob';
import DrawerItemState from './components/MuiDrawer';
import { MuiHomePage } from './components/MuiHomePage';
import MuiTesting from './components/MuiTesting';
import Postlist from './components/Postlist';
import Getlist from './components/Getlist';
import AxiosTutorial from './components/AxiosTutorial';
import DeleteJob from './components/DeleteJob';
import UpdateEmployee from './components/UpdateEmployee';
import MuiApplyJob from './components/MuiApplyJob';




function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [

    {
      username: "user1",
      password: "pass1"
    },

    {
      username: "user2",
      password: "pass2"
    },

    {
      username: "aladeforsuccess",
      password: "busayo110887"
    }

  ];


  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (

    <div>
      <div className="login-form">
        <MuiNavbar />
        <div className="title">Sign In</div>

        {isSubmitted ?
          <div>
            <BrowserRouter>

              <DrawerItemState />
              <Routes>
                <Route path="/" element={<MuiHomePage />} />
                <Route path="/showjob" element={<MuiShowJob />} />
                <Route path="/addjob" element={<MuiAddJob />} />
                <Route path="/updatejob" element={<MuiUpdateJob />} />
                <Route path="/applyjob" element={<MuiApplyJob />} />
                <Route path="/deletejob" element={<DeleteJob />} />

                <Route path="/testing" element={<MuiTesting />} />
                <Route path="/postlist" element={<Postlist />} />
                <Route path="/getlist" element={<Getlist />} />
                <Route path="/axiostutorial" element={<AxiosTutorial />} />
                <Route path="/updateemployee" element={<UpdateEmployee />} />

              </Routes>
            </BrowserRouter>
          </div> : renderForm}



      </div>
    </div>


  );
}

export default App;