import keyBy from './helper';

const { module, test } = QUnit;

module('Helper: key-by', function(hooks) {
  test('it computes', function(assert) {
    assert.deepEqual(keyBy(['name',
      [
        {name: 'name', label: 'First Name', value: 'Don'},
        {name: 'email', label: 'Email Address', value: 'don@email.com'},
      ]
    ]), {
      email: {name: 'email', label: 'Email Address', value: 'don@email.com'},
      name: {name: 'name', label: 'First Name', value: 'Don'},
    });
  });
});
