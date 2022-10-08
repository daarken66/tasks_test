import { ReactNode } from 'react';
import { Card, CardContent } from '@mui/material';

interface TaskCardProps {
  children: ReactNode;
}

const TaskCard = ({ children }: TaskCardProps) => {
  return (
    <Card sx={{ minWidth: 275, height: 1 }}>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default TaskCard;
