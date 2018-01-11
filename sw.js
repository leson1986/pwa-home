'use strict';

importScripts('sw-toolbox.js'); toolbox.precache(["index.html","css/freelancer.min.css"]); toolbox.router.get('/img/*', toolbox.cacheFirst); toolbox.router.get('/*', toolbox.networkFirst, { networkTimeoutSeconds: 5});