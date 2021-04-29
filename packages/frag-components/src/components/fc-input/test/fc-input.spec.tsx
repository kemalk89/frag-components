import { newSpecPage } from '@stencil/core/testing';
import { FcInput } from '../fc-input';

describe('fc-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FcInput],
      html: `<fc-input></fc-input>`,
    });
    expect(page.root).toEqualHtml(`
      <fc-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fc-input>
    `);
  });
});
