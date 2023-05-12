import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {GlobalStyles} from "./theme.ts";
import Reference from "./utils/Reference.tsx";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Reference fileName=""/>
    <GlobalStyles/>
    <App />
  </React.StrictMode>,
)
