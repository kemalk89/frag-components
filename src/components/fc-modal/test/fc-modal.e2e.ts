import { newE2EPage } from '@stencil/core/testing';

describe('fc-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fc-modal></fc-modal>');

    const element = await page.find('fc-modal');
    expect(element).toHaveClass('hydrated');
  });
});
