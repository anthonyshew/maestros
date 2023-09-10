import { execSync } from "node:child_process";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {

  // const taskName = req.body.taskName;

  let dryResult: unknown = null

  try {
    const graphBuffer = execSync(`turbo build --dry=json`);
    dryResult = JSON.parse(graphBuffer.toString());
  } catch (error) {
    console.error(error)
  }

  console.log(dryResult.tasks)

  return NextResponse.json({ dryResult });
}
