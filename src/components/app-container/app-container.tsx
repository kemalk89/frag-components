import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-container',
})
export class MyComponent {

  render() {
    const menuItems = [
      { label: 'Home', click: () => console.log(1) },
      { label: 'Kontakt', click: () => console.log(2) },
      { label: 'Über uns', click: () => console.log(3) },
      { label: 'Impressum', click: () => console.log(4) },
    ];

    return (
      <top-menu items={menuItems} />
    );
  }
}
