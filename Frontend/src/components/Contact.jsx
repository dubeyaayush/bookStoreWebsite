import React from 'react'
import {Link} from 'react-router-dom';
import { useForm } from "react-hook-form";

const Contact = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <div className="w-[800px]">
            <div className="modal-box dark:bg-slate-900 dark:text-white">
              <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <h3 className="font-bold text-4xl">Contact Us</h3>
              <div className="mt-8 space-y-2">
                <span>Name</span>
                <br />
                <input type="text"
                placeholder="Enter your Full Name" 
                className="w-[450px] px-3 py-1 border rounded-md outline-none"
                {...register("name", { required: true })} />
                <br />
                {errors.name && <span className='text-sm text-red-500'>This field is required*</span>}
                </div >
                <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input type="email"
                placeholder="Enter your Email" 
                className="w-[450px] px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })} />
                <br />
                {errors.email && <span className='text-sm text-red-500'>This field is required*</span>}
                </div >
                <div className="mt-4 space-y-2">
                <span>Message</span>
                <br />
                <input type="message"
                placeholder="Type your Message" 
                className="w-[450px] h-[150px] px-3 py-1 border rounded-md outline-none"
                style={{paddingBottom : "120px"}}
                {...register("message", { required: true })} />
              <br />
              {errors.message && <span className='text-sm text-red-500'>This field is required*</span>}
              </div>
              <div className='flex justify-around mt-4'>
                <button className='mt-8 bg-blue-500 text-white rounded-md px-4 py-3 hover:bg-blue-700 duration-200'>Submit</button>
              </div>
              </form>
            </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
