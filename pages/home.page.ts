import { Page } from "@playwright/test";

export class HomePage {
    private page: Page;

    constructor(page: Page) {
      this.page = page;
    }

    async navigate() {
      await this.page.goto('https://playwright.dev/');
    }
    
    async search(text) {
      await this.page.fill('[placeholder="Search"]', text);
      await this.page.waitForSelector("text=Page Object Models");
      await Promise.all([
        this.page.waitForNavigation(),
        this.page.press('[placeholder="Search"]', 'Enter')
      ]);
    }
  }