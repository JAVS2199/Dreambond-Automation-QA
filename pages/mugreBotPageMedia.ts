import { expect, Locator, Page } from '@playwright/test';

export class MugreBotPageMedia {
  private readonly page: Page;
  private readonly mediaSubCraftsItem: Locator;
  private readonly professionalExperienceItem: Locator;
  private readonly excelLevelItem: Locator;
  private readonly toolsMediaItem: Locator;
  private readonly thankYouforAnsweringItem: Locator;

  constructor(page: Page) {
    this.page = page;
    this.mediaSubCraftsItem = page.locator(
      'section p:has-text("Do you have experience in any of the following options?")'
    );
    this.professionalExperienceItem = page.locator(
      'section p:has-text("How many years of professional experience do you have?")'
    );
    this.excelLevelItem = page.locator('section p:has-text("What is your excel level?")');
    this.toolsMediaItem = page.locator(
      'section p:has-text("Select the tools in which you have experience")'
    );
    this.thankYouforAnsweringItem = page.locator(
      'section p:has-text("Thank you for answering! According to your current skillset i think this would be the perfect possition for you to apply.")'
    );
  }

  //content assertions
  async isVisibleMediaSubCraftsItem() {
    await expect(this.mediaSubCraftsItem).toBeVisible();
  }
  async isVisibleProfessionalExperienceItem() {
    await expect(this.professionalExperienceItem).toBeVisible();
  }
  async isVisibleExcelLevelItem() {
    await expect(this.excelLevelItem).toBeVisible();
  }
  async isVisibleToolsMediaItem() {
    await expect(this.toolsMediaItem).toBeVisible();
  }
  async isVisibleThankYouforAnsweringItem() {
    await expect(this.thankYouforAnsweringItem).toBeVisible();
  }
  //methods
  async selectMediaSubCraftItem(
    level:
      | 'Digital (Social, Programmatic, Search , TAAG, E- Commerce, SEO, Traffic)'
      | 'No Digital (Research, Investment, Planning, Invoice Reconciliation, Clients OPS, Buying)'
      | 'HR Analyst'
      | 'Finance Analyst'
      | 'No'
  ) {
    if (level === 'No') {
      await this.page
        .locator('section._section_1oexq_43 ul li')
        .getByText(level, { exact: true })
        .nth(2)
        .click();
    } else {
      await this.page
        .locator('section._section_1oexq_43 ul li')
        .getByText(level, { exact: true })
        .click();
    }
  }
  async selectProfessionalExperienceItem(
    level:
      | 'Less than 6 months'
      | '6 Months to 1 Year'
      | '1 to 2 Years'
      | '2 to 3 years'
      | '4 to 6 years'
      | 'More than 6 years'
  ) {
    await this.page
      .locator('section._section_1oexq_43 ul li')
      .getByText(level, { exact: true })
      .click();
  }
  async selectExcelLevelItem(level: 'Expert' | 'Advanced' | 'Intermediate' | 'Basic') {
    await this.page
      .locator('section._section_1oexq_43 ul li')
      .getByText(level, { exact: true })
      .click();
  }
  async selectToolsMediaItem(
    level:
      | 'DV360'
      | 'Seo'
      | 'Tableau'
      | 'Power BI'
      | 'Google Data Studio'
      | 'Media Math'
      | 'The Trade Desk'
      | 'AdServer'
      | 'Facebook Ads'
      | 'Instagram Ads'
      | 'Google Ads'
      | 'Amazon DPS'
      | 'Serch Ads 360'
      | 'Google Analytics'
      | 'Google Search'
      | 'SEO y SEM'
      | 'Linked In Ads'
      | 'Tik Tok Ads'
      | 'Youtube Ads'
  ) {
    await this.page
      .locator('section._section_1oexq_43 ul li')
      .getByText(level, { exact: true })
      .click();
  }
}
