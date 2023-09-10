import { z } from 'zod';
import useSWR from 'swr';
import type { Routes } from '../utils/types';

type Return = Routes['create-dry']['outputs'];

export const useDry = ({
  taskName,
  workspace,
}: Routes['create-dry']['inputs']) => {
  const requestBody = z.object({
    taskName: z.string(),
    workspace: z.string().nullable(),
  });

  return useSWR<Return, Error>(`/api/graph`, () =>
    fetch(`/api/graph`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody.parse({ taskName, workspace })),
    })
      .then((res) => res.json())
      .then((res) => {
        if (!res.success) {
          throw new Error(res.message);
        }

        return res;
      }),
  );
};

export const useResolvedDry = () => {
  return useSWR<Return, Error>(`/api/graph`);
};
