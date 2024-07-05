import { BasePage } from "./base.page";
import { Page } from "@playwright/test";
import { Locator } from "@playwright/test";
import { expect } from "@playwright/test";
export class UploadPage extends BasePage {
    readonly page: Page;
    readonly uploadFileButton: Locator;
    readonly uploadedFilePath: Locator;
    readonly downloadButton: Locator;
    constructor(page:Page){
        super(page)
      this.page= page;
      this.downloadButton = page.locator('#downloadButton')
      this.uploadFileButton= page.locator('#uploadFile');
      this.uploadedFilePath= page.locator('#uploadedFilePath');
      
    }
    async goto(){
        await this.page.goto('/upload-download');
    }
    async uploadFile(path: string) {
        await this.uploadFileButton.setInputFiles(path)
        //add event listener
        this.page.once('dialog', (dialog)=>{
            dialog.accept();
        })
    }
    async checkFileUpload() {
        await expect(
            this.uploadedFilePath,"Oops! It looks like your file was not uploaded.").not.toBeEmpty();
    };
    async downloadFile(path:string){
        // await expect(this.downloadButton).toBeInViewport;
        const downloadPromise = this.page.waitForEvent('download');
        await this.downloadButton.click();
        // await this.downloadButton.click();
        const download = await downloadPromise;
       await download.saveAs(path+download.suggestedFilename())
    }
  
}  