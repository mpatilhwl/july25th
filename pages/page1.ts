import { Page } from '@playwright/test';

export class Page1 {

    async addNo(a:number, b:number): Promise<number> {
        return a + b;
    }

    async subNo(a:number, b:number): Promise<number> {
        return a - b;
    }

    async mulNo(a:number, b:number): Promise<number> {
        return a * b;
    }

    async divNo(a:number, b:number): Promise<number> {
        return a / b;
    }    

     async modNo(a:number, b:number): Promise<number> {
        return a % b;
    }    
}

