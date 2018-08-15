import React from 'react'
import ReactDOM from 'react-dom'
import {applyMiddleware,createStore} from 'redux'
import {Provider} from 'react-redux'

import promise from 'redux-promise'//Ao retorono de uma promise ele ESPERApara disparar o Reducer
import multi from 'redux-multi' //multiplos action 
import thunk from 'redux-thunk'

import App from './main/app'
import reducers from './main/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(thunk,multi,promise)
                             (createStore)
                             (reducers, devTools) 
                             //Resultado de Reducers vai gerar o Store da app

ReactDOM.render(
    <Provider store={store}>
       <App/>
    </Provider>,
     document.getElementById('app'))