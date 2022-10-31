import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../lib/Button/Button";
import Input from "../lib/Form/Input";

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="h-screen w-screen flex items-center justify-center font-inter">
      <div className="w-5/12 lg:w-3/12  space-y-6">
        <div>
          <h3 className="text-2xl font-semibold text-center">Sign In</h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <Input
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
            })}
            placeholder="example@email.com"
            label="Email address"
            error={errors?.email?.message}
          />
          <Input
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
            })}
            placeholder="*******"
            label="Password"
            error={errors?.password?.message}
          />
          <Button type="submit">Login</Button>
        </form>
        <p className="text-sm font-medium text-end text-gray-400 hover:text-blue-600 cursor-pointer">
          Forgot password
        </p>
        <div className="flex flex-col gap-2 items-center">
          <p>Don't have an account!</p>
          <Link
            to="/register"
            className="p-2 rounded-md shadow-sm bg-slate-100 w-full text-center"
          >
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
