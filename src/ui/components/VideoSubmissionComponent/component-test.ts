import hbs from '@glimmer/inline-precompile';
import { setupRenderingTest } from '@glimmer/test-helpers';

const { module, test } = QUnit;

module('Component: VideoSubmissionComponent', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await this.render(hbs`<VideoSubmissionComponent />`);
    assert.ok(this.containerElement.querySelector('.video-submission'));
  });
});
