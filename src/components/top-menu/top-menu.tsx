import { Component, Prop, h } from '@stencil/core';

export interface MenuItems {
  label: string,
  click: () => void,
  active?: boolean,
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
          <li class={i.active && 'top-menu-active'} onClick={i.click}>
            <a>{i.label}</a>
          </li>
        ))}
      </ul>
    );
  }
}
