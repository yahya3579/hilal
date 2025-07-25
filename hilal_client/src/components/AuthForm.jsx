import React, { useEffect, useState } from 'react'
import api from '../utils/api'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '../utils/store'
import { Link } from 'react-router-dom'
import HilalDigital from '../assets/hilal-logo.svg'
import { FaFacebook } from 'react-icons/fa'
import GoogleSignInButton from '../pages/Google'
import axios from 'axios'

const AuthForm = ({ route, method }) => {
    const setAccessToken = useAuthStore((state) => state.setAccessToken);
    const setUserId = useAuthStore((state) => state.setUserId);
    const setRefreshToken = useAuthStore((state) => state.setRefreshToken);
    const [email, setEmail] = useState("johndoe@email.com")
    const [password, setPassword] = useState("••••••••••••")
    const [showPassword, setShowPassword] = useState(false)
    const setIsAuthorized = useAuthStore((state) => state.setIsAuthorized);
    const navigate = useNavigate();


    const [fbLoaded, setFbLoaded] = useState(false);


    useEffect(() => {
        console.log(import.meta.env.VITE_FACEBOOK_APP_ID);
        const scriptId = "facebook-jssdk";

        const existing = document.getElementById(scriptId);
        if (existing) {
            existing.remove();
        }

        window.FB = undefined;

        const script = document.createElement("script");
        script.id = scriptId;
        script.src = "https://connect.facebook.net/en_US/sdk.js";
        script.async = true;
        script.defer = true;

        script.onload = () => {
            const waitForFB = setInterval(() => {
                if (window.FB) {
                    clearInterval(waitForFB);
                    window.FB.init({
                        appId: "24151840021077228", // Ensure this is a valid app ID
                        cookie: true,
                        xfbml: true,
                        version: "v17.0",
                    });
                    setFbLoaded(true);
                }
            }, 100);
        };

        document.body.appendChild(script);

        return () => {
            const injected = document.getElementById(scriptId);
            if (injected) injected.remove();
            window.FB = undefined;
        };
    }, []);

    const handleLogin = () => {
        if (!fbLoaded || !window.FB) {
            console.error("⚠️ Facebook SDK is not loaded or initialized yet.");
            return;
        }

        window.FB.login(
            function (response) {
                if (response.authResponse) {
                    const accessToken = response.authResponse.accessToken;

                    api
                        .post("http://localhost:8000/api/user/facebook-login/", {
                            access_token: accessToken,
                        })
                        .then((res) => {
                            console.log("✅ Login Success", res.data);
                            setUserId(res.data.user_id); // Store user ID in the store
                            setAccessToken(res.data.access);
                            setIsAuthorized(true);

                            navigate("/");
                        })
                        .catch((err) => {
                            console.error("❌ Login Failed (backend):", err.response?.data || err.message);
                        });
                } else {
                    console.warn("⚠️ User cancelled login or did not authorize.");
                }
            },
            { scope: "email" }
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await api.post(route, { email, password }, { withCredentials: true })
            console.log(res.data)
            if (method === "login") {
                setAccessToken(res.data.access);
                setRefreshToken(res.data.refresh);
                setUserId(res.data.user_id); // Store user ID in the store
                setIsAuthorized(true);
                navigate("/")
            } else {
                navigate("/login")
            }
        } catch (error) {
            alert(error)
        }
    };


    return (
        <div className="min-h-screen flex flex-col lg:flex-row w-full ">
            {/* Left Side - Brand Section */}
            <div className="hidden lg:flex lg:w-[33%] bg-gradient-to-b from-[#4C1707] to-[#1E1E1E] flex-col justify-center items-center text-white p-6 lg:p-12">
                <div className="max-w-md flex items-center flex-col">
                    {/* Hilal Publications Logo */}
                    <div className="mb-8 lg:mb-12">
                        <img src={HilalDigital} alt="Hilal Digital Logo" className="max-w-full h-auto" />
                    </div>

                    {/* Marketing Text */}
                    <h2 className="font-roboto font-normal text-xl md:text-2xl lg:text-[32px] leading-tight lg:leading-[100%] tracking-[0] text-center">
                        Uncover Millions of products from reputable Suppliers-sign up now!
                    </h2>
                </div>
            </div>

            {/* Right Side - Sign Up Form */}
            <div className="w-full lg:w-[67%] bg-red-50 flex flex-col">
                {/* Header Navigation */}
                <div className="flex flex-col sm:flex-row lg:flex-col w-full justify-between  items-center p-4 sm:p-6">
                    <div className='flex w-full justify-between'>
                        <Link to="/" className="flex font-zen items-center font-normal text-sm sm:text-[16px] leading-tight sm:leading-[22.53px] tracking-[0px] text-center text-[#1E1E1E] mb-3 sm:mb-0">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Return Home
                        </Link>
                        {method == "login" ? <div className="font-normal text-sm sm:text-[16px] leading-tight sm:leading-[22.53px] tracking-[0px] text-center text-[#1E1E1E] font-zen">
                            Don’t have an account yet?{" "}
                            <Link to="/sign-up" className="font-zen font-bold text-sm sm:text-[16px] leading-tight sm:leading-[100%] tracking-[0px] text-center decoration-solid uppercase decoration-[0%] underline-offset-[0%]">Sign-up NOW</Link>
                        </div>
                            :
                            <div className="font-normal text-sm sm:text-[16px] leading-tight sm:leading-[22.53px] tracking-[0px] text-center text-[#1E1E1E] font-zen">
                                Already have an account?{" "}
                                <Link to="/login" className="font-zen font-bold text-sm sm:text-[16px] leading-tight sm:leading-[100%] tracking-[0px] text-center decoration-solid decoration-[0%] underline-offset-[0%]">LOGIN NOW</Link>
                            </div>
                        }
                    </div>

                    {/* Mobile Logo (only visible on small screens) */}
                    <div className="flex lg:hidden justify-center my-4">
                        <img src={HilalDigital} alt="Hilal Digital Logo" className="h-12 w-auto" />
                    </div>

                    {/* Sign Up Form */}
                    <div className="flex-1 w-full flex items-center justify-center p-4 sm:p-6">
                        <div className="w-full flex flex-col space-y-3 sm:space-y-4 max-w-md">
                            {/* Form Header */}
                            <h1 className="roboto font-bold text-4xl sm:text-5xl lg:text-[64px] leading-tight sm:leading-[37.5px] tracking-[-0.5px] text-center capitalize text-[#DF1600]">{method == 'login' ? "Login in" : "Sign Up"}</h1>
                            <p className="font-bold text-base sm:text-lg lg:text-[20px] leading-tight sm:leading-[37.5px] tracking-[-0.5px] text-center text-[#424242]">Login in your Account.</p>



                            {/* Google Sign In Button */}
                            <GoogleSignInButton />
                            {/* Facebook Login Button */}
                            <button onClick={handleLogin} disabled={!fbLoaded} className={` ${fbLoaded ? "w-full bg-[#D9D9D9] text-[#424242] hover:bg-gray-300 font-zen font-normal text-sm sm:text-[16px] leading-tight sm:leading-[25.6px] tracking-[0px]  py-2.5 sm:py-3 px-4 rounded-full flex items-center justify-center mb-4 sm:mb-6 transition-colors duration-200" : "bg-gray-400 cursor-not-allowed"}`}>
                                {fbLoaded ? <FaFacebook color="#1877F3" className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" /> : "Loading..."}
                                Log In with Facebook
                            </button>


                            {/* Divider */}
                            <div className="relative mb-4 sm:mb-6">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300"></div>
                                </div>
                                <div className="relative flex justify-center text-xs sm:text-sm">
                                    <span className="px-2 bg-gray-50 text-[#616161] font-zen font-normal text-xs sm:text-[12.8px] leading-[100%] tracking-[0px]">Or use Email</span>
                                </div>
                            </div>

                            {/* Email and Password Form */}
                            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                                {/* Email Field */}
                                <div>
                                    <label htmlFor="email" className="block font-zen font-medium text-[10px] sm:text-[10.24px] leading-tight sm:leading-[16.38px] tracking-[0px] text-[#616161] mb-1">
                                        EMAIL
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-[#F5F5F5] px-3 sm:px-4 py-2.5 sm:py-3 border font-zen font-normal text-sm sm:text-[16px] leading-tight sm:leading-[28.16px] tracking-[0px] text-[#616161] border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors duration-200"
                                        required
                                    />
                                </div>

                                {/* Password Field */}
                                <div>
                                    <label htmlFor="password" className="block font-zen font-medium text-[10px] sm:text-[10.24px] leading-tight sm:leading-[16.38px] tracking-[0px] text-[#616161] mb-1">
                                        PASSWORD
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="w-full bg-[#F5F5F5] px-3 sm:px-4 py-2.5 sm:py-3 border font-zen font-normal text-sm sm:text-[16px] leading-tight sm:leading-[28.16px] tracking-[0px] text-[#616161] border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors duration-200"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                {showPassword ? (
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                                                    />
                                                ) : (
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                    />
                                                )}
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                {/* Add forgot password link */}
                                {/* <div className="mt-1 text-right">
                                  <Link to="/forgot-password" className="text-xs text-[#DF1600] hover:underline font-zen">
                                      Forgot password?
                                  </Link>
                              </div> */}

                                {/* Continue Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-black font-zen font-bold text-xs sm:text-[12.8px] leading-tight sm:leading-[22.53px] tracking-[0px] text-center hover:bg-gray-800 text-white py-2.5 sm:py-3 px-4 rounded-lg flex items-center justify-center transition-colors duration-200 mt-4 sm:mt-6"
                                >
                                    CONTINUE
                                    <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </form>

                            {/* Login Link */}
                            <div className="text-center mt-4 sm:mt-6">
                                {method == "login" ? <span className="text-xs sm:text-sm text-[#616161] font-roboto font-normal sm:text-[12.8px] leading-tight sm:leading-[100%] tracking-[0px] text-center">
                                    Are you new here?{" "}
                                    <Link to="/sign-up" className="font-roboto text-[#424242] font-bold text-xs sm:text-[12.8px] leading-tight sm:leading-[100%] tracking-[0px] text-center">Sign-up <span className="text-xs sm:text-sm text-[#616161] font-roboto font-normal sm:text-[12.8px] leading-tight sm:leading-[100%] tracking-[0px] text-center">Now</span> </Link>
                                </span>
                                    :

                                    <span className="text-xs sm:text-sm text-[#616161] font-roboto font-normal sm:text-[12.8px] leading-tight sm:leading-[100%] tracking-[0px] text-center">
                                        Have an account?{" "}
                                        <Link to="/login" className="font-roboto text-[#424242] font-bold text-xs sm:text-[12.8px] leading-tight sm:leading-[100%] tracking-[0px] text-center">Login <span className="text-xs sm:text-sm text-[#616161] font-roboto font-normal sm:text-[12.8px] leading-tight sm:leading-[100%] tracking-[0px] text-center">Now</span> </Link>
                                    </span>
                                }
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex w-full flex-col sm:flex-row justify-between items-center p-4 sm:p-6 border-t border-gray-200 text-[10px] sm:text-xs font-zen font-normal sm:text-[12.8px] leading-tight sm:leading-[22.53px] tracking-[-0.5px] text-[#9E9E9E]">
                        <span className="mb-2 sm:mb-0 text-center sm:text-left">Copyright 2024 - 2025 Hilal.pk. All rights reserved.</span>
                        <div className="flex space-x-4">
                            <Link to="/privacy-policy" className="text-[#9E9E9E] hover:text-[#424242]">Privacy Policy</Link>
                            <Link to="/terms" className="text-[#9E9E9E] hover:text-[#424242]">Terms</Link>
                            <Link to="/help" className="flex items-center text-[#424242]">
                                <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                Need help?
                            </Link>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )

}

export default AuthForm