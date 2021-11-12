import './TodoRender.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Checkbox from '@mui/material/Checkbox';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Todo =({
  todo, 
  index, 
  handleMarkTodo, 
  handleOpenTodo
})=>{
  const isFinishedTodo = todo.isFinished && 'todo-finished'
  return(
    <div className='todo-container'>
      <span>
        <Checkbox 
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleOutlineIcon />} 
          onClick = {(e) => handleMarkTodo(e.target.checked, index)}
          checked = {todo.isFinished}
        />
      </span>

      <div className='todo-item' onClick={() => handleOpenTodo({...todo, index})}>
        <span className={isFinishedTodo}>{todo.todoName}</span>
        <ArrowForwardIosIcon fontSize='small' />
      </div>
    </div>
  )
}

const TodoRender = ({
  todos, 
  handleMarkTodo, 
  handleOpenTodo
}) => {
  return(
    <div className='todo-render-wrapper'>
      {todos.map((todo, index)=>(
        <Todo
          key = {todo.id}
          todo = {todo}
          handleMarkTodo = {handleMarkTodo}
          index = {index}
          handleOpenTodo = {handleOpenTodo}
        />
      ))}
    </div>
  )
}

export default TodoRender;
