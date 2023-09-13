'use client';

import { useParams, usePathname } from 'next/navigation';
import { Input } from '../components/Input';
import { create } from './actions';

export function TaskInput() {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <form action={create}>
      <Input defaultValue={decodeURI(pathname.slice(1))} name="task" />
    </form>
  );
}
