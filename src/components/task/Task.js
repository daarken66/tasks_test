import React from "react";
import { Typography, Stack, Divider, Button, Grid } from "@mui/material";

import LongMenu from "../common/menu/Menu";


const Task = ({ id, color, title, taskType, subtasksCount, onSelectTask }) => {
    return (
        <Stack spacing={1} padding={1} onClick={onSelectTask}>
            <Grid container>
                <Grid item xs={11}>
                    <Button variant="outlined" color="primary" style={{ width: 480, height: 50 }}>
                        <Stack direction="row" padding={1} spacing={1}>
                            <div style={{ background: color }}>color</div>
                            <Divider orientation="vertical" flexItem />
                            <Typography variant="h3">{title}</Typography>
                            <Typography variant="h3">Type: {taskType}</Typography>
                            <Typography variant="h3">Subtasks: {subtasksCount}</Typography>
                        </Stack >
                    </Button>
                </Grid>
                <Grid item xs={1}>
                    {/* <Button variant="outlined" color="primary" style={{ height: 50 }}>
											...
									</Button> */}
                    <LongMenu />
                </Grid>
            </Grid>
        </Stack >
    )
};

export default Task;