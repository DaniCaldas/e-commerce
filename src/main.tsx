import App from './App.tsx'
import { createRoot } from "react-dom/client";
import { GlobalStyle } from './style.ts';
import UseContext from './Contexts/UseContext.tsx';
import React from 'react';

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <UseContext>
    <App/>
    </UseContext>
  </React.StrictMode>
);