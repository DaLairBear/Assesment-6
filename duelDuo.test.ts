
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button displays choices', async()=>{
    await driver.sleep(5000)
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(5000)
    const choices = await driver.findElement(By.id('choose-header'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
    
})

test('Add to Duo button adds bot to team', async()=>{
    await driver.findElement(By.xpath('//div[@class = "bot-card outline"][1]/div[@class = "bot-card outline"]/button[@type = "button"][. = "Add to Duo"]')).click()
    await driver.sleep(5000)
    const player = await driver.findElement(By.id('your-duo-header'))
    const displayed = await player.isDisplayed()
    expect(displayed).toBe(true)
})