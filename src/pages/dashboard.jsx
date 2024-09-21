import React from 'react';
import CIBchecker from '../assets/CIBchecker.png';
import Vector from '../assets/Vector.png';
const requests = [
    { name: 'Jane Cooper', url: 'www.shopnstyle.com', email: 'jane@microsoft.com', status: 'Verified' },
    { name: 'Floyd Miles', url: 'www.techtrendy.co', email: 'floyd@yahoo.com', status: 'Rejected' },
    { name: 'Ronald Richards', url: 'www.buysmartnow.com', email: 'ronald@adobe.com', status: 'Rejected' },
    { name: 'Marvin McKinney', url: 'www.fashionflare.shop', email: 'marvin@tesla.com', status: 'Verified' },
    { name: 'Jerome Bell', url: 'www.homeessentialsplus.com', email: 'jerome@google.com', status: 'Verified' },
    { name: 'Kathryn Murphy', url: 'www.gadgethubstore.com', email: 'kathryn@microsoft.com', status: 'In Progress' },
    { name: 'Jacob Jones', url: 'www.luxelivingmarket.com', email: 'jacob@yahoo.com', status: 'Verified' },
    { name: 'Kristin Watson', url: 'www.quickcartonline.com', email: 'kristin@facebook.com', status: 'Rejected' },
    // Add more if needed
];
export const Dashboard = () => {

    return (
        <div className='w-full h-[100vmh] bg-[#F8F9FA'>
            {/* Navbar */}
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

            {/* Content Area */}
            <div className="w-full h-full flex flex-row justify-between gap-4 p-4">
                {/* Main Requests Table Section */}
                <div className="w-2/3 h-fit bg-white border-[#D8DDE5] border shadow-md rounded-lg p-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                        <div>
                            <h3 className="text-lg font-semibold">All Requests</h3>
                            <p className="text-sm text-gray-500">Certification Demands</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="relative">
                                <input
                                    type="text"
                                    className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-64 bg-gray-50"
                                    placeholder="Search"
                                />
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg
                                        className="w-5 h-5 text-gray-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            <button className="flex items-center text-gray-500 bg-white border border-gray-300 p-2 rounded-lg">
                                <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                                </svg>
                                Sort: Newest
                            </button>
                        </div>
                    </div>
                    <table className="min-w-full table-auto">
                        <thead>
                            <tr className="border-b">
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                    Website's Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                    URL
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                    Email
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {requests.map((request, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4">{request.name}</td>
                                    <td className="px-6 py-4">
                                        <a href={`https://${request.url}`} className="text-blue-500 hover:underline">
                                            {request.url}
                                        </a>
                                    </td>
                                    <td className="px-6 py-4">{request.email}</td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full
                  ${request.status === 'Verified' ? 'bg-green-100 text-green-800' : ''} 
                  ${request.status === 'Rejected' ? 'bg-red-100 text-red-800' : ''} 
                  ${request.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' : ''}`}
                                        >
                                            {request.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Status Overview Section */}
                <div className="w-1/2 h-full flex flex-col space-y-2">
                    {/* First Card - Status Overview */}
                    <div className="bg-[#FFF6E9] border-[#D8DDE5] border shadow-md rounded-lg p-6 flex-1">
                        <h3 className="text-lg font-semibold">Status Overview</h3>
                        <p className="text-sm text-gray-500">Stats</p>
                        <div className="mt-4">
                            <p className="text-sm font-semibold">Verified</p>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "28%" }}></div>
                            </div>
                        </div>
                        <div className="mt-2">
                            <p className="text-sm font-semibold">In Progress</p>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: "61%" }}></div>
                            </div>
                        </div>
                        <div className="mt-2">
                            <p className="text-sm font-semibold">Rejected</p>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-red-500 h-2.5 rounded-full" style={{ width: "11%" }}></div>
                            </div>
                        </div>
                    </div>

                    {/* Second Card - Empty Card */}
                    <div className="bg-[#ECF9FC] shadow-md border-[#D8DDE5] border rounded-lg p-6 flex-1 ">
                        <h3 className="text-lg font-semibold">Status Overview</h3> 
                        <p className="text-sm text-gray-500">Stats</p>
                        {/* Empty card, add other content here if necessary */}
                    </div>
                </div>


            </div>

        </div>
    );
};



