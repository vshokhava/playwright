import { test, expect } from '@playwright/test';
import MainPage from '../support/pages/main.page';
import FormsPage from '../support/pages/forms.page';
import BrowserWindowsPage from '../support/pages/browser-windows.page';
import SamplePage from '../support/pages/sample.page';
test('Multiple tabs. Two tabs same time', async ({page, context})=> {
   
    const mainPage= new MainPage(page);
    await mainPage.goto();

const newTab = await context.newPage();
const formsPageTab = new FormsPage(newTab);

await formsPageTab.goto();

await newTab.getByText("Practice Form");

await formsPageTab.practiceFormButtonClick();

await page.bringToFront();
await page.locator(".card").filter({hasText: 'Widgets'})

await page.close();
await  newTab.pause();

});
test('Multiple tabs. Two tabs same time consuequntly', async ({page, context})=> {
    //Navigation to first tab
    const browserWindowsPage = new BrowserWindowsPage(page);
    await browserWindowsPage.goto();
//Define event listener to wait for event responsible for new tab to be opened
const tabPromise = context.waitForEvent('page')
await browserWindowsPage.newTabButton.click()
const newTab = await tabPromise;
const samplePageTab = new SamplePage(newTab);
await page.pause();
expect(await samplePageTab.assertElementContainsText(samplePageTab.header,'This is a sample page'))
await page.pause()
})