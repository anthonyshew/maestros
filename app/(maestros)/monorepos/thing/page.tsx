import { allMaestrosLessons } from "contentlayer/generated";

import fs from "fs";
import path from "path";

function findFileByName(base, name, result = []) {
  fs.readdirSync(base).forEach((file) => {
    let newBase = path.join(base, file);

    if (fs.statSync(newBase).isDirectory()) {
      result = findFileByName(newBase, name, result);
    } else if (file === name) {
      result.push(newBase);
    }
  });

  return result;
}

let result = findFileByName("./content/maestros/lessons", "index.mdx");

// console.log(result);

const Page = () => {
  return (
    <div>
      <pre className="text-white">
        {JSON.stringify(
          allMaestrosLessons.map((lesson) => lesson._id),
          null,
          2
        )}
      </pre>
    </div>
  );
};

export default Page;
