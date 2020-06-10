import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'swim-lane-task'
})
export class SwimLane {
  @Prop() task: any;

  render() {
    return (
      <div class="swim-lane-task">
        {this.task.title}
      </div>
    );
  }
}
