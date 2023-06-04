export interface TaskAPIResponse {
  response: {
    name: string;
    priority: string;
    completed: boolean;
    progress: boolean;
    id: string;
    date: string;
  }[];
}

export interface Task {
  name: string;
  priority: string;
  completed: boolean;
  progress: boolean;
  id: string;
  date: string;
}
