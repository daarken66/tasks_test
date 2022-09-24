import React from 'react';
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';

const TaskCard = ({ children }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  )
};

export default TaskCard;
