import { expect, Locator, Page } from '@playwright/test';

export class MugreBotPageGeneral {
  private readonly page: Page;
  //required parameter that we expect to be constructed when we call this
  private readonly yesItem: Locator;
  private readonly noItem: Locator;
  private readonly mainButtonItem: Locator;
  private readonly englishLevelQuestionItem: Locator;
  private readonly permissionsToWorkQuestionItem: Locator;
  private readonly jobVerticalQuestionItem: Locator;
  private readonly temporalQuestionItemFirst: Locator;
  private readonly temporalQuestionItemLast: Locator;
  private readonly temporalQuestionConfirmationYesItem: Locator;
  private readonly temporalQuestionConfirmationNoItem: Locator;
  private readonly temporalQuestionConfirmationYesItemEnd: Locator;
  private readonly temporalQuestionConfirmationNoItemEnd: Locator;

  constructor(page: Page) {
    this.page = page;

    this.englishLevelQuestionItem = page.locator(
      'section p:has-text("What is your English level?")'
    );

    this.permissionsToWorkQuestionItem = page.locator(
      'section p:has-text("Do you have permission to work in your country?")'
    );

    this.jobVerticalQuestionItem = page.locator(
      'section p:has-text("In which of our verticals are you interested in?")'
    );

    this.temporalQuestionItemFirst = page
      .locator(
        'section p:has-text("Before continue, Are you sure About all you’r answer at the moment?")'
      )
      .nth(0);

    this.temporalQuestionItemLast = page
      .locator(
        'section p:has-text("Before continue, Are you sure About all you’r answer at the moment?")'
      )
      .nth(1);

    this.temporalQuestionConfirmationYesItemEnd = page
      .locator('section._section_1oexq_43', { hasText: 'Are you sure About all you’r answer' })
      .getByText('Yes')
      .nth(1);

    this.temporalQuestionConfirmationNoItemEnd = page
      .locator('section._section_1oexq_43', { hasText: 'Are you sure About all you’r answer' })
      .getByText('Yes')
      .nth(1);

    this.temporalQuestionConfirmationYesItem = page
      .locator('section._section_1oexq_43', { hasText: 'Are you sure About all you’r answer' })
      .getByText('Yes')
      .nth(0);

    this.temporalQuestionConfirmationNoItem = page
      .locator('section._section_1oexq_43', { hasText: 'Are you sure About all you’r answer' })
      .getByText('Yes')
      .nth(0);

    this.yesItem = this.page
      .locator('._containerAnswer_1oexq_1')
      .locator('._answer_1oexq_11')
      .getByText('Yes');

    this.noItem = this.page
      .locator('._containerAnswer_1oexq_1')
      .locator('._answer_1oexq_11')
      .getByText('No');

    this.mainButtonItem = this.page
      .locator('footer[class*="FooterChatbot"]')
      .locator('button.Button.primary.large.circular');
  }

  //actions
  async yesItemClick() {
    await this.yesItem.click();
  }
  async noItemClick() {
    await this.noItem.click();
  }
  async mainButtonClick() {
    await expect(this.mainButtonItem).toBeEnabled();
    await this.mainButtonItem.click();
  }
  async selectEnglishLevel(
    level:
      | 'C2 - Native'
      | 'C1 - Advanced'
      | 'B2 - Upper Intermediate'
      | 'B1 - Intermediate'
      | 'A1 - A2 Basic'
  ) {
    await this.page
      .locator('[class="_section_1oexq_43"]')
      .locator('[class="_containerAnswer_1oexq_1"]')
      .getByText(level)
      .click();
  }
  async selectWorkPermissions(
    level: 'Yes, I am a citizen' | 'I have a working visa' | 'No, I don`t'
  ) {
    await this.page
      .locator('[class="_section_1oexq_43"]')
      .locator('[class="_containerAnswer_1oexq_1"]')
      .getByText(level)
      .click();
  }
  async selectJobVertical(level: 'Tech' | 'Media' | 'Production' | 'Data') {
    await this.page
      .locator('[class="_section_1oexq_43"]')
      .locator('[class="_containerAnswer_1oexq_1"]')
      .getByText(level, { exact: true })
      .click();
  }
  async clickYesTemporalQuestionConfirmation() {
    await expect(this.temporalQuestionConfirmationYesItem).toBeVisible();
    await this.temporalQuestionConfirmationYesItem.click();
  }
  async clickNoTemporalQuestionConfirmation() {
    await expect(this.temporalQuestionConfirmationNoItem).toBeEnabled();
    await this.temporalQuestionConfirmationNoItem.click();
  }
  async clickYesTemporalQuestionConfirmationEnd() {
    await expect(this.temporalQuestionConfirmationYesItemEnd).toBeVisible();
    await this.temporalQuestionConfirmationYesItemEnd.click();
  }
  async clickNoTemporalQuestionConfirmationEnd() {
    await expect(this.temporalQuestionConfirmationNoItemEnd).toBeEnabled();
    await this.temporalQuestionConfirmationNoItemEnd.click();
  }

  //content assertions
  async englishLevelQuestionItemVisible() {
    await expect(this.englishLevelQuestionItem).toBeVisible();
  }
  async permissionsToWorkQuestionItemVisible() {
    await expect(this.permissionsToWorkQuestionItem).toBeVisible();
  }
  async jobVerticalQuestionItemVisible() {
    await expect(this.jobVerticalQuestionItem).toBeVisible();
  }
  async temporalQuestionItemFirstVisible() {
    await expect(this.temporalQuestionItemFirst).toBeVisible();
  }
  async temporalQuestionItemLastVisible() {
    await expect(this.temporalQuestionItemLast).toBeVisible();
  }
}
