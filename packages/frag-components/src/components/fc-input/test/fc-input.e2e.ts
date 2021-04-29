import { newE2EPage } from '@stencil/core/testing';

describe('fc-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fc-input></fc-input>');

    const element = await page.find('fc-input');
    expect(element).toHaveClass('hydrated');
  });
});
