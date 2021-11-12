import './TodoActions.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ListIcon from '@mui/icons-material/List';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckIcon from '@mui/icons-material/Check';

const TodoActions = ({handleChangeTab, tab}) => {
  return (
    <div className='actions-wrapper'>
      <Tabs
        value={tab}
        onChange={(e, tabValue) => handleChangeTab(tabValue)}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab label={<ListIcon />} />
        <Tab label={<RadioButtonUncheckedIcon />} />
        <Tab label={<CheckIcon />} />
      </Tabs>
    </div>
  )
}

export default TodoActions;
