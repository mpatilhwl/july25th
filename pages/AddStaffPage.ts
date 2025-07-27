import { Page, expect } from "@playwright/test";
import { time } from "console";
import * as fs from 'fs';
import { RandomDataUtil } from "../utils/randomDatagGenerator";
export class AddStaffPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async selectJobGroup() {
    await this.page.locator("body > div:nth-child(9) > div:nth-child(8) > div:nth-child(1) > div:nth-child(7) > span:nth-child(1)").click();
    await this.page.locator("//li[normalize-space()='AP and Physician']").click();
    await this.page.waitForTimeout(2000);
    await expect(this.page.getByText('AP and Physician').nth(1)).toBeVisible();
    }

  async navigateToStaffPool() {
    await this.page.locator("//span[normalize-space()='Staff Pool']").click();
    await this.page.waitForTimeout(2000); // Wait for the page to load
  }
  async clickAddStaffButton() {
    await this.page.locator(".btn.blue-btn.addNurseBtn").click();
    await this.page.waitForTimeout(2000); // Wait for the modal to appear
  }

async fillStaffDetails(
  firstName: string,
  middleName: string,
  lastName: string,
  phone: string,
  streetAddress: string,
  city: string, 
  state: string, 
  zipCode: string, 
  npi: string,
  rno: number,
  status: string = 'Success'
) {
    const email = firstName.charAt(0) + middleName.charAt(0) + lastName.charAt(0) + rno + "@shiftrock.com";
    await this.page.locator("#firstName").fill(firstName);
    await this.page.locator("#middleName").fill(middleName);
    await this.page.locator("#lastName").fill(lastName);
    await this.page.locator("#email").fill(email);  
    await this.page.locator("#phone").clear();
    await this.page.locator("#phone").fill("1111111111");
    await this.page.locator("span").filter({ hasText: /^USA$/ }).click();
    await this.page.getByRole("listitem").filter({ hasText: "Canada" }).click();
    await this.page.locator("//div[@class='nice-select select-box add-select clearCity input__field input__field--hoshi custom-select']").click();
    await this.page.locator("//li[normalize-space()='British Columbia']").click();  
    await this.page.locator("#city").click();
    await this.page.locator("#city").fill("Richmond");
    await this.page.locator("#zipCode").click();
    await this.page.locator("#zipCode").fill("V6Y 3X9");   
    await this.page.locator("#address").fill("120-9100 Blundell Rd");
    await this.page.locator("#npi").click();
    await this.page.locator("#npi").fill(npi);
    await this.page.locator("span").filter({ hasText: "Eastern Standard Time (EST) (" }).locator("div").click();
    await this.page.getByRole("listitem").filter({ hasText: "Eastern Standard Time (EST) (" }).click();
    await this.page.locator("span").filter({ hasText: "Allergy & Immunology" }).locator("div").click();
    await this.page.getByRole("listitem").filter({ hasText: "Cardiology" }).click();
    await this.page.getByRole("listitem").filter({ hasText: "No Restriction" }).getByRole("radio").check();
    await this.page.locator("#checkAllTitles").check(); 
    await this.page.getByRole('button', { name: 'Choose File' }).setInputFiles('tests/Resume.pdf');  
    await this.page.getByRole('button', { name: 'Add Staff' }).click();
    await this.page.waitForTimeout(2000); // Wait for the staff to be added
    // await this.page.locator("#addressConfirmation").click(); // Click the Add Staff button again to reset the form
    // await this.page.waitForTimeout(2000); 
    await this.page.getByRole('link', { name: 'Skip' }).click();
    await this.page.waitForTimeout(2000); // Wait for the staff to be added
    await this.page.locator("#staffNameFilter").waitFor({ state: 'visible' });  
    await this.page.locator("#staffNameFilter").fill(`${firstName} ${lastName}`);
    await this.page.locator(".btn.blue-btn.height20[href='javascript:void(0);']").click();
    await this.page.waitForTimeout(2000); // Wait for the staff to be added
    // Replace the incorrect line with:
    const elementText = await this.page.locator("body > div:nth-child(3) > div:nth-child(8) > div:nth-child(1) > div:nth-child(112) > div:nth-child(1) > table:nth-child(4) > tbody:nth-child(14) > tr:nth-child(1) > td:nth-child(1) > div:nth-child(2) > div:nth-child(1)").textContent();
    if (elementText) {
        console.log("Staff Added Successfully by name :", elementText);
    } else {
        console.log("Staff not found.Test FAILED");
    }

    //LogOut of the application
    await this.page.locator(".profile-name").click();
    await this.page.locator(".logoutLink").click();
    await this.page.waitForTimeout(2000);


    console.log("Element text:", elementText);
    // Log the staff details to a CSV file

   const timestamp = new Date().toISOString();
   const csvFile = './test-results/staff-data.csv';

  const headers = 'Timestamp,FirstName,MiddleName,LastName,Email,Phone,StreetAddress,City,State,ZipCode,NPI,RNO,Status\n';
  const data = `${timestamp},${firstName},${middleName},${lastName},${email},${phone},${streetAddress},${city},${state},${zipCode},${npi},${rno},${status}\n`;
  
  // Create file with headers if it doesn't exist
  if (!fs.existsSync(csvFile)) {
    fs.writeFileSync(csvFile, headers, 'utf8');
  }
  
  // Append data
  fs.appendFileSync(csvFile, data, 'utf8');


  }
}
