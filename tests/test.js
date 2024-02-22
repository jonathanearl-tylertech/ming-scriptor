import { expect, test } from '@playwright/test';
import path from 'path';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/sites');
	const fileChooserPromise = page.waitForEvent('filechooser');
	await page.locator('button').click();
	await page.screenshot({ path: './screenshot1.png' });
	console.log('click');
	// need to test if this is triggering the list generation
	const fileChooser = await fileChooserPromise;
	await fileChooser.setFiles('~/Downloads/MOCK_DATA.csv');
	await page.locator('input').setInputFiles('~/Downloads/MOCK_DATA.csv');
	// console.log(input?.asElement())
	const webList = page.locator('.web-list')
	await webList.waitFor();
	console.log('web-list')
	await page.screenshot({ path: './screenshot2.png' });
	await page.locator('option').getByText('1').click();

	const selector = await page.$("#location")
	await selector?.click();
	await selector?.screenshot({ path: './screenshot3.png' })
	const options = await page.$('#option-1')
	console.log({ options })
	await selector?.selectOption(["2"])
	await page.screenshot({ path: './screenshot4.png' });
});
