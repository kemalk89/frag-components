import { newSpecPage } from '@stencil/core/testing';
import { FcToast } from '../fc-toast';

describe('fc-toast', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FcToast],
      html: `<fc-toast></fc-toast>`,
    });
    expect(page.root).toEqualHtml(`
      <fc-toast>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fc-toast>
    `);
  });
});
