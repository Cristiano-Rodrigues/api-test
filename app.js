import express from 'express'
import { readdir, stat as getStat } from 'node:fs/promises'
import { join, parse } from 'path'

const app = express();

const ROUTE_FOLDER = '/src/routes';
const path = join(process.cwd(), ROUTE_FOLDER);

try {
  const files = await readdir(path, {
    recursive: true
  });

  const noDirectories = await filterDirectories(files);
  const onlyRouteFiles = await filterNonRouteFiles(noDirectories);

  for (const file of onlyRouteFiles) {
    const exported = (await import('./' + join(ROUTE_FOLDER, file))).default;
    const router = express.Router();

    app.use('/api/v1/', exported(router));
  }
} catch (error) {
  console.error('Can\'t load route files :(');
}

async function filterDirectories (files) {
  const passed = []
  for (const file of files) {
    const stat = await getStat(join(path, file))
    if (!stat.isDirectory()) {
      passed.push(file)
    }
  }
  return passed
}

async function filterNonRouteFiles (files) {
  const passed = []
  for (const file of files) {
    if (parse(file).name == 'route') {
      passed.push(file)
    }
  }
  return passed
}

app.listen(8181, () => {
  console.log(`Server listening on http://localhost:8181`);
});