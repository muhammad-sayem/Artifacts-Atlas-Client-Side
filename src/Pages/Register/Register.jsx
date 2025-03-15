import Lottie from "lottie-react";
import registerLottieData from "../../assets/Lottie/register.json";
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import Swal from "sweetalert2";
import SocialLogin from "../../Shared/SocialLogin";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const { createUser, manageProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value; // Correctly retrieve photoURL
        const email = form.email.value;
        const password = form.password.value;

        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])[A-Za-z\d@$!%*?&]{6,}$/;

        if (!passwordRegex.test(password)) {
            Swal.fire({
                icon: "error",
                text: "Password must contain at least 6 digits and at least one uppercase and one lowercase letter",
            });
            return;
        }

        try {
            // Create user
            const { user } = await createUser(email, password);

            // Update user profile
            await manageProfile(name, photoURL);

            Swal.fire({
                title: "Registration Successful!",
                icon: "success",
            });

            // Navigate to home page
            navigate("/");
        } catch (error) {
            console.error("Error during registration:", error);
            Swal.fire({
                icon: "error",
                text: error.message,
            });
        }
    };

    return (
        <div className="w-11/12 mx-auto">
            <div className="hero bg-black my-12 py-12 rounded-xl">
                <div className="hero-content flex-col lg:flex-row-reverse justify-center items-center">
                    <div className="lg:text-left lg:w-1/2">
                        <Lottie animationData={registerLottieData} className="lg:w-[600px]" />
                    </div>
                    <div className="card bg-[#F19100] shrink-0 shadow-2xl lg:w-1/2">
                        <h1 className="text-center mt-4 text-5xl font-bold dark:text-black">Register now!</h1>
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-black dark:font-bold">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter Name"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-black dark:font-bold">Photo URL</span>
                                </label>
                                <input
                                    type="text"
                                    name="photoURL" // Fix the name attribute
                                    placeholder="Photo URL"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-black dark:font-bold">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-black dark:font-bold">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required
                                />
                                <div className="flex px-1 text-xs gap-x-1 mt-2">
                                    <p className="flex-grow-0 dark:text-black dark:font-bold">Already have an account?</p>
                                    <p className="flex-grow-0 underline dark:text-black dark:font-bold">
                                        <Link to="/login">Login</Link>
                                    </p>
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover dark:text-black dark:font-bold">
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-black dark:font-bold text-[#F19100] text-xl">Register</button>
                            </div>
                            <div className="divider dark:text-black dark:font-bold">OR</div>
                            <SocialLogin />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
