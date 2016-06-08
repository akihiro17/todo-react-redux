import React from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'

let SetVisibility = ({dispatch}) => {
  let show_completed
  let show_active
  let show_all

  const onChange = (e) => {
    console.log(show_completed.checked)
    if (show_completed.checked) {
      dispatch(setVisibilityFilter('SHOW_COMPLETED'))
      show_active.checked = false
      show_all.checked = false      
    } 
  }

  const showActive = (e) => {
    if (show_active.checked) {
      dispatch(setVisibilityFilter('SHOW_ACTIVE'))
      show_completed.checked = false
      show_all.checked = false
    }
  }

  const showAll = (e) => {
    if (show_all.checked) {
      dispatch(setVisibilityFilter('SHOW_ALL'))
      show_completed.checked = false
      show_active.checked = false
    }
  }

  return (
    <div>
      <input type="radio" checked={show_completed} ref={node => { show_completed = node }} onChange={onChange}/>show completed
      <input type="radio" checked={show_active} ref={node => { show_active = node }} onChange={showActive}/>show active
      <input type="radio" checked={show_all} ref={node => { show_all = node }} onChange={showAll}/>show all
    </div>
  )
}

SetVisibility = connect()(SetVisibility)
export default SetVisibility