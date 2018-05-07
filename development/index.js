import React from 'react';
import ReactDOM from 'react-dom';

import App from './react/App';

require('bootstrap/dist/css/bootstrap.css');
require('admin-lte/dist/css/AdminLTE.css');
require('admin-lte/dist/css/skins/skin-blue.css');

ReactDOM.render(
    <App />, document.getElementById('container')
);
