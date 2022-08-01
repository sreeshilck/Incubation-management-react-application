import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import { decodeToken } from "react-jwt";
import { ToastContainer, toast } from 'react-toastify'


function Application() {

    const initialValues = {
        name: '',
        address: '',
        city: '',
        state: '',
        email: '',
        phoneno: '',
        companyname: '',
        team: '',
        products: '',
        problem: '',
        solution: '',
        valueproposition: ',',
        competitors: '',
        revenuemodel: '',
        potentialmarketsize: '',
        marketplan: '',
        incubationtype: '',
        businessproposal: '',
    }
    const navigate = useNavigate()
    const [cookies, setCookie, removeCookie] = useCookies([]);

    const [values, setValues] = useState(initialValues)
    const { register, handleSubmit, formState: { errors } } = useForm();
   
   const userToken = decodeToken(cookies.jwt)
   

   const generateError = (err) =>{
      console.log("error function");
    toast.error(err, {
        position: "top-center",
      });
  
}

  const onSubmit = async (values) => {
    try {
      const { data } = await axios.post(`http://localhost:5000/application_register/${userToken.id}`, {
        ...values,
      }, {
        withCredentials: true,
      })

    if(data.created) {
        navigate("/user/success")
    } else {
        generateError("Something went wrong")
    }

    } catch (error) {
      console.log(error);
    }

  }




    return (


        <div className="container col-md-6 card mt-5 p-5 ">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className='text-center'><u> APPLICATION FOR INCUBATION </u></h3>
                
             
                <div className="row mt-5 ">
                    <div className="mb-2 col-md-6 col-12">
                        <label className='mb-1'>Name</label>
                        <input
                           
                            type="text"
                            name='name'
                            className="form-control"
                            placeholder="Name"
                            onChange={(e) =>
                                setValues({ ...values, [e.target.name]: e.target.value })}
                            {...register("name", {
                                required: "This field is required"
                            })}
                        />
                        {errors.name && <p style={{ color: "red",margin:0 }}>{errors.name.message}</p>}
                    </div>

                    <div className="mb-2  col-md-6 col-12 ">
                        <label className='mb-1'>Address</label>
                        <input
                         
                            type="text"
                            name='address'
                            className="form-control"
                            placeholder="Enter Address"
                            onChange={(e) =>
                                setValues({ ...values, [e.target.name]: e.target.value })}
                            {...register("address", {
                                required: "This field is required"
                            })}
                        />
                           {errors.address && <p style={{ color: "red" }}>{errors.address.message}</p>}
                    </div>
                </div>

                <div className="row ">
                    <div className="mb-2 col-md-6 col-12">
                        <label className='mb-1'>City</label>
                        <input
                           
                            type="text"
                            name='city'
                            className="form-control"
                            placeholder="Enter City"
                            onChange={(e) =>
                                setValues({ ...values, [e.target.name]: e.target.value })}
                            {...register("city", {
                                required: "This field is required"
                            })}
                        />
                        {errors.city && <p style={{ color: "red",margin:0 }}>{errors.city.message}</p>}
                    </div>
                    <div className="mb-2 col-md-6 col-12">
                        <label className='mb-1'>State</label>
                        <input
                           
                            type="text"
                            name='state'
                            className="form-control"
                            placeholder="Enter State"
                            onChange={(e) =>
                                setValues({ ...values, [e.target.name]: e.target.value })}
                            {...register("state", {
                                required: "This field is required"
                            })}
                        />
                        {errors.state && <p style={{ color: "red",margin:0 }}>{errors.state.message}</p>}
                    </div>
                </div>
                <div className="row">
                    <div className="mb-2 col-md-6 col-12">
                        <label className='mb-1'>Email</label>
                        <input
                          
                            type="text"
                            name='email'
                            className="form-control"
                            placeholder="Enter Email"
                            onChange={(e) =>
                                setValues({ ...values, [e.target.name]: e.target.value })}
                            {...register("email", {
                                required: "This field is required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Enter valid email"}
                            })}
                        />
                        {errors.potentialmarketsize && <p style={{ color: "red",margin:0 }}>{errors.potentialmarketsize.message}</p>}
                    </div>

                    <div className="mb-3 col-md-6 col-12">
                        <label className='mb-1'>Phone No</label>
                        <input
                           
                            type="text"
                            name='phoneno'
                            className="form-control"
                            placeholder="Enter Phone No"
                            onChange={(e) =>
                                setValues({ ...values, [e.target.name]: e.target.value })}
                            {...register("phoneno", {
                                required: "This field is required"
                            })}
                        />
                        {errors.phoneno && <p style={{ color: "red",margin:0 }}>{errors.phoneno.message}</p>}
                    </div>
                </div>
                <div className="row">
                    <div className="mb-3 col-md-6 col-12">
                        <label className='mb-1'>Company Name</label>
                        <input
                          
                            type="text"
                            name='companyname'
                            className="form-control"
                            placeholder="Company Name"
                            onChange={(e) =>
                                setValues({ ...values, [e.target.name]: e.target.value })}
                            {...register("companyname", {
                                required: "This field is required"
                            })}
                        />
                        {errors.potentialmarketsize && <p style={{ color: "red",margin:0 }}>{errors.potentialmarketsize.message}</p>}
                    </div>

                    {/* <div className="mb-1 col-md-3 col-12 mt-4">
                        <img src="" alt="" />
                        <input type="file" name='image'
                        />
                    </div> */}
                </div>
                <div className="mb-3 ">
                    <label className='mb-1'>Describe Your Team and Background</label>
                    <textarea

                        type="text"
                        className="form-control"
                        placeholder=""
                        name='team'
                        onChange={(e) =>
                            setValues({ ...values, [e.target.name]: e.target.value })}
                        {...register("team", {
                            required: "This field is required"
                        })}
                    />
                    {errors.team && <p style={{ color: "red",margin:0 }}>{errors.team.message}</p>}
                </div>
                <div className="mb-2 ">
                    <label className='mb-1'>Describe Your Company and Products</label>
                    <textarea

                        type="text"
                        className="form-control"
                        placeholder=""
                        name='products'
                        onChange={(e) =>
                            setValues({ ...values, [e.target.name]: e.target.value })}
                        {...register("products", {
                            required: "This field is required"
                        })}
                    />
                    {errors.potentialmarketsize && <p style={{ color: "red",margin:0 }}>{errors.potentialmarketsize.message}</p>}
                </div>
                <div className="mb-2 ">
                    <label className='mb-1'>Describe the problem you are trying to solve</label>
                    <textarea

                        type="text"
                        className="form-control"
                        placeholder=""
                        name='problem'
                        onChange={(e) =>
                            setValues({ ...values, [e.target.name]: e.target.value })}
                        {...register("problem", {
                            required: "This field is required"
                        })}
                    />
                    {errors.problem && <p style={{ color: "red",margin:0 }}>{errors.problem.message}</p>}
                </div>
                <div className="mb-2 ">
                    <label className='mb-1'>What is unique about your solution </label>
                    <textarea

                        type="text"
                        className="form-control"
                        placeholder=""
                        name='solution'
                        onChange={(e) =>
                            setValues({ ...values, [e.target.name]: e.target.value })}
                        {...register("solution", {
                            required: "This field is required"
                        })}
                    />
                </div>
                <div className="mb-2 ">
                    <label className='mb-1'> what is your value proposition for the customer</label>
                    <textarea

                        type="text"
                        className="form-control"
                        placeholder=""
                        name='valueproposition'
                        onChange={(e) =>
                            setValues({ ...values, [e.target.name]: e.target.value })}
                        {...register("valueproposition", {
                            required: "This field is required"
                        })}
                    />
                    {errors.valueproposition && <p style={{ color: "red",margin:0 }}>{errors.valueproposition.message}</p>}
                </div>
                <div className="mb-3 ">
                    <label className='mb-1'>Who are your competitors and what is your competative advantage ?</label>
                    <textarea

                        type="text"
                        className="form-control"
                        placeholder=""
                        name='competitors'
                        onChange={(e) =>
                            setValues({ ...values, [e.target.name]: e.target.value })}
                        {...register("competitors", {
                            required: "This field is required"
                        })}
                    />
                    {errors.competitors && <p style={{ color: "red",margin:0 }}>{errors.competitors.message}</p>}
                </div>
                <div className="mb-2 ">
                    <label className='mb-1'>Explain your revenue model</label>
                    <textarea

                        type="text"
                        className="form-control"
                        placeholder=""
                        name='revenuemodel'
                        onChange={(e) =>
                            setValues({ ...values, [e.target.name]: e.target.value })}
                        {...register("revenuemodel", {
                            required: "This field is required"
                        })}
                    />
                </div>
                <div className="mb-2 ">
                    <label className='mb-1'>What is the potential market size of the product ?</label>
                    <textarea
                        type="text"
                        className="form-control"
                        placeholder=""
                        name='potentialmarketsize'
                        onChange={(e) =>
                            setValues({ ...values, [e.target.name]: e.target.value })}
                        {...register("potentialmarketsize", {
                            required: "This field is required"
                        })}
                    />
                    {errors.potentialmarketsize && <p style={{ color: "red",margin:0 }}>{errors.potentialmarketsize.message}</p>}
                </div>
                <div className="mb-2 ">
                    <label className='mb-1'>How do you market or plan to market your product and services </label>
                    <textarea

                        type="text"
                        className="form-control"
                        placeholder=""
                        name='marketplan'
                        onChange={(e) =>
                            setValues({ ...values, [e.target.name]: e.target.value })}
                        {...register("marketplan", {
                            required: "This field is required"
                        })}
                    />
                    {errors.potentialmarketsize && <p style={{ color: "red",margin:0 }}>{errors.potentialmarketsize.message}</p>}
                </div>
                <div>
                    <p>Types of incubation needed</p>
                    <div className="form-check mv-3" >
                        <input className="form-check-input" type="radio" name="incubationtype" id="flexRadioDefault1" value='Physical'
                            onClick={(e) =>
                                setValues({ ...values, [e.target.name]: e.target.value })}
                            {...register("incubationtype", {
                                required: "This field is required"
                            })}
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Physical Incubation
                        </label>
                    </div>
                    <div className="form-check mb-4">
                        <input className="form-check-input" type="radio" name="incubationtype" id="flexRadioDefault2" value='Virtual'
                            onClick={(e) =>
                                setValues({ ...values, [e.target.name]: e.target.value })}
                            {...register("incubationtype", {
                                required: "This field is required"
                            })}
                        />
                        {errors.potentialmarketsize && <p style={{ color: "red",margin:0 }}>{errors.potentialmarketsize.message}</p>}
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Virtual Incubation
                        </label>
                    </div>
                </div>
                <div className="mb-3 ">
                    <label className='mb-1'>Upload a detailed business proposal</label>
                    <textarea

                        type="text"
                        className="form-control"
                        placeholder=""
                        name='businessproposal'
                        onChange={(e) =>
                            setValues({ ...values, [e.target.name]: e.target.value })}
                        {...register("businessproposal", {
                            required: "This field is required"
                        })}
                    />
                    {errors.potentialmarketsize && <p style={{ color: "red",margin:0 }}>{errors.potentialmarketsize.message}</p>}
                </div>
                <div className="text-center" >
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>

            </form>

            <ToastContainer />
        </div>

    )
}

export default Application