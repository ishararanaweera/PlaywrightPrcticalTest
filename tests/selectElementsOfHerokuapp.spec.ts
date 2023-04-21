import { test, expect, Page, Browser, chromium } from '@playwright/test';

let browser: Browser;
let page: Page;

test.beforeAll(async () => {
  browser = await chromium.launch();
  page = await browser.newPage();
  await page.goto('https://the-internet.herokuapp.com/')
});

test.afterAll(async () => {
  await browser.close();
});

test.beforeEach(async () => {
  page = await browser.newPage();
  await page.goto('https://the-internet.herokuapp.com/');
});

test.afterEach(async () => {
  await page.close();
});

test('Verify page name after clicking A/B Testing', async () => {
  await page.click('text=A/B Testing');
  await page.waitForSelector('h3');
  const heading = await page.$eval('h3', (el) => el.textContent);
  expect(heading).toContain('A/B Test');
});

test('Verify page name after clicking Add/Remove Elements', async () => {
  await page.click('text=Add/Remove Elements');
  await page.waitForSelector('h3');
  const heading = await page.$eval('h3', (el) => el.textContent);
  expect(heading).toContain('Add/Remove Elements');
});

test('Verify page name after clicking Drag and Drop', async () => {
  await page.click('text=Drag and Drop');
  await page.waitForSelector('h3');
  const heading = await page.$eval('h3', (el) => el.textContent);
  await expect(heading).toContain('Drag and Drop');
});

test('Verify page name after clicking Checkboxes', async () => {
  await page.click('text=Checkboxes');
  await page.waitForSelector('h3');
  const heading = await page.$eval('h3', (el) => el.textContent);
  expect(heading).toContain('Checkboxes');
});

test('Verify page name after clicking Dropdown', async () => {
  await page.click('text=Dropdown');
  await page.waitForSelector('h3');
  const heading = await page.$eval('h3', (el) => el.textContent);
  expect(heading).toContain('Dropdown List');
});

  

