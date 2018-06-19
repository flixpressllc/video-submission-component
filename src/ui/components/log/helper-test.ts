import log from './helper';

const { module, test } = QUnit;

module('Helper: log', function(hooks) {
  test('it computes', function(assert) {
    assert.equal(log([]), undefined);
  });
});
