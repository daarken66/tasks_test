import { useTypedDispatch, useTypedSelector } from '../../hooks/typedHooks';
import {
  updateSelectedSubtask,
  updateSelectedTask,
} from '../../store/selectedSlice';
import { Typography, Button } from '@mui/material';

const TaskDetail = () => {
  const { selectedSubtask } = useTypedSelector((state) => state.selected);
  const { selectedTask } = useTypedSelector((state) => state.selected);
  const dispatch = useTypedDispatch();

  const data = selectedSubtask ? selectedSubtask : selectedTask;
  const title = selectedSubtask ? 'Subtask detail' : 'Task detail';

  return (
    <div>
      <Typography>
        {title}
        {selectedSubtask ? (
          <Button
            variant='outlined'
            onClick={() => dispatch(updateSelectedSubtask(null))}
            sx={{ ml: 55, mt: -3 }}
            color='error'
          >
            Close subtask
          </Button>
        ) : (
          <Button
            variant='outlined'
            onClick={() => dispatch(updateSelectedTask(null))}
            sx={{ ml: 55, mt: -3 }}
            color='error'
          >
            Close task
          </Button>
        )}

        {data && (
          <div>
            <p>
              Name:<span>{data.title}</span>
            </p>
            <p>
              Id:<span>{data.id}</span>
            </p>
            <p>
              Type:<span>{data.taskType}</span>
            </p>
            <p>
              Name:<span>{data.title}</span>
            </p>
            <p>
              Colour:<span style={{ color: data.color }}>{data.color}</span>
            </p>
          </div>
        )}
      </Typography>
    </div>
  );
};

export default TaskDetail;
