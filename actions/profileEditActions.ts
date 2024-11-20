"use server";
import { redirect } from "next/navigation";
import { uploadImage } from "@/lib/cloudinary";
import { updateUserProfileData } from "@/db/db";
import { revalidatePath } from "next/cache";

export async function profileEditActions(prevState: any, formData: FormData) {
  const bio: any = formData.get("bio");

  const first_name: any = formData.get("first_name");
  const last_name: any = formData.get("last_name");
  const email: any = formData.get("email");
  const age: any = formData.get("age");
  const phone: any = formData.get("phone");

  const country: any = formData.get("country");
  const city: any = formData.get("city");

  const university: any = formData.get("university");
  const school: any = formData.get("school");

  const image: any = formData.get("image");
  const pickedImage: any = formData.get("pickedImage");

  const fullName = `${first_name} ${last_name}`;

  // if use use CLOUDINARY
  let imageUrl: any = pickedImage;
  try {
    if (image.size != 0) {
      imageUrl = await uploadImage(image, email);
    }
  } catch {
    throw new Error("Saving image failed!");
  }

  // update dataBase Where Email
  updateUserProfileData(
    email,
    bio,
    fullName,
    age,
    phone,
    country,
    city,
    university,
    school,
    imageUrl
  );

  revalidatePath("/", "layout");
  redirect("/profile");

  return {};
}
