import {Page, Locator, expect} from "@playwright/test";
import { BasePage } from "./base.page";

export default class AutomationPracticeFormPage extends BasePage {
    readonly page:Page;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
    readonly maleRadioButton: Locator;
    readonly phoneNumberInput: Locator;
    readonly sportsCheckBox: Locator;
    readonly readingCheckBox: Locator;
    readonly musicCheckbox: Locator;
    readonly submitButton: Locator;
    readonly studentDataForm: Locator
    readonly studentNameValueField: Locator;
    readonly studentMobileValueField: Locator;


//Locators
    constructor(page:Page) {
        super(page);
        this.page=page;
        this.firstNameInput= page.getByPlaceholder('First Name');
        this.lastNameInput= page.getByPlaceholder('Last Name')
        this.emailInput = page.locator('#userEmail');
        this.maleRadioButton =  page.locator('[value="Male"]');
        this.phoneNumberInput= page.locator('#userNumber');
        this.sportsCheckBox=page.getByLabel("Sports");
        this.readingCheckBox=page.getByLabel("Reading");
        this.musicCheckbox= page.getByLabel("Music");
        this.submitButton= page.locator('#submit');
        this.studentDataForm = page.locator('.modal-content');
        this.studentNameValueField= page.locator("tbody tr :nth-child(2)").nth(0);
        this.studentMobileValueField= page.locator("tbody tr :nth-child(2)").nth(3)

    };
    async goto(){
        await this.page.goto('/automation-practice-form',{waitUntil: 'domcontentloaded'})
    };
    async fillFirstName(name: string){
        await this.firstNameInput.fill(name);
    };
    async fillLastName(surname: string){
        await this.lastNameInput.fill(surname);
    };
    async fillEmail(email: string){
        await this.emailInput.fill(email);
    };
    async fillPhoneNumber(phoneMumber: string){
        await this.phoneNumberInput.fill(phoneMumber);
    };
    async checkMaleRadioButton(){
        await this.maleRadioButton.check({force:true})
    }
   
    async clickSubmitButton(){
        await this.submitButton.click();
    }

  
}