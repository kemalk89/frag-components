import { newE2EPage } from '@stencil/core/testing';

describe('fc-icon-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fc-icon-button></fc-icon-button>');

    const element = await page.find('fc-icon-button');
    expect(element).toHaveClass('hydrated');
  });
});
