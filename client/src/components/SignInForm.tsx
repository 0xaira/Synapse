'use client'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signInSchema, TSignInSchema } from '@/validation/schemas';

const SignInForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TSignInSchema>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: TSignInSchema) => {
    console.log(data);
    alert('Signing in!');
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
      <h2 className="text-xl font-semibold mb-4">Sign In</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2">
        <input
          {...register('email')}
          type="email"
          placeholder="Email"
          className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
        />
        {errors.email && (
          <p className="text-red-500">{`${errors.email.message}`}</p>
        )}

        <input
          {...register('password')}
          type="password"
          placeholder="Password"
          className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
        />
        {errors.password && (
          <p className="text-red-500">{`${errors.password.message}`}</p>
        )}

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          disabled={isSubmitting}
        >
          Sign In
        </button>
      </form>
      <p className="mt-2 text-sm text-gray-600">
        Dont have an account?{' '}
        <a href="/signup" className="text-blue-500 hover:underline focus:outline-none">
          Sign Up
        </a>
      </p>
    </div>
  );
};

export default SignInForm;
