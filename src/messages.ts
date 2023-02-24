export const man = `\u001b[1mNAME\u001b[0m
    transcode-kz-cli - transcode Kazakh between Cyrillic and Latin encodings

\u001b[1mSYNOPSIS\u001b[0m
    \u001b[1mtranscode-kz-cli\u001b[0m [\u001b[4mOPTION\u001b[0m]... \u001b[4mSOURCE\u001b[0m [\u001b[4mDEST\u001b[0m]
    \u001b[1mtranscode-kz-cli\u001b[0m --help

\u001b[1mDESCRIPTION\u001b[0m
    Transcode Kazakh between Cyrillic and Latin encodings.

\u001b[1mOPTIONS\u001b[0m
    \u001b[1m-d\u001b[0m=\u001b[4mDEVICE\u001b[0m, \u001b[1m--device\u001b[0m=\u001b[4mDEVICE\u001b[0m
        \u001b[1mconsole\u001b[0m \u001b[2m(default)\u001b[0m  - Use console for input/output
        \u001b[1mfile\u001b[0m               - Use file(s) for input/output

    \u001b[1m-f\u001b[0m=\u001b[4mFORMAT\u001b[0m, \u001b[1m--format\u001b[0m=\u001b[4mFORMAT\u001b[0m
        \u001b[1mtext\u001b[0m \u001b[2m(default)\u001b[0m  - transcode as plain text
        \u001b[1mjson\u001b[0m            - transcode only string values in the JSON

    \u001b[1m-i\u001b[0m=\u001b[4mINDENT\u001b[0m, \u001b[1m--indent\u001b[0m=\u001b[4mINDENT\u001b[0m
        Number of spaces used for indentation in structured formats like JSON. The default value is 2.

    \u001b[1m-h\u001b[0m, \u001b[1m--help\u001b[0m
        Display this help and exit

\u001b[1mEXAMPLES\u001b[0m
    \u001b[1mtranscode-kz-cli\u001b[0m "Қазақша мәтін"
    \u001b[1mtranscode-kz-cli\u001b[0m -f=json "{ \\\"city\\\": \\\"Қала\\\" }"
    \u001b[1mtranscode-kz-cli\u001b[0m -d=file -f=text cyr.txt lat.txt
    \u001b[1mtranscode-kz-cli\u001b[0m -d=file -f=json -i=4 src/assets/i18n/kk-Cyrl.json src/assets/i18n/kk-Latn.json
    \u001b[1mtranscode-kz-cli\u001b[0m -h
`;

export const info = `Transcoding...`;

export const success = `\u001b[32mSuccess\u001b[0m`;

export const errUsage = `\u001b[33mUsage:\u001b[0m \u001b[1mtranscode-kz-cli\u001b[0m [\u001b[4mOPTION\u001b[0m]... \u001b[4mSOURCE\u001b[0m [\u001b[4mDEST\u001b[0m]
Try 'transcode-kz-cli --help' for more information.`;

export const errWrongArgs = `\u001b[31mError:\u001b[0m Wrong argument(s)`;
