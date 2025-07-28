import { Locator, Page } from "@playwright/test";

//Page lets you interact with the browser page, in other words, you can use it to call Playwright methods.
//Locator represents an element or elements on the page.

export class PickUpFromPreviousConversation {
  readonly page: Page;
  readonly emailFieldItem: Locator;
  readonly chatNowButtonItem: Locator;
  readonly spanAfterUnregisteredItem: Locator;

  //required parameter that we expect to be constructed when we call this
  constructor(page: Page) {
    this.page = page;
    this.emailFieldItem = page.locator(
      'input[placeholder="Type your email correctly here"]'
    );
    this.chatNowButtonItem = page.getByRole("button", { name: "Chat now" });
    this.spanAfterUnregisteredItem = page.locator('span[class="_error_xosst_22"]');
  }

  async emailFieldFill(email: string) {
    await this.emailFieldItem.fill(email);
  }

  async chatNowButton() {
    await this.chatNowButtonItem.click();
  }
}
