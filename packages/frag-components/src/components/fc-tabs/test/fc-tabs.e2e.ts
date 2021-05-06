import { newE2EPage } from '@stencil/core/testing';

describe('fc-tabs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fc-tabs></fc-tabs>');

    const element = await page.find('fc-tabs');
    expect(element).toHaveClass('hydrated');
  });
});
