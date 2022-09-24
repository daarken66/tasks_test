import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './store/tasksSlice';
import { Box, Grid } from '@mui/material';


import TasksList from './components/tasks-list/TasksList';
import TaskDetail from './components/task-detail/TaskDetail';
import SubtaskList from './components/subtask-list/SubtaskList';
import TaskCard from './components/common/task-card/TaskCard';

const mockData = [
  {
    id: '1', title: 'Task 1', taskType: 'Todo', color: 'rgb(246, 216, 186)', author: 'Ludvik III',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    subtasks: [
      { id: 'a1', title: 'Subtask 1', subtaskType: 'subtask', color: 'rgb(246, 216, 186)' },
      { id: 'a12', title: 'Subtask 2', subtaskType: 'Todo', color: 'rgb(246, 216, 186)' },
      { id: 'a1da', title: 'Subtask 5', subtaskType: 'Todo', color: 'rgb(246, 216, 186)' },
      { id: 'adawda1', title: 'Subtask dw', subtaskType: 'Todo', color: 'rgb(246, 216, 186)' },
    ]
  },
  {
    id: '2', title: 'Task 2', taskType: 'Todo 2', color: 'rgb(246, 216, 124)', author: 'Arthur', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    subtasks: [
      { id: '2daw', title: 'Subtask 2', taskType: 'Todo 2', color: 'rgb(246, 216, 124)' },
      { id: '2kdakl', title: 'Subtask 2', taskType: 'Todo 2', color: 'rgb(246, 216, 124)' },
      { id: '2lajkdkla', title: 'Subtask 2', taskType: 'Todo 2', color: 'rgb(246, 216, 124)' },
      { id: '2kdnakjhdw', title: 'Subtask 2', taskType: 'Todo 2', color: 'rgb(246, 216, 124)' },
      { id: '2kdnakjhdw', title: 'Subtask 2', taskType: 'Todo 2', color: 'rgb(246, 216, 124)' },
    ]
  },
  {
    id: '3', title: 'Task 3', taskType: 'Todo da', color: 'rgb(246, 216, 24)', author: 'King Richard', description: "lorem ipsum test neco nic text specialni popis tasku",
    subtasks: []
  },
];

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // check local storage and populate data
    dispatch(addTask(mockData))
  }, []);

  const [selectedTask, setSelectedTask] = useState(null);
  const [selectedSubtask, setSelectedSubtask] = useState(null);

  const onSelectTaskHandler = (task) => {
    setSelectedTask(task);
    setSelectedSubtask(null);
  };

  const onSelectSubtaskHandler = (subtask) => {
    setSelectedSubtask(subtask);
  };

  return (
    <Box sx={{ flexGrow: 1, padding: '2rem' }}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <TaskCard>
            <TasksList onSelectTask={onSelectTaskHandler} />
          </TaskCard>
        </Grid>

        {selectedTask && (
          <>
            <Grid item xs={4}>
              <TaskCard>
                <TaskDetail
                  taskData={selectedTask}
                  subtaskData={selectedSubtask}
                  onCloseTask={onSelectTaskHandler}
                  onCloseSubtask={onSelectSubtaskHandler}
                />
              </TaskCard>
            </Grid>
            <Grid item xs={4}>
              <TaskCard>
                <SubtaskList
                  subtaskData={selectedTask.subtasks ? selectedTask.subtasks : []}
                  onSelectSubtask={onSelectSubtaskHandler}
                />
              </TaskCard>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
}

export default App;
