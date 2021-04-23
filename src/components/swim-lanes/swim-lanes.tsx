import { Component, Prop, h } from '@stencil/core';
import { SwimLaneItem, CardItem, UpdateCardStatus, RenderCardContent } from './swim-lane';

export type SwimLaneConfig = {
  lanes: SwimLaneItem[],
  cards: CardItem[],
}

@Component({
  tag: 'swim-lanes',
  styleUrl: 'index.css'
})
export class SwimLanes {

  @Prop() config: SwimLaneConfig;
  @Prop() updateCardStatus: UpdateCardStatus;
  @Prop() renderCardContent: RenderCardContent;

  _renderSwimlanes() {
    const { lanes, cards } = this.config;

    return lanes.map(lane => {
      return (
          <swim-lane
            renderCardContent={(card) => this.renderCardContent(card)}
            updateCardStatus={(newStatus) => this.updateCardStatus(newStatus)}
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
