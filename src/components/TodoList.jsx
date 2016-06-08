import React, { PropTypes } from 'react'

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo =>
      <li key={todo.id}
      style={{
      textDecoration: todo.completed ? 'line-through' : 'none' }}
      onClick={() => onTodoClick(todo.id) }>
      {todo.text}</li> )}</ul>
)

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired
}

export default TodoList
