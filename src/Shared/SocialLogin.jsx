import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    const {loginWithGoogle} = useContext(AuthContext)
    const location = useLocation();
    const from = location.state || '/';
    const navigate = useNavigate();

    const handleGoogleSignin = () => {
        loginWithGoogle()
        .then(res=> {
            console.log(res.user);
            navigate(from);

        })
        .catch(err => {
            console.log(err.message);
        })
    } 

    return (
        <div>
            <button onClick={handleGoogleSignin} className="btn w-full"> <FcGoogle size={25}></FcGoogle>  Signin With Google </button>
        </div>
    );
};

export default SocialLogin;