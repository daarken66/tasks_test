import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from './store/tasksSlice';
import { updateTaskTypes } from './store/taskTypeSlice';
import { Box, Grid } from '@mui/material';
import axios from 'axios';

import TasksList from './components/tasks-list/TasksList';
import TaskDetail from './components/task-detail/TaskDetail';
import SubtaskList from './components/subtask-list/SubtaskList';
import TaskCard from './components/common/task-card/TaskCard';
import AddForm from './components/form/AddForm';
import Modal from './components/common/modal/Modal';

const mockData = [
  {
    id: '1', title: 'Task 1', type: 'Todo', color: 'rgb(246, 216, 186)', author: 'Ludvik III',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    subtasks: [
      { id: 'a1', title: 'Subtask 1', type: 'subtask', color: 'rgb(246, 216, 186)' },
      { id: 'a12', title: 'Subtask 2', type: 'Todo', color: 'rgb(246, 216, 186)' },
      { id: 'a1da', title: 'Subtask 5', type: 'Todo', color: 'rgb(246, 216, 186)' },
      { id: 'adawda1', title: 'Subtask dw', type: 'Todo', color: 'rgb(246, 216, 186)' },
    ]
  },
  {
    id: '2', title: 'Task 2', type: 'Todo 2', color: 'rgb(246, 216, 124)', author: 'Arthur', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    subtasks: [
      { id: '2daw', title: 'Subtask 2', type: 'Todo 2', color: 'rgb(246, 216, 124)' },
      { id: '2kdakl', title: 'Subtask 2', type: 'Todo 2', color: 'rgb(246, 216, 124)' },
      { id: '2lajkdkla', title: 'Subtask 2', type: 'Todo 2', color: 'rgb(246, 216, 124)' },
      { id: '2kdnakjhdw', title: 'Subtask 2', type: 'Todo 2', color: 'rgb(246, 216, 124)' },
      { id: '2kdnakjhdw', title: 'Subtask 2', type: 'Todo 2', color: 'rgb(246, 216, 124)' },
    ]
  },
  {
    id: '3', title: 'Task 3', type: 'Todo da', color: 'rgb(246, 216, 24)', author: 'King Richard', description: "lorem ipsum test neco nic text specialni popis tasku",
    subtasks: []
  },
];

const App = () => {
  const dispatch = useDispatch();
  const { selectedTask } = useSelector(state => state.selected);
  const { addingTask, addingSubtask } = useSelector(state => state.addItem);

  useEffect(() => {
    dispatch(addTask(mockData))

    const getTaskTypes = async () => {
      const response = await axios({
        method: 'get',
        url: process.env.REACT_APP_API_URL
      });

      let taskTypes = [];
      if (response.data && response.data.length > 0) {
        taskTypes = response.data.map(item => item.username)
      }
      dispatch(updateTaskTypes(taskTypes))
    }

    getTaskTypes();
  }, []);

  return (
    <>
      <Box sx={{ flexGrow: 1, padding: '2rem' }}>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <TaskCard>
              <TasksList />
            </TaskCard>
          </Grid>

          {selectedTask && (
            <>
              <Grid item xs={4}>
                <TaskCard>
                  <TaskDetail />
                </TaskCard>
              </Grid>
              <Grid item xs={4}>
                <TaskCard>
                  <SubtaskList />
                </TaskCard>
              </Grid>
            </>
          )}
        </Grid>
      </Box>

      {(addingTask || addingSubtask) && <Modal><AddForm /></Modal>}
    </>
  );
}

export default App;
