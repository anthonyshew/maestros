'use client';

import Link from 'next/link';
import type { FormEvent } from 'react';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Input } from '../components/Input';
import { TurborepoWordmark } from '../components/TurborepoWordmark';
import { Label } from '../components/Label';
import { PlayIcon } from '../components/PlayIcon';

export function Sidebar() {
  const [pastInputs, setPastInputs] = useState<string[]>([]);
  const pathname = usePathname();
  const [task, setTask] = useState(decodeURIComponent(pathname.slice(1)));
  const router = useRouter();

  useEffect(() => {
    setTask(decodeURIComponent(pathname.slice(1)));
  }, [pathname]);

  useEffect(() => {
    if (!pastInputs.length) {
      setPastInputs([decodeURIComponent(pathname.slice(1))]);
    }
  }, [pastInputs, pathname]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!task) return;

    setPastInputs((list) =>
      [...new Set([...list, task])].reverse().slice(0, 10),
    );
    router.push(`${task}`);
  };

  return (
    <div className="flex flex-col w-3/12 min-w-[320px] max-h-screen overflow-hidden gap-4 p-8 text-white">
      <div>
        <TurborepoWordmark className="w-full" />
        <div className="flex flex-row items-center justify-center ">
          <h1 className="inline text-3xl font-medium tracking-wide">Studio</h1>
        </div>
      </div>
      <form className="relative" onSubmit={(e) => handleSubmit(e)}>
        <span className="absolute text-sm text-gray-300 top-[2.45rem] left-3">
          turbo run
        </span>
        <Label
          className="inline-block mb-2 text-lg font-semibold"
          htmlFor="task"
        >
          Task
        </Label>
        <Input
          className="pl-[4.9rem] border-2"
          name="task"
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
      </form>
      <div className="flex flex-col flex-grow gap-1 overflow-y-auto">
        {pastInputs.map((val) => {
          return (
            <Link
              className="flex flex-row w-full p-1 pl-4 transition-all rounded flex-nowrap hover:bg-gray-900"
              href={`/${encodeURIComponent(val)}`}
              key={val}
            >
              <PlayIcon className="w-3 mr-3" fill="white" />
              <span>{val}</span>
            </Link>
          );
        })}
      </div>
      <p className="mt-auto text-xs">
        An unofficial Turborepo task graph visualizer.
      </p>
    </div>
  );
}
