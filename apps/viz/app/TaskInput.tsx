'use client';

import { usePathname, useRouter } from 'next/navigation';
import type { FormEvent } from 'react';
import { useState } from 'react';
import { Input } from '../components/Input';

export function TaskInput() {
  const pathname = usePathname();
  const [task, setTask] = useState(decodeURIComponent(pathname.slice(1)));
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/${task}`);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Input
        name="task"
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
    </form>
  );
}
