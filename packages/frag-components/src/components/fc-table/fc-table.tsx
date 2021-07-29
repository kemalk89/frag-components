import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'fc-table',
  styleUrl: 'fc-table.css',
  shadow: true,
})
export class FcTable {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
