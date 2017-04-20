import { RstntOrdersPage } from './app.po';

describe('rstnt-orders App', () => {
  let page: RstntOrdersPage;

  beforeEach(() => {
    page = new RstntOrdersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
