import { expect, test } from '@playwright/test';
import { NavigationPage } from '../pages/navigationPage';
import { PickUpFromPreviousConversation } from '../pages/pickUpFromPreviousConversationPage';
import { MugreBotPageGeneral } from '../pages/mugreBotPageGeneral';
import { MugreBotPageData } from '../pages/mugreBotPageData';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByAltText('Avatar of mugre').click();

  const navigateTo = new NavigationPage(page);
  await navigateTo.pickupFromPreviousConversationForm();
  const pickUpFromPreviousConversation = new PickUpFromPreviousConversation(page);
  await pickUpFromPreviousConversation.emailFieldFill('andres.valverde.data05@digitas.com');
  await pickUpFromPreviousConversation.chatNowButton();
});

test.skip('TC-MBFD-04 - Ensure the conversation continues successfully by verifying that the Data Science positions are displayed', async ({
  page,
}) => {
  // Given I am on the Mugre Bot functionality
  const mugreBotPage = new MugreBotPageGeneral(page);
  // When I click "Yes" in the first prompt
  await mugreBotPage.yesItemClick();
  // And I hit the submit/send button
  await mugreBotPage.mainButtonClick();
  // Then I should receive a question related to my English level.
  await mugreBotPage.englishLevelQuestionItemVisible();
  // When I click "B1 - Intermediate"
  await mugreBotPage.selectEnglishLevel('B1 - Intermediate');
  // And I hit the submit/send button
  await mugreBotPage.mainButtonClick();
  // Then I should receive a question related to permissions to work in the country
  await mugreBotPage.permissionsToWorkQuestionItemVisible();
  // When I click "I have a working visa"
  await mugreBotPage.selectWorkPermissions('I have a working visa');
  // And I hit the submit/send button
  await mugreBotPage.mainButtonClick();
  // Then I should receive a question related to the vertical
  await mugreBotPage.jobVerticalQuestionItemVisible();
  // When I click "Data"
  await mugreBotPage.selectJobVertical('Data');
  // And I hit the submit/send button
  await mugreBotPage.mainButtonClick();
  // Then I should receive a question related to the answers provided before
  await mugreBotPage.temporalQuestionItemVisible();
  // When I click "Yes"
  await mugreBotPage.clickYesTemporalQuestionConfirmation();
  // And I hit the submit/send button
  await mugreBotPage.mainButtonClick();
  // Then I should receive a question related to the sub-crafts of the Data Vertical
  const mugreBotPageData = new MugreBotPageData(page);
  await mugreBotPageData.isVisibleDataSubCraftItem();
  // When I click "Data Science"
  await mugreBotPageData.selectDataSubCraftItem('Data Science');
  // And I hit the submit/send button
  await mugreBotPage.mainButtonClick();
  // Then I should receive a question related to my experience in the Data Science Area
  await mugreBotPageData.isVisibleDataScienceWorkingExperienceItem();
  // When I select "1 to 3 Years"
  await mugreBotPageData.selectWorkingExperience('1-3 years');
  // And I submit my answer
  await mugreBotPage.mainButtonClick();
  // Then I should be asked about the tools I have experience with
  await mugreBotPageData.isVisibleToolItem();
  // When I select "SQL, Python/R /R, Spark, Machine Learning (ML), Cloud, SAS/R/Python, Marketing Mix Models (MMM), Machine Learning Algorithms, Spark/Hadoop"
  await mugreBotPageData.selectDataScienceTools('SQL');
  await mugreBotPageData.selectDataScienceTools('Python/R');
  await mugreBotPageData.selectDataScienceTools('Spark');
  await mugreBotPageData.selectDataScienceTools('Maching Learning (ML)');
  await mugreBotPageData.selectDataScienceTools('Cloud');
  await mugreBotPageData.selectDataScienceTools('SAS/R/Phyton');
  await mugreBotPageData.selectDataScienceTools('Marketing Mix Models (MMM)');
  await mugreBotPageData.selectDataScienceTools('Machine Learning Algorithms Development');
  await mugreBotPageData.selectDataScienceTools('Spark/Hadoop');
  // And I submit my answer
  await mugreBotPage.mainButtonClick();
  // Then I should receive the list of positions available according to the workflow selected
  await mugreBotPageData.isVisibleThankYouForAnsweringItem();
});

test.skip('TC-MBFD-07 - Ensure the conversation continues successfully by clicking the tools I have experience with', async ({
  page,
}) => {
  // Given I am on the Mugre Bot functionality
  const mugreBotPage = new MugreBotPageGeneral(page);
  // When I click "Yes" in the first prompt
  await mugreBotPage.yesItemClick();
  // And I hit the submit/send button
  await mugreBotPage.mainButtonClick();
  // Then I should receive a question related to my English level.
  await mugreBotPage.englishLevelQuestionItemVisible();
  // When I click "B1 - Intermediate"
  await mugreBotPage.selectEnglishLevel('B1 - Intermediate');
  // And I hit the submit/send button
  await mugreBotPage.mainButtonClick();
  // Then I should receive a question related to permissions to work in the country
  await mugreBotPage.permissionsToWorkQuestionItemVisible();
  // When I click "I have a working visa"
  await mugreBotPage.selectWorkPermissions('I have a working visa');
  // And I hit the submit/send button
  await mugreBotPage.mainButtonClick();
  // Then I should receive a question related to the vertical
  await mugreBotPage.jobVerticalQuestionItemVisible();
  // When I click "Data"
  await mugreBotPage.selectJobVertical('Data');
  // And I hit the submit/send button
  await mugreBotPage.mainButtonClick();
  // Then I should receive a question related to the answers provided before
  await mugreBotPage.temporalQuestionItemVisible();
  // When I click "Yes"
  await mugreBotPage.clickYesTemporalQuestionConfirmation();
  // And I hit the submit/send button
  await mugreBotPage.mainButtonClick();
  // Then I should receive a question related to the sub-crafts of the Data Vertical
  const mugreBotPageData = new MugreBotPageData(page);
  await mugreBotPageData.isVisibleDataSubCraftItem();
  // When I click "Data Analytics"
  await mugreBotPageData.selectDataSubCraftItem('Data Analysis');
  // And I hit the submit/send button
  await mugreBotPage.mainButtonClick();
  // Then I should receive a question related to my experience in the Data Analytics Area
  await mugreBotPageData.isVisibleDataAnalysisWorkingExperienceItem();
  // When I click "1-3 years"
  await mugreBotPageData.selectWorkingExperience('1-3 years');
  // And I hit the submit/send button
  await mugreBotPage.mainButtonClick();
  // Then I should be asked about the tools I have experienced with
  await mugreBotPageData.isVisibleToolItem();
  // When I click "SQL, PowerBI, Tableau, Excel"
  await mugreBotPageData.selectDataAnalysisTools('SQL');
  await mugreBotPageData.selectDataAnalysisTools('PowerBI');
  await mugreBotPageData.selectDataAnalysisTools('Tableau');
  await mugreBotPageData.selectDataAnalysisTools('Excel');
  // And I submit my answer
  await mugreBotPage.mainButtonClick();
  // Then I should receive the list of positions available according to the workflow selected
  await mugreBotPageData.isVisibleThankYouForAnsweringItem();
});

test.skip('TC-MBFD-10 - Ensure the conversation continues successfully by clicking the tools I have experience with', async ({
  page,
}) => {
  // Given I am on the Mugre Bot functionality
  const mugreBotPage = new MugreBotPageGeneral(page);
  // When I click "Yes" in the first prompt
  await mugreBotPage.yesItemClick();
  // And I hit the submit/send button
  await mugreBotPage.mainButtonClick();
  // Then I should receive a question related to my English level.
  await mugreBotPage.englishLevelQuestionItemVisible();
  // When I click "B1 - Intermediate"
  await mugreBotPage.selectEnglishLevel('B1 - Intermediate');
  // And I hit the submit/send button
  await mugreBotPage.mainButtonClick();
  // Then I should receive a question related to permissions to work in the country
  await mugreBotPage.permissionsToWorkQuestionItemVisible();
  // When I click "I have a working visa"
  await mugreBotPage.selectWorkPermissions('I have a working visa');
  // And I hit the submit/send button
  await mugreBotPage.mainButtonClick();
  // Then I should receive a question related to the vertical
  await mugreBotPage.jobVerticalQuestionItemVisible();
  // When I click "Data"
  await mugreBotPage.selectJobVertical('Data');
  // And I hit the submit/send button
  await mugreBotPage.mainButtonClick();
  // Then I should receive a question related to the answers provided before
  await mugreBotPage.temporalQuestionItemVisible();
  // When I click "Yes"
  await mugreBotPage.clickYesTemporalQuestionConfirmation();
  // And I hit the submit/send button
  await mugreBotPage.mainButtonClick();
  // Then I should receive a question related to the sub-crafts of the Data Vertical
  const mugreBotPageData = new MugreBotPageData(page);
  await mugreBotPageData.isVisibleDataSubCraftItem();
  // When I click "Data Engineering"
  await mugreBotPageData.selectDataSubCraftItem('Data Engineering');
  // And I hit the submit/send button
  await mugreBotPage.mainButtonClick();
  // Then I should receive a question related to my experience in the Data Engineering Area
  await mugreBotPageData.isVisibleDataEngineeringWorkingExperienceItem();
  // When I click "4-6 years"
  await mugreBotPageData.selectWorkingExperience('4-6 years');
  // And I hit the submit/send button
  await mugreBotPage.mainButtonClick();
  // Then I should be asked about the tools I have experience with
  await mugreBotPageData.isVisibleToolItem();
  // When I select "QL/ETL, Python, Spark, Hadoop, Databricks"
  await mugreBotPageData.selectDataEngineeringTools('QL/ETL');
  await mugreBotPageData.selectDataEngineeringTools('Python');
  await mugreBotPageData.selectDataEngineeringTools('Spark');
  await mugreBotPageData.selectDataEngineeringTools('Hadoop');
  await mugreBotPageData.selectDataEngineeringTools('Databricks');
  // And I submit my answer
  await mugreBotPage.mainButtonClick();
  // Then I should receive the list of positions available according to the tools selected
  await mugreBotPageData.isVisibleThankYouForAnsweringItem();
});

test.skip('TC-MBFD-13 - Completing an end-to-end craft selection (BI Engineering (Analysis + Engineering) as a sub-craft of Data Analysis) flow in the Mugre Bot to display final positions', async ({
  page,
}) => {
  // Given I am on the Mugre Bot functionality
  const mugreBotPageGeneral = new MugreBotPageGeneral(page);
  // When I click "Yes" in the first prompt
  await mugreBotPageGeneral.yesItemClick();
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive a question related to my English level.
  await mugreBotPageGeneral.englishLevelQuestionItemVisible();
  // When I click "B1 - Intermediate"
  await mugreBotPageGeneral.selectEnglishLevel('B1 - Intermediate');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive a question related to permissions to work in the country
  await mugreBotPageGeneral.permissionsToWorkQuestionItemVisible();
  // When I click "I have a working visa"
  await mugreBotPageGeneral.selectWorkPermissions('I have a working visa');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive a question related to the vertical
  await mugreBotPageGeneral.jobVerticalQuestionItemVisible();
  // When I click "Data"
  await mugreBotPageGeneral.selectJobVertical('Data');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive a question related to the answers provided before
  await mugreBotPageGeneral.temporalQuestionItemFirstVisible();
  // When I click "Yes"
  await mugreBotPageGeneral.clickYesTemporalQuestionConfirmation();
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive a question related to the sub-crafts of the Data Vertical
  const mugreBotPageData = new MugreBotPageData(page);
  await mugreBotPageData.isVisibleDataSubCraftItem();
  // When I click "BI Engineering (Analyst + Engineering)"
  await mugreBotPageData.selectDataSubCraftItem('BI Engineering (Analysis + Engineering)');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive a question related to my experience in the BI Engineering (Analyst + Engineering) sub-craft
  await mugreBotPageData.isVisibleDataBIWorkingExperienceItem();
  // When I click "More than 7 years"
  await mugreBotPageData.selectWorkingExperience('More than 7 years');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive a question related to the tools I have expertise in
  await mugreBotPageData.isVisibleToolItem();
  // When I click "SQL"
  await mugreBotPageData.selectDataBITools('SQL');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive the list of positions available according to the workflow selected
  await mugreBotPageData.isVisibleThankYouForAnsweringItem();
});

test('TC-MBFD-14 - Completing an end-to-end craft selection (BI Engineering (Analysis + Engineering) as a sub-craft of Data Analysis) flow in the Mugre Bot to display final positions', async ({
  page,
}) => {
  // Given I am on the Mugre Bot functionality
  const mugreBotPageGeneral = new MugreBotPageGeneral(page);
  // When I click "Yes" in the first prompt
  await mugreBotPageGeneral.yesItemClick();
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive a question related to my English level.
  await mugreBotPageGeneral.englishLevelQuestionItemVisible();
  // When I click "B1 - Intermediate"
  await mugreBotPageGeneral.selectEnglishLevel('B1 - Intermediate');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive a question related to permissions to work in the country
  await mugreBotPageGeneral.permissionsToWorkQuestionItemVisible();
  // When I click "I have a working visa"
  await mugreBotPageGeneral.selectWorkPermissions('I have a working visa');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive a question related to the vertical
  await mugreBotPageGeneral.jobVerticalQuestionItemVisible();
  // When I click "Data"
  await mugreBotPageGeneral.selectJobVertical('Data');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive a question related to the answers provided before
  await mugreBotPageGeneral.temporalQuestionItemFirstVisible();
  // When I click "Yes"
  await mugreBotPageGeneral.clickYesTemporalQuestionConfirmation();
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive a question related to the sub-crafts of the Data Vertical
  const mugreBotPageData = new MugreBotPageData(page);
  await mugreBotPageData.isVisibleDataSubCraftItem();
  // When I click "BI Engineering (Analyst + Engineering)"
  await mugreBotPageData.selectDataSubCraftItem('BI Engineering (Analysis + Engineering)');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive a question related to my experience in the BI Engineering (Analyst + Engineering) sub-craft
  await mugreBotPageData.isVisibleDataBIWorkingExperienceItem();
  // When I click "0-1 years"
  await mugreBotPageData.selectWorkingExperience('0-1 years');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive a question related to the tools I have expertise in
  await mugreBotPageData.isVisibleToolItem();
  // When I click "SQL, ETL (Python, SSIS), PowerBI, Tableau, Qlikview, Qliksense, SSAS"
  await mugreBotPageData.selectDataBITools('SQL');
  await mugreBotPageData.selectDataBITools('ETL (Python, SSIS)');
  await mugreBotPageData.selectDataBITools('PowerBI');
  await mugreBotPageData.selectDataBITools('Tableau');
  await mugreBotPageData.selectDataBITools('Qlikview');
  await mugreBotPageData.selectDataBITools('Qliksense');
  await mugreBotPageData.selectDataBITools('SSAS');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive the list of positions available according to the workflow selected
  await mugreBotPageData.isVisibleThankYouForAnsweringItem();
});
