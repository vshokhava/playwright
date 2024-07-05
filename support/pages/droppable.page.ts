import { BasePage } from "./base.page";
import { Page } from "@playwright/test";
import { Locator } from "@playwright/test";
import { expect } from "@playwright/test";
export class DroppablePage extends BasePage {
    readonly page: Page;
    readonly draggableElement: Locator;
    readonly droppableElement: Locator;
    constructor(page:Page){
        super(page)
      this.page= page;
      this.draggableElement= page.locator('#draggable');
      this.droppableElement= page.locator('.simple-drop-container .drop-box')
    }
    async goto(){
        await this.page.goto('/droppable');
    }
    async dragNDropElement(element:Locator){
        await this.draggableElement.dragTo(element);
    };
    async checkIfDropped(){
        await expect(this.droppableElement).toHaveText('Dropped!');
    }
}