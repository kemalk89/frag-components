import { Component, Prop, h, Element } from '@stencil/core';
import Sortable from 'sortablejs';

export type SwimLaneItem = {
  columnId: string,
  title: string,
}

export type CardItem = {
  id: string,
  title: string,
  columnId: string,
  type?: string
}

export type UpdateCardStatus = (newStatus: { cardId: string, newColumnId: string, position: number }) => void;
export type RenderCardContent = (card: CardItem) => void;

@Component({
  tag: 'swim-lane'
})
export class SwimLane {
  @Prop() columnId: string;
  @Prop() laneTitle: string;
  @Prop() cards: CardItem[];
  @Prop() updateCardStatus: UpdateCardStatus;
  @Prop() renderCardContent: RenderCardContent;

  @Element() el: HTMLElement;

  handleDragEnd(e: any) {
    const position = e.newIndex;
    const cardId = e.item.dataset.cardId;
    const newColumnId = e.to.dataset.swimLaneId;
    this.updateCardStatus({
      cardId,
      newColumnId,
      position
    });
  }

  componentDidRender() {
    const list = this.el.getElementsByClassName('swim-lane-cards')[0];
    Sortable.create(list as HTMLElement, {
      group: 'lanes',
      animation: 150,
      draggable: '.swim-lane-card',
      onEnd: (e) => {
        this.handleDragEnd(e);
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
          {filteredItems.length === 0 && (
            <p>No items</p>
          )}
          {filteredItems.map(item => (
            <div class="swim-lane-card"
              data-card-id={item.id}>
                {this.renderCardContent(item)}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
