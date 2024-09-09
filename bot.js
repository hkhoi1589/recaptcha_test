import { launch } from 'puppeteer';

(async () => {
    try {
        const browser = await launch({
            headless: false,
            defaultViewport: null,
            args:['--start-maximized']
        });
        const page = await browser.newPage();
        
        // Navigate the page to a URL.
        await page.goto('http://localhost:8000/register/');

        // Set screen size.
        await page.setViewport({width: 0, height: 0});

        // Type into first name.
        await page.locator('#id_user-first_name').fill('Huynh');

        // Type into last name.
        await page.locator('#id_user-last_name').fill('Khoi');

        // Type into email.
        await page.locator('#id_user-email').fill('test22@gmail.com');

        // Type into password.
        await page.locator('#id_user-password1').fill('abc12345');

        // Type into confirm password.
        await page.locator('#id_user-password2').fill('abc12345');

        // Wait and click on first result.
        await page.locator('.g-recaptcha').click();
    }
    catch (e) {
        console.log("Error: ", e);
    }
})();
