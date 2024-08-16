'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const LoginPage = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => router.push("/"), 2000);
  }, []);
  return <div>You have logged out... redirecting in a sec.</div>;
};

export default LoginPage;
