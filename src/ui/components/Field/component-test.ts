import { setupRenderingTest } from '@glimmer/test-helpers';
import hbs from '@glimmer/inline-precompile';

const { module, test } = QUnit;

module('Component: Field', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await this.render(hbs`<Field />`);
    assert.ok(this.containerElement.querySelector('div'));
  });

  test('it shows a label', async function(assert) {
    await this.render(hbs`<Field @label="hi there" />`);
    assert.ok(this.containerElement.querySelector('div').textContent.match('hi there'));
  });

  test('it yields a dasherized, unique id', async function(assert) {
    await this.render(hbs`<Field @label="hi there" as |id|>{{id}}</Field>`);
    assert.ok(this.containerElement.querySelector('div').textContent.match(/hi-there-[\d]/));
  });
});
