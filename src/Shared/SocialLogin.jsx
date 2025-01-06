import { useContext } from "react";
import AuthContext from "../Context/AuthContext";

const SocialLogin = () => {
    const {loginWithGoogle} = useContext(AuthContext);

    const handleGoogleSignin = () => {
        loginWithGoogle()
        .then(res=> {
            console.log(res.user);
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