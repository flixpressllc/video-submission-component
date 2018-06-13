import Component, { tracked } from '@glimmer/component';
import { setI18nLanguage } from '../i18n/helper';

export default class VideoSubmissionComponent extends Component {
  private file: File;
  private uploadUrl: string;
  private submitUrl: string;

  @tracked private name = '';
  @tracked private email = '';
  @tracked private steps: {[p: string]: true} = {one: true};

  @tracked('name') get noName() { return this.name === ''; }
  @tracked('email') get noEmail() { return this.email === ''; }

  public didInsertElement() {
    setTimeout(() => {
      // inside the timeout, bounds.firstNode is different than in the method
      // it actually points to the root web-component
      // this is bizarre
      // I assume it has something to do with being invoked as a web-component
      // perhaps glimmer adds the webcomponent into the root component?
      this.uploadUrl = (this.bounds.firstNode as HTMLElement).dataset.uploadEndpoint;
      this.submitUrl = (this.bounds.firstNode as HTMLElement).dataset.submitEndpoint;
      setI18nLanguage((this.bounds.firstNode as HTMLElement).dataset.language);
    }, 0);
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
