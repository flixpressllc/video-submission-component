import Component, { tracked } from '@glimmer/component';
import { setText } from '../text-for/helper';

export default class WizardComponent extends Component {
  private file: File;
  private uploadUrl: string;
  private submitUrl: string;

  @tracked private accept = 'video/*';
  @tracked private steps: {[p: string]: true} = {};

  @tracked private fields = [
    {name: 'name', label: 'First Name', value: '', handler: this.updateField},
    {name: 'email', label: 'Email Address', value: '', handler: this.updateField},
  ];

  public updateField(name: string, ev: Event & { target: HTMLInputElement }) {
    this.fields = this.fields.map((f) => {
      if (f.name !== name) { return f; }
      const value = ev.target.value;
      this[name] = value;
      return Object.assign({}, f, {value});
    });
  }

  public async didInsertElement() {
    const {
      accept,
      uploadEndpoint,
      submitEndpoint,
    } = this.bounds.firstNode.parentElement.dataset;
    this.uploadUrl = uploadEndpoint;
    this.submitUrl = submitEndpoint;
    if (accept) { this.accept = accept; }
    await this.setText();
    setTimeout(() => this.setStep('one'));
  }

  private setStep(stepName: string) {
    const newStep = {};
    newStep[stepName] = true;
    this.steps = newStep;
  }

  private async setText() {
    const {text} = this.bounds.firstNode.parentElement.dataset;
    let bundle: string | object;
    if (typeof window[text] === 'function') {
      bundle = await window[text]();
    } else if (window[text].then && typeof window[text].then === 'function') {
      bundle = await window[text].then();
    } else {
      bundle = await window[text];
    }
    setText(bundle);
  }

  private handleFileChosen(file: File) {
    this.file = file;
    this.setStep('two');
  }

  private submitData() {
    this.setStep('three');
  }

  private handleDataUploaded() {
    this.setStep('four');
  }

}
