/* eslint-disable */
"use strict";

(function(callback) {
  var apps = [
    {
      id: 'app-home',
      dependencies: ['echart', 'app1'], // NOT implement yet
      entries: [
        // REMOVE the current app's entries in development
        // '/rmf-app-home/658c5f91/app-home-a200b003.css',
        // '/rmf-app-home/658c5f91/app-home-b889c22.js'
      ],
      routes: ['/home'],
      render: 'root',
    },
  ];

  var extra = {
    defaultRoute: '/home',
  };

  if (callback) callback(apps, extra);
})(rmfMetadataAppsCallback);
