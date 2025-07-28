import {Locator, Page} from "@playwright/test";

export class NavigationPage {
    
    readonly page: Page;
    readonly pickUpFromPreviousConversationButtonItem: Locator;
    readonly helpMeFindAnIdealJobButtonItem: Locator;

    //required parameter that we expect to be constructed when we call this
    constructor(page: Page) {
        this.page = page;
        this.helpMeFindAnIdealJobButtonItem = page.getByRole("button", {name: "Help me find an ideal job!"});
        this.pickUpFromPreviousConversationButtonItem = page.getByRole("button", {name: "Pickup from previous conversation!"});
    }

    async pickupFromPreviousConversationForm(){
        await this.pickUpFromPreviousConversationButtonItem.click();
    }

    async HelpMeFindAnIdealJobForm(){
        await this.helpMeFindAnIdealJobButtonItem.click();
    }
}