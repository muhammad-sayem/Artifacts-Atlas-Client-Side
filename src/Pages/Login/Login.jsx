import Lottie from "lottie-react";
import loginLottieData from "../../assets/Lottie/login.json";
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import SocialLogin from "../../Shared/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";

const Login = () => {

    const { loginUser } = useContext(AuthContext);
    const location = useLocation();
    console.log('Inside login', location);

    const navigate = useNavigate();
    const from = location.state || '/';

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        console.log({ email, password });

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
        <div className="my-12">
            <div className="w-11/12 mx-auto hero bg-black py-12">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="text-center lg:text-left w-1/2">
                        <Lottie animationData={loginLottieData} className="w-[600px]"></Lottie>
                    </div>

                    <div className="card bg-[#F19100] shrink-0 shadow-2xl w-1/2">
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

                                <div className="flex px-1 text-xs gap-x-1 mt-2">
                                    <p className="flex-grow-0"> Don't have account? </p>
                                    <p className="flex-grow-0 underline"><Link to='/register'> Register </Link></p>
                                </div>

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-black text-[#F19100]">Login</button>
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