import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'swim-lanes',
  styleUrl: 'index.css'
})
export class SwimLanes {

  @Prop() config: any;

  _renderSwimlanes() {
    const { lanes, tasks } = this.config;

    return lanes.map((lane) => {
      return (
        <swim-lane
          statusId={lane.statusId}
          laneTitle={lane.title}
          tasks={tasks}></swim-lane>
        );
    });
  }

  render() {
    return (
      <div class="swim-lanes">
        {this._renderSwimlanes()}
      </div>
    );
  }
}
