import React from 'react';
import { useTypedDispatch, useTypedSelector } from '../../hooks/typedHooks';
import { updateSelectedSubtask } from '../../store/selectedSlice';
import { SubtaskSliceInterface } from '../Interfaces/SliceInterfaces';
import { Typography } from '@mui/material';
import SubTask from '../subtask/SubTask';

const SubtaskList = () => {
  const { selectedTask } = useTypedSelector((state) => state.selected);
  const dispatch = useTypedDispatch();
  let subtasks: SubtaskSliceInterface[] = [];

  if (selectedTask?.subtasks && selectedTask.subtasks.length > 0) {
    subtasks = selectedTask.subtasks;
  }

  return (
    <div>
      <div>
        <Typography variant='h2'>Subtasks</Typography>
      </div>
      <div>
        {subtasks.length > 0 ? (
          subtasks.map((subtask, index) => (
            <SubTask
              key={index}
              id={subtask.id}
              title={subtask.title}
              onSelectSubtask={() => dispatch(updateSelectedSubtask(subtask))}
            />
          ))
        ) : (
          <div>There are no subtasks yet.</div>
        )}
      </div>
    </div>
  );
};

export default SubtaskList;
