import { test } from '@playWright/test'
test('Register page', async ({ page }) => {

    await test.step('Truy cập trang', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step('Vào bài học 2', async() => {
        await page.locator('text=Bài học 2: Product page').click();
    });

    await test.step('Add product 1', async() =>{
        for (let i = 0; i < 2; i++) {
            await page.locator('//button[@data-product-id="1"]').click();
        }
    });
    await test.step('Add product 2', async() =>{
        for (let i = 0; i < 3; i++) {
            await page.locator('//button[@data-product-id="2"]').click();
        }
    });

    await test.step('Add product 3', async() =>{
        await page.locator('//button[@data-product-id="3"]').click();
    });
});

