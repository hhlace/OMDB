// el inicio de la app
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Main from './components/main';

import store from './redux/store';

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path= '/' component={Main} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
) 