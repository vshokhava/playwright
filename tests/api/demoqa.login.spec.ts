import {test, expect} from "@playwright/test"
//  test.use({storageState: "./userSession.json"})

test ('Test1', async ({page})=> {
    // test.use({storageState: "./userSession.json"})
    await page.goto('/login', {waitUntil: 'domcontentloaded'});
    await page.locator('#userName').fill('kuzulkins12345');
    await page.locator('#password').fill('1046512@Kliu');
    await page.locator('#login').click();
    const userNameValue = await page.locator('#userName-value');
    await expect(userNameValue).toHaveText('kuzulkins12345');
});

test ('Test2', async ({page})=> {
    // test.use({storageState: "./userSession.json"})
    await page.goto('/login', {waitUntil: 'domcontentloaded'});
    await page.locator('#userName').fill('kuzulkins12345');
    await page.locator('#password').fill('1046512@Kliu');
    await page.locator('#login').click();
    const logOutButton = page.locator('button', {hasText:'Log out'});
    // const _logOoutButton = await page.getByText('Log Out');
    await expect(logOutButton).toBeInViewport();
    
});
