import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'fc-button',
  styleUrl: 'fc-button.css',
})
export class FcButton {

  @Prop() color: string;

  render() {
    let classNames = "fc-button";
    if (this.color) {
      classNames += ` fc-button-${this.color}`;
    }

    return (
      <button class={classNames}>
        <slot></slot>
      </button>
    );
  }
}
