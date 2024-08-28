"use client";
import { signInWithGoogle } from '@/src/lib/auth-actions';
import { Button } from '@/src/components/ui/button';
import Image from 'next/image';

export const SignInWithGoogleButton = () => {
  return (
    <Button
      variant="outline"
      className="flex flex-1 rounded-[47px] sm:rounded-full border-gray-300 py-3 px-6 sm:p-3 sm:h-auto"
      onClick={() => {
        signInWithGoogle();
      }}
    >
      <Image
        className="mr-2 sm:mr-0"
        src="googleVector.svg"
        width={22.8}
        height={22.8}
        alt="Google icon"
      />
      <span className="sm:hidden">Google</span>
    </Button>
  );
};
