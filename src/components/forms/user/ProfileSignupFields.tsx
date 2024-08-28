import { FormField, FormItem, FormLabel, FormControl } from '@/src/components/ui/form';
import { Input } from '@/src/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/src/components/ui/select';
import { useAppDispatch } from '@/src/store';
import { updateEmail, updateLastName, updateName, updateRole } from '@/src/store/profile-info/userSlice';

export const ProfileSignupFields = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <FormField name="firstName" render={({ field }) => (
        <FormItem className="col-span-12 sm:col-span-6">
          <FormLabel htmlFor="firstName">First name</FormLabel>
          <FormControl>
            <Input id="firstName" placeholder="First name" {...field} onChange={(e) => {
              field.onChange(e);
              dispatch(updateName(e.target.value));
            }} />
          </FormControl>
        </FormItem>
      )} />

      <FormField name="lastName" render={({ field }) => (
        <FormItem className="col-span-12 sm:col-span-6">
          <FormLabel htmlFor="lastName">Last name</FormLabel>
          <FormControl>
            <Input id="lastName" placeholder="Last name" {...field} onChange={(e) => {
              field.onChange(e);
              dispatch(updateLastName(e.target.value));
            }} />
          </FormControl>
        </FormItem>
      )} />

      <FormField name="role" render={({ field }) => (
        <FormItem className="col-span-12 sm:col-span-6">
          <FormLabel htmlFor="role">Role</FormLabel>
          <FormControl>
            <Select {...field} onValueChange={(value) => {
              field.onChange(value);
              dispatch(updateRole(value));
            }}>
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
      )} />

      <FormField name="email" render={({ field }) => (
        <FormItem className="col-span-12 sm:col-span-6">
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormControl>
            <Input id="email" type="email" placeholder="Email" {...field} onChange={(e) => {
              field.onChange(e);
              dispatch(updateEmail(e.target.value));
            }} />
          </FormControl>
        </FormItem>
      )} />

      <FormField name="password" render={({ field }) => (
        <FormItem className="col-span-12 sm:col-span-6">
          <FormLabel htmlFor="password">Password</FormLabel>
          <FormControl>
            <Input id="password" type="password" placeholder="Password" {...field} />
          </FormControl>
        </FormItem>
      )} />

      <FormField name="confirmPassword" render={({ field }) => (
        <FormItem className="col-span-12 sm:col-span-6">
          <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
          <FormControl>
            <Input id="confirmPassword" type="password" placeholder="Confirm Password" {...field} />
          </FormControl>
        </FormItem>
      )} />
    </>
  );
};
