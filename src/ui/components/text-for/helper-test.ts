import textFor, { setText } from './helper';

const { module, test } = QUnit;

module('Helper: textFor', function(hooks) {
  test('allows for a text bundle to NOT be set', function(assert) {
    assert.equal(textFor(['test']), '');
  });

  test('it returns a string at the root of the object', function(assert) {
    setText({ test: 'did it' });
    assert.equal(textFor(['test']), 'did it');
  });

  test('it returns a string nested in the object', function(assert) {
    setText({ test: { nested: 'did it' } });
    assert.equal(textFor(['test.nested']), 'did it');
  });

  test('it returns an empty string if the text is not found', function(assert) {
    setText({ test: { nested: 'did it' } });
    assert.equal(textFor(['test.nothing']), '');
  });
});
