import * as Message from './messages';
import { exitWithError } from './sysUtils';
import { Device, Format, options } from './options';

const [,, ...args] = process.argv;

function parseArgsCount() {
  if (args.length == 0) {
    exitWithError(Message.errUsage);
  }
}

function parseHelpArg() {
  if (args.includes('-h') || args.includes('--help')) {
    console.log(Message.man);
    process.exit(0);
  }
}

function parseDeviceArg() {
  let entry = args.find((value) => value.startsWith('-d') || value.startsWith('--device'));
  if (entry) {
    const parts = entry.split('=');
    if (parts.length == 2) {
      const lcValue = parts[1].toLowerCase();
      switch (lcValue) {
        case 'console': 
          options.device = Device.Console;
          break;
        case 'file': 
          options.device = Device.File;
          break;
        default:
          exitWithError(Message.errWrongArgs);
      }
    } else {
      exitWithError(Message.errWrongArgs);
    }
  }
}

function parseFormatArg() {
  let entry = args.find((value) => value.startsWith('-f') || value.startsWith('--format'));
  if (entry) {
    const parts = entry.split('=');
    if (parts.length == 2) {
      const lcValue = parts[1].toLowerCase();
      switch (lcValue) {
        case 'text': 
          options.format = Format.Text;
          break;
        case 'json': 
          options.format = Format.Json;
          break;
        default:
          exitWithError(Message.errWrongArgs);
      }
    } else {
      exitWithError(Message.errWrongArgs);
    }
  }
}

export const parseArgs = () => {
  parseArgsCount();
  parseHelpArg();

  parseDeviceArg();
  parseFormatArg();
}
