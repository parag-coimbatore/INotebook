import React ,{useState} from 'react'
import { useNavigate} from 'react-router-dom'

const url = '';
const Login = (props) => {
    const [credentials, setCredentials] = useState({email: "", password: ""})
    let history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${url}/api/auth/login`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email : credentials.email, password : credentials.password})
          });
          const json = await response.json()
          console.log(json);
          if(json.success)
          {
              //Save the authtoken and redirect
              localStorage.setItem('token', json.authtoken) 
              props.showAlert("Successfully logged in","success")
              history("/")
              
          }
          else{
            props.showAlert("Invalid details","danger")
          }
    }

    const onChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <>
        <h2 className='text-center'> Login to continue to iNotebook </h2>
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control"  value={credentials.password} onChange={onChange} name="password" id="password" />
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
        </>
    )
}

export default Login
