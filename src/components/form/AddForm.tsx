import { useState } from 'react';
import { useTypedDispatch, useTypedSelector } from '../../hooks/typedHooks';

import { useFormik } from 'formik';
import { Button, TextareaAutosize } from '@mui/material';
import { MuiColorInput } from 'mui-color-input';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { addTask } from '../../store/tasksSlice';
import styles from './AddForm.module.css';

interface FormValues {
  title: string;
  color: string;
  author: string;
  description: string;
  taskType: string;
}

const AddForm = () => {
  const { taskTypes } = useTypedSelector((state) => state.taskTypes);
  const { addingTask } = useTypedSelector((state) => state.addItem);
  const [color, setColor] = useState('#ffffff');
  const [taskType, setTaskType] = useState('');
  const dispatch = useTypedDispatch();

  const onChangeColorHandler = (color: React.SetStateAction<string>) => {
    setColor(color);
  };

  const onChangeTaskTypeHandler = (task: React.SetStateAction<string>) => {
    setTaskType(task);
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      description: '',
      color: '',
      taskType: '',
    },
    onSubmit: (values: FormValues) => {
      const dataObject = {
        ...values,
        title: values.title,
        color,
        taskType,
        subtasks: [],
        id: '',
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
            {taskTypes?.length > 0 &&
              taskTypes.map((task: any) => (
                <MenuItem value={task}>{task}</MenuItem>
              ))}
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
          onChange={formik.handleChange}
          value={formik.values.description}
          className={styles.label}
        />

        <Button variant='outlined' type='submit'>
          Submit
        </Button>
      </form>
    </>
  );
};

export default AddForm;
