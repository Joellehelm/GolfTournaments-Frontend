import React, { useEffect, useState } from "react";
import Login from './Components/Login'
import SignUp from './Components/Signup'
import './App.css'

function App() {
  const [loginOrSignup, setLoginOrSignup] = useState(false);
    return (
        <div className="App">
            { loginOrSignup ? <Login switch={() => setLoginOrSignup(false)}/> : <SignUp switch={() => setLoginOrSignup(true)}/> }
        </div>
    )
}

export default App
