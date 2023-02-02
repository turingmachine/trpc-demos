import React from 'react'
import ReactDOM from 'react-dom/client'
import { DemoSimple } from './DemoSimple'
import { DemoUseQuery } from './DemoUseQuery'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DemoSimple />
  </React.StrictMode>
)
