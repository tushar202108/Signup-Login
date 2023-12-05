import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('users')
    if (auth) {
      navigate('/');
    }

  }, [])

  const handleInput = async () => {
    if (!email || !password) {
      setError(true)
      return false;
    }

    let result = await fetch('http://localhost:2500/login', {
      method: "Post",
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    result = await result.json();
  

    if (result.name) {
      localStorage.setItem("users", JSON.stringify(result));
      navigate('/')
    }
    else {
      alert("Please enter Correct details")
    }

  }
  return (
    <div>
      <div className='card shadow-lg p-5 mb-5 bg-dark my-5 w-50 p-3 mx-auto'>
        <h1 className='head text-success'><u>Log in</u></h1>
        <p className='name text-success'>Email</p>
        <div className="input-group mb-3">
          <input type="text" className="form-control border-4"  onChange={(e) => setEmail(e.target.value)} value={email} aria-label="Sizing example input" placeholder='Enter email' aria-describedby="inputGroup-sizing-default" />
        </div>
        {error && !email && <span className='text-danger fs-6 my-0'>Enter invalid email </span>}
        <p className='email text-success'>Password</p>
        <div className="input-group mb-3">
          <input type="password" className="form-control border-4" onChange={(e) => setPassword(e.target.value)} value={password} aria-label="Sizing example input" placeholder='Enter Password' aria-describedby="inputGroup-sizing-default" />
        </div>
        {error && !password && <span className='text-danger fs-6 my-0'>Enter invalid password </span>}
        <div className='bttn'>
          <button type="submit" onClick={handleInput} className="btn btn-dark text-success border-success bold">Login</button>
        </div>
      </div>
    </div>


  )
}

export default Login