import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import axios from 'axios'
import useAuthStore from '../utils/store'

const ProtectedRoutes = ({ children }) => {

    const accessToken = useAuthStore((state) => state.accessToken)
    const setAccessToken = useAuthStore((state) => state.setAccessToken)
    const setUserRole = useAuthStore((state) => state.setUserRole)
    const setIsAuthorized = useAuthStore((state) => state.setIsAuthorized)
    const isAuthorized = useAuthStore((state) => state.isAuthorized)
    const authTrigger = useAuthStore((state) => state.authTrigger); // 🔥

    useEffect(() => {
        console.log("Checking authentication status")
        auth().catch((error) => {
            console.error("Error during authentication:", error)
            setIsAuthorized(false)
        })
    }, [authTrigger])
    const fetchUserRole = async (userId) => {
        try {
            const response = await axios.get(`http://localhost:8000/api/user/${userId}/role/`);
            setUserRole(response.data.role);
            console.log("User role fetched and stored:", response.data.role);
        } catch (error) {
            console.error("Error fetching user role:", error?.response?.data || error.message);
        }
    };

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
                const decodedToken = jwtDecode(response.data.access);
                await fetchUserRole(decodedToken.user_id); // Fetch role after refreshing token
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
                    await fetchUserRole(decodedToken.user_id); // Fetch role if token is valid
                }
            } catch (error) {
                console.error("Invalid token format, attempting refresh:", error);
                await refreshToken();  // Attempt to refresh even if decode fails
            }
        }

    }



    // if (isAuthorized == null) {
    //     return <div>Loading...</div>
    // }

    // return isAuthorized ? children : <Navigate to="/login" />
    return children
}

export default ProtectedRoutes