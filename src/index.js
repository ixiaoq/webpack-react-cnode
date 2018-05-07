import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from 'reducers';

import App from 'pages/App/App';

import './index.scss';

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('react-root')
)