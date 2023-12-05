import React from 'react'
import { useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(false);
    const [error, setError] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('users')
        if (auth) {
            console.warn("auth")
          navigate('/');
          
        }
    
      }, [user])

    const collectData = async () => {
        if (!name || !email || !password) {
            setError(true);
            return false;
    
        }
        let result = await fetch('http://localhost:2500/sign', {
            method: "Post",
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
            
        });

        result = await result.json();
        console.warn(result)
        if(result){setUser(true)};
        localStorage.setItem('users',JSON.stringify(result));
    

        if(result.name && result.email && result.password)
        {
            navigate('/') 
        }
    }


    return (
        <div className='container'>

            <div className='card shadow-lg p-5 mb-5 bg-dark my-5 w-50 p-3 mx-auto border-rounded'>
                <h1 className='head text-success'><u>Signup</u></h1>
                <p className='name text-success'>Full Name</p>
                <div className="input-group mb-3">
                    <input type="text" className="form-control border-4" placeholder="Enter here" aria-label="Sizing example input" value={name} onChange={(e) => setName(e.target.value)} aria-describedby="inputGroup-sizing-default" required />
                </div>
                {error && !name && <span className='text-danger fs-6 my-0'>Enter invalid name </span>}

                <p className='email my-1 text-success'>Email</p>
                <div className="input-group mb-3">
                    <input type="email" className="form-control border-4" placeholder="Enter here" aria-label="Sizing example input" value={email} onChange={(e) => setEmail(e.target.value)} aria-describedby="inputGroup-sizing-default" required/>
                </div>
                {error && !email && <span className='text-danger fs-6 my-0'>Enter invalid email </span>}
                <p className='password text-success'> Password</p>
                <div className="input-group mb-3">
                    <input type="password" className="form-control border-4" placeholder="Enter here" aria-label="Sizing example input" value={password} onChange={(e) => setPassword(e.target.value)} aria-describedby="inputGroup-sizing-default" required />
                </div>
                {error && !password && <span className='text-danger fs-6 my-0'>Enter invalid password </span>}
                <div className='bttn'>
                    <button type="submit" onClick={collectData} className="btn btn-dark text-success border-success">Signup</button>
                </div>
            </div>
        </div>
    )
}

export default Signup