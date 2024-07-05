import { test, expect } from '@playwright/test';
import TexBoxPage from '../support/pages/text-box.page';
import { text } from 'node:stream/consumers';
const userData = {
  fullName :"Dormidont Podoprigora"
}

test.beforeEach(async ({ page }) => {
  await page.goto('/text-box',{waitUntil: 'domcontentloaded'});
  await page.locator("#userName").fill(userData.fullName);
  const textBoxPage = new TexBoxPage(page);
  await textBoxPage.goto();
});
test.describe("DemoQA testing forms", ()=> {

test('Testing text form', async ({ page }) => {
  //Preconditions (arrangenments):
  const userData = {
    fullName :"Dormidont Podoprigora",
    email: "myemail@mail.com",
    currentAddress: "Paris, 18-24, Picadilly circus"
  }
  const textBoxPage = new TexBoxPage(page);
  await textBoxPage.goto();
  await textBoxPage.fillFullName(userData.fullName);
  await textBoxPage.fillEmail(userData.email);
  await textBoxPage.fillCurrentAddress(userData.currentAddress);
  await textBoxPage.clickSubmitButton();


  //Navigate to a page
  // await page.goto('/text-box',{waitUntil: 'domcontentloaded'});
  //Test (action):
  // await page.locator("#userName").fill(userData.fullName);
  // await page.locator('[type="email"]').fill(userData.email);
  // await page.locator('.form-control').nth(2).fill(userData.currentAddress);
  // await page.locator('[type="button"]', {hasText: "Submit"}).click();
  //Checks (Assertions)
 await expect(textBoxPage.nameOutput).toContainText(userData.fullName);
 await expect(textBoxPage.emailOutput).toContainText(userData.email);
 await expect(textBoxPage.currentAddressOutput).toContainText(userData.currentAddress);
await textBoxPage.assertElementContainsText(textBoxPage.nameOutput, userData.fullName)
 // await expect(page.locator("#name")).toContainText(userData.fullName)
// await expect(page.locator('#email')).toContainText(userData.email)
// await expect(page.locator('#output #currentAddress')).toContainText(userData.currentAddress);
});
test('Negative. Testing text form. Invalid Email', async ({ page }) => {
  //Preconditions (arrangenments):
  const userData = {
    fullName :"Dormidont Podoprigora",
    email: "my.email",
    currentAddress: "Paris, 18-24, Picadilly circus"
  }
  const textBoxPage = new TexBoxPage(page);
  await textBoxPage.goto();
  //Navigate to a page
  // await page.goto('/text-box',{waitUntil: 'domcontentloaded'});
  //Test (action):
  await textBoxPage.fillFullName(userData.fullName);
  await textBoxPage.fillEmail(userData.email);
  await textBoxPage.fillCurrentAddress(userData.currentAddress);
  // await page.locator("#userName").fill(userData.fullName);
  // await page.locator('[type="email"]').fill('myemail');
  // await page.locator('.form-control').nth(2).fill(userData.currentAddress);
  await textBoxPage.clickSubmitButton();
  // await page.locator('[type="button"]', {hasText: "Submit"}).click();
 await textBoxPage.assertBorderColor(textBoxPage.emailInput, "1px solid rgb(255, 0, 0)")
  // await expect(textBoxPage.emailInput, "Frame color is different from '1px solid rgb(255 0 0)'").toHaveCSS("border", "1px solid rgb(255, 0, 0)")
  
  //Checks (Assertions)
 //#ff0000

// await expect(page.locator('[type="email"]'), "Frame color is different from '1px solid rgb(255 0 0)'").toHaveCSS("border", "1px solid rgb(255, 0, 0)");

});
});
//Define before each hook

