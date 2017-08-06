import { FamilyTreePage } from './app.po';

describe('family-tree App', () => {
  let page: FamilyTreePage;

  beforeEach(() => {
    page = new FamilyTreePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
