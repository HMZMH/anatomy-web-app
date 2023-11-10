// src/components/__tests__/QuizSection.test.js
import { Builder, By } from 'selenium-webdriver';
import 'selenium-webdriver/edge'; // Use the appropriate WebDriver for your browser, e.g., 'selenium-webdriver/chrome';

// Set timeout for all tests
jest.setTimeout(10000); // Set the timeout to 10 seconds (adjust as needed)

// Initialize WebDriver
let driver;

beforeAll(async () => {
  // You might want to configure the browser options here
  driver = await new Builder().forBrowser('MicrosoftEdge').build(); // Update 'edge' to the browser you are using, e.g., 'chrome'
});

afterEach(async () => {
  // Close the browser after each test
  if (driver) {
    await driver.quit();
  }
});

test('QuizSection renders correctly', async () => {
  // Navigate to your React app's local URL
  await driver.get('http://localhost:3000');

  // Ensure the component renders without crashing
  const skeletalSystemQuizText = await driver.findElement(By.xpath("//*[contains(text(), 'Skeletal System Quiz')]")).getText();
  expect(skeletalSystemQuizText).toBe('Skeletal System Quiz');
  // Add similar assertions for other menu items or content based on your component
});

test('Handle menu click updates currentContent', async () => {
  // Navigate to your React app's local URL
  await driver.get('http://localhost:3000');

  // Click on a menu item
  const muscularSystemQuizButton = await driver.findElement(By.xpath("//*[contains(text(), 'Muscular System Quiz')]"));
  await muscularSystemQuizButton.click();

  // Ensure that the content updates accordingly
  const muscularSystemQuizText = await driver.findElement(By.xpath("//*[contains(text(), 'Muscular System Quiz')]")).getText();
  expect(muscularSystemQuizText).toBe('Muscular System Quiz');
  // Add similar assertions for other menu items and content updates
});
