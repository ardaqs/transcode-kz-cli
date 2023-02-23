import * as Message from './messages';
import { parseArgs } from './args';
import { Device, Format, options } from './options';

function showInfo() {
  let device = '';
  switch (options.device) {
    case Device.File:
      device = 'file';
      break;
    default:
      device = 'console';
  }

  let format = '';
  switch (options.format) {
    case Format.Json:
      format = 'JSON';
      break;
    default:
      format = 'plain text';
  }

  let message = `Transcoding ${format} from ${device}...`;

  console.log(message);
}

parseArgs();
showInfo();

console.log(Message.success);
