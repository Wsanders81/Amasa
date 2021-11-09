const scrape = require('website-scraper')
const PuppeteerPlugin = require('website-scraper-puppeteer')
const path = require('path')

scrape({
    
    urls: ['https://www.beautystatcosmetics.com/en/pre-6.html'],
    
    directory: path.resolve(__dirname, 'beautystatcosmetics'),
    
    plugins: [ 
        new PuppeteerPlugin({
            launchOptions: { 
                 
                headless: true
            }, 
            scrollToBottom: {
                timeout: 10000, 
                viewportN: 10 
            } 
        })
    ]
});