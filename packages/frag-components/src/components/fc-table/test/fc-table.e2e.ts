import { newE2EPage } from '@stencil/core/testing';

describe('fc-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fc-table></fc-table>');

    const element = await page.find('fc-table');
    expect(element).toHaveClass('hydrated');
  });
});
