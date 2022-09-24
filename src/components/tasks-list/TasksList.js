import React from "react";
import { Typography, Button } from '@mui/material';
import Task from '../task/Task';

const TasksList = ({ taskData, onSelectTask }) => {

  return (
    <div>
      <div>
        <Typography variant="h1">
          All Tasks
        </Typography>
        <Button color="secondary" variant="contained" sx={{ ml: 55, mt: -8 }}>Add task</Button> {/* style later*/}
      </div>

      <div>
        {taskData && taskData.length > 0 && taskData.map(task => (
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