import { ThemeProvider } from '@mui/material';
import ReactDOM from 'react-dom/client';
import { store } from './store';
import { Provider } from 'react-redux';

import App from './App';
import theme from './themes';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);
