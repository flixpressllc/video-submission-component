import Component, { tracked } from '@glimmer/component';
import i18n from '../i18n/helper';

interface IArgs {
  uploadUrl: string;
  file: File;
  name: string;
  email: string;
  onComplete: () => void;
}

export default class DataUploader extends Component {
  @tracked private message = i18n('message.uploading');

  public didInsertElement() {
    this.uploadVideoAndData()
    .then(this.args.onComplete)
    .catch(() => {
      this.message = i18n('message.upload_failure');
    });
  }

  private uploadVideoAndData() {
    const {uploadUrl, file, name: firstName, email}: IArgs = this.args;
    const formdata = new FormData();
    const data = JSON.stringify({email, firstName});
    formdata.append('files', file);
    formdata.append('submission', data);
    return window.fetch(uploadUrl, { method: 'POST', body: formdata });
  }
}
