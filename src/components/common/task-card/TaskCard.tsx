import { ReactNode } from 'react';
import { Card, CardContent } from '@mui/material';

interface ChildrenProps {
  children?: ReactNode;
}

const TaskCard = ({ children }: ChildrenProps) => {
  return (
    <Card sx={{ minWidth: 275, height: 1 }}>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default TaskCard;
