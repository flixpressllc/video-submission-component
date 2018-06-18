import Component, { tracked } from '@glimmer/component';
import { setI18nLanguage } from '../i18n/helper';

export default class VideoSubmissionComponent extends Component {
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

  public didInsertElement() {
    const {
      accept,
      uploadEndpoint,
      submitEndpoint,
      language,
    } = this.bounds.firstNode.parentElement.dataset;
    this.uploadUrl = uploadEndpoint;
    this.submitUrl = submitEndpoint;
    if (accept) { this.accept = accept; }
    setI18nLanguage(language || 'english');
    setTimeout(() => this.setStep('one'));
  }

  private setStep(stepName: string) {
    const newStep = {};
    newStep[stepName] = true;
    this.steps = newStep;
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
