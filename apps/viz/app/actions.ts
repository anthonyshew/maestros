'use server';

import { redirect } from "next/navigation";

export async function create(formData: FormData) {

  const task = formData.get('task') as string | null;
  console.log(task)

  if (!task) return;

  redirect(encodeURI(task));
}
