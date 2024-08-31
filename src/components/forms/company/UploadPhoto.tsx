'use client'

import { useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { AddCircle } from 'iconsax-react';
import Image from 'next/image';
import { Button } from '@/src/components/ui/button';
import { FormField, FormItem, FormLabel, FormControl } from '@/src/components/ui/form';
import { Input } from '@/src/components/ui/input';
import { useAppDispatch } from '@/src/store';
import { updatePhoto } from '@/src/store/profile-info/userSlice';

export const UploadPhoto = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const { watch, setValue } = useFormContext();
  const companyPicture = watch('companyPicture');

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue('companyPicture', e.target.files);
      const reader = new FileReader();
      reader.onloadend = () => {
        const fileDataUrl = reader.result as string;
        dispatch(updatePhoto(fileDataUrl));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <FormField
      name="companyPicture"
      render={({ field }) => (
        <FormItem className="col-span-12">
          <FormLabel className="font-[500] text-[14px] tracking-[-0.42px] leading-5 text-slate-600" htmlFor="companyPicture">
            Company picture
          </FormLabel>
          <div className="flex flex-1 gap-4 items-center">
            <FormControl className="w-[72px] h-[72px]">
              <div className="relative w-20 h-20 bg-slate-50 rounded-lg flex flex-col justify-center items-center cursor-pointer">
                <label className="flex flex-col items-center justify-center w-full h-full">
                  {field.value?.[0] ? (
                    <Image
                      width={72}
                      height={72}
                      src={URL.createObjectURL(field.value[0])}
                      alt="Profile Preview"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <>
                      <AddCircle className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-[9px] mt-2">PNG or JPG</span>
                    </>
                  )}
                </label>
              </div>
            </FormControl>
            <Input ref={inputRef} id="companyPicture" type="file" accept=".png, .jpg" className="hidden" onChange={handleImageChange} />
            <Button onClick={handleButtonClick} type="button" className="bg-gray-100 rounded-[200px] text-[14px] tracking-[-0.28px] leading-5 text-gray-700" variant="outline">
              Upload photo
            </Button>
          </div>
        </FormItem>
      )}
    />
  );
};
