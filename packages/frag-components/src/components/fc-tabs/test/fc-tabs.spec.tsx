import { newSpecPage } from '@stencil/core/testing';
import { FcTabs } from '../fc-tabs';

describe('fc-tabs', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FcTabs],
      html: `<fc-tabs></fc-tabs>`,
    });
    expect(page.root).toEqualHtml(`
      <fc-tabs>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fc-tabs>
    `);
  });
});
