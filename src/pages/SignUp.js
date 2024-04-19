import { Link } from "react-router-dom";
import '../App.css'; 
import "bootstrap/dist/css/bootstrap.min.css"
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {
    // Initialize the useForm hook
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const navigate = useNavigate();

    const password = watch("password", ""); 

    const onSubmit = (data) => {
        console.log(data); 
        navigate('/');
    };

    return (
        <div className="App">
            <div className="view">
                {/* -----------LOGIN FORM---------- */}
                <div className="Auth-form-container">
                    <form className="Auth-form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="Auth-form-content">
                            <img id='logo' src='./logo.png' alt='Logo' />
                            <h3 className="Auth-form-title">Sign Up</h3>
                            <div className="form-group mt-3">
                                <label>Enter Your Email Address</label>
                                <input
                                    type="email"
                                    className="form-control mt-1"
                                    placeholder="Enter your email"
                                    {...register("email", { required: true, pattern: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/ })}
                                />
                                {errors.email && <span>Please verify email entered</span>}
                            </div>
                            <div className="form-group mt-3">
                                <label>Enter New Password</label>
                                <input
                                    type="password"
                                    className="form-control mt-1"
                                    placeholder="Enter password"
                                    {...register("password", {
                                        required: true,
                                        pattern: {
                                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
                                            message: "Password must be atleast 8 characters, include atleast one lowercase letter, uppercase letter, number and one special character."
                                        }
                                    })}
                                />
                                {errors.password && <span>{errors.password.message}</span>}
                            </div>
                            <div className="form-group mt-3">
                                <label>Confirm Your Password</label>
                                <input
                                    type="password"
                                    className="form-control mt-1"
                                    placeholder="Confirm Your Password"
                                    {...register("confirmPassword", {
                                        required: true,
                                        validate: value => value === password || "The passwords do not match"
                                    })}
                                />
                                {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
                            </div>
                            <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="submit-buttn">SignUp</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
