import { Component, Prop, h } from '@stencil/core';
import { SwimLaneItem, CardItem, UpdateCardStatus, RenderCardContent } from './fc-swim-lane';

@Component({
  tag: 'fc-swim-lanes',
  styleUrl: 'fc-swim-lanes.css'
})
export class FcSwimLanes {

  @Prop() lanes: SwimLaneItem[];
  @Prop() cards: CardItem[];
  @Prop() updateCardStatus: UpdateCardStatus;
  @Prop() renderCardContent: RenderCardContent;

  _renderSwimlanes() {
    return this.lanes.map(lane => {
      return (
          <fc-swim-lane
            renderCardContent={(card) => this.renderCardContent(card)}
            updateCardStatus={(newStatus) => this.updateCardStatus(newStatus)}
            columnId={lane.columnId}
            laneTitle={lane.title}
            cards={this.cards}>
          </fc-swim-lane> 
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
