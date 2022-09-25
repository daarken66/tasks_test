import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Button, TextareaAutosize } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from '../../store/tasksSlice'
import { MuiColorInput } from 'mui-color-input'
import styles from './AddForm.module.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const AddForm = () => {
    const { taskTypes } = useSelector((state) => state.taskTypes);
    const { addingTask } = useSelector(state => state.addItem);
    const [color, setColor] = useState('#ffffff');
    const [taskType, setTaskType] = useState('');
    const dispatch = useDispatch();

    const onChangeColorHandler = (color) => {
        setColor(color)
    };

    const onChangeTaskTypeHandler = (taskType) => {
        setTaskType(taskType)
    };

    const formik = useFormik({
        initialValues: {
            title: '',
            author: '',
            description: '',
        },
        onSubmit: values => {
            const dataObject = {
                ...values,
                id: values.title,
                color,
                taskType,
                subtasks: []
            }
            dispatch(addTask([dataObject]));
        },
    });
    return (
        <>
            <h1>{addingTask ? 'Add new task' : 'Add new subtask'}</h1>
            <form onSubmit={formik.handleSubmit} className={styles.form}>

                <label htmlFor="color" className={styles.label}>Select color</label>
                <MuiColorInput
                    id="color"
                    name="color"
                    value={color}
                    onChange={onChangeColorHandler}
                    style={{ width: '100%' }}
                />

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Task Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={taskType}
                        label="Type"
                        onChange={(e) => onChangeTaskTypeHandler(e.target.value)}
                    >
                        {taskTypes && taskTypes.length > 0 && taskTypes.map((task) => (<MenuItem value={task}>{task}</MenuItem>))}

                    </Select>
                </FormControl>

                <label htmlFor="title" className={styles.label}>Title</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                />

                <label htmlFor="author" className={styles.label}>Author</label>
                <input
                    id="author"
                    name="author"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                />

                <label htmlFor="description" className={styles.label}>Description</label>
                <TextareaAutosize
                    id="description"
                    name="description"
                    type="textarea"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className={styles.label}
                />

                <Button colour="secondary" variant="outlined" type="submit">Submit</Button>
            </form>
        </>
    );
};

export default AddForm;