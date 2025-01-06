import Lottie from "lottie-react";
import loginLottieData from "../../assets/Lottie/login.json";
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import SocialLogin from "../../Shared/SocialLogin";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {

    const {loginUser} = useContext(AuthContext);
    const location = useLocation();
    console.log('Inside login', location);

    const navigate = useNavigate();
    const from = location.state || '/';

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;
        
        console.log({email, password});

        loginUser(email, password)
        .then(res => {
            console.log(res.user);
            // const user = {email: res.user.email}

            // axios.post('http://localhost:5000/jwt', user, {
            //     withCredentials: true 
            // })
            // .then(res => {
            //     console.log(res.data);
            // })
            navigate(from);
        })
        .catch(err => {
            console.log(err.message);
        })
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">

                    <Lottie animationData={loginLottieData}></Lottie>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <h1 className=" text-center mt-4 text-5xl font-bold">Login now!</h1>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className="divider">OR</div>
                            <SocialLogin></SocialLogin>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;