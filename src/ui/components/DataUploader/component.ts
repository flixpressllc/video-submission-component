import Component, { tracked } from '@glimmer/component';
import i18n from '../i18n/helper';

interface IArgs {
  uploadUrl: string;
  submitUrl: string;
  file: File;
  name: string;
  email: string;
  onComplete: () => void;
}

export default class DataUploader extends Component {
  @tracked private message = i18n('message.uploading');

  public didInsertElement() {
    this.uploadVideo()
    .then(this.submitData)
    .then(this.args.onComplete)
    .catch(() => {
      this.message = i18n('message.upload_failure');
    });
  }

  private uploadVideo() {
    const {uploadUrl, file}: IArgs = this.args;
    const formdata = new FormData();
    formdata.append('video', file);
    return window.fetch(uploadUrl, { method: 'POST', body: formdata });
  }

  private async submitData(uploadResponse: Response) {
    const {name, email, submitUrl}: IArgs = this.args;
    const videoUrl = (await uploadResponse.json()).videoUrl;
    return window.fetch(this.args.submitUrl, { method: 'POST', body: JSON.stringify({name, email, videoUrl}) });
  }
}
