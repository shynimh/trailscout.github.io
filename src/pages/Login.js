import { Link } from "react-router-dom";
import '../App.css'; 
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react';
import { useForm } from "react-hook-form"
import { setToken, removeToken, getCookie, withAuth } from 'react-auth-kit';



export const Login = () => {
    // --------- form validation ----------
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loginError, setLoginError] = useState(""); 


    // ---------------- login logic --------------------
    const onSubmit = (data) => {
      const { email, password } = data;
      if (password === 'webint123!' && email === 'user@eurecom.com') {
          window.location.href = "/HomePage";
      } else {
        setLoginError("Invalid email or password");
          // alert("Login Unsuccessful!");
      }
      console.log(data); // Optionally log the form data
  };




    //  ----------------------------------------------------------------

    return (
        <div className="App">
          <div className="view">
    
            {/* -----------LOGIN FORM---------- */}
            <div className="Auth-form-container">
              <form className="Auth-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="Auth-form-content">
                <img id='logo' src='./logo.png' alt='Trail Scout Logo' />
                  <h3 className="Auth-form-title">LogIn</h3>
                  
                  {loginError && <p  className="login-error">{loginError}</p>} 

                  <div className="form-group mt-3">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control mt-1"
                      placeholder="Enter email"
                    //   ---- validation ----
                      {...register("email", { required: true})}
                    />
                    {errors.email && <span>Email is required</span>}
                  </div>
                  <div className="form-group mt-3">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control mt-1"
                      placeholder="Enter password"
                      {...register("password", { required: true })}
                    />
                    {errors.password && <span>Password is required</span>}
                  </div>

                  <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="submit-buttn">
                                    LogIn
                                </button>
                  </div>
                                                   
                  <p className="forgot-password text-right mt-2">
                  <Link to="/passwordreset" className="forgot-password"> Forgot password? </Link>
                  </p>
                  <p className="sign-up">
                    <b>Don't have an account yet?</b>
                    <br></br>
                    Join the community. 
                    <Link to="/signup" className="signup-now"> SignUp Now! </Link>
                  </p>
                </div>            
              </form>
            </div>
          </div>      
        </div>
      );
}