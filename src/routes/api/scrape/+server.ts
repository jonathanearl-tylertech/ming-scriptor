import type { RequestEvent } from "@sveltejs/kit"
import playwright from 'playwright';


let busy = false;
let timeout = Date.now();
let count = 0;

export async function GET(event: RequestEvent) {
    if (Date.now() - timeout > 10000) {
        busy = false;
        timeout = Date.now();
    }
    if (busy) {
        return new Response("busy", { status: 503 });
    }
    busy = true;
    const browser = await playwright['chromium'].launch()
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://playwright.dev/docs/api/class-page")
    await page.waitForTimeout(10000);
    const html = await page.content();
    await page.screenshot({ path: 'screenshot.png' });
    // console.log(html);
    await browser.close();
    console.log(count++);

    return new Response('Hello')
}