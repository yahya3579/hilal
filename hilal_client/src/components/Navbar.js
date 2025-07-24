import React from 'react';
import useAuthStore from '../utils/store';

const Navbar = () => {
    const { userRole, clearTokens } = useAuthStore();

    const handleLogout = () => {
        clearTokens();
        // Add any additional logout logic if needed
    };

    return (
        <nav>
            {/* ...existing code... */}
            <div className="navbar-right">
                {userRole === null && (
                    <>
                        <button>Login</button>
                        <button>Subscribe</button>
                    </>
                )}
                {userRole === 'author' && (
                    <>
                        <button onClick={handleLogout}>Logout</button>
                        <button>Author</button>
                    </>
                )}
                {userRole === 'admin' && (
                    <>
                        <button onClick={handleLogout}>Logout</button>
                        <button>Admin</button>
                    </>
                )}
            </div>
            {/* ...existing code... */}
        </nav>
    );
};

export default Navbar;