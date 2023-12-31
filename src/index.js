import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import store from './store'
import App from './components/app'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
  //   <React.StrictMode>
  //   <Provider store={store}>
  //     <App />
  //   </Provider>
  // </React.StrictMode>,
)
