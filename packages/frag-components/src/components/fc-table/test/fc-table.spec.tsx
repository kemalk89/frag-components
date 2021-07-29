import { newSpecPage } from '@stencil/core/testing';
import { FcTable } from '../fc-table';

describe('fc-table', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FcTable],
      html: `<fc-table></fc-table>`,
    });
    expect(page.root).toEqualHtml(`
      <fc-table>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fc-table>
    `);
  });
});
