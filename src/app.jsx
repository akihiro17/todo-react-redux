import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {createStore, combineReducers} from 'redux'
import todoApp from './reducers'
import * as actions from './actions'
 
const initialState = {
    todos: [
	{
	    text: 'web db',
	    completed: true
	},
	{
	    text: 'software design',
	    completed: false
	}	
    ],
    visibilityFilter: 'SHOW_ALL'
}

const store = createStore(todoApp, initialState)

render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('container')
)
