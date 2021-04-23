import { Component, Fragment, h, State } from '@stencil/core';
import { CardItem } from '../swim-lanes/swim-lane';
import { SwimLaneConfig } from '../swim-lanes/swim-lanes';
import { MyAPI } from './my-api';
@Component({
  tag: 'app-container',
})
export class MyComponent {

  @State() swimLanesConfig: SwimLaneConfig;

  connectedCallback() {
    MyAPI.fetchBoard().then((result) => {
      this.swimLanesConfig = result;
    });
  }

  renderCardContent(item: CardItem) {
    return (
      <div>
        <h4>{item.title}</h4>
      </div>
    );
  }

  updateCardStatus({ cardId, newColumnId }) {
    console.log(this.swimLanesConfig.cards)

    const found = this.swimLanesConfig.cards.filter(i => {
      return i.id === cardId;
    })[0];

    found.columnId= newColumnId;

    MyAPI.saveBoard(this.swimLanesConfig);
  }

  render() {
    const menuItems = [
      { label: 'Home', click: () => console.log(1) },
      { label: 'Kontakt', click: () => console.log(2) },
      { label: 'Über uns', click: () => console.log(3) },
      { label: 'Impressum', click: () => console.log(4) },
    ];

    return (
      <Fragment>
        <top-menu items={menuItems} />
        <swim-lanes
          config={this.swimLanesConfig}
          renderCardContent={(card) => this.renderCardContent(card)}
          updateCardStatus={(newStatus) => this.updateCardStatus(newStatus)} />
      </Fragment>
    );
  }
}
