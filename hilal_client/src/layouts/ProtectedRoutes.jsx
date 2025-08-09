// import React, { useEffect, useState } from 'react'
// import { Navigate } from 'react-router-dom'
// import { jwtDecode } from 'jwt-decode'
// import axios from 'axios'
// import useAuthStore from '../utils/store'

// const ProtectedRoutes = ({ children }) => {

//     const accessToken = useAuthStore((state) => state.accessToken)
//     const setAccessToken = useAuthStore((state) => state.setAccessToken)
//     const setUserRole = useAuthStore((state) => state.setUserRole)
//     const setIsAuthorized = useAuthStore((state) => state.setIsAuthorized)
//     const isAuthorized = useAuthStore((state) => state.isAuthorized)
//     const authTrigger = useAuthStore((state) => state.authTrigger); // 🔥
//     const setUserId = useAuthStore((state) => state.setUserId)
//     useEffect(() => {
//         console.log("Checking authentication status")
//         auth().catch((error) => {
//             console.error("Error during authentication:", error)
//             setIsAuthorized(false)
//         })
//     }, [authTrigger])
//     const fetchUserRole = async (userId) => {
//         try {
//             const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/user/${userId}/role/`);
//             setUserRole(response.data.role);
//             console.log("User role fetched and stored:", response.data.role);
//         } catch (error) {
//             console.error("Error fetching user role:", error?.response?.data || error.message);
//         }
//     };

//     const refreshToken = async () => {
//         try {
//             console.log("Refreshing token")
//             const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/token/refresh/`, {}, {
//                 withCredentials: true
//             });
//             console.log("response", response);
//             if (response.status === 200) {
//                 setAccessToken(response.data.access);
//                 setIsAuthorized(true);


//                 const decodedToken = jwtDecode(response.data.access);
//                 setUserId(decodedToken.user_id);
//                 await fetchUserRole(decodedToken.user_id); // Fetch role after refreshing token
//             } else {
//                 setIsAuthorized(false);
//             }
//         } catch (error) {
//             console.error("Error refreshing token:", error?.response?.data || error.message);
//             setIsAuthorized(false);
//         }
//     };

//     const auth = async () => {
//         console.log("Access Token:", accessToken);
//         if (!accessToken) {
//             const refreshed = await refreshToken()
//             console.log("Token refreshed:", refreshed);
//             if (!refreshed) {
//                 setIsAuthorized(false);
//                 return // Already handled inside refreshToken
//             }
//         }

//         else {
//             try {
//                 const decodedToken = jwtDecode(accessToken)
//                 const expirationTime = decodedToken.exp;
//                 const currentTime = Date.now() / 1000;
//                 if (expirationTime < currentTime) {
//                     console.log("Token expired getting new")
//                     await refreshToken();
//                 } else {
//                     setIsAuthorized(true)
//                     await fetchUserRole(decodedToken.user_id); // Fetch role if token is valid
//                 }
//             } catch (error) {
//                 console.error("Invalid token format, attempting refresh:", error);
//                 await refreshToken();  // Attempt to refresh even if decode fails
//             }
//         }

//     }



//     // if (isAuthorized == null) {
//     //     return <div>Loading...</div>
//     // }


//     // return isAuthorized ? children : <Navigate to="/login" />
//     return children
// }

// export default ProtectedRoutes

import React, { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import useAuthStore from '../utils/store';

const ProtectedRoutes = ({ children }) => {
    const accessToken = useAuthStore((state) => state.accessToken);
    const setAccessToken = useAuthStore((state) => state.setAccessToken);
    const setUserRole = useAuthStore((state) => state.setUserRole);
    const setIsAuthorized = useAuthStore((state) => state.setIsAuthorized);
    const isAuthorized = useAuthStore((state) => state.isAuthorized);
    const authTrigger = useAuthStore((state) => state.authTrigger);
    const setUserId = useAuthStore((state) => state.setUserId);
    const navigate = useNavigate();
    const location = useLocation(); // ✅ detect current path



    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                await auth();
            } catch (error) {
                console.error('Error during authentication:', error);
                setIsAuthorized(false);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authTrigger]);

    const fetchUserRole = async (userId) => {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}/api/user/${userId}/role/`
            );
            setUserRole(response.data.role);
            console.log('User role fetched and stored:', response.data.role);
        } catch (error) {
            console.error(
                'Error fetching user role:',
                error?.response?.data || error.message
            );
        }
    };

    const refreshToken = async () => {
        try {
            console.log('Refreshing token');
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/api/token/refresh/`,
                {},
                { withCredentials: true }
            );
            if (response.status === 200) {
                const newToken = response.data.access;
                setAccessToken(newToken);
                setIsAuthorized(true);

                const decodedToken = jwtDecode(newToken);
                setUserId(decodedToken.user_id);
                await fetchUserRole(decodedToken.user_id);

                return true;
            }
        } catch (error) {
            console.error(
                'Error refreshing token:',
                error?.response?.data || error.message
            );
            setIsAuthorized(false);
        }
        return false;
    };

    const auth = async () => {
        console.log('Access Token:', accessToken);
        if (!accessToken) {
            const refreshed = await refreshToken();
            if (!refreshed) {

                setIsAuthorized(false);
                if (location.pathname !== '/') {
                    navigate('/login');
                }

            }
            return;
        }

        try {
            const decodedToken = jwtDecode(accessToken);
            const expirationTime = decodedToken.exp;
            const currentTime = Date.now() / 1000;

            if (expirationTime < currentTime) {
                console.log('Token expired getting new');
                await refreshToken();
            } else {
                setIsAuthorized(true);
                setUserId(decodedToken.user_id);
                await fetchUserRole(decodedToken.user_id);
            }
        } catch (error) {
            console.error('Invalid token format, attempting refresh:', error);
            await refreshToken();
        }
    };

    // Show loading until we finish auth check
    if (loading) {
        return <div>Loading...</div>;
    }

    // Redirect to login if not authorized
    // if (!isAuthorized) {
    //     return <Navigate to="/login" replace />;
    // }

    return children;
};

export default ProtectedRoutes;
