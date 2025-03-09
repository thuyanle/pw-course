import { test } from '@playWright/test'
test('Register page', async ({ page }) => {
    
    await test.step('Truy cập trang', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step('Mở bài học 1', async () => {
        await page.locator('text=Bài học 1: Register Page (có đủ các element)').click();
    });

    await test.step('Nhập thông tin', async () => {
        await page.locator('//input[@id="username"]').fill('anle');
        await page.locator('//input[@id="email"]').fill('anle@gmail.com');
        await page.locator('//input[@id="female"]').check();
        await page.locator('//input[@id="reading"]').check();
        await page.locator('//select[@id="interests"]').selectOption(['Art', 'Music']);
        await page.locator('//select[@id="country"]').selectOption('Canada');
        await page.locator('//input[@id="profile"]').setInputFiles('tests/uploads/Swedish-Food.png');
        await page.locator('//textarea[@id="bio"]').pressSequentially('this is text');
        await page.locator('//input[@id="newsletter"]').check();
        await page.locator('//input[@id="toggleOption"]').setChecked(true);
        await page.locator('//input[@id="rating"]').dragTo(page.locator('//span[@id="ratingValue" and text()="6"]'));
        await page.locator('//input[@id="favcolor"]').dragTo(page.locator('//span[@id="colorDisplay" and text()="#ff00ae"]'));
        await page.locator('//input[@id="dob"]').fill('03/08/2025');
    });

    await test.step('Click Register button', async () => {
        await page.locator('//button[@type="submit"]').click()

    });

});