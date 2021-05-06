import { newE2EPage } from '@stencil/core/testing';

describe('fc-tab', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fc-tab></fc-tab>');

    const element = await page.find('fc-tab');
    expect(element).toHaveClass('hydrated');
  });
});
