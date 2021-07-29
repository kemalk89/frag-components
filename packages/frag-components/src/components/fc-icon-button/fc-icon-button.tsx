import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'fc-icon-button',
  styleUrl: 'fc-icon-button.css',
  shadow: true,
})
export class FcIconButton {
  @Prop() color: string = 'secondary';

  render() {
    let classNames = "";
    if (this.color) {
      classNames += this.color;
    }

    return (
      <button class={classNames}>
        <slot></slot>
      </button>
    );
  }

}
