import Component, { tracked } from '@glimmer/component';

export default class VideoSubmissionComponent extends Component {
  private file: File;
  
  @tracked private name = '';
  @tracked private email = '';
  @tracked private steps: {[p: string]: true} = {one: true};

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
    setTimeout(() => this.setStep('four'), 3000);
  }

  private uploadVideo() {
    //
  }
}
