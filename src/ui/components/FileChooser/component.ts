import Component from '@glimmer/component';

export default class FileChooser extends Component {
  private fileChanged(ev: Event & {target: HTMLInputElement}) {
    const file = ev.target.files[0];
    this.args.onFileChosen(file);
  }
}
