import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Navigator from './app/Navigator';
import NavBar from './app/NavBar';

import reducer from './app/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?.({ trace: true }) || compose;
const store = createStore(reducer, composeEnhancers());

const root = createRoot(document.querySelector('.appContainer'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Navigator />
            <NavBar />
        </BrowserRouter>
    </Provider>
);
