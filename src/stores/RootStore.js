import TaskStore from './TaskStore';

export default class RootStore {
  constructor() {
    this.taskStore = new TaskStore(this);
  }
}