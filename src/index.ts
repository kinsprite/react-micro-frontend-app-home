// import React from 'react';
import { registerApp } from 'react-micro-frontend-framework';

import HomeApp from './home';

registerApp('app-home', {
  component: HomeApp,
});
