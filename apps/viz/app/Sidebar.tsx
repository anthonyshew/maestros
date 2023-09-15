'use client';

import Link from 'next/link';
import type { FormEvent } from 'react';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Input } from '../components/Input';

export function Sidebar() {
  const [pastInputs, setPastInputs] = useState<string[]>([]);
  const pathname = usePathname();
  const [task, setTask] = useState(decodeURIComponent(pathname.slice(1)));
  const router = useRouter();

  useEffect(() => {
    if (!pastInputs.length) {
      setPastInputs([decodeURIComponent(pathname.slice(1))]);
    }
  }, [pastInputs, pathname]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!task) return;

    setPastInputs((list) => [...new Set([...list, task])].reverse());
    router.push(`/${task}`);
  };

  return (
    <div className="flex flex-col gap-4 text-white w-52">
      <Link href="/json">json</Link>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input
          name="task"
          onChange={(e) => {
            setTask(e.target.value);
          }}
          value={task}
        />
      </form>
      {pastInputs.map((val) => {
        return (
          <Link href={encodeURIComponent(`/${val}`)} key="">
            {val}
          </Link>
        );
      })}
    </div>
  );
}
