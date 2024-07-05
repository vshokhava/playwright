import {test} from '@playwright/test';
import { DroppablePage } from '../support/pages/droppable.page';
import { UploadPage } from '../support/pages/upload-download.page';
import { filesToUpload  as path} from '../support/pages/paths';

test('Drag n drop element', async({page})=>{
    const droppablePage = new DroppablePage(page);
    await droppablePage.goto();
    await droppablePage.dragNDropElement(droppablePage.droppableElement);
    await droppablePage.checkIfDropped()
});
test('Test upload file', async({page})=>{
    const uploadPage = new UploadPage(page);
    await uploadPage.goto();
    await uploadPage.uploadFile(path.test_docx);
    await uploadPage.checkFileUpload();
})
test.only("Test download file", async ({page})=> {
    const uploadPage = new UploadPage(page);
    await uploadPage.goto();
    await uploadPage.downloadFile(path.pathToDownload)
});