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
    // return window.fetch(uploadUrl, { method: 'POST', body: formdata });
    return new Promise((res, rej) => {
      const oReq = new XMLHttpRequest();
      const updateProgress = (oEvent) => {
        if (oEvent.lengthComputable) {
          console.log(oEvent);
          this.uploadProgress(oEvent.loaded / oEvent.total * 100);
          // ...
        }
      };

      oReq.upload.addEventListener('progress', updateProgress);
      oReq.addEventListener('load', transferComplete);
      oReq.addEventListener('error', transferFailed);
      oReq.addEventListener('abort', transferCanceled);

      oReq.open('POST', uploadUrl);
      oReq.send(formdata);

      // ...

      function transferComplete(evt) {
        console.log('transfer complete');
        res();
        teardown();
      }

      function transferFailed(evt) {
        console.log('transfer failed');
        rej(evt);
        teardown();
      }

      function transferCanceled(evt) {
        rej('The transfer has been canceled by the user.');
        teardown();
      }

      function teardown() {
        oReq.upload.removeEventListener('progress', updateProgress);
        oReq.removeEventListener('load', transferComplete);
        oReq.removeEventListener('error', transferFailed);
        oReq.removeEventListener('abort', transferCanceled);
      }
    });
  }

  private uploadProgress(percent: number) {
    console.log(percent);
  }
}
