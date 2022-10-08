import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

const SubTask = ({ id, title, onSelectSubtask }) => {
  return (
    <Stack spacing={1} padding={1} onClick={onSelectSubtask}>
      <Button variant='outlined' color='primary'>
        <Typography variant='h3'>{title}</Typography>
      </Button>
    </Stack>
  );
};

export default SubTask;
