import { BeforeAll, Before, After, AfterAll } from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext, Page } from '@playwright/test';

let browser: Browser;
let context: BrowserContext;
let page: Page;

BeforeAll(async () => {
    browser = await chromium.launch({ headless: false });
});

Before(async () => {
    context = await browser.newContext({
        viewport: { width: 1920, height: 1080 }
    });
    page = await context.newPage();
});

After(async () => {
    await page.close();
    await context.close();
});

AfterAll(async () => {
    await browser.close();
});

export { page };
