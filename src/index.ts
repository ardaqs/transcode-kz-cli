import { readFileSync, writeFileSync } from 'fs';

import * as Message from './messages';
import { parseArgs } from './args';
import { Device, Format, params } from './params';
import { transcodeText, transcodeJson } from 'transcode-kz';

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

let direction = 'cyr2lat';
let srcText: string | undefined;
let dstText: string | undefined;

switch (params.device) {
  case Device.Console:
    srcText = params.source;
    break;
  case Device.File:
    if (!!params.source) {
      srcText = readFileSync(params.source, { encoding: 'utf8', flag: 'r' })
    }
    break;
}

if (srcText != undefined) {
  switch (params.format) {
    case Format.Text:
      dstText = transcodeText(srcText, direction);
      break;
    case Format.Json:
      dstText = transcodeJson(srcText, direction, params.indent);
      break;
  }
}

if (dstText != undefined) {
  switch (params.device) {
    case Device.Console:
      console.log(dstText);
      break;
    case Device.File:
      if (!!params.dest) {
        writeFileSync(params.dest, dstText, { encoding: 'utf8', flag: 'w', mode: 0o664 });
      } else {
        console.log(dstText);
      }
      break;
  }
}

console.log(Message.success);
