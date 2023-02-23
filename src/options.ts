export enum Device { Console, File }
export enum Format { Text, Json }

export interface Options {
  device: Device;
  format: Format;
  src: string|undefined;
  dst: string|undefined;
}

export let options: Options = {
  device: Device.Console,
  format: Format.Text,
  src: undefined,
  dst: undefined
}
