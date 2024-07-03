"use client";

import { TSignUpSchema, signUpSchema } from "@/validation/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

const SignUpForm: React.FC = () => {
    const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
      setError,
    } = useForm<TSignUpSchema>({
      resolver: zodResolver(signUpSchema),
    });
  
    const onSubmit = async (data: TSignUpSchema) => {
      console.log(data);
  
      // Simulate form submission logic
      alert('Form submitted successfully!');
    };
  
    return (
      <>
      <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 bg-white shadow-md rounded text-black">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-black">Name</label>
          <input
            id="name"
            type="text"
            {...register('name')}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
        </div>
  
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>
  
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            id="password"
            type="password"
            {...register('password')}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
        </div>
  
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            {...register('confirmPassword')}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>}
        </div>
  
        <div className="mb-4">
          <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700">Upload Your Profile Picture</label>
          <input
            id="profilePicture"
            type="file"
            {...register('profilePicture')}
            className="mt-1 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          {errors.profilePicture && <p className="mt-1 text-sm text-red-600">{errors.profilePicture.message}</p>}
        </div>
  
        <div className="mb-4">
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600" disabled={isSubmitting}>
            Sign Up
          </button>
        </div>
      </form>
      <p className="mt-2 text-sm text-gray-600">
      Already have an account?{' '}
      <a href="/signin" className="text-blue-500 hover:underline focus:outline-none">
        Sign In
      </a>
    </p>
    </div>
    </>
    );
  };
  
  export default SignUpForm;