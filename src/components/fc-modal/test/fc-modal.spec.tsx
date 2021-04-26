import { newSpecPage } from '@stencil/core/testing';
import { FcModal } from '../fc-modal';

describe('fc-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FcModal],
      html: `<fc-modal></fc-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <fc-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fc-modal>
    `);
  });
});
