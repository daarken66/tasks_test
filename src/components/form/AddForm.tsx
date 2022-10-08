import React, { useState } from 'react';
import { useTypedDispatch, useTypedSelector } from '../../hooks/typedHooks';

import { useFormik, FormikHelpers } from 'formik';
import { Button, TextareaAutosize } from '@mui/material';
import { MuiColorInput } from 'mui-color-input';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { addTask } from '../../store/tasksSlice';
import styles from './AddForm.module.css';
import {
  ImportedTypes,
  TaskTypeSliceInterface,
} from '../Interfaces/SliceInterfaces';

interface Values {
  title: string;
  color: string;
  author: string;
  description: string;
  // DOŘEŠIT!!!
  taskType: TaskTypeSliceInterface | string | ImportedTypes;
}

const AddForm = () => {
  const { taskTypes } = useTypedSelector((state) => state.taskTypes);
  const { addingTask } = useTypedSelector((state) => state.addItem);
  const [color, setColor] = useState('#ffffff');
  const [taskType, setTaskType] = useState('');
  const dispatch = useTypedDispatch();

  const onChangeColorHandler = (color) => {
    setColor(color);
  };

  const onChangeTaskTypeHandler = (taskType) => {
    setTaskType(taskType);
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      description: '',
    },
    onSubmit: (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
      const dataObject = {
        ...values,
        title: values.title,
        color,
        taskType,
        subtasks: [],
      };
      dispatch(addTask([dataObject]));
    },
  });
  return (
    <>
      <h1>{addingTask ? 'Add new task' : 'Add new subtask'}</h1>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <label htmlFor='color' className={styles.label}>
          Select color
        </label>
        <MuiColorInput
          id='color'
          name='color'
          value={color}
          onChange={onChangeColorHandler}
          style={{ width: '100%' }}
        />

        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>Task Type</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={taskType}
            label='Type'
            onChange={(e) => onChangeTaskTypeHandler(e.target.value)}
          >
            {taskTypes &&
              taskTypes.length > 0 &&
              taskTypes.map((task) => <MenuItem value={task}>{task}</MenuItem>)}
          </Select>
        </FormControl>

        <label htmlFor='title' className={styles.label}>
          Title
        </label>
        <input
          id='title'
          name='title'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.title}
        />

        <label htmlFor='author' className={styles.label}>
          Author
        </label>
        <input
          id='author'
          name='author'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.author}
        />

        <label htmlFor='description' className={styles.label}>
          Description
        </label>
        <TextareaAutosize
          id='description'
          name='description'
          type='textarea'
          onChange={formik.handleChange}
          value={formik.values.description}
          className={styles.label}
        />

        <Button colour='secondary' variant='outlined' type='submit'>
          Submit
        </Button>
      </form>
    </>
  );
};

export default AddForm;
