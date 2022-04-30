// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  firebaseConfig: {
    apiKey: "AIzaSyBZR8pHBLTrqModRfr-Q5zZ9FSbaZ8gDC0",
    authDomain: "everybody-votes-bc030.firebaseapp.com",
    projectId: "everybody-votes-bc030",
    storageBucket: "everybody-votes-bc030.appspot.com",
    messagingSenderId: "525112087510",
    appId: "1:525112087510:web:a6338edec63374db358a77",
    auth: {
      persistence: "local"
    }
  }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
