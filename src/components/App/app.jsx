import React from 'react'

import TaskList from '../TaskList/task-list'
import NewTaskForm from '../NewTaskForm/new-task-form'
import Footer from '../Footer/footer'
import './app.css'
export default class App extends React.Component {
  maxId = 100
  state = {
    todoData: [
      this.createTask('Drink Coffie'),
      this.createTask('Make App'),
      this.createTask('Have a lunch'),
      this.createTask('Drink Vodka'),
    ],
    filter: '',
  }

  createTask(label) {
    return {
      label,
      done: false,
      id: this.maxId++,
      date: new Date(),
    }
  }

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id)
    const oldItem = arr[idx]
    const newItem = { ...oldItem, [propName]: !oldItem[propName] }
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)]
  }
  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done'),
      }
    })
  }
  addItem = (text) => {
    const newItem = this.createTask(text)
    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem]
      return { todoData: newArray }
    })
  }
  removeItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id)
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
      return { todoData: newArray }
    })
  }
  addEditingItem = (text, id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id)

      const oldItem = todoData[idx]
      const newItem = { ...oldItem, label: text ? text : oldItem.label, edit: !oldItem.edit }
      const newArr = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)]

      return {
        todoData: newArr,
      }
    })
  }
  onEditTask = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'edit'),
      }
    })
  }
  // updateTask = (id, e) => {
  //   if (e.keyCode === 13) {
  //     this.setState(({ todoData }) => {
  //       todoData.map((el) => {
  //         el.id === id
  //       })
  //       const newArray = [...todoData, newItem]
  //       return { todoData: newArray }
  //     })
  //   }
  // }
  complitedFilterItem = () => {
    this.setState(({ todoData }) => {
      let filtredTodo = todoData.filter((item) => !item.done)
      let filtredArr = [...filtredTodo]
      return { todoData: filtredArr }
    })
  }
  filterChange = (todoData, filter) => {
    if (filter === 'active') {
      return todoData.filter((el) => !el.done)
    }
    if (filter === 'done') {
      return todoData.filter((el) => el.done)
    }
    return todoData
  }
  filterSwich = (filter) => {
    this.setState({ filter })
  }
  clearTodo = () => {
    this.setState(({ todoData }) => {
      const newArray = [...todoData.slice(0, 0)]
      return { todoData: newArray }
    })
  }

  render() {
    const { todoData, filter } = this.state
    const filterStatus = this.filterChange(todoData, filter)
    const activeCount = todoData.filter((el) => !el.done).length
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm onItemAdd={this.addItem} />
        </header>
        <section className="main">
          <TaskList
            onEditTask={this.onEditTask}
            addEditingItem={this.addEditingItem}
            todos={filterStatus}
            onDeleted={this.removeItem}
            onToggleDone={this.onToggleDone}
            filterSwich={this.filterSwich}
            updateTime={this.updateTime}
          />
          <Footer
            clearTodo={this.clearTodo}
            activeCount={activeCount}
            onToggleDone={this.onToggleDone}
            filterSwich={this.filterSwich}
            filter={filter}
          />
        </section>
      </section>
    )
  }
}
