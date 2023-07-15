import { Code } from "bright";

const myCode = `
let hello = "hello brightness"
console.log(hello, "my old friend")
`.trim();

export default function Page() {
  return (
    <Code lang="js" title="shiny.js" theme="github-dark-dimmed">
      {myCode}
    </Code>
  );
}
