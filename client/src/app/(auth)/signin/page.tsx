import React from 'react';
import SignInForm from '@/components/SignInForm';

const SignInPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <SignInForm />
    </div>
  );
};

export default SignInPage;
