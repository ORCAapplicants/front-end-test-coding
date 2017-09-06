import { APPLICANTPROJECTPage } from './app.po';

describe('applicant-project App', () => {
  let page: APPLICANTPROJECTPage;

  beforeEach(() => {
    page = new APPLICANTPROJECTPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
