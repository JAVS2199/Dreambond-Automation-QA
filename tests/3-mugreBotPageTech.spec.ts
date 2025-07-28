import { expect, test } from '@playwright/test';
import { NavigationPage } from '../pages/navigationPage';
import { PickUpFromPreviousConversation } from '../pages/pickUpFromPreviousConversationPage';
import { MugreBotPageGeneral } from '../pages/mugreBotPageGeneral';
import { MugreBotPageTech } from '../pages/mugreBotPageTech';
import { HelpMefFindAnIdealJobPage } from '../pages/helpMeFindAnIdealJob';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByAltText('Avatar of mugre').click();
});

test.describe.skip(
  'TC-MBFT-04 - Completing an end-to-end craft selection (Web User Experience Development (Front-end) as a sub-craft of Tech) flow in the Mugre Bot to display final positions',
  () => {
    test('Create a unique username and then complete the frontend workflow', async ({ page }) => {
      await test.step('Create a unique username', async () => {
        const navigateTo = new NavigationPage(page);
        await navigateTo.HelpMeFindAnIdealJobForm();
        const helpMeFindAnIdealJob = new HelpMefFindAnIdealJobPage(page);
        //When I input a valid full name
        await helpMeFindAnIdealJob.fullNameFieldFillOut('Andres Valverde Tech');
        //And I input a valid email address
        await helpMeFindAnIdealJob.emailFieldFillOut('andres.valverde.tech.front-end@digitas.com');
        //And I select the country of residence
        await helpMeFindAnIdealJob.countryDropdown('Colombia');
        //And I input a valid phone number
        await helpMeFindAnIdealJob.phoneNumberFieldFillOut('70701754');
        //And I click on the "Privacy Policies" checkbox
        await helpMeFindAnIdealJob.privacyPoliciesCheck();
        //And I click on "Chat now"
        await helpMeFindAnIdealJob.chatNowButton();
        const firstPrompt = page.locator(
          ':text("I´m going to ask you some questions so I can match you with the perfect job for your skills.")'
        );
        let mugreBotSays =
          'I´m going to ask you some questions so I can match you with the perfect job for your skills. The questions will be relevant to the specific area of your interest. Do you have a couple of minutes?';
        await expect(firstPrompt).toHaveText(mugreBotSays);
      });
      await test.step('Complete the frontend workflow', async ({}) => {
        //Given I am on the Mugre Bot functionality
        const mugreBotPage = new MugreBotPageGeneral(page);
        // When I click "Yes" in the first prompt
        await mugreBotPage.yesItemClick();
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question related to my English level.
        // When I click "C1 - Advanced"
        await mugreBotPage.selectEnglishLevel('C1 - Advanced');
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question related to the permissions to work in the country
        // When I click "Yes, I am a citizen"
        await mugreBotPage.selectWorkPermissions('Yes, I am a citizen');
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question related to the vertical
        // When I click "Tech"
        await mugreBotPage.selectJobVertical('Tech');
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question related to the answers provided before
        const mugreBotPageTech = new MugreBotPageTech(page);
        // When I click "Yes"
        await mugreBotPage.clickYesTemporalQuestionConfirmation();
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question about the sub-crafts related to the Tech vertical
        // When I click "Web User Experience Development (Front-end)"
        await mugreBotPageTech.selectTechSubCraft('Web User Experience Development (Front-end)');
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question about the experience working in the sub-craft
        // When I click "0-1 years"
        await mugreBotPageTech.selectTechWorkingExperience('0-1 years');
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question about the Frameworks in which I have experience
        // When I click "Angular, React, Vue"
        await mugreBotPageTech.selectTechFrontendFrameworks('Angular');
        await mugreBotPageTech.selectTechFrontendFrameworks('React');
        await mugreBotPageTech.selectTechFrontendFrameworks('Vue');
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        //   Then I should receive a question related to the answers provided before
        await mugreBotPage.temporalQuestionItemLastVisible();
        // When I click "Yes"
        await mugreBotPage.clickYesTemporalQuestionConfirmationEnd();
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should make the list of positions available according to the workflow I selected
        await mugreBotPageTech.thankYouForAnsweringItemVisible();
      });
    });
  }
);
test.describe.skip(
  'TC-MBFT-07 - Completing an end-to-end craft selection (Web Development of internal functionality (Back-end) as a sub-craft of Tech) flow in the Mugre Bot to display final positions',
  () => {
    test('Create a unique username and then complete the backend workflow', async ({ page }) => {
      await test.step('Create a unique username', async () => {
        const navigateTo = new NavigationPage(page);
        await navigateTo.HelpMeFindAnIdealJobForm();
        const helpMeFindAnIdealJob = new HelpMefFindAnIdealJobPage(page);
        //When I input a valid full name
        await helpMeFindAnIdealJob.fullNameFieldFillOut('Andres Valverde Tech');
        //And I input a valid email address
        await helpMeFindAnIdealJob.emailFieldFillOut('andres.valverde.tech.backend00@digitas.com');
        //And I select the country of residence
        await helpMeFindAnIdealJob.countryDropdown('Colombia');
        //And I input a valid phone number
        await helpMeFindAnIdealJob.phoneNumberFieldFillOut('70701754');
        //And I click on the "Privacy Policies" checkbox
        await helpMeFindAnIdealJob.privacyPoliciesCheck();
        //And I click on "Chat now"
        await helpMeFindAnIdealJob.chatNowButton();
        const firstPrompt = page.locator(
          ':text("I´m going to ask you some questions so I can match you with the perfect job for your skills.")'
        );
        let mugreBotSays =
          'I´m going to ask you some questions so I can match you with the perfect job for your skills. The questions will be relevant to the specific area of your interest. Do you have a couple of minutes?';
        await expect(firstPrompt).toHaveText(mugreBotSays);
      });
      await test.step('Complete the backend workflow', async () => {
        // Given I am on the Mugre Bot functionality
        const mugreBotPageGeneral = new MugreBotPageGeneral(page);

        // When I click "Yes" in the first prompt
        await mugreBotPageGeneral.yesItemClick();

        // And I hit the submit/send button
        await mugreBotPageGeneral.mainButtonClick();

        // Then I should receive a question related to my English level.
        await mugreBotPageGeneral.englishLevelQuestionItemVisible();

        // When I click "C1 - Advanced"
        await mugreBotPageGeneral.selectEnglishLevel('C1 - Advanced');

        // And I hit the submit/send button
        await mugreBotPageGeneral.mainButtonClick();

        // Then I should receive a question related to the permissions to work in the country
        await mugreBotPageGeneral.permissionsToWorkQuestionItemVisible();

        // When I click "Yes, I am a citizen"
        await mugreBotPageGeneral.selectWorkPermissions('Yes, I am a citizen');

        // And I hit the submit/send button
        await mugreBotPageGeneral.mainButtonClick();

        // Then I should receive a question related to the vertical
        await mugreBotPageGeneral.jobVerticalQuestionItemVisible();

        // When I click "Tech"
        await mugreBotPageGeneral.selectJobVertical('Tech');

        // And I hit the submit/send button
        await mugreBotPageGeneral.mainButtonClick();

        // Then I should receive a question related to the answers provided before
        await mugreBotPageGeneral.temporalQuestionItemFirstVisible();

        // When I click "Yes"
        await mugreBotPageGeneral.clickYesTemporalQuestionConfirmation();

        // And I hit the submit/send button
        await mugreBotPageGeneral.mainButtonClick();

        // Then I should receive a question about the sub-crafts related to the Tech vertical
        const mugreBotPageTech = new MugreBotPageTech(page);
        await mugreBotPageTech.techSubCraftItemVisible();

        // When I click "Web Development of internal functionality (Back-end)"
        await mugreBotPageTech.selectTechSubCraft(
          'Web Development of internal functionality (Back-end)'
        );

        // And I hit the submit/send button
        await mugreBotPageGeneral.mainButtonClick();

        // Then I should receive a question about the experience working in the sub-craft
        await mugreBotPageTech.techWorkingExperienceItemVisible();

        // When I click "1-3 years"
        await mugreBotPageTech.selectTechWorkingExperience('1-3 years');

        // And I hit the submit/send button
        await mugreBotPageGeneral.mainButtonClick();

        // Then I should receive a question about the Frameworks in which I have experience
        await mugreBotPageTech.frameworkItemVisible();

        // When I click "Java .Net Node.js Python Salesforce"
        await mugreBotPageTech.selectTechBackendFrameworks('Java');
        await mugreBotPageTech.selectTechBackendFrameworks('.Net');
        await mugreBotPageTech.selectTechBackendFrameworks('Node.js');
        await mugreBotPageTech.selectTechBackendFrameworks('Python');
        await mugreBotPageTech.selectTechBackendFrameworks('Salesforce');

        // And I hit the submit/send button
        await mugreBotPageGeneral.mainButtonClick();

        // Then I should receive a question related to the answers provided before
        await mugreBotPageGeneral.temporalQuestionItemLastVisible();
        // When I click "Yes"
        await mugreBotPageGeneral.clickYesTemporalQuestionConfirmationEnd();
        // And I hit the submit/send button
        await mugreBotPageGeneral.mainButtonClick();

        // Then I should make the list of positions available according to the workflow I selected
        await mugreBotPageTech.thankYouForAnsweringItemVisible();
      });
    });
  }
);
test.describe.skip(
  'TC-MBFT-10 - Completing an end-to-end craft selection (Web Sites Quality Assurance (QA Manual) as a sub-craft of Tech) flow in the Mugre Bot to display final positions',
  () => {
    test('Create a unique username and then complete the QA Manual workflow', async ({ page }) => {
      await test.step('Create a unique username', async () => {
        const navigateTo = new NavigationPage(page);
        await navigateTo.HelpMeFindAnIdealJobForm();
        const helpMeFindAnIdealJob = new HelpMefFindAnIdealJobPage(page);
        //When I input a valid full name
        await helpMeFindAnIdealJob.fullNameFieldFillOut('Andres Valverde Tech');
        //And I input a valid email address
        await helpMeFindAnIdealJob.emailFieldFillOut('andres.valverde.tech.qa-manual@digitas.com');
        //And I select the country of residence
        await helpMeFindAnIdealJob.countryDropdown('Colombia');
        //And I input a valid phone number
        await helpMeFindAnIdealJob.phoneNumberFieldFillOut('70701754');
        //And I click on the "Privacy Policies" checkbox
        await helpMeFindAnIdealJob.privacyPoliciesCheck();
        //And I click on "Chat now"
        await helpMeFindAnIdealJob.chatNowButton();
        const firstPrompt = page.locator(
          ':text("I´m going to ask you some questions so I can match you with the perfect job for your skills.")'
        );
        let mugreBotSays =
          'I´m going to ask you some questions so I can match you with the perfect job for your skills. The questions will be relevant to the specific area of your interest. Do you have a couple of minutes?';
        await expect(firstPrompt).toHaveText(mugreBotSays);
      });
      await test.step('Complete the QA Manual workflow', async () => {
        // Given I am on the Mugre Bot functionality
        const mugreBotPage = new MugreBotPageGeneral(page);
        // When I click "Yes" in the first prompt
        await mugreBotPage.yesItemClick();
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question related to my English level.
        await mugreBotPage.englishLevelQuestionItemVisible();
        // When I click "C1 - Advanced"
        await mugreBotPage.selectEnglishLevel('C1 - Advanced');
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question related to the permissions to work in the country
        await mugreBotPage.permissionsToWorkQuestionItemVisible();
        // When I click "Yes, I am a citizen"
        await mugreBotPage.selectWorkPermissions('Yes, I am a citizen');
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question related to the vertical
        await mugreBotPage.jobVerticalQuestionItemVisible();
        // When I click "Tech"
        await mugreBotPage.selectJobVertical('Tech');
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question related to the answers provided before
        await mugreBotPage.temporalQuestionItemFirstVisible();
        // When I click "Yes"
        await mugreBotPage.clickYesTemporalQuestionConfirmation();
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();

        // Then I should receive a question about the sub-crafts related to the Tech vertical
        const mugreBotPageTech = new MugreBotPageTech(page);
        await mugreBotPageTech.techSubCraftItemVisible();
        // When I click "Web Sites Quality Assurance (QA)"
        await mugreBotPageTech.selectTechSubCraft('Web Sites Quality Assurance (QA)');
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question about the experience working in the sub-craft
        await mugreBotPageTech.techQAWorkingExperienceItemVisibile();
        // When I click "4-6 years"
        await mugreBotPageTech.selectTechWorkingExperience('4-6 years');
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question about the area of expertise related to the QA sub-craft
        await mugreBotPageTech.optionsExperienceItemVisible();
        // When I click "Functional (Manual Testing)"
        await mugreBotPageTech.selectTechQaOptions('Functional (Manual Testing)');
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question related to the answers provided before
        await mugreBotPage.temporalQuestionItemLastVisible();
        // When I click "Yes"
        await mugreBotPage.clickYesTemporalQuestionConfirmationEnd();
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive the available job positions according to the workflow I selected
        await mugreBotPageTech.thankYouForAnsweringItemVisible();
      });
    });
  }
);
test.describe.skip(
  'TC-MBFT-11 - Completing an end-to-end craft selection (Web Sites Quality Assurance (QA Automation) as a sub-craft of Tech) flow in the Mugre Bot to display final positions',
  () => {
    test('Create a unique username and then complete the QA Automation workflow', async ({
      page,
    }) => {
      await test.step('Create a unique username', async () => {
        const navigateTo = new NavigationPage(page);
        await navigateTo.HelpMeFindAnIdealJobForm();
        const helpMeFindAnIdealJob = new HelpMefFindAnIdealJobPage(page);
        //When I input a valid full name
        await helpMeFindAnIdealJob.fullNameFieldFillOut('Andres Valverde Tech');
        //And I input a valid email address
        await helpMeFindAnIdealJob.emailFieldFillOut(
          'andres.valverde.tech.qa-automation@digitas.com'
        );
        //And I select the country of residence
        await helpMeFindAnIdealJob.countryDropdown('Colombia');
        //And I input a valid phone number
        await helpMeFindAnIdealJob.phoneNumberFieldFillOut('70701754');
        //And I click on the "Privacy Policies" checkbox
        await helpMeFindAnIdealJob.privacyPoliciesCheck();
        //And I click on "Chat now"
        await helpMeFindAnIdealJob.chatNowButton();
        const firstPrompt = page.locator(
          ':text("I´m going to ask you some questions so I can match you with the perfect job for your skills.")'
        );
        let mugreBotSays =
          'I´m going to ask you some questions so I can match you with the perfect job for your skills. The questions will be relevant to the specific area of your interest. Do you have a couple of minutes?';
        await expect(firstPrompt).toHaveText(mugreBotSays);
      });
      await test.step('Complete the QA Automation workflow', async () => {
        // Given I am on the Mugre Bot functionality
        const mugreBotPage = new MugreBotPageGeneral(page);
        // When I click "Yes" in the first prompt
        await mugreBotPage.yesItemClick();
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question related to my English level.
        await mugreBotPage.englishLevelQuestionItemVisible();
        // When I click "C1 - Advanced"
        await mugreBotPage.selectEnglishLevel('C1 - Advanced');
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question related to the permissions to work in the country
        await mugreBotPage.permissionsToWorkQuestionItemVisible();
        // When I click "Yes, I am a citizen"
        await mugreBotPage.selectWorkPermissions('Yes, I am a citizen');
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question related to the vertical
        await mugreBotPage.jobVerticalQuestionItemVisible();
        // When I click "Tech"
        await mugreBotPage.selectJobVertical('Tech');
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question related to the answers provided before
        await mugreBotPage.temporalQuestionItemFirstVisible();
        // When I click "Yes"
        await mugreBotPage.clickYesTemporalQuestionConfirmation();
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();

        // Then I should receive a question about the sub-crafts related to the Tech vertical
        const mugreBotPageTech = new MugreBotPageTech(page);
        await mugreBotPageTech.techSubCraftItemVisible();
        // When I click "Web Sites Quality Assurance (QA)"
        await mugreBotPageTech.selectTechSubCraft('Web Sites Quality Assurance (QA)');
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question about the experience working in the sub-craft
        await mugreBotPageTech.techQAWorkingExperienceItemVisibile();
        // When I click "4-6 years"
        await mugreBotPageTech.selectTechWorkingExperience('4-6 years');
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question about the area of expertise related to the QA sub-craft
        await mugreBotPageTech.optionsExperienceItemVisible();
        // When I click "Functional (Manual Testing)"
        await mugreBotPageTech.selectTechQaOptions('Automation');
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question related to the answers provided before
        await mugreBotPage.temporalQuestionItemLastVisible();
        // When I click "Yes"
        await mugreBotPage.clickYesTemporalQuestionConfirmationEnd();
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive the available job positions according to the workflow I selected
        await mugreBotPageTech.thankYouForAnsweringItemVisible();
      });
    });
  }
);
test.describe.skip(
  'TC-MBFT-14 - Completing an end-to-end craft selection (Project Management (PM) as a sub-craft of Tech) flow in the Mugre Bot to display final positions',
  () => {
    test('Create a unique username and then complete the Project Management (PM) workflow', async ({
      page,
    }) => {
      await test.step('Create a unique username', async () => {
        const navigateTo = new NavigationPage(page);
        await navigateTo.HelpMeFindAnIdealJobForm();
        const helpMeFindAnIdealJob = new HelpMefFindAnIdealJobPage(page);
        //When I input a valid full name
        await helpMeFindAnIdealJob.fullNameFieldFillOut('Andres Valverde Tech');
        //And I input a valid email address
        await helpMeFindAnIdealJob.emailFieldFillOut('andres.valverde.tech.pm@digitas.com');
        //And I select the country of residence
        await helpMeFindAnIdealJob.countryDropdown('Colombia');
        //And I input a valid phone number
        await helpMeFindAnIdealJob.phoneNumberFieldFillOut('70701754');
        //And I click on the "Privacy Policies" checkbox
        await helpMeFindAnIdealJob.privacyPoliciesCheck();
        //And I click on "Chat now"
        await helpMeFindAnIdealJob.chatNowButton();
        const firstPrompt = page.locator(
          ':text("I´m going to ask you some questions so I can match you with the perfect job for your skills.")'
        );
        let mugreBotSays =
          'I´m going to ask you some questions so I can match you with the perfect job for your skills. The questions will be relevant to the specific area of your interest. Do you have a couple of minutes?';
        await expect(firstPrompt).toHaveText(mugreBotSays);
      });
      await test.step('Complete the Project Management (PM) workflow', async () => {
        // Given I am on the Mugre Bot functionality
        const mugreBotPage = new MugreBotPageGeneral(page);
        // When I click "Yes" in the first prompt
        await mugreBotPage.yesItemClick();
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question related to my English level.
        await mugreBotPage.englishLevelQuestionItemVisible();
        // When I click "C1 - Advanced"
        await mugreBotPage.selectEnglishLevel('C1 - Advanced');
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question related to the permissions to work in the country
        await mugreBotPage.permissionsToWorkQuestionItemVisible();
        // When I click "Yes, I am a citizen"
        await mugreBotPage.selectWorkPermissions('Yes, I am a citizen');
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question related to the vertical
        await mugreBotPage.jobVerticalQuestionItemVisible();
        // When I click "Tech"
        await mugreBotPage.selectJobVertical('Tech');
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question related to the answers provided before
        await mugreBotPage.temporalQuestionItemFirstVisible();
        // When I click "Yes"
        await mugreBotPage.clickYesTemporalQuestionConfirmation();
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question about the sub-crafts related to the Tech vertical
        const mugreBotPageTech = new MugreBotPageTech(page);
        await mugreBotPageTech.techSubCraftItemVisible();
        // When I click "Project Management (PM)"
        await mugreBotPageTech.selectTechSubCraft('Project Management (PM)');
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();

        // Then I should receive another question related to the experience working in that sub-craft
        await mugreBotPageTech.techProjectManagementExperienceQuestionItemVisible();
        // When I click "More than 7 years"
        await mugreBotPageTech.selectTechWorkingExperience('More than 7 years');
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive another question related to the area of expertise of the sub-craft
        await mugreBotPageTech.optionsExperienceItemVisible();
        // When I click "Project Manager"
        await mugreBotPageTech.selectTechProjectManagementOptions('Project Manager');
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question related to the answers provided before
        await mugreBotPage.temporalQuestionItemLastVisible();
        // When I click "Yes"
        await mugreBotPage.clickYesTemporalQuestionConfirmationEnd();
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive the available job positions according to the workflow I selected
        await mugreBotPageTech.thankYouForAnsweringItemVisible();
      });
    });
  }
);
test.describe.skip(
  'TC-MBFT-15 - Completing an end-to-end craft selection (Project Management (PM) as a sub-craft of Tech) flow in the Mugre Bot to display final positions',
  () => {
    test('Create a unique username and then complete the Project Management (PM) workflow selecting both PM and BU', async ({
      page,
    }) => {
      await test.step('Create a unique username', async () => {
        const navigateTo = new NavigationPage(page);
        await navigateTo.HelpMeFindAnIdealJobForm();
        const helpMeFindAnIdealJob = new HelpMefFindAnIdealJobPage(page);
        //When I input a valid full name
        await helpMeFindAnIdealJob.fullNameFieldFillOut('Andres Valverde Tech');
        //And I input a valid email address
        await helpMeFindAnIdealJob.emailFieldFillOut('andres.valverde.tech.pm_bu@digitas.com');
        //And I select the country of residence
        await helpMeFindAnIdealJob.countryDropdown('Colombia');
        //And I input a valid phone number
        await helpMeFindAnIdealJob.phoneNumberFieldFillOut('70701754');
        //And I click on the "Privacy Policies" checkbox
        await helpMeFindAnIdealJob.privacyPoliciesCheck();
        //And I click on "Chat now"
        await helpMeFindAnIdealJob.chatNowButton();
        const firstPrompt = page.locator(
          ':text("I´m going to ask you some questions so I can match you with the perfect job for your skills.")'
        );
        let mugreBotSays =
          'I´m going to ask you some questions so I can match you with the perfect job for your skills. The questions will be relevant to the specific area of your interest. Do you have a couple of minutes?';
        await expect(firstPrompt).toHaveText(mugreBotSays);
      });
      await test.step('Complete the Project Management (PM) workflow selecting both PM and BU', async () => {
        // Given I am on the Mugre Bot functionality
        const mugreBotPage = new MugreBotPageGeneral(page);
        // When I click "Yes" in the first prompt
        await mugreBotPage.yesItemClick();
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question related to my English level.
        await mugreBotPage.englishLevelQuestionItemVisible();
        // When I click "C1 - Advanced"
        await mugreBotPage.selectEnglishLevel('C1 - Advanced');
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question related to the permissions to work in the country
        await mugreBotPage.permissionsToWorkQuestionItemVisible();
        // When I click "Yes, I am a citizen"
        await mugreBotPage.selectWorkPermissions('Yes, I am a citizen');
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question related to the vertical
        await mugreBotPage.jobVerticalQuestionItemVisible();
        // When I click "Tech"
        await mugreBotPage.selectJobVertical('Tech');
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question related to the answers provided before
        await mugreBotPage.temporalQuestionItemFirstVisible();
        // When I click "Yes"
        await mugreBotPage.clickYesTemporalQuestionConfirmation();
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question about the sub-crafts related to the Tech vertical
        const mugreBotPageTech = new MugreBotPageTech(page);
        await mugreBotPageTech.techSubCraftItemVisible();
        // When I click "Project Management (PM)"
        await mugreBotPageTech.selectTechSubCraft('Project Management (PM)');
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();

        // Then I should receive another question related to the experience working in that sub-craft
        await mugreBotPageTech.techProjectManagementExperienceQuestionItemVisible();
        // When I click "More than 7 years"
        await mugreBotPageTech.selectTechWorkingExperience('More than 7 years');
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive another question related to the area of expertise of the sub-craft
        await mugreBotPageTech.optionsExperienceItemVisible();
        // When I click "Project Manager" and "Business Analyst"
        await mugreBotPageTech.selectTechProjectManagementOptions('Project Manager');
        await mugreBotPageTech.selectTechProjectManagementOptions('Business Analyst');
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question related to the answers provided before
        await mugreBotPage.temporalQuestionItemLastVisible();
        // When I click "Yes"
        await mugreBotPage.clickYesTemporalQuestionConfirmationEnd();
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive the available job positions according to the workflow I selected
        await mugreBotPageTech.thankYouForAnsweringItemVisible();
      });
    });
  }
);
test.describe.skip(
  'TC-MBFT-18 - Completing an end-to-end craft selection (Web Editor Development (Content) as a sub-craft of Tech) flow in the Mugre Bot to display final positions',
  () => {
    test('Create a unique username and then complete the Web Editor Development (Content) workflow', async ({
      page,
    }) => {
      await test.step('Create a unique username', async () => {
        const navigateTo = new NavigationPage(page);
        await navigateTo.HelpMeFindAnIdealJobForm();
        const helpMeFindAnIdealJob = new HelpMefFindAnIdealJobPage(page);
        //When I input a valid full name
        await helpMeFindAnIdealJob.fullNameFieldFillOut('Andres Valverde Tech');
        //And I input a valid email address
        await helpMeFindAnIdealJob.emailFieldFillOut('andres.valverde.tech.content@digitas.com');
        //And I select the country of residence
        await helpMeFindAnIdealJob.countryDropdown('Colombia');
        //And I input a valid phone number
        await helpMeFindAnIdealJob.phoneNumberFieldFillOut('70701754');
        //And I click on the "Privacy Policies" checkbox
        await helpMeFindAnIdealJob.privacyPoliciesCheck();
        //And I click on "Chat now"
        await helpMeFindAnIdealJob.chatNowButton();
        const firstPrompt = page.locator(
          ':text("I´m going to ask you some questions so I can match you with the perfect job for your skills.")'
        );
        let mugreBotSays =
          'I´m going to ask you some questions so I can match you with the perfect job for your skills. The questions will be relevant to the specific area of your interest. Do you have a couple of minutes?';
        await expect(firstPrompt).toHaveText(mugreBotSays);
      });
      await test.step('Complete the Web Editor Development (Content) workflow', async () => {
        //   Given I am on the Mugre Bot functionality
        const mugreBotPageGeneral = new MugreBotPageGeneral(page);
        // When I click "Yes" in the first prompt
        await mugreBotPageGeneral.yesItemClick();
        // And I hit the submit/send button
        await mugreBotPageGeneral.mainButtonClick();
        // Then I should receive a question related to my English level.
        await mugreBotPageGeneral.englishLevelQuestionItemVisible();
        // When I click "C1 - Advanced"
        await mugreBotPageGeneral.selectEnglishLevel('C1 - Advanced');
        // And I hit the submit/send button
        await mugreBotPageGeneral.mainButtonClick();
        // Then I should receive a question related to the permissions to work in the country
        await mugreBotPageGeneral.permissionsToWorkQuestionItemVisible();
        // When I click "Yes, I am a citizen"
        await mugreBotPageGeneral.selectWorkPermissions('Yes, I am a citizen');
        // And I hit the submit/send button
        await mugreBotPageGeneral.mainButtonClick();
        // Then I should receive a question related to the vertical
        await mugreBotPageGeneral.jobVerticalQuestionItemVisible();
        // When I click "Tech"
        await mugreBotPageGeneral.selectJobVertical('Tech');
        // And I hit the submit/send button
        await mugreBotPageGeneral.mainButtonClick();
        // Then I should receive a question related to the answers provided before
        await mugreBotPageGeneral.temporalQuestionItemFirstVisible();
        // When I click "Yes"
        await mugreBotPageGeneral.clickYesTemporalQuestionConfirmation();
        // And I hit the submit/send button
        await mugreBotPageGeneral.mainButtonClick();
        // Then I should receive a question about the sub-crafts related to the Tech vertical
        const mugreBotPageTech = new MugreBotPageTech(page);
        await mugreBotPageTech.techSubCraftItemVisible();
        // When I click "Web Editor Development (Content)"
        await mugreBotPageTech.selectTechSubCraft('Web Editor Development (Content)');
        // And I hit the submit/send button
        await mugreBotPageGeneral.mainButtonClick();
        // Then I should receive a question about the experience working in the sub-craft
        await mugreBotPageTech.techContentWorkingExperienceItemVisible();
        // When I click "4-6 years"
        await mugreBotPageTech.selectTechWorkingExperience('4-6 years');
        // And I hit the submit/send button
        await mugreBotPageGeneral.mainButtonClick();
        // Then I should receive a question related to the answers provided before
        await mugreBotPageGeneral.temporalQuestionItemLastVisible();
        // When I click "Yes"
        await mugreBotPageGeneral.clickYesTemporalQuestionConfirmationEnd();
        // And I hit the submit/send button
        await mugreBotPageGeneral.mainButtonClick();
        // Then I should make the list of positions available according to the workflow I selected
        await mugreBotPageTech.thankYouForAnsweringItemVisible();
      });
    });
  }
);
test.describe.skip(
  'TC-MBFT-20 - Completing an end-to-end craft selection (DevOps as a sub-craft of Tech) flow in the Mugre Bot to display final positions',
  () => {
    test('Create a unique username and then complete the DevOps workflow', async ({ page }) => {
      await test.step('Create a unique username', async () => {
        const navigateTo = new NavigationPage(page);
        await navigateTo.HelpMeFindAnIdealJobForm();
        const helpMeFindAnIdealJob = new HelpMefFindAnIdealJobPage(page);
        //When I input a valid full name
        await helpMeFindAnIdealJob.fullNameFieldFillOut('Andres Valverde Tech');
        //And I input a valid email address
        await helpMeFindAnIdealJob.emailFieldFillOut('andres.valverde.tech.devops@digitas.com');
        //And I select the country of residence
        await helpMeFindAnIdealJob.countryDropdown('Colombia');
        //And I input a valid phone number
        await helpMeFindAnIdealJob.phoneNumberFieldFillOut('70701754');
        //And I click on the "Privacy Policies" checkbox
        await helpMeFindAnIdealJob.privacyPoliciesCheck();
        //And I click on "Chat now"
        await helpMeFindAnIdealJob.chatNowButton();
        const firstPrompt = page.locator(
          ':text("I´m going to ask you some questions so I can match you with the perfect job for your skills.")'
        );
        let mugreBotSays =
          'I´m going to ask you some questions so I can match you with the perfect job for your skills. The questions will be relevant to the specific area of your interest. Do you have a couple of minutes?';
        await expect(firstPrompt).toHaveText(mugreBotSays);
      });
      await test.step('Complete the Web Editor Development (Content) workflow', async () => {
        // Given I am on the Mugre Bot functionality
        const mugreBotPage = new MugreBotPageGeneral(page);
        // When I click "Yes" in the first prompt
        await mugreBotPage.yesItemClick();
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question related to my English level.
        await mugreBotPage.englishLevelQuestionItemVisible();
        // When I click "C1 - Advanced"
        await mugreBotPage.selectEnglishLevel('C1 - Advanced');
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question related to the permissions to work in the country
        await mugreBotPage.permissionsToWorkQuestionItemVisible();
        // When I click "Yes, I am a citizen"
        await mugreBotPage.selectWorkPermissions('Yes, I am a citizen');
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question related to the vertical
        await mugreBotPage.jobVerticalQuestionItemVisible();
        // When I click "Tech"
        await mugreBotPage.selectJobVertical('Tech');
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question related to the answers provided before
        await mugreBotPage.temporalQuestionItemFirstVisible();
        // When I click "Yes"
        await mugreBotPage.clickYesTemporalQuestionConfirmation();
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question about the sub-crafts related to the Tech vertical
        const mugreBotPageTech = new MugreBotPageTech(page);
        await mugreBotPageTech.techSubCraftItemVisible();
        //   When I click "DevOps"
        await mugreBotPageTech.selectTechSubCraft('DevOps');
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive another question related to the experience working in that sub-craft
        await mugreBotPageTech.techDevopsExperienceQuestionItemVisible();
        // When I click "4-6 years"
        await mugreBotPageTech.selectTechWorkingExperience('4-6 years');
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question related to the answers provided before
        await mugreBotPage.temporalQuestionItemLastVisible();
        // When I click "Yes"
        await mugreBotPage.clickYesTemporalQuestionConfirmationEnd();
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should make the list of positions available according to the workflow I selected
        await mugreBotPageTech.thankYouForAnsweringItemVisible();
      });
    });
  }
);
test.describe.skip(
  'TC-MBFT-22 - Completing an end-to-end craft selection (Email as a sub-craft of Tech) flow in the Mugre Bot to display final positions',
  () => {
    test('Create a unique username and then complete the Email workflow', async ({ page }) => {
      await test.step('Create a unique username', async () => {
        const navigateTo = new NavigationPage(page);
        await navigateTo.HelpMeFindAnIdealJobForm();
        const helpMeFindAnIdealJob = new HelpMefFindAnIdealJobPage(page);
        //When I input a valid full name
        await helpMeFindAnIdealJob.fullNameFieldFillOut('Andres Valverde Tech');
        //And I input a valid email address
        await helpMeFindAnIdealJob.emailFieldFillOut('andres.valverde.tech.email@digitas.com');
        //And I select the country of residence
        await helpMeFindAnIdealJob.countryDropdown('Colombia');
        //And I input a valid phone number
        await helpMeFindAnIdealJob.phoneNumberFieldFillOut('70701754');
        //And I click on the "Privacy Policies" checkbox
        await helpMeFindAnIdealJob.privacyPoliciesCheck();
        //And I click on "Chat now"
        await helpMeFindAnIdealJob.chatNowButton();
        const firstPrompt = page.locator(
          ':text("I´m going to ask you some questions so I can match you with the perfect job for your skills.")'
        );
        let mugreBotSays =
          'I´m going to ask you some questions so I can match you with the perfect job for your skills. The questions will be relevant to the specific area of your interest. Do you have a couple of minutes?';
        await expect(firstPrompt).toHaveText(mugreBotSays);
      });
      await test.step('Complete the Email workflow', async () => {
        //   Given I am on the Mugre Bot functionality
        const mugreBotPage = new MugreBotPageGeneral(page);
        // When I click "Yes" in the first prompt
        await mugreBotPage.yesItemClick();
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question related to my English level.
        await mugreBotPage.englishLevelQuestionItemVisible();
        // When I click "C1 - Advanced"
        await mugreBotPage.selectEnglishLevel('C1 - Advanced');
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question related to the permissions to work in the country
        await mugreBotPage.permissionsToWorkQuestionItemVisible();
        // When I click "Yes, I am a citizen"
        await mugreBotPage.selectWorkPermissions('Yes, I am a citizen');
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question related to the vertical
        await mugreBotPage.jobVerticalQuestionItemVisible();
        // When I click "Tech"
        await mugreBotPage.selectJobVertical('Tech');
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question related to the answers provided before
        await mugreBotPage.temporalQuestionItemFirstVisible();
        // When I click "Yes"
        await mugreBotPage.clickYesTemporalQuestionConfirmation();
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question about the sub-crafts related to the Tech vertical
        const mugreBotPageTech = new MugreBotPageTech(page);
        await mugreBotPageTech.techSubCraftItemVisible();
        // When I click "Email"
        await mugreBotPageTech.selectTechSubCraft('Email');
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive another question related to the experience working in that sub-craft
        await mugreBotPageTech.techEmailExperienceQuestionItemVisible();
        // When I click "1-3 years"
        await mugreBotPageTech.selectTechWorkingExperience('1-3 years');
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should receive a question related to the answers provided before
        await mugreBotPage.temporalQuestionItemLastVisible();
        // When I click "Yes"
        await mugreBotPage.clickYesTemporalQuestionConfirmationEnd();
        // And I hit the submit/send button
        await mugreBotPage.mainButtonClick();
        // Then I should make the list of positions available according to the workflow I selected
        await mugreBotPageTech.thankYouForAnsweringItemVisible();
      });
    });
  }
);

test.describe('TC-MBFT-2 - Completing an end-to-end craft selection (Management as a sub-craft of Tech) flow in the Mugre Bot to display final positions', () => {
  test('Create a unique username and then complete the Management workflow', async ({ page }) => {
    await test.step('Create a unique username', async () => {
      const navigateTo = new NavigationPage(page);
      await navigateTo.HelpMeFindAnIdealJobForm();
      const helpMeFindAnIdealJob = new HelpMefFindAnIdealJobPage(page);
      //When I input a valid full name
      await helpMeFindAnIdealJob.fullNameFieldFillOut('Andres Valverde Tech');
      //And I input a valid email address
      await helpMeFindAnIdealJob.emailFieldFillOut('andres.valverde.tech.management@digitas.com');
      //And I select the country of residence
      await helpMeFindAnIdealJob.countryDropdown('Colombia');
      //And I input a valid phone number
      await helpMeFindAnIdealJob.phoneNumberFieldFillOut('70701754');
      //And I click on the "Privacy Policies" checkbox
      await helpMeFindAnIdealJob.privacyPoliciesCheck();
      //And I click on "Chat now"
      await helpMeFindAnIdealJob.chatNowButton();
      const firstPrompt = page.locator(
        ':text("I´m going to ask you some questions so I can match you with the perfect job for your skills.")'
      );
      let mugreBotSays =
        'I´m going to ask you some questions so I can match you with the perfect job for your skills. The questions will be relevant to the specific area of your interest. Do you have a couple of minutes?';
      await expect(firstPrompt).toHaveText(mugreBotSays);
    });
    await test.step('Complete the Management workflow', async () => {
      // Given I am on the Mugre Bot functionality
      const mugreBotPage = new MugreBotPageGeneral(page);
      // When I click "Yes" in the first prompt
      await mugreBotPage.yesItemClick();
      // And I hit the submit/send button
      await mugreBotPage.mainButtonClick();
      // Then I should receive a question related to my English level.
      await mugreBotPage.englishLevelQuestionItemVisible();
      // When I click "C1 - Advanced"
      await mugreBotPage.selectEnglishLevel('C1 - Advanced');
      // And I hit the submit/send button
      await mugreBotPage.mainButtonClick();
      // Then I should receive a question related to the permissions to work in the country
      await mugreBotPage.permissionsToWorkQuestionItemVisible();
      // When I click "Yes, I am a citizen"
      await mugreBotPage.selectWorkPermissions('Yes, I am a citizen');
      // And I hit the submit/send button
      await mugreBotPage.mainButtonClick();
      // Then I should receive a question related to the vertical
      await mugreBotPage.jobVerticalQuestionItemVisible();
      // When I click "Tech"
      await mugreBotPage.selectJobVertical('Tech');
      // And I hit the submit/send button
      await mugreBotPage.mainButtonClick();
      // Then I should receive a question related to the answers provided before
      await mugreBotPage.temporalQuestionItemFirstVisible();
      // When I click "Yes"
      await mugreBotPage.clickYesTemporalQuestionConfirmation();
      // And I hit the submit/send button
      await mugreBotPage.mainButtonClick();
      // Then I should receive a question about the sub-crafts related to the Tech vertical
      const mugreBotPageTech = new MugreBotPageTech(page);
      await mugreBotPageTech.techSubCraftItemVisible();
      // When I click "Management"
      await mugreBotPageTech.selectTechSubCraft('Management');
      // And I hit the submit/send button
      await mugreBotPage.mainButtonClick();
      // Then I should receive another question related to the experience working in that sub-craft
      await mugreBotPageTech.techManagementExperienceQuestionItemVisible();
      // When I click "More than 7 years"
      await mugreBotPageTech.selectTechWorkingExperience('More than 7 years');
      // And I hit the submit/send button
      await mugreBotPage.mainButtonClick();
      // Then I should receive a question related to the answers provided before
      await mugreBotPage.temporalQuestionItemLastVisible();
      // When I click "Yes"
      await mugreBotPage.clickYesTemporalQuestionConfirmationEnd();
      // And I hit the submit/send button
      await mugreBotPage.mainButtonClick();
      // Then I should receive the available jobs according to the workflow I selected
      await mugreBotPageTech.thankYouForAnsweringItemVisible();
    });
  });
});
