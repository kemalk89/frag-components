import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'swim-lanes',
  styleUrl: 'index.css'
})
export class SwimLanes {

  @Prop() config: any;

  _renderSwimlanes() {
    const { lanes, cards, onUpdateCardStatus, renderCardContent } = this.config;

    return lanes.map(lane => {
      return (
          <swim-lane
            renderCardContent={renderCardContent}
            onUpdateCardStatus={onUpdateCardStatus}
            columnId={lane.columnId}
            laneTitle={lane.title}
            cards={cards}>
          </swim-lane>
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
