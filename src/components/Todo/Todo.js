import TodoActions from '../TodoActions/TodoActions';
import TodoHeader from '../TodoHeader/TodoHeder';
import TodoRender from '../TodoRender/TodoRender';
import './Todo.css';

const Todo = () => {
  return(
    <div>
      <TodoActions />
      <TodoHeader />
      <TodoRender />
    </div>
  )
}

export default Todo;
