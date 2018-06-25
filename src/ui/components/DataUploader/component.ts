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
  @tracked private progress = 0;
  @tracked('progress') private get isUploading() {
    return this.progress < 100 && this.progress > 0;
  }

  private isFaking = false;

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
    return this.doXhrUpload(uploadUrl, formdata);
  }

  private doXhrUpload(url, formdata) {
    return new Promise((res, rej) => {
      const oReq = new XMLHttpRequest();
      const updateProgress = (oEvent) => {
        if (oEvent.lengthComputable) {
          this.uploadProgress(oEvent.loaded / oEvent.total * 100);
        } else {
          this.fakeUploadProgress();
        }
      };

      oReq.upload.addEventListener('progress', updateProgress);
      oReq.addEventListener('load', transferComplete);
      oReq.addEventListener('error', transferFailed);
      oReq.addEventListener('abort', transferCanceled);

      oReq.open('POST', url);
      oReq.send(formdata);

      function transferComplete(evt) {
        res();
        teardown();
      }

      function transferFailed(evt) {
        console.error('transfer failed'); // tslint:disable-line no-console
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
    this.progress = percent;
  }

  private fakeUploadProgress() {
    if (this.isFaking) { return; }
    this.isFaking = true;
    setInterval(() => {
      if (this.progress < 95) { this.progress++; }
    }, 1500);
  }
}
