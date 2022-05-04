import React from 'react';
import {Provider} from 'react-redux';

import './shared/styles/crema.less';
import {
  AppContextProvider,
  AppLayout,
  AppLocaleProvider,
  AppThemeProvider,
  AuthRoutes,
} from './@crema';
import configureStore from './redux/store';
import {BrowserRouter} from 'react-router-dom';
import './@crema/services/index';
import FirebaseAuthProvider from './@crema/services/auth/firebase/FirebaseAuthProvider';
import {QueryClientProvider, QueryClient} from 'react-query';

const store = configureStore();
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
const App = () => (
  <AppContextProvider>
    <Provider store={store}>
      <AppThemeProvider>
        <AppLocaleProvider>
          <BrowserRouter>
          <QueryClientProvider client = {queryClient} >
            <FirebaseAuthProvider>
              <AuthRoutes>
                <AppLayout />
              </AuthRoutes>
            </FirebaseAuthProvider>
          </QueryClientProvider>
          </BrowserRouter>
        </AppLocaleProvider>
      </AppThemeProvider>
    </Provider>
  </AppContextProvider>
);

export default App;
