'use server';

import { redirect } from 'next/navigation';

// eslint-disable-next-line @typescript-eslint/require-await
export async function requestTask(formData: FormData) {
  const task = formData.get('task') as string | null;
  if (!task) return;

  redirect(encodeURI(task));
}
