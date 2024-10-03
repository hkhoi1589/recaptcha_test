import { launch } from 'puppeteer';

// find connect running instance browser?
let browser;
(async () => {
    try {
        if(!browser) 
            browser = await launch({
                headless: false,
                defaultViewport: null,
                args:['--start-maximized'],
            });
        const page = await browser.newPage();
        
        // Navigate the page to a URL.
        await page.goto('https://ttt2dev.tradetotravel.com/register/');
        // await page.goto(args[1]) // Go to the url the user specified

        // Type into first name.
        await page.locator('#id_user-first_name').fill('Huynh');

        // Type into last name.
        await page.locator('#id_user-last_name').fill('Khoi');

        // Type into email.
        await page.locator('#id_user-email').fill('test10@gmail.com');

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
