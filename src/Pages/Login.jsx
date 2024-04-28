import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../Components/SocialLogin/SocialLogin";
import useAuth from "../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";
import { useState } from "react";

const Login = () => {
  const { signInUser } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;
    signInUser(email, password)
      .then((result) => {
        // console.log(result.user);
        toast.success("Login Successfully");
        reset();
        navigate("/");
      })
      .catch((error) => {
        // console.error("Error creating user:", error);
        toast.error("Login Failed Try Again");
      });
  };

  return (
    <div>
      <div className="lg:w-2/5 mx-auto min-h-[calc(100vh-246px)]">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              name="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className=" text-red-600">This field is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className=" relative ">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered w-full"
                {...register("password", {
                  required: true,
                })}
              />
              <span
                className=" absolute top-4 right-4"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoMdEye /> : <IoIosEyeOff />}
              </span>
            </div>
            {errors.password && (
              <span className=" text-red-500">{errors.password.message}</span>
            )}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral">Login</button>
          </div>
          <p className=" text-center">
            New to here? Please
            <Link to="/register">
              <button className="btn btn-link">Register</button>
            </Link>
          </p>
        </form>
        <SocialLogin></SocialLogin>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
