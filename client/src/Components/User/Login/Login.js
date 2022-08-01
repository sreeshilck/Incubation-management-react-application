import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { useCookies } from 'react-cookie'
import axios from 'axios'


import './Login.css'

function Login() {

    const navigate = useNavigate();

    const [values, setValues] = useState({
      email: "",
      password: "",
    })


    const generateError = (err) =>{
      
        toast.error(err, {
            position: "top-center",
          });
      
    }
 




    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("http://localhost:5000/login", {
                ...values,
            }, {
                withCredentials: true,
            })
           
            if (data) {

                if (data.errors) {
                   
                    const { email, password } = data.errors;
                    if (email) generateError(email);
                    else if (password) generateError(password)

                } else {

                    if (!data.value) {
                        
                        navigate("/user/home");
                    } else {
                        navigate("/admin/adminpanel")
                    }


                }
            }

        } catch (error) {
            console.log(error);
        }
    };


    const [cookies, setCookies] = useCookies([]);
    useEffect(() => {
      
      verifyUser();
    }, []);
  
  
    const verifyUser = async () => {
        if (cookies.user) {
          navigate("/user/home");
        } else if (cookies.token){
          navigate("/admin/adminpanel")
        } else {
            navigate("/user/login")
        }
      };

    return (
       
        <div className="page">
            <div className='box'>
                <h2>Login</h2>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input  className='inp-box'
                            type="email"
                            name='email'
                            placeholder='Email'
                            onChange={(e) =>
                                setValues({ ...values, [e.target.name]: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input className='inp-box'
                            type="password"
                            name='password'
                            placeholder='Password'
                            onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
                        />
                    </div>
                    <button type='submit'>Login</button>
                    <span>
                        Don't have an account ? <Link to="/user/register">Register</Link>
                    </span>
                </form>
            <ToastContainer />
            </div>
        </div>
       
    )
}

export default Login