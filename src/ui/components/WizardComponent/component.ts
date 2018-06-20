import Component, { tracked } from '@glimmer/component';
import { setText } from '../text-for/helper';

export default class WizardComponent extends Component {
  private file: File;
  private uploadUrl: string;
  private submitUrl: string;

  @tracked private name = '';
  @tracked private email = '';
  @tracked private accept = 'video/*';
  @tracked private steps: {[p: string]: true} = {};

  @tracked('name') get noName() { return this.name === ''; }
  @tracked('email') get noEmail() { return this.email === ''; }
  @tracked('noName') get hasName() { return !this.noName; }
  @tracked('noEmail') get hasEmail() { return !this.noEmail; }

  @tracked('name', 'email') get fields() {
    return [
      {name: 'name', label: 'First Name', value: this.name, handler: this.nameChanged},
      {name: 'email', label: 'Email Address', value: this.email, handler: this.emailChanged},
    ];
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

  private nameChanged(ev: Event & {target: HTMLInputElement}) {
    this.name = ev.target.value;
  }

  private emailChanged(ev: Event & { target: HTMLInputElement }) {
    this.email = ev.target.value;
  }

  private submitData() {
    this.setStep('three');
  }

  private handleDataUploaded() {
    this.setStep('four');
  }

}
