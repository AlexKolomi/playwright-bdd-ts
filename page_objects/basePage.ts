import { Page } from '@playwright/test';

export abstract class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    protected async click(locator: string): Promise<void>    {
        await this.page.waitForSelector(locator, { state: 'visible' });
        await this.page.locator(locator).first().click();
    }

    protected async hover(locator: string): Promise<void>    {
        await this.page.waitForSelector(locator, { state: 'visible' });
        await this.page.locator(locator).hover();
    }
}