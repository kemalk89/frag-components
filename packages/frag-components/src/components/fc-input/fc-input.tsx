import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'fc-input',
  styleUrl: 'fc-input.css',
})
export class FcInput {
  @Prop() name;
  @Prop() label;
  @Prop({ mutable: true }) value;
  @Event() inputChange: EventEmitter<any>;

  private handleChange = (ev: any) => {
    this.value = ev.target.value;
    this.inputChange.emit(ev);
  };

  render() {
    return (
      <label class="fc-input-label">
        {this.label}
        <input name={this.name} class="fc-input" value={this.value} onChange={this.handleChange} />
      </label>
    );
  }
}
