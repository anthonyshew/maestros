import { z } from 'zod';
import {
  preOneNineTask,
  dryVersionOnePointNine,
  dryVersionPreOnePointNine,
  packages,
  taskConfiguration,
  oneNineTask,
} from './validators';

export type GraphDirection = 'LR' | 'RL' | 'TB' | 'BT';
export type TaskConfiguration = z.infer<typeof taskConfiguration>;
export type PreOneNineTask = z.infer<typeof preOneNineTask>;
export type OneNineTask = z.infer<typeof oneNineTask>;
export type Turbotask = OneNineTask | PreOneNineTask;
export type Packages = z.infer<typeof packages>;
export type DryVersionPreOnePointNine = z.infer<
  typeof dryVersionPreOnePointNine
>;
export type DryVersionOnePointNine = z.infer<typeof dryVersionOnePointNine>;

export type Routes = {
  'create-dry': {
    inputs: {
      taskName: string;
      workspace: string | null;
    };
    outputs:
      | {
          tasks: DryVersionOnePointNine['tasks'];
          packages: DryVersionOnePointNine['packages'];
        }
      | {
          tasks: DryVersionPreOnePointNine['tasks'];
          packages: DryVersionPreOnePointNine['packages'];
        };
  };
};
