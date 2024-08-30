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

      <FormField name="companyAddress" render={({ field }) => (
          <FormItem className='col-span-12 sm:col-span-6'>
            <FormLabel htmlFor="companyAddress">Company Address</FormLabel>
            <FormControl>
              <Input id="companyAddress" placeholder="Company address" {...field} />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField name="companyPhone" render={({ field }) => (
          <FormItem className='col-span-12 sm:col-span-6'>
            <FormLabel htmlFor="companyPhone">Company phone</FormLabel>
            <FormControl>
              <Input type='number' id="companyPhone" placeholder="Company phone" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
    </>
  )
}