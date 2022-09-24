import React from "react";
import { Typography } from '@mui/material';
import SubTask from "../subtask/SubTask"

const SubtaskList = ({ subtaskData, onSelectSubtask }) => {

	return (
		<div>
			<div>
				<Typography variant="h2">
					Subtasks
				</Typography>
			</div>
			<div>
				{subtaskData && subtaskData.length > 0 ? subtaskData.map((subtask, index) => (
					<SubTask
						key={index}
						id={subtask.id}
						title={subtask.title}
						onSelectSubtask={() => onSelectSubtask(subtask)}
					/>
				))
					:
					<div>
						There are no subtasks yet.
					</div>
				}
			</div>

		</div>
	)
}

export default SubtaskList;