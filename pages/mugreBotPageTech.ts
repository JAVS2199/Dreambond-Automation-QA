import { expect, Locator, Page } from '@playwright/test';

export class MugreBotPageTech {
  private readonly page: Page;
  private readonly thankYouForAnsweringItem: Locator;
  private readonly techSubCraftItem: Locator;
  private readonly techWorkingExperienceItem: Locator;
  private readonly techQAWorkingExperienceItem: Locator;
  private readonly frameworkItem: Locator;
  private readonly optionsExperienceItem: Locator;
  private readonly techContentWorkingExperienceItem: Locator;
  private readonly techProjectManagementWorkingExperienceItem: Locator;
  private readonly techDevopsWorkingExperienceItem: Locator;
  private readonly techEmailWorkingExperienceItem: Locator;
  private readonly techManagementWorkingExperienceItem: Locator;

  constructor(page: Page) {
    this.page = page;
    this.techQAWorkingExperienceItem = page.locator(
      'section p:has-text("What is your experience working in Web Sites Quality Assurance (QA)?")'
    );
    this.techSubCraftItem = page.locator(
      'section p:has-text("In which of the following options do you have the most experience?")'
    );
    this.thankYouForAnsweringItem = page.locator(
      'section p:has-text("Thank you for answering! According to your current skillset i think this would be the perfect possition for you to apply.")'
    );
    this.techWorkingExperienceItem = page.locator(
      'section p:has-text("What is your experience working in Web Development of internal functionality (Back-end)?")'
    );
    this.frameworkItem = page.locator(
      'section p:has-text("Select the Frameworks in which you have experience")'
    );
    this.optionsExperienceItem = page.locator(
      'section p:has-text("Select the options in which you have experience")'
    );
    this.techContentWorkingExperienceItem = page.locator(
      'section p:has-text("What is your experience working in Web Editor Development (Content)?")'
    );
    this.techProjectManagementWorkingExperienceItem = page.locator(
      'section p:has-text("What is your experience working in Project Management (PM)?")'
    );
    this.techDevopsWorkingExperienceItem = page.locator(
      'section p:has-text("What is your experience working in DevOps?")'
    );
    this.techEmailWorkingExperienceItem = page.locator(
      'section p:has-text("What is your experience working in Email?")'
    );
    this.techManagementWorkingExperienceItem = page.locator(
      'section p:has-text("What is your experience working in Management?")'
    );
  }

  //Actions
  async selectTechSubCraft(
    level:
      | 'Web User Experience Development (Front-end)'
      | 'Web Development of internal functionality (Back-end)'
      | 'Web Sites Quality Assurance (QA)'
      | 'Web Editor Development (Content)'
      | 'Project Management (PM)'
      | 'DevOps'
      | 'Email'
      | 'Management'
  ) {
    await this.page
      .locator('[class="_section_1oexq_43"]')
      .locator('[class="_containerAnswer_1oexq_1"]')
      //We have to use the exact: true, otherwise, it could get confused due to the word Management is shared by 'Project Management (PM)' and 'Management'
      .getByText(level, { exact: true })
      .click();
  }
  async selectTechWorkingExperience(
    level: '0-1 years' | '1-3 years' | '4-6 years' | 'More than 7 years'
  ) {
    await this.page
      .locator('[class="_section_1oexq_43"]')
      .locator('[class="_containerAnswer_1oexq_1"]')
      .getByText(level)
      .click();
  }
  async selectTechFrontendFrameworks(level: 'Angular' | 'React' | 'Vue' | 'XT Core') {
    await this.page
      .locator('[class="_section_1oexq_43"]')
      .locator('[class="_containerAnswer_1oexq_1"]')
      .getByText(level)
      .click();
  }
  async selectTechBackendFrameworks(level: 'Java' | '.Net' | 'Node.js' | 'Python' | 'Salesforce') {
    await this.page
      .locator('[class="_section_1oexq_43"]')
      .locator('[class="_containerAnswer_1oexq_1"]')
      .getByText(level)
      .click();
  }
  async selectTechQaOptions(level: 'Functional (Manual Testing)' | 'Automation') {
    //ul tag, ul class, li tag and then label
    const techQaOption = this.page.locator('ul._containerAnswer_1oexq_1 li label', {
      hasText: level,
    });
    await techQaOption.click();
  }
  async selectTechProjectManagementOptions(level: 'Project Manager' | 'Business Analyst') {
    const projectManagementOption = this.page.locator('ul._containerAnswer_1oexq_1 li label', {
      hasText: level,
    });
    await projectManagementOption.click();
  }

  //content assertions
  async techSubCraftItemVisible() {
    await expect(this.techSubCraftItem).toBeVisible();
  }
  async techWorkingExperienceItemVisible() {
    await expect(this.techWorkingExperienceItem).toBeVisible();
  }
  async techQAWorkingExperienceItemVisibile() {
    await expect(this.techQAWorkingExperienceItem).toBeVisible();
  }
  async frameworkItemVisible() {
    await expect(this.frameworkItem).toBeVisible();
  }
  async thankYouForAnsweringItemVisible() {
    await expect(this.thankYouForAnsweringItem).toBeVisible();
  }
  async optionsExperienceItemVisible() {
    await expect(this.optionsExperienceItem).toBeVisible();
  }
  async techContentWorkingExperienceItemVisible() {
    await expect(this.techContentWorkingExperienceItem).toBeVisible();
  }
  async techProjectManagementExperienceQuestionItemVisible() {
    await expect(this.techProjectManagementWorkingExperienceItem).toBeVisible();
  }
  async techDevopsExperienceQuestionItemVisible() {
    await expect(this.techDevopsWorkingExperienceItem).toBeVisible();
  }
  async techEmailExperienceQuestionItemVisible() {
    await expect(this.techEmailWorkingExperienceItem).toBeVisible();
  }
  async techManagementExperienceQuestionItemVisible() {
    await expect(this.techManagementWorkingExperienceItem).toBeVisible();
  }
}
