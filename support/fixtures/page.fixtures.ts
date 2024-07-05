import {test as base} from "@playwright/test";
import TexBoxPage from "../pages/text-box.page";
import MainPage from "../pages/main.page";
import FormsPage from "../pages/forms.page";
import AutomationPracticeFormPage from "../pages/automation-practice-form.page";
export const test = base.extend<{
    textBoxPage: TexBoxPage;
    mainPage: MainPage;
    formsPage: FormsPage;
    automationPracticeFormPage: AutomationPracticeFormPage;
}>({
        textBoxPage: async({page}, use)=> {
            const textBoxPage= new TexBoxPage(page)
            textBoxPage.goto();
            await use(textBoxPage);
        },
       
            mainPage: async({page}, use)=> {
                const mainPage= new MainPage(page)
                // mainPage.goto();
                await use(mainPage);
            },
            formsPage: async({page}, use)=> {
                const formsPage= new FormsPage(page)
                formsPage.goto();
                await use(formsPage);
            },
            automationPracticeFormPage: async({page}, use)=> {
                const automationPracticeFormPage= new AutomationPracticeFormPage(page)
                automationPracticeFormPage.goto();
                await use(automationPracticeFormPage);
            }
    })