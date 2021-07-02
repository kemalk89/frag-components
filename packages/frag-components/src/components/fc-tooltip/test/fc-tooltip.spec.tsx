import { newSpecPage } from '@stencil/core/testing';
import { FcTooltip } from '../fc-tooltip';

describe('fc-tooltip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FcTooltip],
      html: `<fc-tooltip></fc-tooltip>`,
    });
    expect(page.root).toEqualHtml(`
      <fc-tooltip>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fc-tooltip>
    `);
  });
});
