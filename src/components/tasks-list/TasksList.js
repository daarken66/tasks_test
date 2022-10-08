import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Button } from '@mui/material';
import Task from '../task/Task';
import { updateSelectedTask } from '../../store/selectedSlice';
import { addTask } from '../../store/addItemSlice';

const TasksList = () => {
  const { tasks } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <Typography variant='h1'>All Tasks</Typography>
        <Button
          color='secondary'
          variant='contained'
          sx={{ ml: 55, mt: -8 }}
          onClick={() => dispatch(addTask(true))}
        >
          Add task
        </Button>
      </div>

      <div>
        {tasks &&
          tasks.length > 0 &&
          tasks.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              color={task.color}
              title={task.title}
              taskType={task.type}
              subtasksCount={task.subtasks.length}
              onSelectTask={() => dispatch(updateSelectedTask(task))}
            />
          ))}
      </div>
    </div>
  );
};

export default TasksList;
