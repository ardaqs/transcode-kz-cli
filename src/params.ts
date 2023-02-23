export enum Device { Console, File }
export enum Format { Text, Json }

export interface Params {
  device: Device;
  format: Format;
  source: string|undefined;
  dest: string|undefined;
}

export let params: Params = {
  device: Device.Console,
  format: Format.Text,
  source: undefined,
  dest: undefined
}
