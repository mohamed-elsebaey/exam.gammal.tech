"use server";

// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";

export async function signInFormAction(prevState: any, formData: FormData) {
  const email = formData.get("email")?.toString().trim() || "";
  const password = formData.get("password")?.toString().trim() || "";

  let errors: { email?: string; password?: string } = {};

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "* Invalid Email";
  } else if (password.length < 8) {
    errors.password = "* Invalid password"; // Clearer message
  }


  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  try {
    const response = await fetch("https://exam.gammal.tech/API/auth/login", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ UserName : email, Password :password }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("Login successful:", data);
    } else {
      console.error("Login failed:", data);
    }
  } catch (error) {
    console.error("Error:", error);
  }



  // redirect("/");
}
