import {Browser, Page, chromium} from "@playwright/test"
async function globalSetUp() {
    //Initialization of new browser, context and page
    const browser: Browser= await chromium.launch({headless: false});
    const context = await browser.newContext();
    const page: Page = await context.newPage();
        //logic logic

    await page.goto('https://demoqa.com/login', {waitUntil: 'domcontentloaded'});
    await page.locator('#userName').fill('kuzulkins12345');
    await page.locator('#password').fill('1046512@Kliu');
    await page.locator('#login').click();
    //Save session data
    await page.context().storageState({path:'./userSession.json'})
    //Close browser
    // await browser.close();
}
export default globalSetUp;