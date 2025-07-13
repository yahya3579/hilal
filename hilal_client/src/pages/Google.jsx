import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function GoogleSignInButton() {
    const navigate = useNavigate();
    const handleSuccess = async (credentialResponse) => {
        try {
            const res = await axios.post("http://localhost:8000/api/user/google-login/", {
                id_token: credentialResponse.credential
            });

            console.log("Login Success", res.data);
            localStorage.setItem("access", res.data.access);
            localStorage.setItem("refresh", res.data.refresh);
            navigate("/");
        } catch (err) {
            console.error("Login Failed", err.response?.data);
        }
    };

    return (
        <GoogleLogin
            onSuccess={handleSuccess}
            onError={() => console.log("Login Failed")}
        />
    );
}
export default GoogleSignInButton;