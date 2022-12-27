import React, { useState } from 'react'

import TaskList from '../TaskList/TaskList'
import NewTaskForm from '../NewTaskForm/NewTaskForm'
import Footer from '../Footer/Footer'
import './App.css'

function App() {
  const createTask = (label, sec = 0, min = 0) => {
    return {
      label,
      sec,
      min,
      done: false,
      id: maxId++,
      date: new Date(),
      edit: false,
    }
  }
  let maxId = 100
  const [todoData, setTodoData] = useState([
    createTask('Drink Coffie'),
    createTask('Make App'),
    createTask('Have a lunch'),
    createTask('Drink Vodka'),
  ])
  const [filterName, setFilter] = useState('all')
  const onToggleDone = (id) => {
    setTodoData((todoData) => {
      const idx = todoData.findIndex((el) => el.id === id)
      const oldItem = todoData[idx]
      const newItem = { ...oldItem, done: !oldItem.done }
      return [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)]
    })
  }
  const addItem = (text, sec, min) => {
    if (text.length !== 0 && !text.match(/^\s/) && min.length !== 0 && sec.length !== 0) {
      const newItem = createTask(text, Number(min), Number(sec))
      setTodoData((todoData) => [...todoData, newItem])
    }
  }
  const removeItem = (id) => {
    setTodoData((todoData) => {
      const idx = todoData.findIndex((el) => el.id === id)
      return [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
    })
  }
  const addEditingItem = (text, id) => {
    setTodoData((todoData) => {
      const idx = todoData.findIndex((el) => el.id === id)
      const oldItem = todoData[idx]
      const newItem = { ...oldItem, label: text ? text : oldItem.label, edit: !oldItem.edit }
      return [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)]
    })
  }
  const onEditTask = (label) => {
    setTodoData((todoData) => {
      const idx = todoData.findIndex((el) => el.label === label)
      const oldItem = todoData[idx]
      const newItem = { ...oldItem, edit: !oldItem.edit }
      return [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)]
    })
  }

  const complitedFilterItem = () => {
    setTodoData((todoData) => {
      let filtredTodo = todoData.filter((item) => !item.done)
      return [...filtredTodo]
    })
  }

  const filterChange = (todoData, filterName) => {
    if (filterName === 'active') {
      return todoData.filter((el) => !el.done)
    }
    if (filterName === 'done') {
      return todoData.filter((el) => el.done)
    }
    return todoData
  }
  const filterSwich = (filterName) => {
    setFilter(filterName)
  }

  const clearTodo = () => {
    setTodoData((todoData) => {
      return [...todoData.slice(0, 0)]
    })
  }
  const filterStatus = filterChange(todoData, filterName)
  const activeCount = todoData.filter((el) => !el.done).length
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onItemAdd={addItem} />
      </header>
      <section className="main">
        <TaskList
          onEditTask={onEditTask}
          addEditingItem={addEditingItem}
          todos={filterStatus}
          onDeleted={removeItem}
          onToggleDone={onToggleDone}
          filterSwich={filterSwich}
        />
        <Footer
          clearTodo={clearTodo}
          activeCount={activeCount}
          onToggleDone={onToggleDone}
          filterSwich={filterSwich}
          filter={filterName}
          complitedFilterItem={complitedFilterItem}
        />
      </section>
    </section>
  )
}
export default App
