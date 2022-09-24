import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import TasksList from './components/tasks-list/TasksList';
import TaskDetail from './components/task-detail/TaskDetail'
import SubtaskList from './components/subtask-list/SubtaskList';
import TaskCard from './components/common/task-card/TaskCard';

const App = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: '2rem' }}>
      <Grid container spacing={2}>
        <Grid xs={4}>
          <TaskCard>
            <TasksList />
          </TaskCard>
        </Grid>
        <Grid xs={5}>
          <TaskCard>
            <TaskDetail />
          </TaskCard>
        </Grid>
        <Grid xs={3}>
          <TaskCard>
            <SubtaskList />
          </TaskCard>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
