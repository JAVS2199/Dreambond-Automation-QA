import { expect, Locator, Page } from '@playwright/test';

export class MugreBotPageData {
  private readonly page: Page;
  private readonly dataSubCraftItem: Locator;
  private readonly dataScienceWorkingExperienceItem: Locator;
  private readonly dataAnalysisWorkingExperienceItem: Locator;
  private readonly dataEngineeringWorkingExperienceItem: Locator;
  private readonly toolsItem: Locator;
  private readonly thankYouForAnsweringItem: Locator;
  private readonly dataBIWorkingExperienceItem: Locator;

  constructor(page: Page) {
    this.page = page;

    this.dataSubCraftItem = page.locator(
      'section p:has-text("In which of the following options do you have the most experience?")'
    );
    this.dataScienceWorkingExperienceItem = page.locator(
      'section p:has-text("What is your experience working in Data Science?")'
    );
    this.toolsItem = page.locator(
      'section p:has-text("Select the tools in which you have experience")'
    );
    this.thankYouForAnsweringItem = page.locator(
      'section p:has-text("Thank you for answering! According to your current skillset i think this would be the perfect possition for you to apply.")'
    );
    this.dataAnalysisWorkingExperienceItem = page.locator(
      'section p:has-text("What is your experience working in Data Analytics?")'
    );
    this.dataEngineeringWorkingExperienceItem = page.locator(
      'section p:has-text("What is your experience working in Data Engineering?")'
    );
    this.dataBIWorkingExperienceItem = page.locator(
      'section p:has-text("What is your experience working in BI Engineering?")'
    );
  }

  //actions
  async selectDataSubCraftItem(
    level:
      | 'Data Science'
      | 'Data Analysis'
      | 'Data Engineering'
      | 'BI Engineering (Analysis + Engineering)'
  ) {
    await this.page
      .locator('section._section_1oexq_43 ul li')
      .getByText(level, { exact: true })
      .click();
  }
  async selectWorkingExperience(
    level: '0-1 years' | '1-3 years' | '4-6 years' | 'More than 7 years'
  ) {
    await this.page
      .locator('section._section_1oexq_43')
      .locator('ul._containerAnswer_1oexq_1')
      .locator('label', { hasText: level })
      .click();
  }
  async selectDataScienceTools(
    level:
      | 'SQL'
      | 'Python/R'
      | 'Spark'
      | 'Maching Learning (ML)'
      | 'Cloud'
      | 'SAS/R/Phyton'
      | 'Marketing Mix Models (MMM)'
      | 'Machine Learning Algorithms Development'
      | 'Spark/Hadoop'
      | 'APIs'
      | 'SQL/ETL'
  ) {
    await this.page
      .locator('section._section_1oexq_43 ul li')
      .getByText(level, { exact: true })
      .click();
  }
  async selectDataAnalysisTools(
    level:
      | 'SQL'
      | 'PowerBI'
      | 'Tableau'
      | 'Excel'
      | 'Digital Platforms'
      | 'Data Studio'
      | 'Datorama'
  ) {
    await this.page
      .locator('section._section_1oexq_43 ul li')
      .getByText(level, { exact: true })
      .click();
  }
  async selectDataEngineeringTools(
    level: 'QL/ETL' | 'Python' | 'Spark' | 'Hadoop' | 'Databricks' | 'Airflow' | 'Cloud' | 'APIs'
  ) {
    await this.page
      .locator('section._section_1oexq_43 ul li')
      .getByText(level, { exact: true })
      .click();
  }
  async selectDataBITools(
    level: 'SQL' | 'ETL (Python, SSIS)' | 'PowerBI' | 'Tableau' | 'Qlikview' | 'Qliksense' | 'SSAS'
  ) {
    await this.page
      .locator('section._section_1oexq_43 ul li')
      .getByText(level, { exact: true })
      .click();
  }

  //assertions
  async isVisibleDataSubCraftItem() {
    await expect(this.dataSubCraftItem).toBeVisible();
  }
  async isVisibleDataScienceWorkingExperienceItem() {
    await expect(this.dataScienceWorkingExperienceItem).toBeVisible();
  }
  async isVisibleToolItem() {
    await expect(this.toolsItem).toBeVisible();
  }
  async isVisibleThankYouForAnsweringItem() {
    await expect(this.thankYouForAnsweringItem).toBeVisible();
  }
  async isVisibleDataAnalysisWorkingExperienceItem() {
    await expect(this.dataAnalysisWorkingExperienceItem).toBeVisible();
  }
  async isVisibleDataEngineeringWorkingExperienceItem() {
    await expect(this.dataEngineeringWorkingExperienceItem).toBeVisible();
  }
  async isVisibleDataBIWorkingExperienceItem() {
    await expect(this.dataBIWorkingExperienceItem).toBeVisible();
  }
}
