import './app/styles/index.css'
import { appStarted } from '@shared/config/init.ts'
import { attachLogger } from 'effector-logger'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app/app.tsx'

// attachLogger()

appStarted()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
