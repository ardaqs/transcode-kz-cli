import * as Message from './messages';
import { parseArgs } from './args';
import { Device, Format, params } from './params';

import { transcode } from 'transcode-kz';

function showInfo() {
  let device = '';
  switch (params.device) {
    case Device.File:
      device = 'file';
      break;
    default:
      device = 'console';
  }

  let format = '';
  switch (params.format) {
    case Format.Json:
      format = 'JSON';
      break;
    default:
      format = 'plain text';
  }

  let message = `\u001b[2mTranscoding ${format} from ${device}...\u001b[0m`;

  console.log(message);
}

parseArgs();
showInfo();

let srcText: string | undefined;
let dstText: string | undefined;

let direction = 'cyr2lat';
let parseJson = false;

switch (params.device) {
  case Device.Console:
    srcText = params.source;
    break;
  case Device.File:

    break;
}

switch (params.format) {
  case Format.Text:
    break;
  case Format.Json:
    parseJson = true;
    break;
}

if (srcText) {
  dstText = transcode(srcText, direction, parseJson);
}

if (params.device == Device.Console && dstText) {
  console.log(dstText);
}

console.log(Message.success);
