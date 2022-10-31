import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../lib/Button/Button";
import Input from "../lib/Form/Input";

const Register: React.FC = () => {
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
      <div className="w-5/12 lg:w-3/12 space-y-6">
        <div>
          <h3 className="text-2xl font-semibold text-center">Create account</h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <Input
            placeholder="John doe"
            label="Your name"
            {...register("name", {
              required: {
                value: true,
                message: "Name is a required field.",
              },
            })}
          />
          <Input
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value:
                  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                message: "Invalid email id",
              },
            })}
            placeholder="example@email.com"
            label="Email address"
            error={errors?.email?.message}
          />
          <Input
            type="password"
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
          <Input
            type="password"
            {...register("confirmPassword", {
              required: {
                value: true,
                message: "Confirm password is required",
              },
            })}
            placeholder="*******"
            label="Confirm password"
            error={errors?.confirmPassword?.message}
          />
          <Button type="submit">Create account</Button>
        </form>
        <div className="flex flex-col gap-2 items-center">
          <p>Already have an account!</p>
          <Link
            to="/login"
            className="p-2 rounded-md shadow-sm bg-slate-100 w-full text-center"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
