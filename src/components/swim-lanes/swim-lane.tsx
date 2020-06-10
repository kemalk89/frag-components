import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'swim-lane'
})
export class SwimLane {
  @Prop() statusId: number;
  @Prop() laneTitle: string;
  @Prop() tasks: any;

  render() {
    const filteredTasks = this.tasks.filter(t => {
      return t.statusId === this.statusId;
    });

    return (
      <div class="swim-lane">
        <p class="swim-lane-title">{this.laneTitle}</p>
        <div class="swim-lane-tasks">
          {filteredTasks.map(task => (
            <swim-lane-task task={task}></swim-lane-task>
          ))}
        </div>
      </div>
    );
  }
}
