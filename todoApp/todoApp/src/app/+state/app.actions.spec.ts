import * as fromApp from './app.actions';

describe('loadApps', () => {
  it('should return an action', () => {
    expect(fromApp.loadBooks().type).toBe('[App] Load Apps');
  });
});
