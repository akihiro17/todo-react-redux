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
store.subscribe(() => console.log(store.getState()))

store.dispatch(actions.addTodo('write code'))
store.dispatch(actions.addTodo('run tests'))
store.dispatch(actions.completeTodo(1))
store.dispatch(actions.completeTodo(2))
store.dispatch(actions.setVisibilityFilter('SHOW_COMPLETED'))
