import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'fc-tab',
  styleUrl: 'fc-tab.css',
})
export class FcTab {

  @Prop() tab: string;

  render() {
    return (
      <Host class="fu-hidden">
        <slot></slot>
      </Host>
    );
  }

}
