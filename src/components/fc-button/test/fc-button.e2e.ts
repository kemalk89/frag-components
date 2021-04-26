import { newE2EPage } from '@stencil/core/testing';

describe('fc-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fc-button></fc-button>');

    const element = await page.find('fc-button');
    expect(element).toHaveClass('hydrated');
  });
});
