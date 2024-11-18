import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@/app/index.css';
import { Provider } from 'react-redux';
import { persistor, store } from './app/store';
import { PersistGate } from 'redux-persist/integration/react';
import { TaskList } from './widgets/TaskList/TaskList';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TaskList />
      </PersistGate>
    </Provider>
  </StrictMode>
);
