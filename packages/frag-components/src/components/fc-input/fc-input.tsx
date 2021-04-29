import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'fc-input',
  styleUrl: 'fc-input.css',
})
export class FcInput {

  @Prop() label;

  render() {
    return (
      <label class="fc-input-label">
        {this.label}
        <input class="fc-input" /> 
      </label>
    );
  }

}
