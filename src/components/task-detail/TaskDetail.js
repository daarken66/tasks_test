import React from "react";

const TaskDetail = ({ taskData, subtaskData, onCloseTask, onCloseSubtask }) => {

  const data = subtaskData ? subtaskData : taskData;
  const title = subtaskData ? 'Subtask detail' : 'Task detail';

  return (
    <div>
      {title}
      {subtaskData
        ?
        <button onClick={() => onCloseSubtask(null)}>Close subtask</button>
        :
        <button onClick={() => onCloseTask(null)}>Close task</button>
      }

      {data && (
        <p>Name:<span>{data.title}</span></p>
      )}

    </div>
  )
};

export default TaskDetail; 