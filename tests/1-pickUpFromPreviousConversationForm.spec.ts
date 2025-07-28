import { expect, test } from '@playwright/test';
import { NavigationPage } from '../pages/navigationPage';
import { PickUpFromPreviousConversation } from '../pages/pickUpFromPreviousConversationPage';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByAltText('Avatar of mugre').click();
});

test('TC-PPC-01 - Verify the "Chat now" button redirects the registered user to the previous conversation', async ({
  page,
}) => {
  const navigateTo = new NavigationPage(page);
  await navigateTo.pickupFromPreviousConversationForm();

  const pickUpFromPreviousConversation = new PickUpFromPreviousConversation(page);
  await pickUpFromPreviousConversation.emailFieldFill('andres.valverde@digitas.com');
  await pickUpFromPreviousConversation.chatNowButton();

  const firstPrompt = page.locator(
    ':text("I´m going to ask you some questions so I can match you with the perfect job for your skills.")'
  );

  let mugreBotSays =
    'I´m going to ask you some questions so I can match you with the perfect job for your skills. The questions will be relevant to the specific area of your interest. Do you have a couple of minutes?';
  await expect(firstPrompt).toHaveText(mugreBotSays);
});

test('TC-PPC-02 - Verify the "Chat now" button does not redirect the conversation if the user is not registered', async ({
  page,
}) => {
  const navigateTo = new NavigationPage(page);
  await navigateTo.pickupFromPreviousConversationForm();

  const pickUpFromPreviousConversation = new PickUpFromPreviousConversation(page);
  await pickUpFromPreviousConversation.emailFieldFill('alonso.retana@digitas.com');
  await pickUpFromPreviousConversation.chatNowButton();

  const errorMessage = pickUpFromPreviousConversation.spanAfterUnregisteredItem;

  await expect(errorMessage).toBeVisible();
});

test('TC-PPC-03 - Verify "Chat now" button displays an appropriate error message if the email address format is incorrect', async ({
  page,
}) => {
  const navigateTo = new NavigationPage(page);
  await navigateTo.pickupFromPreviousConversationForm();

  const pickUpFromPreviousConversation = new PickUpFromPreviousConversation(page);
  await pickUpFromPreviousConversation.emailFieldFill('andres.valverde@.com');
  await pickUpFromPreviousConversation.chatNowButton();

  const errorMessage = pickUpFromPreviousConversation.spanAfterUnregisteredItem;

  page.on('dialog', (dialog) => {
    expect(dialog.message()).toContain("'.' is used at a wrong position in '.com'");
  });

  //await expect(errorMessage).toBeVisible();
});
