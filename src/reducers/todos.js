function todos(state = [], action) {
   switch(action.type) {
    case 'ADD_TODO':
       return [...state,
	   {
	       text: action.text,
	       completed: false,
           id: action.id
	   }
       ]
    case 'COMPLETE_TODO':
	var new_todos=[]
	for(var i = 0; i < state.length; i++) {
	    if (action.id == i) {
		new_todos.push({
		    text: state[i].text,
		    completed: true,
            id: action.id
		})
	    } else {
		new_todos.push(state[i])
	    }
	}
	return new_todos
   default:
       return state
   }
}

export default todos
