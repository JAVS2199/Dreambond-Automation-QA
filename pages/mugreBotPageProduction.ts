import { expect, Locator, Page } from '@playwright/test';

export class MugreBotPageProduction {
  //attributes or locators
  private readonly page: Page;
  private readonly productionSubCraftsItem: Locator;
  private readonly productionDesignSubCraftsItem: Locator;
  private readonly productionExperienceItem: Locator;
  private readonly productionToolsItem: Locator;
  private readonly thankYouForAnsweringItem: Locator;

  constructor(page: Page) {
    this.page = page;

    this.productionSubCraftsItem = page
      .locator(
        'section p:has-text("In which of the following options do you have the most experience?")'
      )
      .nth(0);
    this.productionExperienceItem = page.locator(
      'section p:has-text("What is your experience working in?")'
    );
    this.productionToolsItem = page.locator(
      'section p:has-text("Select the tools in which you have experience")'
    );
    this.thankYouForAnsweringItem = page.locator(
      'section p:has-text("Thank you for answering! According to your current skillset i think this would be the perfect possition for you to apply.")'
    );
    this.productionDesignSubCraftsItem = page
      .locator(
        'section p:has-text("In which of the following options do you have the most experience?")'
      )
      .nth(1);
  }

  //actions
  async selectProductionSubCraft(
    level:
      | 'Design'
      | 'Motion'
      | 'Copywriting (Screenwriter)'
      | 'Production Management'
      | 'Asset Management'
      | 'CGI Artist'
  ) {
    await this.page
      .locator('section._section_1oexq_43 ul li')
      .getByText(level, { exact: true })
      .click();
  }
  async selectProductionDesignSubCraft(
    level:
      | 'Production- Print'
      | 'Creative - Art'
      | 'Creative Design (QA)'
      | 'Production - Final Artwork'
  ) {
    await this.page
      .locator('section._section_1oexq_43 ul li')
      .getByText(level, { exact: true })
      .click();
  }
  async selectProductionExperience(
    level: '0-2 years' | '2-3 years' | '4-6 years' | 'More than 7 years'
  ) {
    await this.page
      .locator('section._section_1oexq_43 ul li')
      .getByText(level, { exact: true })
      .click();
  }
  async selectProductionDesignTools(
    level:
      | 'Photoshop'
      | 'Cinema 4D'
      | 'Maya'
      | 'Illustraitor'
      | 'Figma'
      | 'Digital Assest Management (DAM)'
      | 'Sketch'
      | 'HTML'
      | 'CSS'
      | 'Substance'
      | 'Redshift'
      | 'After Effects'
      | 'In Desing'
      | 'Office Suite'
      | 'Keynote'
      | 'Adobe XD'
      | 'Roblox'
      | 'Adobe Acrobat PDFs'
      | 'Scrum'
      | 'Agile'
  ) {
    await this.page
      .locator('section._section_1oexq_43 ul li')
      .getByText(level, { exact: true })
      .click();
  }

  //assertions
  async isVisibleProductionSubCraftsItem() {
    await expect(this.productionSubCraftsItem).toBeVisible();
  }
  async isVisibleProductionExperienceItem() {
    await expect(this.productionExperienceItem).toBeVisible();
  }
  async isVisibleProductionToolsItem() {
    await expect(this.productionToolsItem).toBeVisible();
  }
  async isVisibleThankYouForAnsweringItem() {
    await expect(this.thankYouForAnsweringItem).toBeVisible();
  }
  async isVisibleProductionDesignSubCraftsItem() {
    await expect(this.productionDesignSubCraftsItem).toBeVisible();
  }
}
