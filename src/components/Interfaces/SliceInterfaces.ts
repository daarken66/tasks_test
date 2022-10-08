export interface AddItemStateSliceInterface {
  addingTask: boolean;
  addingSubtask: boolean;
}

export interface TaskSliceInterface {
  id: string;
  title: string;
  type: string;
  color: string;
  author: string;
  description: string;
  subtasks: SubtaskSliceInterface[];
}

export interface SubtaskSliceInterface {
  id: string;
  title: string;
  type: string;
  color: string;
}

export interface SelectedTaskSliceInterface {
  selectedTask: null | TaskSliceInterface;
  selectedSubtask: null | SubtaskSliceInterface;
}

export interface TaskListSliceInterface {
  tasks: TaskSliceInterface[];
}

export interface ImportedTypes {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

export interface TaskTypeSliceInterface {
  taskTypes: ImportedTypes[];
}
