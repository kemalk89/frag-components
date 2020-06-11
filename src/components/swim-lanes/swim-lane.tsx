import { Component, Prop, h, Element } from '@stencil/core';
import Sortable from 'sortablejs';

@Component({
  tag: 'swim-lane'
})
export class SwimLane {
  @Prop() columnId: number;
  @Prop() laneTitle: string;
  @Prop() cards: any;
  @Prop() onUpdateCardStatus: any;
  @Prop() renderCardContent: any;

  @Element() el: HTMLElement;

  componentDidRender() {
    const list = this.el.getElementsByClassName('swim-lane-cards')[0];
    Sortable.create(list as HTMLElement, {
      group: 'lanes',
      animation: 150,
      draggable: '.swim-lane-card',
      onEnd: (e) => {
        const position = e.newIndex;
        const cardId = parseInt(e.item.dataset.cardId);
        const newColumnId = parseInt(e.to.dataset.swimLaneId);
        console.log(cardId, newColumnId, position);
        this.onUpdateCardStatus({
          cardId,
          newColumnId,
          position
        });
      }
    });

  }

  render() {
    const filteredItems = this.cards.filter(t => {
      return t.columnId === this.columnId;
    });

    return (
      <div class="swim-lane">
        <p class="swim-lane-title">{this.laneTitle}</p>
        <div class="swim-lane-cards" data-swim-lane-id={this.columnId}>
          {filteredItems.map(item => (
            <div class="swim-lane-card"
              innerHTML={this.renderCardContent(item)}
              data-card-id={item.id}>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
