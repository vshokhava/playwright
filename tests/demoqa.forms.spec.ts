// import { test, expect } from '@playwright/test';
import { userData } from '../support/data/user.data';
import MainPage from '../support/pages/main.page';
import FormsPage from '../support/pages/forms.page';
import AutomationPracticeFormPage from '../support/pages/automation-practice-form.page';
import { test} from "../support/fixtures/page.fixtures"
test('Navigating to "Practice Forms" page', async ({ mainPage, formsPage, automationPracticeFormPage }) => {
  // const mainPage= new MainPage(page);
  // const formsPage= new FormsPage(page);
  // const automationPracticeFormPage = new AutomationPracticeFormPage(page);
//Click Forms
await mainPage.goto();
// await page.goto('/',{waitUntil: 'domcontentloaded'});
await mainPage.cardFormsClick();
// await page.getByText('Forms').click();
// await page.locator('h5', {hasText: "Forms"}).click()
//Click practice form
await formsPage.practiceFormButtonClick();
// await page.getByText('Practice Form').click();
//Check URL is https://demoqa.com/automation-practice-form
// await automationPracticeFormPage.assertPageUrl()
// const currentURL = await page.url();
await automationPracticeFormPage.assertPageUrl( 'https://demoqa.com/automation-practice-form')
// await expect(page).toHaveURL('https://demoqa.com/automation-practice-form')
});
test.only('Check submission form', async ({ page }) => {
  const mainPage= new MainPage(page);
  const formsPage= new FormsPage(page);
  const automationPracticeFormPage = new AutomationPracticeFormPage(page);
  // const userData = {
  //   firstName:"Dormidont",
  //   lastName: 'Podoprigora',
  //   email: "myemail@mail.com",
  //   phoneNumber: "0123456789"
  // }
  const hobbies = [
    automationPracticeFormPage.sportsCheckBox,
    automationPracticeFormPage.readingCheckBox,
    automationPracticeFormPage.musicCheckbox
  ];
 await automationPracticeFormPage.goto();
//Input 1st name
await automationPracticeFormPage.fillFirstName(userData.validStudent.firstName)
// await page.getByPlaceholder('First Name').fill(userData.firstName);
await automationPracticeFormPage.fillLastName(userData.validStudent.lastName);
// await page.getByPlaceholder('Last Name').fill(userData.lastName);
await automationPracticeFormPage.fillEmail(userData.validStudent.email)
// await automationPracticeFormPage.emailInput.fill(userData.email);
await automationPracticeFormPage.checkMaleRadioButton();
// await automationPracticeFormPage.maleRadioButton.check({force:true});
await automationPracticeFormPage.fillPhoneNumber(userData.validStudent.phoneNumber);
// await automationPracticeFormPage.phoneNumberInput.fill(userData.phoneNumber);
for (const hobby of hobbies){
  await hobby.check({force:true});
}
// await (page.locator('[type = "checkbox"]').first()).click({force:true});
await automationPracticeFormPage.submitButton.click();
await automationPracticeFormPage.assertIsVisible(automationPracticeFormPage.studentDataForm);
// await expect(page.locator('.modal-content')).toBeVisible();
await automationPracticeFormPage.assertElementContainsText(automationPracticeFormPage.studentNameValueField, userData.validStudent.firstName + " " + userData.validStudent.lastName);
await automationPracticeFormPage.assertElementContainsText(automationPracticeFormPage.studentMobileValueField, userData.validStudent.phoneNumber)
// await expect(page.locator('tbody tr :nth-child(2)').nth(3)).toHaveText(userData.phoneNumber);
// await expect(page.locator('tbody tr :nth-child(2)', {hasText: `${userData.firstName} ${userData.lastName}`})).toBeVisible();
// expect (formData.innerText()).toEqual(userData.firstName + " " + userData.lastName);
// await expect(page.locator('.table-responsive tr:nth-of-type(1) td:nth-of-type(1)')).toHaveText('Student Name');
// await expect(page.locator('.table-responsive tr:nth-of-type(1) td:nth-of-type(2)')).toContainText(userData.firstName + " " + userData.lastName);
// await expect(page.locator('.table-responsive tr:nth-of-type(2) td:nth-of-type(1)')).toHaveText('Student Email');
// await expect(page.locator('.table-responsive tr:nth-of-type(2) td:nth-of-type(2)')).toHaveText(userData.email);
// await expect(page.locator('.table-responsive tr:nth-of-type(3) td:nth-of-type(1)')).toContainText('Gender');
// await expect(page.locator('.table-responsive tr:nth-of-type(3) td:nth-of-type(2)')).toHaveText('Other');
// await expect(page.locator('.table-responsive tr:nth-of-type(4) td:nth-of-type(1)')).toContainText('Mobile');
// await expect(page.locator('.table-responsive tr:nth-of-type(4) td:nth-of-type(2)')).toHaveText(userData.phoneNumber);
// await expect(page.locator('.table-responsive tr:nth-of-type(7) td:nth-of-type(1)')).toHaveText('Hobbies');
// await expect(page.locator('.table-responsive tr:nth-of-type(7) td:nth-of-type(2)')).toContainText(hobbies[0]);
// await expect(page.locator('.table-responsive tr:nth-of-type(7) td:nth-of-type(2)')).toContainText(hobbies[1]);

// await page.pause()
// await page.locator ('#firstName')
//Input last name
//Input email
//Choose Gender
//Input phone number
//Check one hobby
//Click Submit button

//Check form is displayed
//Check data in the form
});


