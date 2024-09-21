import React, { useState } from 'react';
import CIBchecker from './assets/CIBchecker.png';
import Vector from './assets/Vector.png';
import Register from './assets/Frame 12.svg';
import Pay from './assets/Frame 13.svg';
import FooterPic from './assets/Frame 15.svg';
import './App.css';

function App() {
  const [needsLogin, setNeedsLogin] = useState(false);

  const handleRadioChange = (event) => {
    setNeedsLogin(event.target.value === 'yes');
  };

  return (
      <div className="App container w-full h-fit m-auto">
          <div className='w-full h-fit flex flex-col items-center'>
              <div className='flex gap-3 mt-5'>
                <img src={CIBchecker} alt="" />
                <img src={Vector} alt="" />
              </div>
              <div className='flex w-full justify-evenly gap-10 px-5 mt-5'>
                <img src={Register} className='w-1/3' alt="" />
                <img src={Pay} className='w-1/3' alt="" />
              </div>

              <div className='w-full flex flex-col border-t-2 mt-5 lg:px-44 p-2'>
                <h1 className='text-2xl text-start font-bold'>Insert info</h1>
                <p className='text-start text-gray-400'>Please fill the form to verify your website</p>
                <form className="w-full mx-auto mt-5">
                  <div className='w-full flex gap-5 justify-between items-center'>
                    <div className="mb-5 w-1/2">
                      <label htmlFor="email" className="block mb-2 text-sm text-start font-medium text-gray-900 dark:text-white">E-mail</label>
                      <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 outline-none focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter email" required />
                    </div>
                    <div className="mb-5 w-1/2">
                      <label htmlFor="tel" className="block text-start mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                      <input type="tel" id="tel" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required placeholder='Enter phone number' />
                    </div>
                  </div>
                  <div className='w-full flex gap-5 justify-between items-center'>
                    <div className="mb-5 w-1/2">
                      <label className="block my-3 text-start text-sm font-medium text-gray-900 dark:text-white">Does the website need to login to do a purchase?</label>
                      <div className="flex items-center mb-4">
                        <input
                          id="default-radio-1"
                          type="radio"
                          value="no"
                          name="default-radio"
                          onChange={handleRadioChange}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="default-radio-2"
                          type="radio"
                          value="yes"
                          name="default-radio"
                          onChange={handleRadioChange}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
                      </div>
                    </div>
                    <div className="mb-5 w-1/2">
                      <label htmlFor="WebsiteName" className="block text-start mb-2 text-sm font-medium text-gray-900 dark:text-white">Website name</label>
                      <input type="text" id="WebsiteName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder='Enter website name' />
                    </div>
                  </div>

                  {needsLogin && (
                    <div className='w-full'>
                      <h3 className='block mb-2 text-md text-start font-medium text-gray-900 dark:text-white'>Please provide Login credentials</h3>
                      <div className='w-full'>
                        <form className="w-1/3">
                          <div className="mb-5">
                            <label htmlFor="email_1" className="block mb-2 text-start text-sm font-medium text-gray-900 dark:text-white">E-mail</label>
                            <input type="email" id="email_1" className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                          </div>
                          <div className="mb-5">
                            <label htmlFor="password" className="block text-start mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                            <input type="password" id="password" className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                          </div>
                        </form>
                      </div>
                    </div>
                  )}
                  <div className='w-full flex flex-col border-t-2'>
                    <div className="my-5">
                      <label htmlFor="email" className="block mb-2 text-start text-3xl font-bold text-[#1D2DC3] dark:text-white">Website link</label>
                      <input type="email" id="email" className="bg-gray-50 border-2 text-xl text-[#1D2DC3] border-[#1D2DC3] rounded-lg focus:ring-blue-500 outline-none focus:border-blue-500 block w-full p-2.5 h-14 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your website's link" required />
                    </div>
                  </div>
                  <button className='bg-[#1D2DC3] py-4 px-10 text-white hover:bg-[#1d2dc1c1] hover:text-black duration-500 capitalize rounded-md'>Confirm</button>
                </form>
              </div>
            </div>
        <footer className='w-full mt-10'>
          <img src={FooterPic} className='w-full' alt="Footer" />
        </footer>
      </div>
  );
}

export default App;