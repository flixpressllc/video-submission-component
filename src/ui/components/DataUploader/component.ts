import Component, { tracked } from '@glimmer/component';
import textFor from '../text-for/helper';

interface IArgs {
  uploadUrl: string;
  fields: Array<{name: string, value: string}>;
  file: File;
  onComplete: () => void;
}

export default class DataUploader extends Component {
  @tracked private message = textFor('message.uploading');

  public didInsertElement() {
    if (!this.args.fields) { return; }
    this.uploadVideoAndData()
    .then(this.args.onComplete)
    .catch(() => {
      this.message = textFor('message.upload_failure');
    });
  }

  private uploadVideoAndData() {
    const {uploadUrl, file, fields}: IArgs = this.args;
    const formdata = new FormData();

    const data = {};
    fields.forEach((field) => {
      data[field.name] = field.value;
    });
    formdata.append('submission', JSON.stringify(data));

    formdata.append('files', file);

    return window.fetch(uploadUrl, { method: 'POST', body: formdata });
  }
}
