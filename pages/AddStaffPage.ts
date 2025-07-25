import { Page } from "@playwright/test";
import { time } from "console";
//import { RandomDataUtil } from '../utils/randomDatagGenerator';
export class AddStaffPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
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
  rno: number ) {    
    let email = firstName.charAt(0) + middleName.charAt(0) + lastName.charAt(0) + rno + "@shiftrock.com";
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
    await this.page.locator("#city").fill("Vancouver");
    await this.page.locator("#zipCode").click();
    await this.page.locator("#zipCode").fill("V6X 2T9");   
    await this.page.locator("#address").fill(streetAddress);
    await this.page.locator("#npi").click();
    await this.page.locator("#npi").fill(npi);
    await this.page.locator("span").filter({ hasText: "Eastern Standard Time (EST) (" }).locator("div").click();
    await this.page.getByRole("listitem").filter({ hasText: "Eastern Standard Time (EST) (" }).click();
    await this.page.locator("span").filter({ hasText: "Allergy & Immunology" }).locator("div").click();
    await this.page.getByRole("listitem").filter({ hasText: "Cardiology" }).click();
    await this.page.getByRole("listitem").filter({ hasText: "No Restriction" }).getByRole("radio").check();
    await this.page.locator("#checkAllTitles").check();    
    await this.page.getByRole('button', { name: 'Add Staff' }).click();
    await this.page.waitForTimeout(2000); // Wait for the staff to be added
    await this.page.locator("#addressConfirmation").click(); // Click the Add Staff button again to reset the form
    await this.page.waitForTimeout(2000); 
  }
}


// async fillStaffDetails3() { 
//     let firstName = RandomDataUtil.getFirstName();
//     let middleName = RandomDataUtil.getMiddleName();
//     let lastName = RandomDataUtil.getLastName();
//     let randomNo = RandomDataUtil.getRandomNumber();  
//     // Generate email using first, middle, last initials and a random number
//     let email = firstName.charAt(0) + middleName.charAt(0) + lastName.charAt(0) + randomNo + "@shiftrock.com";
//     await this.page.locator("#firstName").fill(firstName);
//     await this.page.locator("#middleName").fill(middleName);
//     await this.page.locator("#lastName").fill(lastName);
//     await this.page.locator("#email").fill(email);  
//     await this.page.locator("#phone").clear();
//     await this.page.locator("#phone").fill("1111111111");
//     await this.page.locator("span").filter({ hasText: /^USA$/ }).click();
//     await this.page.getByRole("listitem").filter({ hasText: "Canada" }).click();
//     await this.page.locator("//div[@class='nice-select select-box add-select clearCity input__field input__field--hoshi custom-select']").click();
//     await this.page.locator("//li[normalize-space()='British Columbia']").click();  
//     await this.page.locator("#city").click();
//     await this.page.locator("#city").fill("Vancouver");
//     await this.page.locator("#zipCode").click();
//     await this.page.locator("#zipCode").fill("V6X 2T9");   
//     await this.page.locator("#address").fill(RandomDataUtil.getStreetAddress());
//     await this.page.locator("#npi").click();
//     await this.page.locator("#npi").fill(RandomDataUtil.getNPI().toString());
//     await this.page.locator("span").filter({ hasText: "Eastern Standard Time (EST) (" }).locator("div").click();
//     await this.page.getByRole("listitem").filter({ hasText: "Eastern Standard Time (EST) (" }).click();
//     await this.page.locator("span").filter({ hasText: "Allergy & Immunology" }).locator("div").click();
//     await this.page.getByRole("listitem").filter({ hasText: "Cardiology" }).click();
//     await this.page.getByRole("listitem").filter({ hasText: "No Restriction" }).getByRole("radio").check();
//     await this.page.locator("#checkAllTitles").check();    
//     await this.page.getByRole('button', { name: 'Add Staff' }).click();
//     await this.page.waitForTimeout(5000); // Wait for the staff to be added
//   }


//   async fillStaffDetails2() { 
//     await this.page.locator("#firstName").fill("John");  
//     await this.page.locator("#middleName").fill("B");  
//     await this.page.locator("#lastName").fill("Brow");   
//     await this.page.locator("#email").fill("jbb001@shiftrock.com"); 
//     //await this.page.locator("#phone").fill("1111111111");  
//     await this.page.locator("#phone").clear();
//     await this.page.locator("#phone").fill("1111111111");
//     await this.page.locator("#address").clear();    
//     await this.page.locator("span").filter({ hasText: /^USA$/ }).click();
//     await this.page.getByRole("listitem").filter({ hasText: "Canada" }).click();
//     await this.page.locator("//div[@class='nice-select select-box add-select clearCity input__field input__field--hoshi custom-select']").click();
//     await this.page.locator("//li[normalize-space()='British Columbia']").click();  
//     await this.page.locator("#city").click();
//     await this.page.locator("#city").fill("Vancouver");
//     await this.page.locator("#zipCode").click();
//     await this.page.locator("#zipCode").fill("V6X 2T9");   
//     await this.page.locator("#address").fill("4119 No 5 Rd");
//     await this.page.locator("#npi").click();
//     await this.page.locator("#npi").fill("4666666666");
//     await this.page.locator("span").filter({ hasText: "Eastern Standard Time (EST) (" }).locator("div").click();
//     await this.page.getByRole("listitem").filter({ hasText: "Eastern Standard Time (EST) (" }).click();
//     await this.page.locator("span").filter({ hasText: "Allergy & Immunology" }).locator("div").click();
//     await this.page.getByRole("listitem").filter({ hasText: "Cardiology" }).click();
//     await this.page.getByRole("listitem").filter({ hasText: "No Restriction" }).getByRole("radio").check();
//     await this.page.locator("#checkAllTitles").check();    
//     await this.page.getByRole('button', { name: 'Add Staff' }).click();
//     await this.page.waitForTimeout(5000); // Wait for the staff to be added
//   }
// }
