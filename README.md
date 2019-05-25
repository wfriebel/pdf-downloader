# PDF Downloader

## How to Download this Repo

Navigate to your terminal and type:

```
git clone https://github.com/wfriebel/pdf-downloader
```

Next, navigate into the repo by typing the following command in the terminal:

```
cd pdf-downloader
```

Make sure you have yarn installed. To check this type:

```
which yarn
```

If the terminal outputs the path to its binary like `/usr/local/Cellar/yvm/2.4.1/versions/v1.13.0/bin/yarn` then it is installed. If it is not installed, the terminal will not output any text.

Next, confirm that you have node installed by following the same steps that you did to check if yarn was installed.

Once you have confirmed that both yarn and node are installed, type the following command to download repo's dependencies:

```
yarn install
```

## How to Use

First, we will launch chrome in debug mode from the terminal. In the terminal, execute the following command:
For Mac:

```
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222 --no-first-run --no-default-browser-check --user-data-dir=\$(mktemp -d -t 'chrome-remote_data_dir')
```

In the browser that was launched by the terminal command, login to google and any other accounts that require a login.
Navigate back to the terminal. You should see something like this as the ouput of the command you just ran:

```
DevTools listening on ws://127.0.0.1:9222/devtools/browser/177485e2-7a4a-43cd-b6b9-0da8a50618a4
```

A unique url is created every time you run this command.
Copy the url you see above. In the case aboce, copy `ws://127.0.0.1:9222/devtools/browser/177485e2-7a4a-43cd-b6b9-0da8a50618a4`

To run the program, open a new terminal tab and navigate to the directory pdf-downloader.
Next, type the following command to run our script, using the url that you have copied:

```
 yarn start --browser=ws://127.0.0.1:9222/devtools/browser/177485e2-7a4a-43cd-b6b9-0da8a50618a4
```

This will execute the program and close the browser. All pdfs will download to your downloads folder.
To kill the process in each terminal tab (stop the programs from running), type control + c in each tab.
