"use client"

import { FormProvider, useForm } from 'react-hook-form';
import { ProfileSignupFields } from './ProfileSignupFields';
import { UploadPhoto } from './UploadPhoto';
import { useSignup } from '@/src/hooks/formsSubmit/useSignup';
import { Button } from '../../ui/button';
import { Inputs } from '@/src/types/formTypes';

export const ProfileSignupForm = () => {
  const formMethods = useForm<Inputs>({
    defaultValues: {
      profilePicture: null,
      firstName: '',
      lastName: '',
      role: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  });

  const { onSubmit } = useSignup();

  return (
    <FormProvider {...formMethods}>
      <form
        method="POST"
        onSubmit={formMethods.handleSubmit(onSubmit)}
        className="grid grid-cols-12 gap-4 gap-y-7 w-full"
      >
        <UploadPhoto />
        <ProfileSignupFields />
        <Button
          type="submit"
          className="flex justify-end col-span-12 rounded-[200px] px-4 py-2 sm:w-max"
        >
          Continue
        </Button>
      </form>
    </FormProvider>
  );
};
