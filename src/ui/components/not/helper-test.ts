import not from './helper';

const { module, test } = QUnit;

module('Helper: not', function(hooks) {
  test('it returns undefined as true', function(assert) {
    assert.equal(not([]), true);
  });

  test('it returns false as true', function(assert) {
    assert.equal(not([false]), true);
  });

  test('it returns a string as false', function(assert) {
    assert.equal(not(['s']), false);
  });

  test('it returns an empty string as true', function(assert) {
    assert.equal(not(['']), true);
  });

  test('it returns a zero as true', function(assert) {
    assert.equal(not([0]), true);
  });

  test('it returns a -1 as false', function(assert) {
    assert.equal(not([-1]), false);
  });
});
