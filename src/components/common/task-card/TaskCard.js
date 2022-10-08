import React from 'react';
import { Card, CardContent } from '@mui/material';

const TaskCard = ({ children }) => {
  return (
    <Card sx={{ minWidth: 275, height: 1 }}>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default TaskCard;
