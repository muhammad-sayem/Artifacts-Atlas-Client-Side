import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {loginWithGoogle} = useContext(AuthContext);
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
            <button onClick={handleGoogleSignin} className="btn w-full"> Signin With Google </button>
        </div>
    );
};

export default SocialLogin;