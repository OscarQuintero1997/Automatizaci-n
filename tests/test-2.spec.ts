import {test, Browser, Page } from '@playwright/test';

(async () => {
    let browser: Browser;
    let page: Page;
    
    test.describe('feature', ()=>{
        test('Scenario 1', async ({page})=>{  
            await test.step('Given i am on the home page of the website', async ()=>{  
                page.goto('https://playwright.dev/');   
                
            })

            await test.step('When i check the about page of the website', async ()=>{
            
            })

            await test.step('Then i get the contact details', async ()=>{
            
            })
        })
    })
})