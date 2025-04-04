import React from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen lg:h-[1153px] w-full relative flex flex-col">

            {/* Top Half */}
            <div className="h-[650px] bg-[url('navbg.svg')] bg-cover bg-center rounded-lg m-5">
                <nav className="absolute top-6 left-1/2 -translate-x-1/2 flex justify-between text-white items-center w-[90%] max-w-[1400px] px-4 md:px-8 py-4 rounded-2xl z-20">
                    <div className="flex items-center gap-4 md:gap-10 flex-wrap">
                        <img src="logo2.svg" alt="Logo" className="h-6 md:h-auto" />
                        <a className="cursor-pointer hover:underline text-[14px] md:text-[16px]">Dashboard</a>
                        <a className="cursor-pointer hover:underline text-[14px] md:text-[16px]">Projects</a>
                        <a className="cursor-pointer hover:underline text-[14px] md:text-[16px]">Templates</a>
                        <a className="cursor-pointer hover:underline text-[14px] md:text-[16px]">Notifications</a>
                        <a className="cursor-pointer hover:underline text-[14px] md:text-[16px]">Settings</a>
                    </div>
                    <div className="flex items-center gap-2 md:gap-4">
                        <button className="hover:underline text-[12px] md:text-[16px] hidden lg:block nunito-seven">Already have an account?</button>
                        <button onClick={()=>{navigate('/login')}} className="bg-white rounded-xl w-[100px] md:w-[116px] h-9 md:h-11 text-black text-sm font-semibold cursor-pointer">Sign In</button>
                    </div>
                </nav>
            </div>

            {/* Bottom Half */}
            <div className="bg-white flex items-end justify-end">
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[8px] md:text-[10px] text-gray-400 text-center px-2">
                    This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                </div>
            </div>

            {/* Overlay Content */}
            <div className="flex flex-col absolute left-1/2 -translate-x-1/2 -translate-y-1/2 gap-8 top-[570px] shadow-[0px_7px_23px_0px_#0000000D] w-[90%] max-w-[500px]">

                {/* Welcome Text */}
                <div className='bg-transparent text-white text-center px-2'>
                    <p className='inter-seven text-[28px] md:text-[40px]'>Welcome!</p>
                    <p className='nunito-seven text-[14px] md:text-[16px]'>Use these awesome forms to login or create new account in <br />your project for free.</p>
                </div>

                {/* Form */}
                <div>
                    <form className='flex w-full flex-col bg-white rounded-lg gap-5 md:gap-7 p-6 md:p-10 inter-five'>

                        <div className='flex flex-col gap-1'>
                            <label>Full Name</label>
                            <input type="text" className='px-2 rounded-lg border w-full h-[45px] md:h-[50px]' />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label>Email</label>
                            <input type="email" className='px-2 rounded-lg border w-full h-[45px] md:h-[50px]' />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label>Password</label>
                            <input type="password" className='px-2 rounded-lg border w-full h-[45px] md:h-[50px]' />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label>Confirm Password</label>
                            <input type="password" className='px-2 rounded-lg border w-full h-[45px] md:h-[50px]' />
                        </div>

                        <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="relative w-11 h-6 bg-teal-100 rounded-full peer-checked:bg-teal-950 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                            <span className="ml-3 text-sm text-gray-700">Remember me</span>
                        </label>

                        <button className='px-2 rounded-lg border w-full h-[45px] md:h-[50px] bg-teal-950 text-white'>Sign Up</button>

                        <p className='text-center nunito-four text-[12px] md:text-[14px]'>Already have an account? <span onClick={()=>{navigate('/login')}} className='text-teal-950 cursor-pointer'>Sign in</span></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
