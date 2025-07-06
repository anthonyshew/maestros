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
  command: z.string(),
  outputs: z.array(z.string()).nullable(),
  excludedOutputs: z.array(z.string()).nullable(),
  logFile: z.string(),
  directory: z.string().optional(), // Optional for root tasks
  dependencies: z.array(z.string()),
  dependents: z.array(z.string()),
  cache: z.object({
    local: z.boolean(),
    remote: z.boolean(),
  }),
  cliArguments: z.array(z.string()),
  environmentVariables: z.object({
    configured: z.array(z.string()),
    inferred: z.array(z.string()),
  }),
  expandedOutputs: z.array(z.string()),
  framework: z.string(),
  hashOfExternalDependencies: z.string(),
  inputs: z.record(z.string()),
  resolvedTaskDefinition: taskConfiguration,
});

export const dry = z
  .object({
    id: z.string(),
    monorepo: z.boolean(),
    globalCacheInputs: z.object({
      rootKey: z.string(),
      files: z.record(z.string(), z.string()),
      hashOfExternalDependencies: z.string(),
      globalDotEnv: z.array(z.string()).nullable(),
      environmentVariables: z.object({
        specified: z
          .object({
            env: z.array(z.string()).nullable(),
            passThroughEnv: z.array(z.string()).nullable(),
          })
          .nullable(),
        configured: z.array(
          z.object({
            env: z.array(z.string()).nullable(),
            passThroughEnv: z.array(z.string()).nullable(),
          })
        ),
        inferred: z.array(
          z.object({
            env: z.array(z.string()).nullable(),
            passThroughEnv: z.array(z.string()).nullable(),
          })
        ),
        passthrough: z.array(z.string()).nullable(),
      }),
    }),
    envMode: z.enum(['strict', 'loose', 'infer']),
    frameworkInference: z.boolean(),
    user: z.string(),
    scm: z
      .object({
        type: z.enum(['git']),
        sha: z.string(),
        branch: z.string(),
      })
      .nullable(),
    version: z.string(),
    turboVersion: z.string(),
    packages,
    tasks: z.array(task),
  })
  .strict();
