import React from 'react'
import { useSelector } from 'react-redux'

export const ItemsCount = () => {
  const list = useSelector((store) => store.todos.items)
  const numCompleted = list.filter(item => item.completed).length

  return (
    <p>{numCompleted}/{list.length}</p>
  )
}