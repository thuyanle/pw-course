import { test } from '@playWright/test'
test('To do page', async({page}) =>{

    await test.step('Truy cập trang', async() => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step('Mở bài học 3', async() =>{
        await page.locator('//a[text()="Bài học 3: Todo page"]').click();
    });

    await test.step('Thêm mới todo item', async() =>{
        for(let i=1; i<=100;i++){
            await page.locator('//input[@id="new-task"]').fill(`Todo${i}`);
            await page.locator('//button[@id="add-task"]').click();
        }
    });

    await test.step('Xóa todo item lẻ', async() =>{
        for (let i=1;i<=100; i++){
            if(i%2 !==0){
                await page.locator(`//ul[@id="task-list"]/li[${i}]/div[@class="actions"]/button[text()="Delete"]`).click();
                await page.waitForTimeout(100);
            }
        }
    });

}); 