export enum Device { Console, File }
export enum Format { Text, Json }

export interface Params {
  device: Device;
  format: Format;
  indent: number;
  source: string|undefined;
  dest: string|undefined;
}

export let params: Params = {
  device: Device.Console,
  format: Format.Text,
  indent: 2,
  source: undefined,
  dest: undefined
}
