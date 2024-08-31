import { Controller } from 'react-hook-form';
import { ErrorValidationMessage } from '../../ErrorValidationMessage';
import { FormControl, FormItem, FormLabel } from '@/src/components/ui/form';
import { Input } from '@/src/components/ui/input';

export const CompanyFields = ({ control }: any) => {
  return (
    <>
      <Controller
        name="companyName"
        control={control}
        rules={{ required: "Company name is required" }}
        render={({ field, fieldState: { error } }) => (
          <FormItem className='col-span-12 sm:col-span-6'>
            <FormLabel htmlFor="companyName">Company Name</FormLabel>
            <FormControl>
              <Input id="companyName" placeholder="Name" {...field} />
            </FormControl>
            <ErrorValidationMessage error={error} />
          </FormItem>
        )}
      />

      <Controller
        name="companyAddress"
        control={control}
        rules={{ required: "Company address is required" }}
        render={({ field, fieldState: { error } }) => (
          <FormItem className='col-span-12 sm:col-span-6'>
            <FormLabel htmlFor="companyAddress">Address</FormLabel>
            <FormControl>
              <Input id="companyAddress" placeholder="Address" {...field} />
            </FormControl>
            <ErrorValidationMessage error={error} />
          </FormItem>
        )}
      />

      <Controller
        name="companyPhone"
        control={control}
        rules={{ required: "Company phone is required" }}
        render={({ field, fieldState: { error } }) => (
          <FormItem className='col-span-12 sm:col-span-6'>
            <FormLabel htmlFor="companyPhone">Phone</FormLabel>
            <FormControl>
              <Input type='number' id="companyPhone" placeholder="Phone" {...field} />
            </FormControl>
            <ErrorValidationMessage error={error} />
          </FormItem>)}
      />
    </>
  )
}