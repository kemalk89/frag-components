import { newSpecPage } from '@stencil/core/testing';
import { FcIconButton } from '../fc-icon-button';

describe('fc-icon-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FcIconButton],
      html: `<fc-icon-button></fc-icon-button>`,
    });
    expect(page.root).toEqualHtml(`
      <fc-icon-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fc-icon-button>
    `);
  });
});
