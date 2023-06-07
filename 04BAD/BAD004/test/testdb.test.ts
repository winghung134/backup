import { Page, chromium } from "playwright";
// need to start server
import "../main";

describe("Login", () => {
  let page: Page;
// server depending
  beforeAll(async () => {
    const browser = await chromium.launch();
    page = await browser.newPage();
  });

  it('should display "Login" text on title', async () => {
    await page.goto("http://localhost:8080");
    const title = await page.title();
    expect(title).toContain("Login");
  });
  //.... rest of the code.
  
  
  
  
  // non-related codes




});