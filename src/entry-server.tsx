import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { renderToPipeableStream } from 'react-dom/server';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';

const store = setupStore();

export function render(url: string, options?: object) {
    return renderToPipeableStream(
        <Provider store={store}>
            <StaticRouter location={url}>
                <App />
            </StaticRouter>
        </Provider>,
        options
    );
};
