import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { createUser } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const passwordValidation = (value) => {
    const regexUpperCase = /[A-Z]/;
    const regexLowerCase = /[a-z]/;

    if (!regexUpperCase.test(value)) {
      return "Password must contain at least one uppercase letter";
    }

    if (!regexLowerCase.test(value)) {
      return "Password must contain at least one lowercase letter";
    }

    if (value.length < 6) {
      return "Password must be at least 6 characters long";
    }

    return true;
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password, name } = data;
    const displayName = name; // Use the name field as displayName
    createUser(email, password, displayName)
      .then((result) => {
        toast.success("Registration Successfully");
        reset();
        console.log(result);
      })
      .catch((error) => {
        console.error("Error creating user:", error);
        toast.error("Registration Failed Try Again");
      });
  };

  return (
    <div>
      <div className="lg:w-2/5 mx-auto min-h-[calc(100vh-246px)]">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="displayName"
              placeholder="Full Name"
              className="input input-bordered"
              name="displayName"
              {...register("displayName", { required: true })}
            />
            {errors.name && (
              <span className=" text-red-600">This field is required</span>
            )}
          </div>
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
              <span className="label-text">Image Url</span>
            </label>
            <input
              type="text"
              placeholder="Image Url"
              className="input input-bordered"
              name="image"
              {...register("image")}
            />
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
                  validate: passwordValidation,
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
            <button className="btn btn-neutral">Register</button>
          </div>
          <p className=" text-center">
            Already have account? Please
            <Link to="/login">
              <button className="btn btn-link">Login</button>
            </Link>
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
