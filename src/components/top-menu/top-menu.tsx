import { Component, Prop, h } from '@stencil/core';

export interface MenuItems {
  label: string,
  click: () => void
};

@Component({
  tag: 'top-menu',
  styleUrl: 'top-menu.css',
})
export class MyComponent {

  @Prop() items: MenuItems[];

  render() {
    return (
      <ul>
        {this.items.map(i => (
          <li onClick={i.click}>
            <a>{i.label}</a>
          </li>
        ))}
      </ul>
    );
  }
}
