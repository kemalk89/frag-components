import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'fc-toast',
  styleUrl: 'fc-toast.css',
  shadow: true,
})
export class FcToast {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
