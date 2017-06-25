import { PcnewPage } from './app.po';

describe('pcnew App', () => {
  let page: PcnewPage;

  beforeEach(() => {
    page = new PcnewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
