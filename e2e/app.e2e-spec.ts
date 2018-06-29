import { UIDashboardPage } from './app.po';

describe('uidashboard App', function() {
  let page: UIDashboardPage;

  beforeEach(() => {
    page = new UIDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
