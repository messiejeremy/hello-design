"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/src/utils/supabase/server";

interface SignupData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  avatar_url?: string; // Opcional porque puede ser null
}

export async function login(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData: FormData) {
  console.log("SIGNUP");
  console.log(formData);
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  // Extraction of data from the form
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const role = formData.get("role") as string;

  // Manejo del avatar_url si existe
  let avatarUrl = null;
  const file = formData.get("profilePicture") as File;
  if (file) {
    avatarUrl = await uploadImage(file);
  }

  // Construction of the object for the signUp
  const data = {
    email: email,
    password: password,
    options: {
      data: {
        full_name: `${firstName} ${lastName}`,
        email: email,
        avatar_url: avatarUrl,
        role,   // Include avatar_url if available
      },
    },
  };

  const { data: userData, error } = await supabase.auth.signUp(data);
  console.error(error);
  console.error(userData);

  if (error) {
    console.error(error);
    // redirect("/error");
  }

  revalidatePath("/signup/company", "layout");
  redirect('/signup/company');
}

// Ejemplo de función para subir la imagen
export async function uploadImage(file: File): Promise<string | null> {
  const supabase = createClient();
  const { data, error } = await supabase.storage
    .from('avatars')
    .upload(`public/${Date.now()}_${file.name}`, file);

  if (error || !data) {
    console.error('Error uploading avatar:', error?.message);
    return null;
  }

  // Obtener la URL pública de la imagen subida
  const { publicUrl } = supabase
    .storage
    .from('avatars')
    .getPublicUrl(data.path)
    .data;

  return publicUrl || null;
}

export async function signout() {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.log(error);
    redirect("/error");
  }

  redirect("/logout");
}

export async function signInWithGoogle() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  });

  if (error) {
    console.log(error);
    redirect("/error");
  }

  redirect(data.url);
}
