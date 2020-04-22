import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'

export const Item = ({ itemIndex, text }) => {

  const item = useSelector((store) => store.todos.items[itemIndex])
  const dispatch = useDispatch()

  // 
  const removeItem = (e) => {
    dispatch(todos.actions.removeTodo({
      itemIndex: itemIndex
    }))
  }

  const completeItem = (e) => {
    dispatch(
      todos.actions.setComplete({
        itemIndex: itemIndex,
        completed: !item.completed
      })
    )
  }

  return (
    <div className={`item ${item.completed ? "completed" : ''}`}>

      <label className="checkbox-container" aria-label="Complete">
        <input
          type="checkbox"
          onChange={completeItem}
          className="item-check"
          checked={item.completed ? "checked" : ""}
        ></input>
        <span className="checkbox-custom"></span>
      </label>

      <span className="item-desc">{text}</span>

      <button className="remove-btn" value="Click to clear list" onClick={removeItem}>
        <i className="fas fa-times"></i>
      </button>
    </div>
  )
}
