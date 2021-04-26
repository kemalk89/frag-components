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
      { label: 'Tasks', active: true, click: () => console.log(1) },
      { label: 'Projects', click: () => console.log(2) },
      { label: 'Timebookings', click: () => console.log(3) },
      { label: 'Controlling', click: () => console.log(4) },
      { label: 'Wiki', click: () => console.log(4) },
      { label: '', click: () => console.log(4) },
    ];

    return (
      <Fragment>
        <header>
          <top-menu items={menuItems} />
        </header>

        <main>
          <swim-lanes
            config={this.swimLanesConfig}
            renderCardContent={(card) => this.renderCardContent(card)}
            updateCardStatus={(newStatus) => this.updateCardStatus(newStatus)} />
        </main>
      </Fragment>
    );
  }
}
