import { FormItem, FormLabel, FormControl } from '@/src/components/ui/form';
import { Input } from '@/src/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/src/components/ui/select';
import { useAppDispatch } from '@/src/store';
import { updateEmail, updateLastName, updateName, updateRole } from '@/src/store/profile-info/userSlice';
import { Controller } from 'react-hook-form';
import { ErrorValidationMessage } from '../../ErrorValidationMessage';

export const ProfileSignupFields = ({ control, password }: any) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <Controller
        name="firstName"
        control={control}
        rules={{
          required: "First name is required",
          minLength: {
            value: 3,
            message: "First name must be at least 3 characters",
          },
          maxLength: {
            value: 20,
            message: "First name must not exceed 20 characters",
          },
          pattern: {
            value: /^[A-Za-z]+$/,
            message: "First name should contain only letters",
          },
          validate: (value) =>
            value !== "admin" || "You cannot use 'admin' as a first name",
        }}
        render={({ field, fieldState: { error } }) => (
          <FormItem className="col-span-12 sm:col-span-6">
            <FormLabel htmlFor="firstName">First name</FormLabel>
            <FormControl>
              <Input
                id="firstName"
                placeholder="First name"
                {...field}
                onChange={(e) => {
                  field.onChange(e);
                  dispatch(updateName(e.target.value));
                }}
              />
            </FormControl>
            {error && <span className="text-red-500 text-xs">{error.message}</span>}
          </FormItem>
        )}
      />

      <Controller
        name="lastName"
        control={control}
        rules={{ required: "Last name is required",
          minLength: {
            value: 3,
            message: "Last name must be at least 3 characters",
          },
          maxLength: {
            value: 20,
            message: "Last name must not exceed 20 characters",
          },
          pattern: {
            value: /^[A-Za-z]+$/,
            message: "Last name should contain only letters",
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <FormItem className="col-span-12 sm:col-span-6">
            <FormLabel htmlFor="lastName">Last name</FormLabel>
            <FormControl>
              <Input id="lastName" placeholder="Last name" {...field} onChange={(e) => {
                field.onChange(e);
                dispatch(updateLastName(e.target.value));
              }} />
            </FormControl>
            <ErrorValidationMessage error={error} />
          </FormItem>
        )}
      />


      <Controller
        name="role"
        control={control}
        rules={{ required: "Role is required" }}
        render={({ field, fieldState: { error } }) => (
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
            <ErrorValidationMessage error={error} />
          </FormItem>
        )}
      />

      <Controller
        name="email"
        control={control}
        rules={{ required: "Email is required"}}
        render={({ field, fieldState: { error } }) => (
          <FormItem className="col-span-12 sm:col-span-6">
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormControl>
              <Input id="email" type="email" placeholder="Email" {...field} onChange={(e) => {
                field.onChange(e);
                dispatch(updateEmail(e.target.value));
              }} />
            </FormControl>
            <ErrorValidationMessage error={error} />
          </FormItem>
        )}
      />

      <Controller
        name="password"
        control={control}
        rules={{
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters",
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <FormItem className="col-span-12 sm:col-span-6">
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormControl>
              <Input
                {...field}
                id="password"
                type="password"
                placeholder="Password"
              />
            </FormControl>
            <ErrorValidationMessage error={error} />
          </FormItem>
        )}
      />

      <Controller
        name="confirmPassword"
        control={control}
        rules={{
          required: "Confirm password is required",
          validate: (value) =>
            value === password || "Confirm password must be equal to password",
        }}
        render={({ field, fieldState: { error } }) => (
          <FormItem className="col-span-12 sm:col-span-6">
            <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
            <FormControl>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password" {...field}
              />
            </FormControl>
            <ErrorValidationMessage error={error} />
          </FormItem>
        )}
      />
    </>
  );
};
