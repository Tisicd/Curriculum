import type { NextApiRequest, NextApiResponse } from 'next'
import chromium from '@sparticuz/chromium'
import puppeteer from 'puppeteer-core'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const url = req.query.url as string | undefined
    const targetUrl = url || `${req.headers['x-forwarded-proto'] || 'https'}://${req.headers.host}`

    const executablePath = await chromium.executablePath()
    const browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath,
      headless: chromium.headless,
    })
    const page = await browser.newPage()
    await page.goto(targetUrl, { waitUntil: 'networkidle0' })
    // Desactivar animaciones para la versión PDF
    await page.addStyleTag({ content: '* { animation: none !important; transition: none !important; }' })
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: '12mm', right: '12mm', bottom: '12mm', left: '12mm' },
    })
    await browser.close()

    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', 'inline; filename="cv.pdf"')
    res.send(pdfBuffer)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error generando PDF' })
  }
}


