import { NgrxTestA2Page } from './app.po';

describe('ngrx-test-a2 App', () => {
  let page: NgrxTestA2Page;

  beforeEach(() => {
    page = new NgrxTestA2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
