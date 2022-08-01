import React, { useEffect } from 'react'
import Navbar from '../../Components/User/Navbar/NavBar'
import Application from '../../Components/User/Application/Application'
import axios from 'axios'
import { decodeToken } from "react-jwt";
import { useCookies } from 'react-cookie'
import { Link, useNavigate } from 'react-router-dom'

function ApplyPage() {
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const navigate = useNavigate();

  const user = decodeToken(cookies.jwt)

  useEffect(() => {

    const verifyUser = async () => {
      if (cookies.user) {
        const user = decodeToken(cookies.user)
        const { data } = await axios.get(`http://localhost:5000/check/${user.id}`, {},
          { withCredentials: true },
        );
        console.log(data, "<==data");
        if (data.status == true) {
          navigate("/user/viewstatus")
        } else {
          navigate("/user/apply")
        }
      } else {
        console.log("axiosss");
      };



    };

    verifyUser();


  }, [])

  return (
    <>
      <Navbar />
      <div className='pb-5'>
        <Application />
      </div>
    </>
  )
}

export default ApplyPage