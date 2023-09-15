import type { z } from 'zod';
import type {
  task,
  packages,
  taskConfiguration,
  dry
} from './validators';

export type GraphDirection = 'BT' | 'LR' | 'RL' | 'TB';
export type TaskConfiguration = z.infer<typeof taskConfiguration>;
export type Turbotask = z.infer<typeof task>;
export type Packages = z.infer<typeof packages>;
export type Dry = z.infer<typeof dry>
