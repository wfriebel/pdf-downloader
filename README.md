# PDF Downloader

## How to Use

1. First, we will launch chrome in debug mode from the terminal. In the terminal, execute the following command:

For Mac:

```
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222 --no-first-run --no-default-browser-check --user-data-dir=\$(mktemp -d -t 'chrome-remote_data_dir')
```

2. In the browser that was launched by the terminal command, login to google and any other accounts that require a login.

3. Navigate back to the terminal. You should see something like this as the ouput of the command you just ran:

```
DevTools listening on ws://127.0.0.1:9222/devtools/browser/177485e2-7a4a-43cd-b6b9-0da8a50618a4
```

A unique url is created every time you run this command.
Copy the url you see above. In the case aboce, copy ws://127.0.0.1:9222/devtools/browser/177485e2-7a4a-43cd-b6b9-0da8a50618a4

5. To run the program, open a new terminal tab and navigate to the directory sean-script.
   Next, type the following command to run our script, using the url that you have copied:

```
node index.js --browser=ws://127.0.0.1:9222/devtools/browser/177485e2-7a4a-43cd-b6b9-0da8a50618a4
```

This will execute the program and close the browser. All pdfs will download to your downloads folder.

6. To kill the process in each terminal tab (stop the programs from running), type control + c in each tab.