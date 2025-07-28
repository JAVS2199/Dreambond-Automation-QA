import { Locator, Page } from '@playwright/test';

export class HelpMefFindAnIdealJobPage {
  readonly page: Page;
  readonly fullNameItem: Locator;
  readonly emailItem: Locator;
  readonly countryItem: Locator;
  readonly optionListItem: Locator;
  readonly phoneNumberItem: Locator;
  readonly privacyPoliciesItem: Locator;
  readonly chatNowButtonItem: Locator;
  readonly helloThereItem: Locator;
  readonly helloThereButtonItem: Locator;
  //required parameter that we expect to be constructed when we call this

  constructor(page: Page) {
    this.page = page;
    this.fullNameItem = page.locator('input[placeholder="Type your full name here"]');
    this.emailItem = page.locator('input[placeholder="Type your email correctly here"]');
    this.countryItem = page.locator('div.Dropdown');
    this.optionListItem = page.locator('ul.Options > li');
    this.phoneNumberItem = page.locator('input[placeholder="Mobile phone"]');
    this.privacyPoliciesItem = page.locator('label[for="privacy"]');
    this.chatNowButtonItem = page.getByRole('button', { name: 'Chat now' });
    this.helloThereItem = page.locator('section._ModalAlreadyRegistered_4ecbs_1 p');
    this.helloThereButtonItem = page.getByRole('button', {
      name: 'Continue conversation',
    });
  }

  async fullNameFieldFillOut(name: string) {
    await this.fullNameItem.fill(name);
  }

  async emailFieldFillOut(email: string) {
    await this.emailItem.fill(email);
  }

  async countryDropdown(countryName: string) {
    await this.countryItem.click();
    const desiredOption = this.optionListItem.filter({ hasText: countryName });
    await desiredOption.click();
  }

  async phoneNumberFieldFillOut(phoneNumber: string) {
    await this.phoneNumberItem.fill(phoneNumber);
  }
  async privacyPoliciesCheck() {
    await this.privacyPoliciesItem.check();
  }

  async chatNowButton() {
    await this.chatNowButtonItem.click();
  }

  async helloThereButton() {
    await this.helloThereButtonItem.click();
  }
}
