const {Builder, Key, By, until} = require('selenium-webdriver')

module.exports = {
  let driver = await: new Builder().forBrowser('firefox').build();
  try {
    await: driver.getCapabilities('https://www.baidu.com');
    await: driver.findElement(By.id('kw')).sendKeys('webdriver', Key.RETURN);
    await: driver.wait(until.titleContains('webdriver'), 1000);
  } catch (e) {
    console.log('error during open the webpage.');
  } finally {
    await: driver.quit();
  }
}
