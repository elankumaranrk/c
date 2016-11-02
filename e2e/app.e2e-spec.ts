import { KumaranGrePage } from './app.po';

describe('kumaran-gre App', function() {
  let page: KumaranGrePage;

  beforeEach(() => {
    page = new KumaranGrePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
