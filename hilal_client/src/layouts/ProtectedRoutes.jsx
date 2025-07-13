import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import api from '../utils/api'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../utils/constants'
import axios from 'axios'
const ProtectedRoutes = ({ children }) => {
    const [isAuthorized, setIsAuthorized] = useState(null)

    useEffect(() => {
        auth().catch((error) => {
            console.error("Error during authentication:", error)
            setIsAuthorized(false)
        })
    }, [])
    const refreshToken = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/token/refresh/', {}, {
                withCredentials: true
            });
            console.log("response", response);
            if (response.status === 200) {
                localStorage.setItem(ACCESS_TOKEN, response.data.access);
                setIsAuthorized(true);
            } else {
                setIsAuthorized(false);
            }
        } catch (error) {
            console.error("Error refreshing token:", error?.response?.data || error.message);
            setIsAuthorized(false);
        }
    };

    // const auth = async () => {
    //     const token = localStorage.getItem(ACCESS_TOKEN)
    //     if (!token) {
    //         setIsAuthorized(false)
    //         return
    //     }
    //     const decodedToken = jwtDecode(token)
    //     const expirationTime = decodedToken.exp;
    //     const currentTime = Date.now() / 1000;
    //     if (expirationTime < currentTime) {
    //         await refreshToken();
    //     }
    //     else {
    //         setIsAuthorized(true)
    //     }

    // }
    const auth = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN)
        if (!token) {
            setIsAuthorized(false)
            return
        }

        try {
            const decodedToken = jwtDecode(token)
            const expirationTime = decodedToken.exp;
            const currentTime = Date.now() / 1000;
            if (expirationTime < currentTime) {
                console.log("Token expired getting new")
                await refreshToken();
            } else {
                setIsAuthorized(true)
            }
        } catch (error) {
            console.error("Invalid token format, attempting refresh:", error);
            await refreshToken();  // Attempt to refresh even if decode fails
        }
    }



    if (isAuthorized == null) {
        return <div>Loading...</div>
    }

    return isAuthorized ? children : <Navigate to="/login" />
}

export default ProtectedRoutes