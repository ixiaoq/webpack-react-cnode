import React from 'react';
import { render } from 'react-dom';

import {Provider} from 'react-redux';
import store from './redux/store';

import Counter from './page/Counter/counter'

render(
    <Provider store={store}>
        <Counter/>
    </Provider>,
    document.getElementById("react-root")
)

