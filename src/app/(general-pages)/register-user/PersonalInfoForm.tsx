'use client'

import { Button } from '@/src/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/src/components/ui/form';
import { Input } from '@/src/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/src/components/ui/select';
import { AddCircle, Eye, EyeSlash } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  profilePicture: FileList | null;
  firstName: string
  lastName: string
  role: string
  email: string
  password: string
  confirmPassword: string
}

export const PersonalInfoForm = () => {

  const form = useForm<Inputs>();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, field: any) => {
    const file = e.target.files?.[0];
    if (file) {
      field.onChange(e.target.files);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const togglePasswordVisibility = (type: 'C' | 'P') => {
    if (type === 'P') return setShowPassword(!showPassword);
    if (type === 'C') return setShowConfirmPassword(!showConfirmPassword);
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-12 gap-4 gap-y-7 w-full">
          <FormField
            control={form.control}
            name="profilePicture"
            render={({ field }) => (
              <FormItem className="col-span-12">
                <FormLabel
                  className="font-['Rethink Sans'] font-[500] text-[14px] tracking-[-0.42px] leading-5 text-slate-600"
                  htmlFor="profilePicture"
                >Profile picture</FormLabel>
                <div className='flex flex-1 gap-4 items-center'>
                  <FormControl className='w-[72px] h-[72px]'>
                    <div className="relative w-20 h-20 bg-slate-50 rounded-lg flex flex-col justify-center items-center cursor-pointer">
                      <label htmlFor="profilePicture" className="flex flex-col items-center justify-center w-full h-full">
                        {preview ? (
                          <Image
                            src={preview} alt="Profile Preview"
                            className="w-full h-full object-cover rounded-lg"
                            width={72}
                            height={72}
                          />
                        ) : (
                          <>
                            <AddCircle className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-400 text-[9px] mt-2">
                              {field.value && field.value.length > 0 ? field.value[0]?.name : 'PNG or JPG'}
                            </span>
                          </>
                        )}
                      </label>
                      <Input
                        id="profilePicture"
                        type="file"
                        accept=".png, .jpg"
                        className="hidden"
                        onChange={(e) => handleImageChange(e, field)}
                      />
                    </div>
                  </FormControl>
                  <Button className="bg-gray-100 rounded-[200px] text-[14px] font-['Rethink Sans'] tracking-[-0.28px] leading-5 text-gray-700" variant="outline"
                  >Upload photo</Button>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className='col-span-12 sm:col-span-6'>
                <FormLabel
                  className="font-['Rethink Sans'] font-[500] text-[14px] tracking-[-0.42px] leading-5 text-slate-600 pt-1"
                  htmlFor="profilePicture"
                >First name</FormLabel>
                <FormControl>
                  <Input
                    id="firstName"
                    placeholder="First name" {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className='col-span-12 sm:col-span-6'>
                <FormLabel
                  className="font-['Rethink Sans'] font-[500] text-[14px] tracking-[-0.42px] leading-5 text-slate-600"
                  htmlFor="lastName"
                >Last name</FormLabel>
                <FormControl>
                  <Input id="lastName" placeholder="Last name" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem className='col-span-12 sm:col-span-6'>
                <FormLabel
                  className="font-['Rethink Sans'] font-[500] text-[14px] tracking-[-0.42px] leading-5 text-slate-600"
                  htmlFor="role"
                >Role</FormLabel>
                <FormControl>
                  <Select {...field}>
                    <SelectTrigger>
                      <SelectValue placeholder="Role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="user">User</SelectItem>
                      <SelectItem value="guest">Guest</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className='col-span-12 sm:col-span-6'>
                <FormLabel
                  className="font-['Rethink Sans'] font-[500] text-[14px] tracking-[-0.42px] leading-5 text-slate-600"
                  htmlFor="email"
                >Email</FormLabel>
                <FormControl>
                  <Input id="email" type="email" placeholder="Email" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className='col-span-12 sm:col-span-6'>
                <FormLabel
                  className="font-['Rethink Sans'] font-[500] text-[14px] tracking-[-0.42px] leading-5 text-slate-600"
                  htmlFor="password"
                >Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password" {...field}
                      className="pr-10"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={() => togglePasswordVisibility('P')}>
                      {showPassword
                        ? <EyeSlash color={"#9CA3AF"} size={16} />
                        : <Eye color={"#9CA3AF"} size={16} />}
                    </div>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className='col-span-12 sm:col-span-6'>
                <FormLabel
                  className="font-['Rethink Sans'] font-[500] text-[14px] tracking-[-0.42px] leading-5 text-slate-600"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Confirm Password" {...field}
                      className="pr-10"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={() => togglePasswordVisibility('C')}>
                      {showConfirmPassword
                        ? <EyeSlash color={"#9CA3AF"} size={16} />
                        : <Eye color={"#9CA3AF"} size={16} />}
                    </div>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />


          <Link className="flex justify-end col-span-12" href={'register-company'}>
            <Button type="submit" className="rounded-[200px] px-4 py-2 sm:w-max">Continue</Button>
          </Link>
        </form>
      </Form>
    </>
  );
}
