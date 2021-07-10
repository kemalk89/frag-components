import { FcButton, FcInput, FcModal, FcSwimLane, FcSwimLanes, FcTab, FcTabs, FcTopMenu } from "frag-components";
import "frag-components/dist/frag-components/frag-components.css";

window.addEventListener('load', () => {

  customElements.define('fc-tab', FcTab);
  customElements.define('fc-tabs', FcTabs);
  customElements.define('fc-button', FcButton);
  customElements.define('fc-modal', FcModal);
  customElements.define('fc-top-menu', FcTopMenu);
  customElements.define('fc-input', FcInput);
  customElements.define('fc-swim-lanes', FcSwimLanes);
  customElements.define('fc-swim-lane', FcSwimLane);

  // Modal
  const modal = document.querySelector('fc-modal');
  modal.actionButtons = [
    { label: 'Save', color: 'primary' },
    { label: 'Cancel', click: () => { modal.isOpen = false; } },
  ];
  modal.addEventListener('closeModal', () => {
    modal.isOpen = false;
  });

  // Tabs
  const tabs = document.querySelector('#tabs');
  tabs.tabs = [
    { label: 'Board', tab: 'board' },
    { label: 'List', tab: 'list' },
    { label: 'Workload', tab: 'workload' },
  ];

  // New Task button
  const newTaskBtn = document.querySelector('#newTaskBtn');
  newTaskBtn.addEventListener('click', (e) => {
    modal.isOpen = true;
  });

  // Top Menu
  const topMenu = document.querySelector('fc-top-menu');
  topMenu.items = [
    { label: 'Tasks', active: true, click: () => console.log(1) },
    { label: 'Projects', click: () => console.log(2) },
    { label: 'Timebookings', click: () => console.log(3) },
    { label: 'Controlling', click: () => console.log(4) },
    { label: 'Wiki', click: () => console.log(4) },
    { label: '', click: () => console.log(4) },
  ];

  // Swim Lanes
  const swimLanes = document.querySelector('fc-swim-lanes');

  swimLanes.lanes = [
    { columnId: '1', title: 'TODO' },
    { columnId: '2', title: 'In Progress' },
    { columnId: '3', title: 'Test' },
    { columnId: '4', title: 'Review' },
  ];

  swimLanes.cards = [
    { id: '1', columnId: '1', title: 'Feature XY implementieren' }
  ];

  swimLanes.updateCardStatus = ({ cardId, newColumnId }) => {
    setTimeout(() => {
      const found = swimLanes.cards.filter(i => {
        return i.id === cardId;
      })[0];

      if (found) {
        const updated = swimLanes.cards.map(i => {
          if (i.id === found.id) {
            i.columnId = newColumnId;
          }

          return i;
        });

        swimLanes.cards = updated;
      }
    });
  };

  swimLanes.renderCardContent = (card) => {
    const tpl = `
      <div>
        <h4>${card.title}</h4>
      </div>
    `;

    return tpl;
  };

});
