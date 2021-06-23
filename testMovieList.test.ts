import { Builder, Capabilities, By, WebDriver } from 'selenium-webdriver'

const chromedriver = require('chromedriver');
const driver = new Builder().withCapabilities(Capabilities.chrome()).build();
    

    

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/automation/movieList/index.html');
});

test('Movie List test', async() =>{
await driver.findElement(By.xpath('(//input)'));

await driver.findElement(By.xpath('(//input)')).sendKeys('Jurassic Park\n')

await driver.findElement(By.xpath('(//button)')).click();

await driver.findElement(By.id("JurassicPark")).click();

});

afterAll(async () => {
    await driver.sleep(5000);
    await driver.quit();
});