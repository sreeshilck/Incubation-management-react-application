import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios';
function Home() {

  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);
  
  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.user) {
        navigate("/");
      } else {
        const { data } = await axios.post("http://localhost:5000/home", {},
          { withCredentials: true }
        );
        if (!data.status) {
          removeCookie("user");
          navigate("/");
        } else ;
      }
    };
    verifyUser();
  }, [cookies, navigate, removeCookie]);




  return (
    <div>User Home</div>
  )
}

export default Home