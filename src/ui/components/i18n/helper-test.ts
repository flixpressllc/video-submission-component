import i18n from './helper';

const { module, test } = QUnit;

module('Helper: i18n', function(hooks) {
  test('it returns the given string if the lookup cannot be found', function(assert) {
    assert.equal(i18n(['anything.else']), 'anything.else');
  });
});
