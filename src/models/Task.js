import { observable } from 'mobx';

export default class Task {
  @observable task;
  @observable finished;

  constructor(attribs) {
    Object.assign(this, attribs);
  }
}