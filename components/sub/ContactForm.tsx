import React, { useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import * as yup from 'yup';
import toast from 'react-hot-toast';
import Iconify from '../utils/Iconify';

const ContactForm = () => {

  const [btnDisabled, setBtnDisabled] = useState(false)
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: "",
    message: ''
  })


  const formik = useFormik({
    initialValues: values,
    onSubmit: async (values, { resetForm }) => {
      try {
        setBtnDisabled(true)
        const data = await axios.post('/api/enquire', values)
        console.log(data)
        setBtnDisabled(false)
        resetForm()
        toast.success("Message sent succesfully!")
      } catch (error) {
        resetForm()
        setBtnDisabled(false)
        toast.error("Something went wrong! Please try again later.")
      }

    },
    validationSchema: yup.object({
      name: yup.string().trim().required('Name is Required'),
      email: yup.string().email('Must be a valid email').required('Email is required'),
      phone: yup
        .string()
        .matches(/^[0-9]{10}$/, 'Must be a valid 10-digit phone number')
        .required('Phone number is required'),
      message: yup.string().trim().required('Message is required'),
    })
  })



  return (
    <div className='bg-[#000] bg-opacity-50 rounded-lg px-7 py-20 z-40 flex flex-col items-center justify-center w-[70%] max-sm:w-[100%]'>

      <form className='w-full flex flex-col justify-center items-center' onSubmit={formik.handleSubmit}>
        <input className='bg-transparent border-b-2 border-b-white w-[70%] outline-none text-white mb-10 z-40 select-none'
          placeholder='Name'
          type='text'
          name='name'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name} />
        {formik.errors.name && (
          <div className=" text-red-600 mb-10">{formik.errors.name}</div>
        )}
        <input className='bg-transparent border-b-2 border-b-white w-[70%] outline-none text-white mb-10'
          placeholder='Email'
          type='email'
          name='email'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.errors.email && (
          <div className="text-red-600 mb-10">{formik.errors.email}</div>
        )}
        <input className='bg-transparent border-b-2 border-b-white w-[70%] outline-none text-white mb-10'
          placeholder='Phone'
          type='phone'
          name='phone'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.errors.phone && (
          <div className="text-red-600 mb-10">{formik.errors.phone}</div>
        )}
        <textarea className='bg-transparent border-2 border-white w-[70%] outline-none text-white mb-10 h-[250px] p-2 overflow-auto resize-none'
          placeholder='Write me a message'
          name='message'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        ></textarea>
        {formik.errors.message && (
          <div className="text-red-600 mb-10">{formik.errors.message}</div>
        )}
        <button className='button-64' role='button' type="submit" disabled={btnDisabled}><span className="text"> {btnDisabled ? "Please Wait..." : "Send Message"}</span></button>
      </form>




      <p className='text-[0.8rem] text-[#eee]'>or email us at: <a className='cursor-pointer underline font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500' href='mailto:thelpaclub@outlook.com'>thelpaclub@outlook.com</a></p>
    </div>
  )
}

export default ContactForm