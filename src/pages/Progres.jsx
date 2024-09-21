import React from 'react'
import CIBchecker from '../assets/CIBchecker.png';
import Vector from '../assets/Vector.png';
export const Progres = () => {
    return (
        <div className='w-full h-[100vmh] bg-[#F8F9FA'>
            <nav className='flex justify-between items-start w-full h-14'>
                {/* Logo Section */}
                <div className='flex w-[100px] h-full items-center justify-between ml-5'>
                    <img src={CIBchecker} alt="CIB Checker Logo" />
                    <img src={Vector} alt="Vector Icon" />
                </div>

                {/* User Info and Logout */}
                <div className='h-full w-[300px] flex justify-around items-center'>
                    <div className='w-fit py-2 h-[70%] border-l-2 px-2'>
                        <h1>Mohamed Hamidani</h1>
                    </div>
                    <button className='flex text-red-600 capitalize justify-evenly items-center w-[100px] border-l-2 h-[70%]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024">
                            <path fill="red" d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8c-7 8.5-14.5 16.7-22.4 24.5a353.8 353.8 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.8 353.8 0 0 1-112.7-75.9a353.3 353.3 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8s94.3 9.3 137.9 27.8c42.2 17.8 80.1 43.4 112.7 75.9c7.9 7.9 15.3 16.1 22.4 24.5c3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82C271.7 82.6 79.6 277.1 82 516.4C84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7c3.4-5.3-.4-12.3-6.7-12.3m88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6" />
                        </svg>
                        Logout
                    </button>
                </div>
            </nav>



            <div>
                <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between space-x-6 border border-gray-200">
                    {/* Elements Check */}
                    <div className="flex items-start space-x-3">
                        <div className=" flex items-center justify-center px-2 w-8 h-8 rounded-full bg-green-600 text-green-600">
                            {/* AI Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><g fill="none"><path stroke="white" stroke-linecap="round" stroke-width="2" d="m8 13l4.228 3.382a1 1 0 0 0 1.398-.148L22 6" /><path fill="white" fill-rule="evenodd" d="m11.19 12.237l4.584-5.604a1 1 0 0 0-1.548-1.266l-4.573 5.59zm-3.167 3.87l-1.537-1.28l-.653.798L2.6 13.2a1 1 0 0 0-1.2 1.6l3.233 2.425a2 2 0 0 0 2.748-.334z" clip-rule="evenodd" /></g></svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-gray-900">Elements Check</h3>
                            <p className="text-gray-600 text-sm">
                                Ensure all elements on the page align with design specs and functionality, verifying accuracy and proper layout.
                            </p>
                        </div>
                    </div>

                    <hr className="h-full border-l border-gray-300 mx-4" />

                    {/* AI Test */}
                    <div className="flex items-start space-x-3">
                        <div className=" flex items-center justify-center px-2 w-8 h-8 rounded-full bg-green-600 text-green-600">
                            {/* AI Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><g fill="none"><path stroke="white" stroke-linecap="round" stroke-width="2" d="m8 13l4.228 3.382a1 1 0 0 0 1.398-.148L22 6" /><path fill="white" fill-rule="evenodd" d="m11.19 12.237l4.584-5.604a1 1 0 0 0-1.548-1.266l-4.573 5.59zm-3.167 3.87l-1.537-1.28l-.653.798L2.6 13.2a1 1 0 0 0-1.2 1.6l3.233 2.425a2 2 0 0 0 2.748-.334z" clip-rule="evenodd" /></g></svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-gray-900">AI Test</h3>
                            <p className="text-gray-600 text-sm">
                                Ensure that all assets meet criteria, and verify CAPTCHA using AI for accuracy and compliance.
                            </p>
                        </div>
                    </div>

                    <hr className="h-full border-l border-yellow-400 mx-4" />

                    {/* Fake Cards Test */}
                    <div className="flex items-start space-x-3">
                        <div className=" flex items-center justify-center px-2 w-8 h-8 rounded-full bg-yellow-400 text-green-600">
                            {/* AI Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 14 14"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" d="M7 .88v2.5m-5 0l1.84 1.69M1 8.88l2.42-.9m.97 5.14l1.11-2.24m6.5-7.5l-1.84 1.69M13 8.88l-2.42-.9m-.97 5.14L8.5 10.88" /></svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-gray-900">Fake Cards Test</h3>
                            <p className="text-gray-600 text-sm">
                                Simulate transactions with fake cards to verify payment processing without actual charges.
                            </p>
                        </div>
                    </div>

                    <hr className="h-full border-l border-gray-300 mx-4" />

                    {/* After Payment Page Check */}
                    <div className="flex items-start space-x-3">
                        <div className=" flex items-center justify-center px-2 w-8 h-8 rounded-full bg-yellow-400 text-green-600">
                            {/* AI Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 14 14"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" d="M7 .88v2.5m-5 0l1.84 1.69M1 8.88l2.42-.9m.97 5.14l1.11-2.24m6.5-7.5l-1.84 1.69M13 8.88l-2.42-.9m-.97 5.14L8.5 10.88" /></svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-gray-900">After Payment Page Check</h3>
                            <p className="text-gray-600 text-sm">
                                Verify that resources and display on the post-payment page respond correctly and align with specs.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col h-screen p-6 bg-gray-100">
                    <div className="flex space-x-6 h-full">
                        {/* Left Side: Test Cards */}
                        <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
                            <h2 className="text-xl font-semibold mb-4">Fake cards test</h2>
                            <div className="space-y-4">
                                <div className="p-4 bg-gray-100 rounded-md flex justify-between items-center">
                                    <span>Provide session link</span>
                                    <a href="#" className="text-green-600 underline w-[400px]">
                                        https://test.sat...payment_en.html?mdOrder...
                                    </a>
                                    <span className="text-green-600">&#10004;</span>
                                </div>
                                <div className="p-4 bg-gray-100 rounded-md flex justify-between items-center">
                                    <span>Provide session link</span>
                                    <a href="#" className="text-green-600 underline  w-[400px]">
                                        https://test.sat...payment_en.html?mdOrder...
                                    </a>
                                    <span className="text-green-600">&#10004;</span>
                                </div>
                                <div className="p-4 bg-gray-100 rounded-md flex justify-between items-center">
                                    <span>Provide session link</span>
                                    <a href="#" className="text-yellow-600 underline ">
                                        https://test.sat...payment_en.html?mdOrder...
                                    </a>
                                    <span className="text-yellow-600">&#9888;</span>
                                </div>
                                <div className="p-2 bg-gray-100 rounded-md ">
                                    <div className="flex justify-between items-center">
                                        <span>Provide session link</span>
                                        <input
                                            type="text"
                                            className="border border-gray-300 p-2 w-[400px] h-8 rounded-md"
                                            placeholder="Enter session link here"
                                        />
                                        <button className="bg-blue-500 text-white py-1 px-2 rounded-md">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="white" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10s10-4.48 10-10M4 12c0-4.42 3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8s-8-3.58-8-8m12 0l-4 4l-1.41-1.41L12.17 13H8v-2h4.17l-1.59-1.59L12 8z" /></svg>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Right Side: Test Summary */}
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h2 className="text-xl font-semibold mb-2">Test summary</h2>
                            <p className="text-gray-500 mb-4">
                                This is what happened in every test step
                            </p>

                            <div className="space-y-4">
                                {/* Elements Check */}
                                <div>
                                    <h3 className="font-semibold text-lg">1- Elements Check</h3>
                                    <ul className="list-disc list-inside text-gray-700">
                                        <li>All elements loaded successfully.</li>
                                        <li>Design and layout meet the specified criteria.</li>
                                        <li>CAPTCHA verified and functioning correctly.</li>
                                    </ul>
                                </div>

                                {/* AI Test */}
                                <div>
                                    <h3 className="font-semibold text-lg">2- AI test</h3>
                                    <ul className="list-disc list-inside text-gray-700">
                                        <li>
                                            AI confirmed all elements load correctly and match the design
                                            criteria.
                                        </li>
                                        <li>
                                            Functionality, responsiveness, and layout verified as per
                                            specifications.
                                        </li>
                                        <li>CAPTCHA accurately validated and working as intended.</li>
                                    </ul>
                                </div>

                                {/* Fake cards test */}
                                <div>
                                    <h3 className="font-semibold text-lg">3- Fake cards test</h3>
                                    <ul className="list-disc list-inside text-gray-700">
                                        <li>Valid Cards: Verified successful transactions with valid card details.</li>
                                        <li>
                                            Expired Cards: Transactions correctly declined due to card expiration.
                                        </li>
                                        <li>
                                            Stolen Cards: Transactions flagged and blocked for suspected fraudulent
                                            activity.
                                        </li>
                                        <li>
                                            Insufficient Funds: Transactions declined due to insufficient balance.
                                        </li>
                                        <li>
                                            Invalid Cards: Fake or invalid card details correctly identified and
                                            blocked.
                                        </li>
                                    </ul>
                                </div>

                                {/* After payment page check */}
                                <div>
                                    <h3 className="font-semibold text-lg">4- After payment page check</h3>
                                    <ul className="list-disc list-inside text-gray-400">
                                        <li>
                                            Transaction details and confirmation message displayed accurately.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* AI Report Button */}
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4">
                                AI Report
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}



