/**
 * @file addStaff.spec.ts
 * @description Tests for adding staff members
 *
 * @author Milind
 * @date 2025-07-25
 */

import {test, expect} from "@playwright/test";
import {LoginPage} from "../pages/LoginPage";
import {AddStaffPage} from "../pages/AddStaffPage";
import {RandomDataUtil} from "../utils/randomDatagGenerator";



    test("Login Test", async ({page})=>{
        const loginPage = new LoginPage(page);
        const addStaffPage = new AddStaffPage(page);

        await loginPage.login('agency20', 'Y4mth@ng!24');
        await addStaffPage.navigateToStaffPool();
        await addStaffPage.clickAddStaffButton();
        await addStaffPage.fillStaffDetails(
            RandomDataUtil.getFirstName(),
            RandomDataUtil.getMiddleName(),
            RandomDataUtil.getLastName(),
            RandomDataUtil.getPhoneNumber(),
            RandomDataUtil.getStreetAddress(),
            RandomDataUtil.getCity(),
            RandomDataUtil.getState(),
            RandomDataUtil.getZipCode(),
            RandomDataUtil.getNPI(),
            RandomDataUtil.getRandomNumber()
        );
    });
