import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const from = "/";
  //   console.log(createUser);

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
    // console.log("Form data:", data); // Log the form data to see if it's being captured correctly

    const { email, password, name, image } = data;

    createUser(email, password)
      .then((result) => {
        // console.log("User created successfully:", result);
        toast.success("Registration Successful!"); // Log the result of createUser
        updateUserProfile(name, image).then(() => {
          navigate(from);
          reset();
          window.location.reload();
        });
      })
      .catch((error) => {
        // console.error("Error creating user:", error); // Log any errors during user creation
        toast.error("Registration Failed. Please try again.");
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
              type="text"
              placeholder="Full Name"
              className="input input-bordered"
              name="name"
              {...register("name", { required: true })}
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
