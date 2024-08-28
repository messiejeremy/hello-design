import { FormControl, FormField, FormItem, FormLabel } from '@/src/components/ui/form';
import { Input } from '@/src/components/ui/input';

export const CompanyFields = () => {
  return (
    <>
      <FormField name="companyName" render={({ field }) => (
          <FormItem className='col-span-12 sm:col-span-6'>
            <FormLabel htmlFor="companyName">Company name</FormLabel>
            <FormControl>
              <Input id="companyName" placeholder="Company name" {...field} />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField name="companySize" render={({ field }) => (
          <FormItem className='col-span-12 sm:col-span-6'>
            <FormLabel htmlFor="companySize">Company size</FormLabel>
            <FormControl>
              <Input id="companySize" placeholder="Company size" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
    </>
  )
}