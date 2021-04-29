import { newSpecPage } from '@stencil/core/testing';
import { FcButton } from '../fc-button';

describe('fc-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FcButton],
      html: `<fc-button></fc-button>`,
    });
    expect(page.root).toEqualHtml(`
      <fc-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fc-button>
    `);
  });
});
