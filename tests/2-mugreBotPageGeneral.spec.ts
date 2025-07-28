import { expect, test } from '@playwright/test';
import { NavigationPage } from '../pages/navigationPage';
import { PickUpFromPreviousConversation } from '../pages/pickUpFromPreviousConversationPage';
import { MugreBotPageGeneral } from '../pages/mugreBotPageGeneral';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByAltText('Avatar of mugre').click();

  const navigateTo = new NavigationPage(page);
  await navigateTo.pickupFromPreviousConversationForm();
  const pickUpFromPreviousConversation = new PickUpFromPreviousConversation(page);
  await pickUpFromPreviousConversation.emailFieldFill('andres.valverde05@digitas.com');
  await pickUpFromPreviousConversation.chatNowButton();
});

test.skip("TC-MBF-01 - Ensure the conversation ends when the user clicks the first 'No'.", async ({
  page,
}) => {
  const mugreBotPageGeneral = new MugreBotPageGeneral(page);
  await mugreBotPageGeneral.noItemClick();
  await mugreBotPageGeneral.mainButtonClick();
  const mugreBotFirstNo = page.locator(
    'p:has-text("I understand!. I´ll be here whenever you want to give this another go.")'
  );
  let mugreBotsays = 'I understand! i´ll be here whenever you want to give this another go.';
  await expect(mugreBotFirstNo).toContainText(mugreBotsays);
});

test.skip("TC-MBF-02 - Ensure the conversation continues when the user clicks the first 'Yes'", async ({
  page,
}) => {
  //Given I am on the Mugre Bot functionality
  const mugreBotPageGeneral = new MugreBotPageGeneral(page);
  //When I click "Yes" in the first prompt
  await mugreBotPageGeneral.yesItemClick();
  //And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  //Then I should receive a question related to my English level
  let mugreBotAsk = 'What is your English level?';
  const mugreBotResponse = page.locator('p:has-text("What is your English level?")');
  await expect(mugreBotResponse).toContainText(mugreBotAsk);
});

test.skip("TC-MBF-03 - Ensure the conversation ends when the user clicks 'A1-A2 Basic'", async ({
  page,
}) => {
  //Given I am on the Mugre Bot functionality
  const mugreBotPageGeneral = new MugreBotPageGeneral(page);

  //When I click "Yes" in the first prompt
  await mugreBotPageGeneral.yesItemClick();

  //And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();

  //Then I should receive a question related to my English level
  //When I click "A1-A2 Basic"
  await mugreBotPageGeneral.selectEnglishLevel('A1 - A2 Basic');
  //And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  //Then I should receive the following response from the chatbot
  let mugreBotRequiredResponse =
    'You have an amazing knowledge background, you just need a little more experience in english. The good news is that you can reapply in three months and we´ll save all the info you provided previously.';
  const mugreBotResponse = page
    .locator('[class="_section_1s9t2_1"]')
    .locator('[class="_answer_1s9t2_17"]')
    .locator('p');
  await expect(mugreBotResponse).toContainText(mugreBotRequiredResponse);
});

test.skip("TC-MBF-04 - Ensure the conversation continues when the user selects an option other than 'A1-A2 Basic'", async ({
  page,
}) => {
  //Given I am on the Mugre Bot functionality
  const mugreBotPageGeneral = new MugreBotPageGeneral(page);
  //When I click "Yes" in the first prompt
  await mugreBotPageGeneral.yesItemClick();
  //And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  //Then I should receive a question related to my English level
  //When I click "B1 - Intermediate"
  await mugreBotPageGeneral.selectEnglishLevel('B1 - Intermediate');
  //And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  //Then I should receive another question related to the permissions to work in the country
  await expect(
    page.locator('p', {
      hasText: 'Do you have permission to work in your country?',
    })
  ).toBeVisible();
});

test.skip("TC-MBF-05 - Ensure the conversation ends when the user clicks 'No, I don't'", async ({
  page,
}) => {
  //Given I am on the Mugre Bot functionality
  const mugreBotPageGeneral = new MugreBotPageGeneral(page);
  //When I click "Yes" in the first prompt
  await mugreBotPageGeneral.yesItemClick();
  //And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  //Then I should receive a question related to my English level.
  //When I click "B1 - Intermediate"
  await mugreBotPageGeneral.selectEnglishLevel('B1 - Intermediate');
  //And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  //Then I should receive a question related to permissions to work in the country
  //When I click "No, I don't"
  await mugreBotPageGeneral.selectWorkPermissions('No, I don`t');
  //And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  //Then I should receive a confirmation from the chatbot that the conversation has ended
  await expect(
    page.locator('[class="_section_1s9t2_1"]').locator('[class="_answer_1s9t2_17"]').locator('p', {
      hasText:
        'I understand!, but is important that you have permission in your country to work. I´ll be here whenever you want to give this another go.',
    })
  ).toBeVisible();
});

test.skip("TC-MBF-06 - Ensure the conversation continues when the user clicks 'I have a working visa'", async ({
  page,
}) => {
  //Given I am on the Mugre Bot functionality
  const mugreBotPageGeneral = new MugreBotPageGeneral(page);
  //When I click 'Yes' in the first prompt
  await mugreBotPageGeneral.yesItemClick();
  //And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  //Then I should receive a question related to my English level.
  //When I click 'B1 - Intermediate'
  await mugreBotPageGeneral.selectEnglishLevel('B1 - Intermediate');
  //And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  //Then I should receive a question related to permissions to work in the country
  //When I click 'I have a working visa'
  await mugreBotPageGeneral.selectWorkPermissions('I have a working visa');
  //And I hit the submit/send button
  await mugreBotPageGeneral.mainButtonClick();
  //Then I should receive another question about the vertical/craft I would like to apply
  let mugreBotRequiredQuestion = 'In which of our verticals are you interested in?';
  await expect(
    page
      .locator('[class="_section_1oexq_43"]')
      .locator('[class="_question_1oexq_59"]')
      .locator('p', { hasText: mugreBotRequiredQuestion })
  ).toBeVisible();
});
