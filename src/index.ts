import { readFileSync, writeFileSync } from 'fs';

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

let direction = 'cyr2lat';
let parseJson = false;

switch (params.format) {
  case Format.Text:
    break;
  case Format.Json:
    parseJson = true;
    break;
}

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
  dstText = transcode(srcText, direction, parseJson, params.indent);
}

if (dstText != undefined) {
  if (params.device == Device.Console) {
    console.log(dstText);
  } else if (params.device == Device.File) {
    if (!!params.dest) {
      writeFileSync(params.dest, dstText, { encoding: 'utf8', flag: 'w', mode: 0o664 });
    }
  }
}

console.log(Message.success);
