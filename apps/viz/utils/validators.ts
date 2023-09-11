import { z } from 'zod';

export const packages = z.array(z.string());

export const taskConfiguration = z.object({
  cache: z.boolean(),
  dependsOn: z.array(z.string()),
  env: z.array(z.string()),
  inputs: z.array(z.string()),
  outputMode: z.string(),
  outputs: z.array(z.string()),
  persistent: z.boolean(),
});


export const task = z.object({
  taskId: z.string(),
  task: z.string(),
  package: z.string(),
  hash: z.string(),
  // cacheState: z.object({
  //   local: z.boolean(),
  //   remote: z.boolean(),
  // }),
  command: z.string(),
  outputs: z.array(z.string()).nullable(),
  excludedOutputs: z.array(z.string()).nullable(),
  logFile: z.string(),
  directory: z.string(),
  dependencies: z.array(z.string()),
  dependents: z.array(z.string()),
  cache: z.object({
    local: z.boolean(),
    remote: z.boolean(),
  }),
  cliArguments: z.array(z.string()),
  environmentVariables: z.object({
    configured: z.array(z.string()),
    // global: z.array(z.string()),
    inferred: z.array(z.string()),
  }),
  expandedOutputs: z.array(z.string()),
  framework: z.string(),
  hashOfExternalDependencies: z.string(),
  inputs: z.record(z.string()),
  resolvedTaskDefinition: taskConfiguration,
});

export const dry = z.object({
  id: z.string(),
  monorepo: z.boolean(),
  globalCacheInputs: z.array(z.string()),
  envMode: z.enum(["strict", "loose"]),
  frameworkInference: z.boolean(),
  user: z.string(),
  scm: z.string(),
  version: z.string(),
  turboVersion: z.string(),
  // globalCacheInputs: z.object({
  //   rootKey: z.string(),
  //   files: z.object({}),
  //   hashOfExternalDependencies: z.string(),
  //   rootPipeline: z.record(taskConfiguration),
  // }),
  packages,
  tasks: z.array(task),
}).strict();
