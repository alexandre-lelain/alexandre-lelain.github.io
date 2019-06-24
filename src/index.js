import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { I18nextProvider } from 'react-i18next'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/global.css'

import Main from './pages/Main/'
import i18n from './trans/i18n'

function renderApp () {
  return (
    <I18nextProvider i18n={i18n}>
      <Main i18n={i18n}/>
    </I18nextProvider>
  )
}

ReactDOM.render(renderApp(), document.getElementById('root'));
registerServiceWorker();
