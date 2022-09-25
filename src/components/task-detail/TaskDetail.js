import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { updateSelectedSubtask, updateSelectedTask } from '../../store/selectedSlice'
import { Typography, Button } from '@mui/material';

const TaskDetail = () => {
  const { selectedSubtask } = useSelector(state => state.selected);
  const { selectedTask } = useSelector(state => state.selected);
  const dispatch = useDispatch();

  const data = selectedSubtask ? selectedSubtask : selectedTask;
  const title = selectedSubtask ? 'Subtask detail' : 'Task detail';

  return (
    <div>
      <Typography>
        {title}
        {selectedSubtask
          ?
          <Button variant="outlined" onClick={() => dispatch(updateSelectedSubtask(null))} sx={{ ml: 55, mt: -3 }} color="error">Close subtask</Button>
          :
          <Button variant="outlined" onClick={() => dispatch(updateSelectedTask(null))} sx={{ ml: 55, mt: -3 }} color="error">Close task</Button>
        }

        {data && (
          <div>
            <p>Name:<span>{data.title}</span></p>
            <p>Id:<span>{data.id}</span></p>
            <p>Type:<span>{data.type}</span></p>
            <p>Name:<span>{data.title}</span></p>
            <p>Colour:<span style={{ color: data.color }}>{data.color}</span></p>
          </div>
        )}

      </Typography>
    </div>
  )
};

export default TaskDetail; 