import { newSpecPage } from '@stencil/core/testing';
import { FcSelect } from '../fc-select';

describe('fc-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FcSelect],
      html: `<fc-select></fc-select>`,
    });
    expect(page.root).toEqualHtml(`
      <fc-select>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fc-select>
    `);
  });
});
