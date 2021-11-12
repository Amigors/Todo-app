import './TodoHeader.css';
import moment from 'moment';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DialogModal from '../Dialog/DialogModal';
import DisplayTodo from '../Display/DisplayTodo';

const whitecolor = '#fff'

const styles = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%'
  },
  finished: {
    fontSize: '46px',
    color: whitecolor
  },
  total: {
    display: 'flex',
    flexDirection: 'column',
    color: whitecolor
  },
  weekDay: {
    color: whitecolor,
    fontSize: '25px'
  },
  date: {
    color: whitecolor,
    fontSize: '25px',
    marginLeft: 10
  }
}

const TodoHeader = ({
  handleOpenDialog,
  isOpen, 
  handleSetFieldValue, 
  formData, 
  handleSetTodoOnSubmit,
  handleCloseButton,
  handleEditTodo,
  handleRemoveTodo,
  isOpenDisplayTodo
}) => {
  const weekDay = moment().format('dddd')
  const date = moment().date();

  return (
    <div className='todo-header'>
      <div style={styles.wrapper}>
        <div className='todo-count'>
          <span style={styles.finished}>1</span>

          <div style={styles.total}> 
            <span>Tasks</span>
            <span>/ 5</span>
          </div>
        </div>

        <div>
          <span style={styles.weekDay}>{weekDay}</span>
          <span style={styles.date}>{date}</span>
        </div>

        <div className='add-todo' onClick={handleOpenDialog}>
          <AddCircleIcon color='primary' />
          <span className='icon-background' />
        </div>
      </div>
      <DialogModal isOpen={isOpen}
                   handleOpenDialog={handleOpenDialog}
                   handleSetFieldValue={handleSetFieldValue}
                   formData = {formData}
                   handleSetTodoOnSubmit = {handleSetTodoOnSubmit}
      />
      <DisplayTodo 
      formData={formData}
      isOpen={isOpenDisplayTodo}
      handleCloseButton={handleCloseButton}
      handleEditTodo={handleEditTodo}
      handleRemoveTodo={handleRemoveTodo}
      />

    </div>
  )
}

export default TodoHeader;
