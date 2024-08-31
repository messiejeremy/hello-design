"use server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/src/utils/supabase/server";

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

  // revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData: FormData) {
  const supabase = createClient();

  // Extraction of data from the form
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const role = formData.get("role") as string;

  // Handling avatar_url if it exists
  let avatarUrl: string | null = null;
  const file = formData.get("profilePicture") as File;

  if (file) {
    avatarUrl = await uploadImage(file);
    if (!avatarUrl) {
      console.error("Failed to upload avatar");
      // Handle the case when the avatar upload fails
      // e.g., return an error response or notify the user
    }
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
        role,
      },
    },
  };

  console.log(data);

  const { data: userData, error } = await supabase.auth.signUp(data);
  console.error(error);
  console.error(userData);

  if (error) {
    console.error(error);
    redirect("/error");
  }

  console.log("User signed up:", userData);
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

  const { data: publicUrlData } = supabase
    .storage
    .from('avatars')
    .getPublicUrl(data.path);

  return publicUrlData?.publicUrl || null;
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
