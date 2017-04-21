import { UdemyAngularPage } from './app.po';

describe('udemy-angular App', () => {
  let page: UdemyAngularPage;

  beforeEach(() => {
    page = new UdemyAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
