# DOM
## Khái niệm
## Cấu trúc
## Thẻ HTML thường gặp
# Selector
## Xpath selector
### Xpath tuyệt đối

### Xpath tương đối
Cấu trúc" //tenthe[@thuoctinh="giatri"]
## CSS selector
## Playwright selector
# PLaywright basic syntax
## test
Khai báo một test
import {test} from '@playwright/test';

## step
test('<tên test>', async ({page})=>{
await test.step('tên step1',async()=>{
    //code
    });
});

## basic step
### Navigate
await page.goto('URL');
### Click
#### Single click
await page.locator("//button").click();
#### Double click
await page.locator("//button").dbclick();
#### Chuột phải
await page.locator("//button").click({
    button:'right'
})
#### Click chuột kèm bấm phím khác
await page.locator("//button").click({
    modifiers:['Shift'],
})
### Input
#### Fill
await page.locator("//input").fill('text')
#### Gõ từng chữ cái vào input
await page.locator("//input).pressSequentially('text'),{
    delay:100,
}

### Radio/ Checkbox
#### Action check/ uncheck
page.locator("//input").check();
page.locator("//input").setChecked(false);
#### Lấy giá trị check
const isChecked = page.locator("input").isChecked();
### Select option
### Select input file

