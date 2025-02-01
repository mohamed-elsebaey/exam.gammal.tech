'use server'

import { redirect } from "next/navigation";

export async function examCorrection(data: string[]) {
  console.log(data);
  redirect('/')
}
