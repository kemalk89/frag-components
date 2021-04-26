import { Component, Host, h, Prop } from '@stencil/core';
import { IconClose } from '../icons/icon-close';

@Component({
  tag: 'fc-modal',
  styleUrl: 'fc-modal.css',
})
export class FcModal {
  @Prop() modalTitle;
  @Prop() actionButtons;

  render() {
    return (
      <Host>
        <div class="fc-modal">
          <div class="fc-modal-overlay"></div>
          <div class="fc-modal-content">
            <div class="fc-modal-title">
              <span class="fu-bold fu-text-lg">{this.modalTitle}</span>

              <IconClose />
            </div>
            <div class="fc-modal-body">
              <slot />
            </div>
            <div class="fc-modal-footer">
              {this.actionButtons.map(b => (
                <fc-button color={b.color}>{b.label}</fc-button>
              ))}
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
