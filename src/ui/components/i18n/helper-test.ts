import i18n from './helper';

const { module, test } = QUnit;

module('Helper: i18n', function(hooks) {
  test('it computes', function(assert) {
    assert.equal(i18n([]), undefined);
  });
});
