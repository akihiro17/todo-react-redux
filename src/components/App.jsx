import React from 'react'
import VisibleTodoList from '../containers/VisibleTodoList'
import AddTodo from '../containers/AddTodo'
import SetVisibility from '../containers/SetVisibility'

const App = () => (
  <div>
    <AddTodo />
    <SetVisibility />    
    <VisibleTodoList />
  </div>
)

export default App