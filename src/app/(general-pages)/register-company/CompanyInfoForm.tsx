'use client'

import { Button } from '@/src/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/src/components/ui/form';
import { Input } from '@/src/components/ui/input';
import { AddCircle } from 'iconsax-react';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  profilePicture: FileList | null;
  companyName: string
  companySize: string
}

export const CompanyInfoForm = () => {

  const form = useForm<Inputs>();

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
                        <AddCircle className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400 text-[9px] mt-2">
                          {field.value && field.value.length > 0 ? field.value[0]?.name : 'PNG or JPG'}
                        </span>
                      </label>
                      <Input
                        id="profilePicture"
                        type="file"
                        accept=".png, .jpg"
                        className="hidden"
                        onChange={(e) => field.onChange(e.target.files)}
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
            name="companyName"
            render={({ field }) => (
              <FormItem className='col-span-12 sm:col-span-6'>
                <FormLabel
                  className="font-['Rethink Sans'] font-[500] text-[14px] tracking-[-0.42px] leading-5 text-slate-600 pt-1"
                  htmlFor="companyName"
                >Company name</FormLabel>
                <FormControl>
                  <Input
                    id="companyName"
                    placeholder="Company name" {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="companySize"
            render={({ field }) => (
              <FormItem className='col-span-12 sm:col-span-6'>
                <FormLabel
                  className="font-['Rethink Sans'] font-[500] text-[14px] tracking-[-0.42px] leading-5 text-slate-600"
                  htmlFor="companySize"
                >Company size</FormLabel>
                <FormControl>
                  <Input id="companySize" placeholder="Company size" {...field} />
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
