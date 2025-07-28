import { expect, test } from '@playwright/test';
import { NavigationPage } from '../pages/navigationPage';
import { HelpMefFindAnIdealJobPage } from '../pages/helpMeFindAnIdealJob';
import { skip } from 'node:test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByAltText('Avatar of mugre').click();
});

test('TC-CF-01 - Verify that you can log in using valid credentials', async ({ page }) => {
  const navigateTo = new NavigationPage(page);
  await navigateTo.HelpMeFindAnIdealJobForm();

  const helpMeFindAnIdealJob = new HelpMefFindAnIdealJobPage(page);

  //When I input a valid full name
  await helpMeFindAnIdealJob.fullNameFieldFillOut('Andres Valverde Media');
  //And I input a valid email address
  await helpMeFindAnIdealJob.emailFieldFillOut('andres.valverde.media.digital-6months@digitas.com');
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

test.skip('TC-CF-02 - Verify that you cannot log in using invalid credentials', async ({
  page,
}) => {
  //Given I am located in the Contact From
  const navigateTo = new NavigationPage(page);
  await navigateTo.HelpMeFindAnIdealJobForm();

  const helpMeFindAnIdealJob = new HelpMefFindAnIdealJobPage(page);

  //When I input an invalid full name
  await helpMeFindAnIdealJob.fullNameFieldFillOut('001');
  //And I input an invalid email address
  await helpMeFindAnIdealJob.emailFieldFillOut('andres.digitas.com');
  //And I select the country of residence
  await helpMeFindAnIdealJob.countryDropdown('Colombia');
  //And I input an invalid phone number
  await helpMeFindAnIdealJob.phoneNumberFieldFillOut('0');
  //And I click on the "Privacy Policies" checkbox
  await helpMeFindAnIdealJob.privacyPoliciesCheck();
  //And I click on "Chat now"
  await helpMeFindAnIdealJob.chatNowButton();

  page.on('dialog', (dialog) => {
    expect(dialog.message()).toContain('Full name should only contain letters');
  });
});

test.skip("TC-CF-05 - Verify that the 'Chat Now' button does not activate with blank fields", async ({
  page,
}) => {
  //Given I am located in the contact form
  const navigateTo = new NavigationPage(page);
  await navigateTo.HelpMeFindAnIdealJobForm();
  const helpMeFindAnIdealJob = new HelpMefFindAnIdealJobPage(page);
  //When I input a valid full name
  await helpMeFindAnIdealJob.fullNameFieldFillOut('Andres Valverde');
  //And I input a valid email address
  await helpMeFindAnIdealJob.emailFieldFillOut('andres.valverde@digitas.com');
  //And I select a country from the dropdown
  await helpMeFindAnIdealJob.countryDropdown('Peru');
  //But I leave a blank space in the phone field
  await helpMeFindAnIdealJob.phoneNumberFieldFillOut(' ');
  //And I check the privacy policies checkbox
  await helpMeFindAnIdealJob.privacyPoliciesCheck();
  //Then I should not be redirected to the Mugre chatbot's first question
  page.on('dialog', (dialog) => {
    expect(dialog.message()).toContain('Please fill out this field');
  });
});

test.skip("TC-CF-06 - Verify the 'Chat Now' button remains inactive if the privacy policies checkbox is unchecked", async ({
  page,
}) => {
  //Given I am located in the contact form
  const navigateTo = new NavigationPage(page);
  await navigateTo.HelpMeFindAnIdealJobForm();
  const helpMeFindAnIdealJob = new HelpMefFindAnIdealJobPage(page);
  //When I input a valid full name
  await helpMeFindAnIdealJob.fullNameFieldFillOut('Andres Valverde');

  //And I input a valid email address
  await helpMeFindAnIdealJob.emailFieldFillOut('andres.valverde@digitas.com');

  //* I select a country from the dropdown
  await helpMeFindAnIdealJob.countryDropdown('Peru');

  //* I input a valid phone
  await helpMeFindAnIdealJob.phoneNumberFieldFillOut('70701754');

  //But I don't check the privacy policies checkbox
  //When I attempt to click  the "Chat Now" button
  //Then the "Chat Now" button should remain inactive
  await expect(helpMeFindAnIdealJob.chatNowButtonItem).toBeDisabled();
});

test.skip("TC-CF-07 - Verify the 'Chat Now' button remains inactive if a registered account is used", async ({
  page,
}) => {
  //Given I am located in the contact form
  const navigateTo = new NavigationPage(page);
  await navigateTo.HelpMeFindAnIdealJobForm();
  const helpMeFindAnIdealJob = new HelpMefFindAnIdealJobPage(page);
  //When I input a valid full name
  await helpMeFindAnIdealJob.fullNameFieldFillOut('Andres Valverde');

  //And I input an already-registered email address
  await helpMeFindAnIdealJob.emailFieldFillOut('andres.valverde@digitas.com');

  //* I select a country from the dropdown
  await helpMeFindAnIdealJob.countryDropdown('Peru');

  //* I input a valid phone number
  await helpMeFindAnIdealJob.phoneNumberFieldFillOut('70701754');

  //* I check the privacy policies checkbox
  await helpMeFindAnIdealJob.privacyPoliciesCheck();

  //When I attempt to click  the "Chat Now" button
  await helpMeFindAnIdealJob.chatNowButton();
  //Then the "Chat Now" button should remain inactive and a notification should appear to let me know that I am already registered
  await expect(helpMeFindAnIdealJob.helloThereItem).toHaveText(
    'Your email is already registered, do you want to pick up where we left the last conversation?'
  );
});

test.skip("TC-CF-08 - Verify 'Continue conversation' button redirects me if I am already a registered user", async ({
  page,
}) => {
  //Given I am located in the contact form
  const navigateTo = new NavigationPage(page);
  await navigateTo.HelpMeFindAnIdealJobForm();
  const helpMeFindAnIdealJob = new HelpMefFindAnIdealJobPage(page);

  //When I input a valid full name
  await helpMeFindAnIdealJob.fullNameFieldFillOut('Andres Valverde');

  //And I input an already-registered email address
  await helpMeFindAnIdealJob.emailFieldFillOut('andres.valverde@digitas.com');

  //* I select a country from the dropdown
  await helpMeFindAnIdealJob.countryDropdown('Peru');

  //* I input a valid phone number
  await helpMeFindAnIdealJob.phoneNumberFieldFillOut('70701754');

  //* I check the privacy policies checkbox
  await helpMeFindAnIdealJob.privacyPoliciesCheck();

  //When I attempt to click  the "Chat Now" button
  await helpMeFindAnIdealJob.chatNowButton();

  //Then the "Chat Now" button should remain inactive and a notification should appear to let me know that I am already registered
  await expect(helpMeFindAnIdealJob.helloThereItem).toHaveText(
    'Your email is already registered, do you want to pick up where we left the last conversation?'
  );

  //When I attempt to click the "Continue Conversation" button
  await helpMeFindAnIdealJob.helloThereButton();

  //Then I should be redirected to the previous conversation
});
