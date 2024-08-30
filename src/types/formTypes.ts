export interface IUser {
  profilePicture: FileList | null;
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  password: string;
  confirmPassword: string;
}