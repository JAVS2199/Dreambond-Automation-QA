import { expect, test } from '@playwright/test';
import { NavigationPage } from '../pages/navigationPage';
import { PickUpFromPreviousConversation } from '../pages/pickUpFromPreviousConversationPage';
import { MugreBotPageGeneral } from '../pages/mugreBotPageGeneral';
import { MugreBotPageMedia } from '../pages/mugreBotPageMedia';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByAltText('Avatar of mugre').click();

  const navigateTo = new NavigationPage(page);
  await navigateTo.pickupFromPreviousConversationForm();
  const pickUpFromPreviousConversation = new PickUpFromPreviousConversation(page);
  await pickUpFromPreviousConversation.emailFieldFill(
    'andres.valverde.media.digital-6months@digitas.com'
  );
  await pickUpFromPreviousConversation.chatNowButton();
});

test.skip('TC-MBFM-6 - Completing an end-to-end craft selection (Digital as a sub-craft of Media) flow in the Mugre Bot to display final positions', async ({
  page,
}) => {
  // Given I am interacting with the Mugre Bot
  const mugreBotPage = new MugreBotPageGeneral(page);
  // When I answer the first prompt with "Yes"
  await mugreBotPage.yesItemClick();
  // And I submit my answer
  await mugreBotPage.mainButtonClick();

  // Then I should be asked about my English level
  await mugreBotPage.englishLevelQuestionItemVisible();
  // When I select "C1-Advanced" as my English level
  await mugreBotPage.selectEnglishLevel('C1 - Advanced');
  // And I submit my answer
  await mugreBotPage.mainButtonClick();

  // Then I should be asked about my work authorization
  await mugreBotPage.permissionsToWorkQuestionItemVisible();
  // When I select "I have a working visa"
  await mugreBotPage.selectWorkPermissions('I have a working visa');
  // And I submit my answer
  await mugreBotPage.mainButtonClick();

  // Then I should be asked about my preferred job vertical
  await mugreBotPage.jobVerticalQuestionItemVisible();
  // When I select "Media" as my preferred vertical
  await mugreBotPage.selectJobVertical('Media');
  // And I submit my answer
  await mugreBotPage.mainButtonClick();

  // Then I should be asked to confirm my previous answer
  await mugreBotPage.temporalQuestionItemFirstVisible();
  // When I confirm with "Yes"
  await mugreBotPage.clickYesTemporalQuestionConfirmation();
  // And I submit my answer
  await mugreBotPage.mainButtonClick();

  // Then I should see a list of available sub-verticals related to the PGD Media vertical
  const mugreBotPageMedia = new MugreBotPageMedia(page);
  await mugreBotPageMedia.isVisibleMediaSubCraftsItem();
  // When I select "Digital (Social, Programmatic, Search, TAAG, E-Commerce, SEO, Traffic)"
  await mugreBotPageMedia.selectMediaSubCraftItem(
    'Digital (Social, Programmatic, Search , TAAG, E- Commerce, SEO, Traffic)'
  );
  // And I submit my answer
  await mugreBotPage.mainButtonClick();

  // Then I should be asked about my years of professional experience
  await mugreBotPageMedia.isVisibleProfessionalExperienceItem();
  // When I select "4 to 6 years"
  await mugreBotPageMedia.selectProfessionalExperienceItem('4 to 6 years');
  // And I submit my answer
  await mugreBotPage.mainButtonClick();

  // Then I should be asked about my Excel proficiency
  await mugreBotPageMedia.isVisibleExcelLevelItem();
  // When I select "Intermediate" as my Excel level
  await mugreBotPageMedia.selectExcelLevelItem('Intermediate');
  // And I submit my answer
  await mugreBotPage.mainButtonClick();

  // Then I should be asked about the tools with which I have experience
  await mugreBotPageMedia.isVisibleToolsMediaItem();
  // When I select "Tableau, Google Data Studio, The Trade Desk, Facebook Ads, Google Ads, and Search Ads 360"
  await mugreBotPageMedia.selectToolsMediaItem('Tableau');
  await mugreBotPageMedia.selectToolsMediaItem('Google Data Studio');
  await mugreBotPageMedia.selectToolsMediaItem('The Trade Desk');
  await mugreBotPageMedia.selectToolsMediaItem('Facebook Ads');
  await mugreBotPageMedia.selectToolsMediaItem('Google Ads');
  await mugreBotPageMedia.selectToolsMediaItem('Serch Ads 360');
  // And I submit my answer
  await mugreBotPage.mainButtonClick();

  // Then I should receive a question related to the answers provided before
  // When I click "Yes"
  // And I hit the submit/send button

  // Then I should receive the positions available based on my answers
  await mugreBotPageMedia.isVisibleThankYouforAnsweringItem();
});

test.skip('TC-MBFM-7 - Completing an end-to-end craft selection (HR Analyst as a sub-craft of Media) flow in the Mugre Bot to display final positions', async ({
  page,
}) => {
  // Given I am interacting with the Mugre Bot
  const mugreBotPage = new MugreBotPageGeneral(page);
  // When I answer the first prompt with "Yes"
  await mugreBotPage.yesItemClick();
  // And I submit my answer
  await mugreBotPage.mainButtonClick();

  // Then I should be asked about my English level
  await mugreBotPage.englishLevelQuestionItemVisible();
  // When I select "C2 - Native" as my English level
  await mugreBotPage.selectEnglishLevel('C2 - Native');
  // And I submit my answer
  await mugreBotPage.mainButtonClick();

  // Then I should be asked about my work authorization
  await mugreBotPage.permissionsToWorkQuestionItemVisible();
  // When I select "Yes, I am a citizen"
  await mugreBotPage.selectWorkPermissions('Yes, I am a citizen');
  // And I submit my answer
  await mugreBotPage.mainButtonClick();

  // Then I should be asked about my preferred job vertical
  await mugreBotPage.jobVerticalQuestionItemVisible();
  // When I select "Media" as my preferred vertical
  await mugreBotPage.selectJobVertical('Media');
  // And I submit my answer
  await mugreBotPage.mainButtonClick();

  // Then I should be asked to confirm my previous answer
  await mugreBotPage.temporalQuestionItemFirstVisible();
  // When I confirm with "Yes"
  await mugreBotPage.clickYesTemporalQuestionConfirmation();
  // And I submit my answer
  await mugreBotPage.mainButtonClick();

  // Then I should see a list of available sub-verticals related to the PGD Media vertical
  const mugreBotPageMedia = new MugreBotPageMedia(page);
  await mugreBotPageMedia.isVisibleMediaSubCraftsItem();
  // When I select "HR Analyst"
  await mugreBotPageMedia.selectMediaSubCraftItem('HR Analyst');
  // And I submit my answer
  await mugreBotPage.mainButtonClick();

  // Then I should be asked about my years of professional experience
  await mugreBotPageMedia.isVisibleProfessionalExperienceItem();
  // When I select "1 to 2 Years"
  await mugreBotPageMedia.selectProfessionalExperienceItem('1 to 2 Years');
  // And I submit my answer
  await mugreBotPage.mainButtonClick();

  // Then I should be asked about my Excel proficiency
  await mugreBotPageMedia.isVisibleExcelLevelItem();
  // When I select "Intermediate" as my Excel level
  await mugreBotPageMedia.selectExcelLevelItem('Intermediate');
  // And I submit my answer
  await mugreBotPage.mainButtonClick();

  // Then I should receive a question related to the answers provided before
  // When I click "Yes"
  // And I hit the submit/send button

  // Then I should receive the positions available based on my answers
  await mugreBotPageMedia.isVisibleThankYouforAnsweringItem();
});

test.skip('TC-MBFM-8 - Completing an end-to-end craft selection (Finance Analyst as a sub-craft of Media) flow in the Mugre Bot to display final positions', async ({
  page,
}) => {
  // Given I am interacting with the Mugre Bot
  const mugreBotPage = new MugreBotPageGeneral(page);
  // When I answer the first prompt with "Yes"
  await mugreBotPage.yesItemClick();
  // And I submit my answer
  await mugreBotPage.mainButtonClick();
  // Then I should be asked about my English level
  await mugreBotPage.englishLevelQuestionItemVisible();
  // When I select "B1 - Intermediate" as my English level
  await mugreBotPage.selectEnglishLevel('B1 - Intermediate');
  // And I submit my answer
  await mugreBotPage.mainButtonClick();
  // Then I should be asked about my work authorization
  await mugreBotPage.permissionsToWorkQuestionItemVisible();
  // When I select "Yes, I am a citizen"
  await mugreBotPage.selectWorkPermissions('Yes, I am a citizen');
  // And I submit my answer
  await mugreBotPage.mainButtonClick();
  // Then I should be asked about my preferred job vertical
  await mugreBotPage.jobVerticalQuestionItemVisible();
  // When I select "Media" as my preferred vertical
  await mugreBotPage.selectJobVertical('Media');
  // And I submit my answer
  await mugreBotPage.mainButtonClick();
  // Then I should be asked to confirm my previous answer
  await mugreBotPage.temporalQuestionItemFirstVisible();
  // When I confirm with "Yes"
  await mugreBotPage.clickYesTemporalQuestionConfirmation();
  // And I submit my answer
  await mugreBotPage.mainButtonClick();
  // Then I should see a list of available sub-verticals related to the PGD Media vertical
  const mugreBotPageMedia = new MugreBotPageMedia(page);
  await mugreBotPageMedia.isVisibleMediaSubCraftsItem();
  // When I select "Finance Analyst"
  await mugreBotPageMedia.selectMediaSubCraftItem('Finance Analyst');
  // And I submit my answer
  await mugreBotPage.mainButtonClick();
  // Then I should be asked about my years of professional experience
  await mugreBotPageMedia.isVisibleProfessionalExperienceItem();
  // When I select "2 to 3 years"
  await mugreBotPageMedia.selectProfessionalExperienceItem('2 to 3 years');
  // And I submit my answer
  await mugreBotPage.mainButtonClick();
  // Then I should be asked about my Excel proficiency
  await mugreBotPageMedia.isVisibleExcelLevelItem();
  // When I select "Intermediate" as my Excel level
  await mugreBotPageMedia.selectExcelLevelItem('Intermediate');
  // And I submit my answer
  await mugreBotPage.mainButtonClick();

  // Then I should be asked to confirm my previous answers
  // When I confirm with "Yes"
  // And I submit my answer

  // Then I should receive the positions available based on my answers
  await mugreBotPageMedia.isVisibleThankYouforAnsweringItem();
});

test.skip('TC-MBFM-9 - Completing an end-to-end craft selection (No as a sub-craft of Media) flow in the Mugre Bot to display final positions', async ({
  page,
}) => {
  // Given I am interacting with the Mugre Bot
  const mugreBotPage = new MugreBotPageGeneral(page);

  // When I answer the first prompt with "Yes"
  await mugreBotPage.yesItemClick();
  // And I submit my answer
  await mugreBotPage.mainButtonClick();
  // Then I should be asked about my English level
  await mugreBotPage.englishLevelQuestionItemVisible();

  // When I select "B1 - Intermediate" as my English level
  await mugreBotPage.selectEnglishLevel('B1 - Intermediate');
  // And I submit my answer
  await mugreBotPage.mainButtonClick();
  // Then I should be asked about my work authorization
  await mugreBotPage.permissionsToWorkQuestionItemVisible();

  // When I select "Yes, I am a citizen"
  await mugreBotPage.selectWorkPermissions('Yes, I am a citizen');
  // And I submit my answer
  await mugreBotPage.mainButtonClick();
  // Then I should be asked about my preferred job vertical
  await mugreBotPage.jobVerticalQuestionItemVisible();

  // When I select "Media" as my preferred vertical
  await mugreBotPage.selectJobVertical('Media');
  // And I submit my answer
  await mugreBotPage.mainButtonClick();
  // Then I should be asked to confirm my previous answer
  await mugreBotPage.temporalQuestionItemFirstVisible();

  // When I confirm with "Yes"
  await mugreBotPage.clickYesTemporalQuestionConfirmation();
  // And I submit my answer
  await mugreBotPage.mainButtonClick();
  // Then I should see a list of available sub-verticals related to the PGD Media vertical
  const mugreBotPageMedia = new MugreBotPageMedia(page);
  await mugreBotPageMedia.isVisibleMediaSubCraftsItem();

  // When I select "No"
  await mugreBotPageMedia.selectMediaSubCraftItem('No');
  // And I submit my answer
  await mugreBotPage.mainButtonClick();
  // Then I should be asked about my years of professional experience
  await mugreBotPageMedia.isVisibleProfessionalExperienceItem();

  // When I select "More than 6 years"
  await mugreBotPageMedia.selectProfessionalExperienceItem('More than 6 years');
  // And I submit my answer
  await mugreBotPage.mainButtonClick();
  // Then I should be asked about my Excel proficiency
  await mugreBotPageMedia.isVisibleExcelLevelItem();

  // When I select "Intermediate" as my Excel level
  await mugreBotPageMedia.selectExcelLevelItem('Intermediate');
  // And I submit my answer
  await mugreBotPage.mainButtonClick();
  // Then I should be asked about the tools with which I have experience
  await mugreBotPageMedia.isVisibleToolsMediaItem();

  // When I select "Google Analytics, SEO y SEM, Youtube Ads"
  await mugreBotPageMedia.selectToolsMediaItem('Google Analytics');
  await mugreBotPageMedia.selectToolsMediaItem('SEO y SEM');
  await mugreBotPageMedia.selectToolsMediaItem('Youtube Ads');
  // And I submit my answer
  await mugreBotPage.mainButtonClick();

  // Then I should be asked to confirm my previous answers
  // When I confirm with "Yes"
  // And I submit my answer

  // Then I should receive the positions available based on my answers
  await mugreBotPageMedia.isVisibleThankYouforAnsweringItem();
});

test.skip('TC-MBFM-10 - Completing an end-to-end craft selection (No Digital as a sub-craft of Media) flow in the Mugre Bot to display final positions', async ({
  page,
}) => {
  // Given I am interacting with the Mugre Bot
  const mugreBotPage = new MugreBotPageGeneral(page);
  // When I answer the first prompt with "Yes"
  await mugreBotPage.yesItemClick();
  // And I submit my answer
  await mugreBotPage.mainButtonClick();
  // Then I should be asked about my English level
  await mugreBotPage.englishLevelQuestionItemVisible();
  // When I select "C1- Advanced" as my English level
  await mugreBotPage.selectEnglishLevel('C1 - Advanced');
  // And I submit my answer
  await mugreBotPage.mainButtonClick();
  // Then I should be asked about my work authorization
  await mugreBotPage.permissionsToWorkQuestionItemVisible();
  // When I select "Yes, I am a citizen"
  await mugreBotPage.selectWorkPermissions('Yes, I am a citizen');
  // And I submit my answer
  await mugreBotPage.mainButtonClick();
  // Then I should be asked about my preferred job vertical
  await mugreBotPage.jobVerticalQuestionItemVisible();
  // When I select "Media" as my preferred vertical
  await mugreBotPage.selectJobVertical('Media');
  // And I submit my answer
  await mugreBotPage.mainButtonClick();
  // Then I should be asked to confirm my previous answer
  await mugreBotPage.temporalQuestionItemFirstVisible();
  // When I confirm with "Yes"
  await mugreBotPage.clickYesTemporalQuestionConfirmation();
  // And I submit my answer
  await mugreBotPage.mainButtonClick();
  // Then I should see a list of available sub-verticals related to the PGD Media vertical
  const mugreBotPageMedia = new MugreBotPageMedia(page);
  await mugreBotPageMedia.isVisibleMediaSubCraftsItem();
  // When I select "No Digital (Research, Investment, Planning, Invoice Reconciliation, Clients OPS, Buying)"
  await mugreBotPageMedia.selectMediaSubCraftItem(
    'No Digital (Research, Investment, Planning, Invoice Reconciliation, Clients OPS, Buying)'
  );
  // And I submit my answer
  await mugreBotPage.mainButtonClick();
  // Then I should be asked about my years of professional experience
  await mugreBotPageMedia.isVisibleProfessionalExperienceItem();
  // When I select "6 Months to 1 Year"
  await mugreBotPageMedia.selectProfessionalExperienceItem('6 Months to 1 Year');
  // And I submit my answer
  await mugreBotPage.mainButtonClick();
  // Then I should be asked about my Excel proficiency
  await mugreBotPageMedia.isVisibleExcelLevelItem();
  // When I select "Expert" as my Excel level
  await mugreBotPageMedia.selectExcelLevelItem('Expert');
  // And I submit my answer
  await mugreBotPage.mainButtonClick();
  // Then I should be asked about the tools with which I have experience
  await mugreBotPageMedia.isVisibleToolsMediaItem();
  // When I select "DV360, Seo, Tableau, Power BI, Google Data Studio, Media Math, The Trade Desk, AdServer, Facebook Ads, Instagram Ads, Google Ads"
  await mugreBotPageMedia.selectToolsMediaItem('DV360');
  await mugreBotPageMedia.selectToolsMediaItem('Seo');
  await mugreBotPageMedia.selectToolsMediaItem('Tableau');
  await mugreBotPageMedia.selectToolsMediaItem('Power BI');
  await mugreBotPageMedia.selectToolsMediaItem('Google Data Studio');
  await mugreBotPageMedia.selectToolsMediaItem('Media Math');
  await mugreBotPageMedia.selectToolsMediaItem('The Trade Desk');
  await mugreBotPageMedia.selectToolsMediaItem('AdServer');
  await mugreBotPageMedia.selectToolsMediaItem('Facebook Ads');
  await mugreBotPageMedia.selectToolsMediaItem('Instagram Ads');
  await mugreBotPageMedia.selectToolsMediaItem('Google Ads');
  // And I submit my answer
  await mugreBotPage.mainButtonClick();

  // Then I should be asked to confirm my previous answer
  // When I confirm with "Yes"
  // And I submit my answer

  // Then I should receive the positions available based on my answers
  await mugreBotPageMedia.isVisibleThankYouforAnsweringItem();
});

test('', async ({ page }) => {
  // Given I am interacting with the Mugre Bot
  const mugreBotPage = new MugreBotPageGeneral(page);

  // When I answer the first prompt with "Yes"
  await mugreBotPage.yesItemClick();
  // And I submit my answer
  await mugreBotPage.mainButtonClick();
  // Then I should be asked about my English level
  await mugreBotPage.englishLevelQuestionItemVisible();

  // When I select "C1- Advanced" as my English level
  await mugreBotPage.selectEnglishLevel('C1 - Advanced');
  // And I submit my answer
  await mugreBotPage.mainButtonClick();
  // Then I should be asked about my work authorization
  await mugreBotPage.permissionsToWorkQuestionItemVisible();

  // When I select "Yes, I am a citizen"
  await mugreBotPage.selectWorkPermissions('Yes, I am a citizen');
  // And I submit my answer
  await mugreBotPage.mainButtonClick();
  // Then I should be asked about my preferred job vertical
  await mugreBotPage.jobVerticalQuestionItemVisible();

  // When I select "Media" as my preferred vertical
  await mugreBotPage.selectJobVertical('Media');
  // And I submit my answer
  await mugreBotPage.mainButtonClick();
  // Then I should be asked to confirm my previous answer
  await mugreBotPage.temporalQuestionItemFirstVisible();

  // When I confirm with "Yes"
  await mugreBotPage.clickYesTemporalQuestionConfirmation();
  // And I submit my answer
  await mugreBotPage.mainButtonClick();
  // Then I should see a list of available sub-verticals related to the PGD Media vertical
  const mugreBotPageMedia = new MugreBotPageMedia(page);
  await mugreBotPageMedia.isVisibleMediaSubCraftsItem();

  // When I select "Digital (Social, Programmatic, Search , TAAG, E- Commerce, SEO, Traffic)"
  await mugreBotPageMedia.selectMediaSubCraftItem(
    'Digital (Social, Programmatic, Search , TAAG, E- Commerce, SEO, Traffic)'
  );
  // And I submit my answer
  await mugreBotPage.mainButtonClick();
  // Then I should be asked about my years of professional experience
  await mugreBotPageMedia.isVisibleProfessionalExperienceItem();

  // When I select "Less than 6 months"
  await mugreBotPageMedia.selectProfessionalExperienceItem('Less than 6 months');
  // And I submit my answer
  await mugreBotPage.mainButtonClick();
  // Then I should be asked about my Excel proficiency
  await mugreBotPageMedia.isVisibleExcelLevelItem();

  // When I select "Expert" as my Excel level
  await mugreBotPageMedia.selectExcelLevelItem('Expert');
  // And I submit my answer
  await mugreBotPage.mainButtonClick();
  // Then I should be asked about the tools with which I have experience
  await mugreBotPageMedia.isVisibleToolsMediaItem();

  // When I select "DV360 Seo Tableau Power BI Google Data Studio Media Math The Trade Desk AdServer Facebook Ads Instagram Ads Google Ads Amazon DPS Search Ads 360 Google Analytics Google Search SEO y SEM Linked In Ads Tik Tok Ads Youtube Ads"
  await mugreBotPageMedia.selectToolsMediaItem('DV360');
  await mugreBotPageMedia.selectToolsMediaItem('Seo');
  await mugreBotPageMedia.selectToolsMediaItem('Tableau');
  await mugreBotPageMedia.selectToolsMediaItem('Power BI');
  await mugreBotPageMedia.selectToolsMediaItem('Google Data Studio');
  await mugreBotPageMedia.selectToolsMediaItem('Media Math');
  await mugreBotPageMedia.selectToolsMediaItem('The Trade Desk');
  await mugreBotPageMedia.selectToolsMediaItem('AdServer');
  await mugreBotPageMedia.selectToolsMediaItem('Facebook Ads');
  await mugreBotPageMedia.selectToolsMediaItem('Instagram Ads');
  await mugreBotPageMedia.selectToolsMediaItem('Google Ads');
  await mugreBotPageMedia.selectToolsMediaItem('Amazon DPS');
  await mugreBotPageMedia.selectToolsMediaItem('Serch Ads 360');
  await mugreBotPageMedia.selectToolsMediaItem('Google Analytics');
  await mugreBotPageMedia.selectToolsMediaItem('Google Search');
  await mugreBotPageMedia.selectToolsMediaItem('Linked In Ads');
  await mugreBotPageMedia.selectToolsMediaItem('Tik Tok Ads');
  await mugreBotPageMedia.selectToolsMediaItem('Youtube Ads');
  await mugreBotPageMedia.selectToolsMediaItem('SEO y SEM');
  // And I submit my answer
  await mugreBotPage.mainButtonClick();

  // Then I should be asked to confirm my previous answer
  // When I confirm with "Yes"
  // And I submit my answer

  // Then I should receive the positions available based on my answers
  await mugreBotPageMedia.isVisibleThankYouforAnsweringItem();
});
