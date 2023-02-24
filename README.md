# transcode-kz-cli

:kazakhstan: A command line utility for transcoding Kazakh between Cyrillic and Latin encodings.

## Usage examples

Read a plain text from command argument and write the output to the console:

```console
npx transcode-kz-cli "Қазақша мәтін"
```

Read a JSON from command argument and write the output to the console:

```console
npx transcode-kz-cli --format=json "{ \"city\": \"Қала\" }"
```

Read plain text from a file and write the output to another file:

```console
npx transcode-kz-cli --device=file cyr.txt lat.txt
```

Read JSON from a file and write the output to another file:

```console
npx transcode-kz-cli --device=file --format=json --indent=4 cyr.json lat.json
```

### Install globally (optional)

```console
npm install -g transcode-kz-cli
```

## Dependencies

* [transcode-kz](https://www.npmjs.com/package/transcode-kz)

## License

[LICENSE (MIT)](LICENSE)
