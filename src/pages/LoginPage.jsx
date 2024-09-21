import React from 'react'
import leftsection from '../assets/left-section.svg';
export const LoginPage = () => {
  return (
    <section className='w-full flex flex-row items-center  text-black h-[100vmh] '>
        <div className='w-[52.5%] flex flex-col h-full '>
            <img src={leftsection} alt="" />
        </div>
        <div className='w-full h-full flex flex-col items-center justify-start '>
            <h1 className='text-3xl font-bold text-start'>Login</h1>
            <p className='text-start text-gray-400 py-3'>Connect to your account</p>
            <form className="w-full mx-auto mt-5" onSubmit={(e) => e.preventDefault()}>
                <div className='w-full flex gap-2 justify-between items-center flex-col'>
                    <div className="mb-5 w-1/2 text-left">
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm px-4 rounded-xl focus:ring-[#1D2DC3] outline-none focus:border-[#1D2DC3] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-
                        white dark:focus:ring-[#1D2DC3] dark:focus:border-[#1D2DC3]" placeholder="Enter email" required />
                    </div>
                    <div className="mb-5 w-1/2">
                        <input type="password" id="password" className="bg-gray-50 border px-4 py-auto border-gray-300 text-gray-900 text-sm rounded-xl outline-none focus:border-[#1D2DC3] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-
                        500 dark:focus:border-[#1D2DC3]" placeholder="Password" required />
                    </div>
                    <button className='w-1/2 mt-5 mx-auto bg-[#1D2DC3] text-white rounded-xl p-2.5' type='submit' >
                    Login
                    </button>
                </div>
            </form>
        </div>
    </section>
  )
}
