// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  name: 'dev',
  port: 8080,
  apiUrl: '',
  softwareVersion: '1.0',
  databaseUrl: 'mongodb://user:test@ds161426.mlab.com:61426/meanauth',
};
