const { Builder, By, Key, Util } = require("selenium-webdriver");

async function example() {
 try {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://didar.me/");
  await driver.findElement(By.xpath("//div[@class='partsec']/a")).click();
  await driver
   .findElement(By.xpath("//input[@type='email']"))
   .sendKeys("ashkanmv@gmail.com");
  await driver
   .findElement(By.xpath("//input[@type='password']"))
   .sendKeys("a123456");
  await driver.findElement(By.xpath("//input[@type='submit']")).click();
 } catch (error) {
  console.log(error);
 }
}

example();
