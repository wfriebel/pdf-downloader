const puppeteer = require("puppeteer");
const argv = require("minimist")(process.argv.slice(2));
const links = require("./links");

(async () => {
  try {
    console.log("Connecting to the browser");
    const browser = await puppeteer.connect({
      browserWSEndpoint: argv.browser
    });
    const page = await browser.newPage();

    console.log("Downloading PDFs\n");
    for (let i = 0; i < links.length; i++) {
      const link = links[i];
      await page.goto(link);
      await page.waitForSelector("#taskCurrentStatus > a");
      console.log(link);
      await page.click("#taskCurrentStatus > a");
    }

    console.log(
      "\nDownload complete. All downloaded PDFs can be found in your downloads folder."
    );
    console.log("Type control + c to kill this program");
  } catch (error) {
    console.log("An error occured while running this script");
    console.log("Error:", error);
  }
})();
