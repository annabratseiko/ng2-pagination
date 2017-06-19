import { PaginationPage } from './app.po';

describe('pagination App', () => {
  let page: PaginationPage;

  beforeEach(() => {
    page = new PaginationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
