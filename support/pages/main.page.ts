import {Page, Locator} from "@playwright/test";
import { BasePage } from "./base.page";

export default class MainPage extends BasePage {
    readonly page:Page;
    readonly cardForms: Locator;
    constructor(page:Page) {
        super(page);
        this.page=page;

   //Locators
   this.cardForms = page.getByText("Forms")
   //Methods
    }
   async goto(){
    await this.page.goto("/", {waitUntil: 'domcontentloaded'})
   };
   async cardFormsClick(){
    await this.cardForms.click()
   }
}
