describe("E2E: Testing Routes", function() {

  beforeEach(function() {
    browser().navigateTo('/');
  });

  it('should have a working /#/ route', function() {
    expect(browser().location().path()).toBe("/");
  });

});