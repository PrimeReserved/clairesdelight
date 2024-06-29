'use client';

import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import { store } from '@/store';
import { persistStore } from "redux-persist"
persistStore(store);


interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: Readonly<ProvidersProps>) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
