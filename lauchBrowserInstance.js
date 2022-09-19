import puppeteer from 'puppeteer'

async function startpup() {
  console.log('Setup Puppeteer')
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--remote-debugging-port=9222',
      // '--remote-debugging-address=0.0.0.0'
    ]
  })
  console.log(browser.wsEndpoint())

  browser.disconnect();
}

(async => {
  startpup();
})();