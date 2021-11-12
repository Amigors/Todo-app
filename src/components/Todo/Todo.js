import { useState } from 'react';
import TodoActions from '../TodoActions/TodoActions';
import TodoHeader from '../TodoHeader/TodoHeder';
import TodoRender from '../TodoRender/TodoRender';
import { v4 as uuidv4 } from 'uuid';
import './Todo.css';

const initialState = {
  isEdit: false,
  todoName: '',
  todoNote: '',
  isFinished: false,
  id: '',
  index: null
}

const getIsFinishedTodosCount = (todos) => todos.reduce((acc, curr) => {
  acc.total = todos.length
  if (curr.isFinished){
    acc.finished = acc.finished + 1
  }
  return acc;
}, {total: 0, finished: 0})

const setFilterTab = (tab, todos) => {
  if (tab === 0) {
    return todos
  } else if (tab === 1){
    return todos.filter((todo) => !todo.isFinished)
  } else if (tab === 2){
    return todos.filter((todo) => todo.isFinished)
  }
}

const Todo = () => {
  const [tab, setTab] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenDisplayTodo, setIsOpenDisplayTodo] = useState(false)
  const [todos, setTodo] = useState([])
  const [formData, setFormData] = useState(initialState)
  const handleOpenDialog = () => setIsOpen((prevState) => !prevState)

  const totalCount = getIsFinishedTodosCount(todos)

  const sortedTodos = setFilterTab(tab, todos)

  const resetAll = () => {
    setIsOpen(false)
    setIsOpenDisplayTodo(false)
    setFormData(initialState)
  }

  const handleSetFieldValue = (fieldName, value) => setFormData((prevState) => ({ ...prevState, [fieldName]: value }))

  const handleChangeTab = (tabValue) => setTab(tabValue)

  const handleSetTodoOnSubmit = (e) => {
    e.preventDefault()

    if (formData.isEdit){
      const editedTodo = todos
      editedTodo.splice(formData.index, 1, {...formData, isEdit: false, index: null})
      setTodo(editedTodo)
    } else {
      setTodo((prevState) => [...prevState, { ...formData, id: uuidv4 }])
    }
    resetAll()
  }

  const handleMarkTodo = (isChecked, index) => {
    const updatedTodos = todos.slice()
    updatedTodos.splice(index, 1, { ...todos[index], isFinished: isChecked })
    setTodo(updatedTodos)
  }

  const handleOpenTodo = (todo) => {
    setIsOpenDisplayTodo(true);
    setFormData(todo)
  }

  const handleEditTodo = () => {
    setFormData((prevState) => ({ ...prevState, isEdit: true }))
    setIsOpenDisplayTodo(false)
    handleOpenDialog()
  }

  const handleRemoveTodo = () => {
    setTodo(todos.filter((item) => item.id !== formData.id))
    resetAll()
  }

  return (
    <div className='todo-wrapper'>
      <TodoHeader handleOpenDialog={handleOpenDialog}
        isOpen={isOpen}
        handleSetFieldValue={handleSetFieldValue}
        formData={formData}
        handleSetTodoOnSubmit={handleSetTodoOnSubmit}
        handleEditTodo={handleEditTodo}
        isOpenDisplayTodo={isOpenDisplayTodo}
        handleRemoveTodo={handleRemoveTodo}
        handleCloseButton={resetAll}
        totalCount={totalCount}
      />
      <TodoActions
        handleChangeTab={handleChangeTab}
        tab={tab}
      />
      <TodoRender
        todos={sortedTodos}
        handleMarkTodo={handleMarkTodo}
        handleOpenTodo={handleOpenTodo}
      />
    </div>
  )
}

export default Todo;
