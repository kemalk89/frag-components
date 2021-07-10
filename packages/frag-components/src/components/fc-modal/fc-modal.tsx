import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';
import { IconClose } from '../icons/icon-close';

export type ActionButton = {
  click: (e: MouseEvent) => void,
  color?: string,
  label?: string
}; 

@Component({
  tag: 'fc-modal',
  styleUrl: 'fc-modal.css',
})
export class FcModal {
  @Prop() isOpen: boolean;
  @Prop() modalTitle: string;
  @Prop() actionButtons: ActionButton[] = [];
  @Event() closeModal: EventEmitter<void>;

  render() {
    return (
      <div class={this.isOpen ? "fc-modal fc-modal-show" : "fc-modal"}>
        <div class={this.isOpen ? "fc-modal-overlay fc-modal-overlay-fade-in" : "fc-modal-overlay"}></div>
        <div class="fc-modal-content">
          <div class="fc-modal-title">
            <span class="fu-bold fu-text-lg">{this.modalTitle}</span>

            <button class="fc-modal-title-close-btn" onClick={() => this.closeModal.emit() }>
              <IconClose />
            </button>
          </div>
          <div class="fc-modal-body">
            <slot />
          </div>
          <div class="fc-modal-footer">
            {this.actionButtons.map(b => (
              <fc-button onClick={b.click} color={b.color}>{b.label}</fc-button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
