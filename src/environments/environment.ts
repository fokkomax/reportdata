// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const AppConfig = {
  production: false,
  environment: 'LOCAL',
  appName: 'Meeting PHDB',
  version: '1.1.0-beta',
  subVersion: '2021.02.18-01',
  apiUrl: 'http://localhost:8080',
  whiteUrl: 'https://it-phdb.moph.go.th/phdb-meeting/',
  blackUrl: 'http://localhost:8080'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
