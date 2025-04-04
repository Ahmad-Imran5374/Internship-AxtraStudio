import React from "react";
import {useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen w-screen relative overflow-hidden bg-white font-sans m-0 p-0">

            {/* Navbar */}
            <nav className="absolute top-6 left-1/2 -translate-x-1/2 flex justify-between items-center w-[85%] px-8 py-4 rounded-2xl bg-white/70 backdrop-blur-md shadow-md z-20">
                <div className="flex items-center gap-10">
                    <img src="logo.svg" alt="Logo" />
                    <a className="cursor-pointer hover:underline text-gray-700 text-sm">Dashboard</a>
                    <a className="cursor-pointer hover:underline text-gray-700 text-sm">Projects</a>
                    <a className="cursor-pointer hover:underline text-gray-700 text-sm">Templates</a>
                    <a className="cursor-pointer hover:underline text-gray-700 text-sm">Notifications</a>
                    <a className="cursor-pointer hover:underline text-gray-700 text-sm">Settings</a>
                </div>
                <div className="flex items-center gap-4">
                    <button className="hover:underline text-sm hidden lg:block text-gray-700">Don’t have account?</button>
                    <button  onClick={()=>{navigate('/signup')}} className="bg-teal-900 rounded-xl w-[116px] h-11 text-stone-100 text-sm cursor-pointer">Sign Up</button>
                </div>
            </nav>

            {/* Main Content */}
            <div className="flex items-center justify-center lg:items-start  lg:justify-between h-screen w-screen">

                {/* Left Side */}
                <form className="w-1/2 flex items-center justify-center lg:mt-40 lg:items-center px-8">
                    <form className="w-[360px]">
                        <h1 className="text-[40px] font-bold mb-2 text-gray-800">Welcome Back</h1>
                        <p className="text-[16px] text-gray-600 mb-6">Enter your email and password to sign in</p>

                        {/* Email */}
                        <div className="mb-4">
                            <label className="block text-xs text-gray-600 mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-4 relative">
                            <label className="block text-xs text-gray-600 mb-1">Password</label>
                            <input
                                type="password"
                                placeholder="Your password"
                                className="w-full border rounded px-3 py-2 pr-28 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                            />
                            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-teal-950 hover:underline">
                                Forgot password?
                            </button>
                        </div>

                        {/* Remember Me */}
                        <div className="flex items-center mb-4 space-x-2">
                            <label className="inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-teal-950 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                                <span className="ml-3 text-sm text-gray-700">Remember me</span>
                            </label>
                        </div>

                        {/* Sign In */}
                        <button className="w-full bg-teal-950 text-white rounded-xl py-2 text-sm hover:bg-teal-900 transition">
                            Sign In
                        </button>

                        {/* Sign up link */}
                        <p className="text-sm text-center text-gray-600 mt-4">
                            Don't have an account? <a onClick={()=>{navigate('/signup')}} className="text-teal-950 hover:underline cursor-pointer">Sign up</a>
                        </p>
                    </form>
                </form>

                {/* Right Side */}
                <div className=" h-9/10 relative lg:top-0 rounded-l-[32px] overflow-hidden hidden lg:block">
                    <img
                        src="rightImage.svg"
                        className="object-cover w-full h-full"
                        alt="Background"
                    />
                </div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-gray-400">
                This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
            </div>
        </div>
    );
};

export default LoginPage;
