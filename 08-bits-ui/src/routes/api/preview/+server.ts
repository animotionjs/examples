import { json } from '@sveltejs/kit'
import { chromium } from 'playwright'

const cache = new Map()

export async function GET({ url }) {
	const targetUrl = url.searchParams.get('url')
	const width = parseInt(url.searchParams.get('width') ?? '1280')
	const height = parseInt(url.searchParams.get('height') ?? '720')
	const time = parseInt(url.searchParams.get('time') ?? '')

	const key = `${targetUrl}&width=${width}&height=${height}`

	if (!targetUrl) {
		return json({ error: 'URL parameter is required' }, { status: 400 })
	}

	if (cache.has(key)) {
		return new Response(cache.get(key), {
			headers: { 'Content-Type': 'image/png' }
		})
	}

	const browser = await chromium.launch({ headless: true })
	const page = await browser.newPage()
	page.setViewportSize({ width, height })
	page.emulateMedia({ colorScheme: 'dark' })
	await page.goto(targetUrl, { waitUntil: 'domcontentloaded' })

	if (!isNaN(time)) {
		await page.waitForTimeout(time)
	}

	const screenshotBuffer = await page.screenshot({ fullPage: true })
	await browser.close()

	cache.set(key, screenshotBuffer)

	return new Response(screenshotBuffer, {
		headers: { 'Content-Type': 'image/png' }
	})
}
