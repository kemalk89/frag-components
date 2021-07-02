import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'fc-tooltip',
  styleUrl: 'fc-tooltip.css',
  shadow: true,
})
export class FcTooltip {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
