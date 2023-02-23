export const exitWithError = (message: string) => {
  console.error(message);
  process.exit(1);
}
