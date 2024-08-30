import { signup } from '@/src/lib/auth-actions';
import { IUser } from '../../types/formTypes';

export const useSignup = () => {

  const onSubmit = async (data: IUser) => {
    console.log("Form submitted:", data);

    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("role", data.role);
    if (data.profilePicture && data.profilePicture[0]) {
      formData.append("profilePicture", data.profilePicture[0]);
    }

    try {
      await signup(formData);
    } catch (error) {
      console.error("Error during signup:", error);
      // Puedes manejar errores aquí, como mostrar un mensaje al usuario
    }
  };

  return {
    onSubmit,
  };
};