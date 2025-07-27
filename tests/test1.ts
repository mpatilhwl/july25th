import {test, expect} from "@playwright/test";
import { Page1 } from "../pages/page1";

test("Add",async()=>{
    let a=1000;
    let b=23;

const page1 = new Page1();
console.log("Addition is =", await page1.addNo(a, b));
console.log("Subtraction is =", await page1.subNo(a, b));
console.log("Multiplication is =", await page1.mulNo(a, b));
console.log("Division is =", await page1.divNo(a, b));
console.log("Modulus is =", await page1.modNo(a, b));
}
);