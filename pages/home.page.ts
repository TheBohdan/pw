import { Locator, Page } from "@playwright/test";

export class HomePage {
    private page: Page;

    constructor(page: Page) {
      this.page = page;
    }

    get searchInput(): Locator { return this.page.locator('[aria-label="Search"]'); }
    get docSearchInput(): Locator { return this.page.locator('[placeholder="Search docs"]'); }
    get pageMainHeading(): Locator { return this.page.locator('h1'); }

    navigate() {
      return this.page.goto('https://playwright.dev/');
    }
    
    async search(text: string) {
      await this.searchInput.click();
      await this.docSearchInput.fill(text);
      await this.page.waitForSelector("text=Page Object Models");
      await this.docSearchInput.press('Enter');
    }
  }