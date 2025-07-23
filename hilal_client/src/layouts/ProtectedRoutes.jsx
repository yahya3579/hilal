import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import axios from 'axios'
import useAuthStore from '../utils/store'

const ProtectedRoutes = ({ children }) => {
    const [isAuthorized, setIsAuthorized] = useState(null)
    const accessToken = useAuthStore((state) => state.accessToken)
    const setAccessToken = useAuthStore((state) => state.setAccessToken)

    useEffect(() => {
        console.log("Checking authentication status")
        auth().catch((error) => {
            console.error("Error during authentication:", error)
            setIsAuthorized(false)
        })
    }, [])
    const refreshToken = async () => {
        try {
            console.log("Refreshing token")
            const response = await axios.post('http://localhost:8000/api/token/refresh/', {}, {
                withCredentials: true
            });
            console.log("response", response);
            if (response.status === 200) {
                setAccessToken(response.data.access);
                setIsAuthorized(true);
            } else {
                setIsAuthorized(false);
            }
        } catch (error) {
            console.error("Error refreshing token:", error?.response?.data || error.message);
            setIsAuthorized(false);
        }
    };

    const auth = async () => {
        console.log("Access Token:", accessToken);
        if (!accessToken) {
            // setIsAuthorized(false);
            const refreshed = await refreshToken()
            if (!refreshed) {
                return // Already handled inside refreshToken
            }
        }

        else {
            try {
                const decodedToken = jwtDecode(accessToken)
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

    }



    if (isAuthorized == null) {
        return <div>Loading...</div>
    }

    return isAuthorized ? children : <Navigate to="/login" />
}

export default ProtectedRoutes