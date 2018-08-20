import { observable, action } from 'mobx';

class TaskStore {
  @observable tasks = JSON.parse(localStorage.getItem('stark-tasks')) || [];

  @observable inputTask = '';

  @action.bound
  getId() {
    if (this.tasks.length <= 0) return 1;
    return this.tasks[this.tasks.length - 1].id + 1;
  }

  @action.bound
  onkeyPress(event) {
    if (event.keyCode === 13) {
      const { tasks, inputTask } = this;
      const newTask = {
        id: this.getId(),
        task: inputTask,
        finished: false,
      };
      tasks.push(newTask);
      this.inputTask = '';
      this.saveToLocalStorage(tasks);
    }
  }

  @action.bound
  onChange(event) {
    this.inputTask = event.target.value;
  }

  @action.bound
  toggleFinished(id) {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    this.tasks[taskIndex].finished = !this.tasks[taskIndex].finished;
    this.saveToLocalStorage();
  }

  @action.bound
  clearFinishedItems() {
    this.tasks = this.tasks.filter(task => !task.finished);
    this.saveToLocalStorage(this.tasks);
  }

  @action.bound
  resetTODO() {
    this.tasks = [];
    this.saveToLocalStorage(this.tasks);
  }

  /* eslint-disable class-methods-use-this */
  @action.bound
  saveToLocalStorage(tasks) {
    localStorage.setItem('stark-tasks', JSON.stringify(tasks));
  }
}

export default TaskStore;
