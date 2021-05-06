import { newSpecPage } from '@stencil/core/testing';
import { FcTab } from '../fc-tab';

describe('fc-tab', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FcTab],
      html: `<fc-tab></fc-tab>`,
    });
    expect(page.root).toEqualHtml(`
      <fc-tab>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fc-tab>
    `);
  });
});
