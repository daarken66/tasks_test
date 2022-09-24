import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Button } from '@mui/material';
import Task from '../task/Task';

const TasksList = ({ onSelectTask }) => {
  const { tasks } = useSelector((state) => state.tasks);

  console.log(tasks)
  return (
    <div>
      <div>
        <Typography variant="h1">
          All Tasks
        </Typography>
        <Button color="secondary" variant="contained" sx={{ ml: 55, mt: -8 }}>Add task</Button> {/* style later*/}
      </div>

      <div>
        {tasks && tasks.length > 0 && tasks.map(task => (
          <Task
            key={task.id}
            id={task.id}
            color={task.color}
            title={task.title}
            taskType={task.taskType}
            subtasksCount={task.subtasks.length}
            onSelectTask={() => onSelectTask(task)}
          />
        ))}
      </div>

    </div>
  )
}

export default TasksList;