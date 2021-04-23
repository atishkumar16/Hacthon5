package pages;


import java.io.File;
import java.io.IOException; 

import java.util.Properties; 

 

import org.apache.commons.io.FileUtils; 

import org.openqa.selenium.By; 

import org.openqa.selenium.JavascriptExecutor; 

import org.openqa.selenium.OutputType; 

import org.openqa.selenium.TakesScreenshot; 

import org.openqa.selenium.WebDriver; 

import org.openqa.selenium.WebElement; 

import org.openqa.selenium.interactions.Actions; 

import org.openqa.selenium.support.ui.ExpectedConditions; 

import org.openqa.selenium.support.ui.Select; 

import org.openqa.selenium.support.ui.WebDriverWait;

import dataprovider.ConfigPropertyReader; 


 

public class ProductPage {
	
	
	private WebDriver driver; 

	private ConfigPropertyReader configReader; 

	private Properties prop; 

	JavascriptExecutor js; 

	 Actions actions; 

	 WebDriverWait wait; 

	 

	public ProductPage(WebDriver driver) { 

	       

	this.driver = driver; 

	 

	} 

	public void selectProductToWishlist() throws InterruptedException, IOException { 

	 

	  

	  configReader = new ConfigPropertyReader(); 

	  prop = configReader.init_prop(); 

	  actions = new Actions(driver); 

	WebElement components = driver.findElement(By.xpath(prop.getProperty("componentdropdown"))); 

	actions.moveToElement(components).click().build().perform(); 

	 

	WebElement monitor = driver.findElement(By.xpath(prop.getProperty("product3"))); 

	actions.moveToElement(monitor).click().build().perform(); 

	 

	Thread.sleep(1000); 

	 

	Select sortbyprice = new Select(driver.findElement(By.xpath(prop.getProperty("sortby")))); 

	 	sortbyprice.selectByVisibleText("Price (High > Low)"); 

	 	 

	 	js = (JavascriptExecutor)driver; 

	    js.executeScript("window.scrollBy(0,700)");  

	     

	    driver.findElement(By.xpath(prop.getProperty("selectprod2"))).click(); 

	     

	    wait = new WebDriverWait(driver,60); 

	      	wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty(("AddtoWishlist"))))); 

	    driver.findElement(By.xpath(prop.getProperty("AddtoWishlist"))).click(); 

	     

	wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty(("WishListlink"))))); 

	    driver.findElement(By.xpath(prop.getProperty("WishListlink"))).click(); 

	     

	    wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty(("Addtocartfromwishlist"))))); 

	    driver.findElement(By.xpath(prop.getProperty("Addtocartfromwishlist"))).click(); 

	     

	    driver.findElement(By.xpath(prop.getProperty("shoppingCartlink"))).click(); 

	    Thread.sleep(2000); 

	     

	    File scr = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE); 

	        File dest = new File(("user.dir")+ "/target/cucumber-reports/screenshots/" + "shoppingcart" + ".png"); 

	        FileUtils.copyFile(scr, dest); 

	 

	} 

	 

	}

