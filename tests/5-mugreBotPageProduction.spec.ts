import { expect, test } from '@playwright/test';
import { NavigationPage } from '../pages/navigationPage';
import { PickUpFromPreviousConversation } from '../pages/pickUpFromPreviousConversationPage';
import { MugreBotPageGeneral } from '../pages/mugreBotPageGeneral';
import { MugreBotPageProduction } from '../pages/mugreBotPageProduction';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByAltText('Avatar of mugre').click();

  const navigateTo = new NavigationPage(page);
  await navigateTo.pickupFromPreviousConversationForm();
  const pickUpFromPreviousConversation = new PickUpFromPreviousConversation(page);
  await pickUpFromPreviousConversation.emailFieldFill(
    'andres.valverde.production.asset@digitas.com'
  );
  await pickUpFromPreviousConversation.chatNowButton();
});

test.skip('TC-MBFP-05 - Ensure the conversation continues by selecting Photoshop, Cinema 4D, and Adobe XD as the options', async ({
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
  // When I click "B2 - Upper Intermediate "
  await mugreBotPageGeneral.selectEnglishLevel('B2 - Upper Intermediate');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive a question related to permissions to work in the country
  await mugreBotPageGeneral.permissionsToWorkQuestionItemVisible();
  // When I click "Yes, I am a citizen"
  await mugreBotPageGeneral.selectWorkPermissions('Yes, I am a citizen');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive a question related to the PGD crafts
  await mugreBotPageGeneral.jobVerticalQuestionItemVisible();
  // When I click "Production"
  await mugreBotPageGeneral.selectJobVertical('Production');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I receive a question related to the answer provided before
  await mugreBotPageGeneral.clickYesTemporalQuestionConfirmation();
  // When I click "Yes"
  await mugreBotPageGeneral.clickYesTemporalQuestionConfirmation();
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive the sub-crafts available in PGD according to the vertical or craft I selected previously.
  const mugreBotPageProduction = new MugreBotPageProduction(page);
  await mugreBotPageProduction.isVisibleProductionSubCraftsItem();
  // When I click "Design"
  await mugreBotPageProduction.selectProductionSubCraft('Design');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive a question related to the Design sub-craft
  await mugreBotPageProduction.isVisibleProductionDesignSubCraftsItem();
  // When I click "Production-Print"
  await mugreBotPageProduction.selectProductionDesignSubCraft('Production- Print');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive a question about the experience I have in this area
  await mugreBotPageProduction.isVisibleProductionExperienceItem();
  // When I click "0-2 years"
  await mugreBotPageProduction.selectProductionExperience('0-2 years');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive another question related to the tools the sub-craft uses.
  await mugreBotPageProduction.isVisibleProductionToolsItem();
  // When I click "Photoshop, Cinema 4D, Maya, Illustrator, Figma"
  await mugreBotPageProduction.selectProductionDesignTools('Photoshop');
  await mugreBotPageProduction.selectProductionDesignTools('Cinema 4D');
  await mugreBotPageProduction.selectProductionDesignTools('Maya');
  await mugreBotPageProduction.selectProductionDesignTools('Illustraitor');
  await mugreBotPageProduction.selectProductionDesignTools('Figma');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();

  // Then I should receive a question related to the answers provided before
  // When I click "Yes"
  // And I hit the submit/send button

  // Then I should receive the list of positions available according to the workflow selected
  await mugreBotPageProduction.isVisibleThankYouForAnsweringItem();
});

test.skip('TC-MBFP-06 - Completing an end-to-end craft selection (Motion as a sub-craft of Production) flow in the Mugre Bot to display final positions', async ({
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
  // When I click "B2 - Upper Intermediate "
  await mugreBotPageGeneral.selectEnglishLevel('B2 - Upper Intermediate');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive a question related to permissions to work in the country
  await mugreBotPageGeneral.permissionsToWorkQuestionItemVisible();
  // When I click "Yes, I am a citizen"
  await mugreBotPageGeneral.selectWorkPermissions('Yes, I am a citizen');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive a question related to the PGD crafts
  await mugreBotPageGeneral.jobVerticalQuestionItemVisible();
  // When I click "Production"
  await mugreBotPageGeneral.selectJobVertical('Production');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I receive a question related to the answer provided before
  await mugreBotPageGeneral.temporalQuestionItemFirstVisible();
  // When I click "Yes"
  await mugreBotPageGeneral.clickYesTemporalQuestionConfirmation();
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive the sub-crafts available in PGD according to the vertical/craft I selected previously.
  const mugreBotPageProduction = new MugreBotPageProduction(page);
  // When I click "Motion"
  await mugreBotPageProduction.selectProductionSubCraft('Motion');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive a question about the experience I have in this area
  await mugreBotPageProduction.isVisibleProductionExperienceItem();
  // When I click "2-3 years"
  await mugreBotPageProduction.selectProductionExperience('2-3 years');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive another question related to the tools the sub-craft uses.
  await mugreBotPageProduction.isVisibleProductionToolsItem();
  // When I click "Figma, CSS, Redshift, and In Design"
  await mugreBotPageProduction.selectProductionDesignTools('Figma');
  await mugreBotPageProduction.selectProductionDesignTools('CSS');
  await mugreBotPageProduction.selectProductionDesignTools('Redshift');
  await mugreBotPageProduction.selectProductionDesignTools('In Desing');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();

  // Then I should receive a question related to the answers provided before
  // When I click "Yes"
  // And I hit the submit/send button

  // Then I should receive the list of positions available according to the workflow selected
  await mugreBotPageProduction.isVisibleThankYouForAnsweringItem();
});

test.skip('TC-MBFP-07 - Completing an end-to-end craft selection (Copywriting (Screenwriter) as a sub-craft of Production) flow in the Mugre Bot to display final positions', async ({
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
  // When I click "B2 - Upper Intermediate "
  await mugreBotPageGeneral.selectEnglishLevel('B2 - Upper Intermediate');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive a question related to permissions to work in the country
  await mugreBotPageGeneral.permissionsToWorkQuestionItemVisible();
  // When I click "Yes, I am a citizen"
  await mugreBotPageGeneral.selectWorkPermissions('Yes, I am a citizen');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive a question related to the PGD crafts
  await mugreBotPageGeneral.jobVerticalQuestionItemVisible();
  // When I click "Production"
  await mugreBotPageGeneral.selectJobVertical('Production');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I receive a question related to the answer provided before
  await mugreBotPageGeneral.temporalQuestionItemFirstVisible();
  // When I click "Yes"
  await mugreBotPageGeneral.clickYesTemporalQuestionConfirmation();
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive the sub-crafts available in PGD according to the vertical/craft I selected previously.
  const mugreBotPageProduction = new MugreBotPageProduction(page);
  await mugreBotPageProduction.isVisibleProductionSubCraftsItem();
  // When I click "Copywriting (Screenwriter)"
  await mugreBotPageProduction.selectProductionSubCraft('Copywriting (Screenwriter)');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive a question about the experience I have in this area
  await mugreBotPageProduction.isVisibleProductionExperienceItem();
  // When I click "4-6 years"
  await mugreBotPageProduction.selectProductionExperience('4-6 years');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive another question related to the tools the sub-craft uses.
  await mugreBotPageProduction.isVisibleProductionToolsItem();
  // When I click "Sketch, Substance, and After Effects"
  await mugreBotPageProduction.selectProductionDesignTools('Sketch');
  await mugreBotPageProduction.selectProductionDesignTools('Substance');
  await mugreBotPageProduction.selectProductionDesignTools('After Effects');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();

  // Then I should receive a question related to the answers provided before
  // When I click "Yes"
  // And I hit the submit/send button

  // Then I should receive the list of positions available according to the workflow selected
  await mugreBotPageProduction.isVisibleThankYouForAnsweringItem();
});

test('TC-MBFP-08 - Completing an end-to-end craft selection (Asset Management as a sub-craft of Production) flow in the Mugre Bot to display final positions', async ({
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
  // When I click "B2 - Upper Intermediate "
  await mugreBotPageGeneral.selectEnglishLevel('B2 - Upper Intermediate');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive a question related to permissions to work in the country
  await mugreBotPageGeneral.permissionsToWorkQuestionItemVisible();
  // When I click "Yes, I am a citizen"
  await mugreBotPageGeneral.selectWorkPermissions('Yes, I am a citizen');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive a question related to the PGD crafts
  await mugreBotPageGeneral.jobVerticalQuestionItemVisible();
  // When I click "Production"
  await mugreBotPageGeneral.selectJobVertical('Production');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I receive a question related to the answer provided before
  await mugreBotPageGeneral.temporalQuestionItemFirstVisible();
  // When I click "Yes"
  await mugreBotPageGeneral.clickYesTemporalQuestionConfirmation();
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive the sub-crafts available in PGD according to the vertical/craft I selected previously.
  const mugreBotPageProduction = new MugreBotPageProduction(page);
  await mugreBotPageProduction.isVisibleProductionSubCraftsItem();
  // When I click "Asset Management"
  await mugreBotPageProduction.selectProductionSubCraft('Asset Management');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive a question about the experience I have in this area
  await mugreBotPageProduction.isVisibleProductionExperienceItem();
  // When I click "More than 7 years"
  await mugreBotPageProduction.selectProductionExperience('More than 7 years');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive another question related to the tools the sub-craft uses.
  await mugreBotPageProduction.isVisibleProductionToolsItem();
  // When I click "Sketch, HTML, CSS, Substance, Redshift, After Effects, In Design"
  await mugreBotPageProduction.selectProductionDesignTools('Sketch');
  await mugreBotPageProduction.selectProductionDesignTools('Photoshop');
  await mugreBotPageProduction.selectProductionDesignTools('Illustraitor');
  await mugreBotPageProduction.selectProductionDesignTools('Digital Assest Management (DAM)');
  await mugreBotPageProduction.selectProductionDesignTools('HTML');
  await mugreBotPageProduction.selectProductionDesignTools('CSS');
  await mugreBotPageProduction.selectProductionDesignTools('Substance');
  await mugreBotPageProduction.selectProductionDesignTools('Redshift');
  await mugreBotPageProduction.selectProductionDesignTools('After Effects');
  await mugreBotPageProduction.selectProductionDesignTools('In Desing');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();

  // Then I receive a question related to the answer provided before
  // When I click "Yes"
  // And I hit the submit/send button

  // Then I should receive the list of positions available according to the workflow selected
  await mugreBotPageProduction.isVisibleThankYouForAnsweringItem();
});

test.skip('TC-MBFP-09 - Completing an end-to-end craft selection (CGI Artist as the sub-craft of Production) flow in the Mugre Bot to display final positions', async ({
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
  // When I click "B2 - Upper Intermediate "
  await mugreBotPageGeneral.selectEnglishLevel('B2 - Upper Intermediate');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive a question related to permissions to work in the country
  await mugreBotPageGeneral.permissionsToWorkQuestionItemVisible();
  // When I click "Yes, I am a citizen"
  await mugreBotPageGeneral.selectWorkPermissions('Yes, I am a citizen');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive a question related to the PGD crafts
  await mugreBotPageGeneral.jobVerticalQuestionItemVisible();
  // When I click "Production"
  await mugreBotPageGeneral.selectJobVertical('Production');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I receive a question related to the answer provided before
  await mugreBotPageGeneral.temporalQuestionItemFirstVisible();
  // When I click "Yes"
  await mugreBotPageGeneral.clickYesTemporalQuestionConfirmation();
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive the sub-crafts available in PGD according to the vertical/craft I selected previously.
  const mugreBotPageProduction = new MugreBotPageProduction(page);
  await mugreBotPageProduction.isVisibleProductionSubCraftsItem();
  // When I click "CGI Artist"
  await mugreBotPageProduction.selectProductionSubCraft('CGI Artist');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive a question about the experience I have in this area
  await mugreBotPageProduction.isVisibleProductionExperienceItem();
  // When I click "More than 7 years"
  await mugreBotPageProduction.selectProductionExperience('More than 7 years');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive another question related to the tools the sub-craft uses.
  await mugreBotPageProduction.isVisibleProductionToolsItem();
  // When I click "Sketch, HTML, CSS, Substance, Redshift, After Effects, In Design, Office Suite, Keynote, Adobe XD, Roblox, Adobe Acrobat PDFs"
  await mugreBotPageProduction.selectProductionDesignTools('Sketch');
  await mugreBotPageProduction.selectProductionDesignTools('HTML');
  await mugreBotPageProduction.selectProductionDesignTools('CSS');
  await mugreBotPageProduction.selectProductionDesignTools('Substance');
  await mugreBotPageProduction.selectProductionDesignTools('Redshift');
  await mugreBotPageProduction.selectProductionDesignTools('After Effects');
  await mugreBotPageProduction.selectProductionDesignTools('In Desing');
  await mugreBotPageProduction.selectProductionDesignTools('Office Suite');
  await mugreBotPageProduction.selectProductionDesignTools('Keynote');
  await mugreBotPageProduction.selectProductionDesignTools('Adobe XD');
  await mugreBotPageProduction.selectProductionDesignTools('Roblox');
  await mugreBotPageProduction.selectProductionDesignTools('Adobe Acrobat PDFs');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();

  // Then I receive a question related to the answer provided before
  // When I click "Yes"
  // And I hit the submit/send button

  // Then I should receive the list of positions available according to the workflow selected
  await mugreBotPageProduction.isVisibleThankYouForAnsweringItem();
});

test.skip('TC-MBFP-10 - Completing an end-to-end craft selection (Production Management as a sub-craft of Production) flow in the Mugre Bot to display final positions', async ({
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
  // When I click "B2 - Upper Intermediate "
  await mugreBotPageGeneral.selectEnglishLevel('B2 - Upper Intermediate');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive a question related to permissions to work in the country
  await mugreBotPageGeneral.permissionsToWorkQuestionItemVisible();
  // When I click "Yes, I am a citizen"
  await mugreBotPageGeneral.selectWorkPermissions('Yes, I am a citizen');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive a question related to the PGD crafts
  await mugreBotPageGeneral.jobVerticalQuestionItemVisible();
  // When I click "Production"
  await mugreBotPageGeneral.selectJobVertical('Production');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I receive a question related to the answer provided before
  await mugreBotPageGeneral.temporalQuestionItemFirstVisible();
  // When I click "Yes"
  await mugreBotPageGeneral.clickYesTemporalQuestionConfirmation();
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive the sub-crafts available in PGD according to the vertical/craft I selected previously.
  const mugreBotPageProduction = new MugreBotPageProduction(page);
  await mugreBotPageProduction.isVisibleProductionSubCraftsItem();
  // When I click "Production Management"
  await mugreBotPageProduction.selectProductionSubCraft('Production Management');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive a question about the experience I have in this area
  await mugreBotPageProduction.isVisibleProductionExperienceItem();
  // When I click "4-6 years"
  await mugreBotPageProduction.selectProductionExperience('4-6 years');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive another question related to the tools the sub-craft uses.
  await mugreBotPageProduction.isVisibleProductionToolsItem();
  // When I click "Sketch, HTML, CSS, Substance, Redshift, After Effects, In Design, Office Suite, Keynote, Adobe XD, Roblox, Adobe Acrobat PDFs"
  await mugreBotPageProduction.selectProductionDesignTools('Sketch');
  await mugreBotPageProduction.selectProductionDesignTools('HTML');
  await mugreBotPageProduction.selectProductionDesignTools('CSS');
  await mugreBotPageProduction.selectProductionDesignTools('Substance');
  await mugreBotPageProduction.selectProductionDesignTools('Redshift');
  await mugreBotPageProduction.selectProductionDesignTools('After Effects');
  await mugreBotPageProduction.selectProductionDesignTools('In Desing');
  await mugreBotPageProduction.selectProductionDesignTools('Office Suite');
  await mugreBotPageProduction.selectProductionDesignTools('Keynote');
  await mugreBotPageProduction.selectProductionDesignTools('Adobe XD');
  await mugreBotPageProduction.selectProductionDesignTools('Roblox');
  await mugreBotPageProduction.selectProductionDesignTools('Adobe Acrobat PDFs');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();

  // Then I receive a question related to the answer provided before
  // When I click "Yes"
  // And I hit the submit/send button

  // Then I should receive the list of positions available according to the workflow selected
  await mugreBotPageProduction.isVisibleThankYouForAnsweringItem();
});

test.skip('TC-MBFP-11 - Completing an end-to-end craft selection (Production Management as a sub-craft of Production) flow in the Mugre Bot to display final positions', async ({
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
  // When I click "B2 - Upper Intermediate "
  await mugreBotPageGeneral.selectEnglishLevel('B2 - Upper Intermediate');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive a question related to permissions to work in the country
  await mugreBotPageGeneral.permissionsToWorkQuestionItemVisible();
  // When I click "Yes, I am a citizen"
  await mugreBotPageGeneral.selectWorkPermissions('Yes, I am a citizen');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive a question related to the PGD crafts
  await mugreBotPageGeneral.jobVerticalQuestionItemVisible();
  // When I click "Production"
  await mugreBotPageGeneral.selectJobVertical('Production');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I receive a question related to the answer provided before
  await mugreBotPageGeneral.temporalQuestionItemFirstVisible();
  // When I click "Yes"
  await mugreBotPageGeneral.clickYesTemporalQuestionConfirmation();
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive the sub-crafts available in PGD according to the vertical/craft I selected previously.
  const mugreBotPageProduction = new MugreBotPageProduction(page);
  await mugreBotPageProduction.isVisibleProductionSubCraftsItem();
  // When I click "Production Management"
  await mugreBotPageProduction.selectProductionSubCraft('Production Management');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive a question about the experience I have in this area
  await mugreBotPageProduction.isVisibleProductionExperienceItem();
  // When I click "More than 7 years"
  await mugreBotPageProduction.selectProductionExperience('More than 7 years');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  // Then I should receive another question related to the tools the sub-craft uses.
  await mugreBotPageProduction.isVisibleProductionToolsItem();
  // When I click "Photoshop, Cinema 4D, Maya, Illustrator, Figma, Digital Asset Management (DAM), Sketch, HTML, CSS, Substance, Redshift, After Effects, In Design, Office Suite, Keynote, Adobe XD, Roblox, Adobe Acrobat PDFs, Scrum, Agile"
  await mugreBotPageProduction.selectProductionDesignTools('Photoshop');
  await mugreBotPageProduction.selectProductionDesignTools('Cinema 4D');
  await mugreBotPageProduction.selectProductionDesignTools('Maya');
  await mugreBotPageProduction.selectProductionDesignTools('Illustraitor');
  await mugreBotPageProduction.selectProductionDesignTools('Figma');
  await mugreBotPageProduction.selectProductionDesignTools('Digital Assest Management (DAM)');
  await mugreBotPageProduction.selectProductionDesignTools('Sketch');
  await mugreBotPageProduction.selectProductionDesignTools('HTML');
  await mugreBotPageProduction.selectProductionDesignTools('CSS');
  await mugreBotPageProduction.selectProductionDesignTools('Substance');
  await mugreBotPageProduction.selectProductionDesignTools('Redshift');
  await mugreBotPageProduction.selectProductionDesignTools('After Effects');
  await mugreBotPageProduction.selectProductionDesignTools('In Desing');
  await mugreBotPageProduction.selectProductionDesignTools('Office Suite');
  await mugreBotPageProduction.selectProductionDesignTools('Keynote');
  await mugreBotPageProduction.selectProductionDesignTools('Adobe XD');
  await mugreBotPageProduction.selectProductionDesignTools('Roblox');
  await mugreBotPageProduction.selectProductionDesignTools('Adobe Acrobat PDFs');
  await mugreBotPageProduction.selectProductionDesignTools('Scrum');
  await mugreBotPageProduction.selectProductionDesignTools('Agile');
  // And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();

  // Then I receive a question related to the answer provided before
  // When I click "Yes"
  // And I hit the submit/send button

  // Then I should receive the list of available positions according to the workflow I selected
  await mugreBotPageProduction.isVisibleThankYouForAnsweringItem();
});
