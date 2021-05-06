import { Component, h, Prop, Element, Fragment } from '@stencil/core';

export type Tab = {
  tab: string;
  label: string;
  active: boolean;
};

@Component({
  tag: 'fc-tabs',
  styleUrl: 'fc-tabs.css',
})
export class FcTabs {
  @Element() el: HTMLElement;
  @Prop() tabs: Tab[];
  @Prop({ mutable: true }) selectedTab: string;

  private selectTab(tab: Tab) {
    this.selectedTab = tab.tab;
  }

  private renderTab(tab: Tab) {
    if (!this.selectedTab) {
      this.selectedTab = this.tabs[0].tab;
    }

    return (
      <div
        class={{
          'fc-tab': true,
          'fu-bold': true,
          'fc-tab-active': this.selectedTab === tab.tab,
        }}
      >
        <fc-button onClick={() => this.selectTab(tab)} color="none">
          {tab.label}
        </fc-button>
      </div>
    );
  }

  private showTabContent() {
    const contentElements = this.el.querySelectorAll('fc-tab');
    contentElements.forEach(e => {
      if (e.tab === this.selectedTab) {
        e.classList.remove('fu-hidden');
      } else if (!e.classList.contains('fu-hidden')) {
        e.classList.add('fu-hidden');
      }
    });
  }

  componentDidUpdate() {
    this.showTabContent();
  }

  componentDidLoad() {
    this.showTabContent();
  }

  render() {
    return (
      <Fragment>
        <div class="fu-flex fc-tabs">{this.tabs.map(i => this.renderTab(i))}</div>

        <div class="fu-pt"></div>

        <slot></slot>
      </Fragment>
    );
  }
}
