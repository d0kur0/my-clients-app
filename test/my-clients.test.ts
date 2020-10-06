import { html, fixture, expect } from '@open-wc/testing';

import { MyClients } from '../src/MyClients.js';
import '../src/my-clients.js';

describe('MyClients', () => {
  let element: MyClients;
  beforeEach(async () => {
    element = await fixture(html`
      <my-clients></my-clients>
    `);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
