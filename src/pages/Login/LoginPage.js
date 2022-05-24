import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import bgProducts from "../../assets/img/bgProducts.jpg";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../components/Loading";
import useToken from "../../hooks/useToken";

const LoginPage = () => {
  const {register,formState: { errors },handleSubmit} = useForm();
  const navigate=useNavigate()
  const [signInWithGoogle, googleUser, googleLoading, googleError] =useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =useSignInWithEmailAndPassword(auth);

  const onSubmit = (data) => {
signInWithEmailAndPassword(data.email, data.password);
  };
  const [token]=useToken(user ||googleUser)
  if (loading || googleLoading) {
    return <Loading></Loading>;
  }

  const resetYourPassword = () => {
    console.log("ok");
  };

  if(user || googleUser){
    navigate('/')
  }

  let userError;
  if (error || googleError) {
    userError = (
      <p className="text-sm text-red-500 mb-2">
        {error?.message || googleError?.message}
      </p>
    );
    console.log(error);
  }

  return (
    <div
      style={{ backgroundImage: `url(${bgProducts})` }}
      className="flex  justify-center w-screen h-screen items-center"
    >
      <div className="card shadow-2xl shadow-blue-500 w-full lg:w-4/12 ">
        <div className="card-body ">
          {/* <img src={logo} className='w-28 bg-slate-300' alt="" /> */}
          <h1 className="text-3xl font-bold text-center uppercase text-[#002341]">
            login{" "}
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            {/* onBlur={(e)=>setYourEmail(e.target.value)} */}
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full max-w-lg "
              {...register("email", {
                required: {
                  value: true,
                  message: "Email address is required",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Your email is valid .",
                },
              })}
            />
            <label className="label">
              {errors?.email?.type === "required" && (
                <span className="text-red-500 label-text-alt">
                  {errors.email.message}
                </span>
              )}
              {errors?.email?.type === "pattern" && (
                <span className="text-red-500 label-text-alt">
                  {errors.email.message}
                </span>
              )}
            </label>

            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Your Password"
              className="input input-bordered w-full max-w-lg "
              {...register("password", {
                required: {
                  value: true,
                  message: "Password address is required",
                },
                minLength: {
                  value: 6,
                  message: "Your password must be 6 charecter .",
                },
              })}
            />
            <label className="label">
              {errors?.password?.type === "required" && (
                <span className="text-red-500 label-text-alt">
                  {errors.password.message}
                </span>
              )}
              {errors?.password?.type === "minLength" && (
                <span className="text-red-500 label-text-alt">
                  {errors.password.message}
                </span>
              )}
            </label>

            {userError}
            <input
              className="btn bg-[#002341] text-center w-full"
              type="submit"
              value="Login"
            />
          </form>

          <div className="divider">OR</div>
          <div className="flex justify-between mb-1">
            <p className="text-sm">
              Don't have an account?{" "}
              <Link to="/register" className="text-red-500 hover:underline">
                Register{" "}
              </Link>
            </p>
            <button
              onClick={resetYourPassword}
              className="text-sm text-red-500 hover:underline"
            >
              Reset Password
            </button>
          </div>

          <p></p>
          <button
            onClick={() => signInWithGoogle()}
            className="w-full btn btn-outline btn-accent"
          >
            Continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
