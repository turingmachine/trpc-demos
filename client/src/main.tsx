import React from 'react'
import ReactDOM from 'react-dom/client'
import { DemoOne } from './DemoOne'
import { DemoTwo } from './DemoTwo'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DemoTwo />
  </React.StrictMode>
)
