import {Page} from '@playwright/test';
import { time } from 'console';

export class LoginPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async login(username: string, password: string) {
    await this.page.goto('https://qa2.hwlmsp.com/user/loggedOut?referrer=%2F&loginName=&statusCode=401&softSSOMessage=');
    await this.page.locator('#loginName').fill(username);    
    await this.page.waitForTimeout(1000);
    await this.page.locator('#loginPassword').fill(password);
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('button', { name: 'Login' }).click();
    await this.page.waitForTimeout(3000); // Wait for 3 seconds to ensure the login process completes
  }
}