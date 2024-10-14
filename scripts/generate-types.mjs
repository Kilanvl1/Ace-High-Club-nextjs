#!/usr/bin/env zx
import { $ } from "zx";

import "zx/globals";

const dotfileName = ".studently-django-path";

async function determineDjangoPath() {
  let djangoPath = "";
  const dotFileExists =
    (
      await $`test -f ${dotfileName} && echo true || echo false`
    ).stdout.trim() === "true";
  if (dotFileExists) {
    djangoPath = (await $`cat ${dotfileName}`).stdout.trim();
  }

  if (djangoPath === "") {
    djangoPath = await question(
      "\nEnter the path to the Django installation: "
    );

    await fs.writeFile(dotfileName, djangoPath);
  }

  return djangoPath;
}

let djangoPathExists, djangoPath;
do {
  djangoPath = await determineDjangoPath();
  djangoPathExists = await fs.exists(djangoPath);

  if (!djangoPathExists) {
    console.log("The path to Django is not a valid directory. \n\n");
    await fs.unlink(dotfileName);
  }

  // Check with fs whether the path is a directory
} while (!djangoPathExists);

const currentDir = await fs.realpath(process.cwd());

cd(djangoPath);
const venvPythonPath = path.join(djangoPath, "ahc_env", "bin", "python");

await $`${venvPythonPath} ./manage.py spectacular --file ${currentDir}/ahc-schema.yml`;

cd(currentDir);

await $`npx openapi-typescript ahc-schema.yml -y --output types/schema.generated.ts --defaultNonNullable false`;

await $`npm run prettier --write types/schema.generated.ts`;
