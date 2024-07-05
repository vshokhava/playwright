import {test} from "../../support/fixtures/page.fixtures"
import {expect} from "@playwright/test"
test('Main page default visual test', async({mainPage, page})=>{
    //Navigate to a page
    await mainPage.goto()
    //Make visual assertion
    await expect(page).toHaveScreenshot()
})