package pages;

import java.util.Properties; 



import org.openqa.selenium.By; 

import org.openqa.selenium.WebDriver; 

import org.openqa.selenium.WebElement; 

import org.openqa.selenium.interactions.Actions;

import dataprovider.ConfigPropertyReader; 

 



 

public class LoginPage {
	
	
	private WebDriver driver; 

	private ConfigPropertyReader configReader; 

	private Properties prop; 

	     

	public LoginPage(WebDriver driver) { 

	       

	this.driver = driver; 

	 

	} 

	 

	public void clickLogin() throws InterruptedException { 

	 

	configReader = new ConfigPropertyReader(); 

	prop = configReader.init_prop(); 

	 

	        Thread.sleep(1000); 

	 

	Actions actions = new Actions(driver); 

	 

	WebElement Account = driver.findElement(By.xpath(prop.getProperty("Account"))); 

	actions.moveToElement(Account).click().build().perform(); 

	 

	WebElement Login = driver.findElement(By.xpath(prop.getProperty("Login"))); 

	actions.moveToElement(Login).click().build().perform(); 

	 

	Thread.sleep(1000); 

	 

	} 

	 

	public void login(String Email, String Password) throws InterruptedException{ 

	 

	     

	  driver.findElement(By.xpath(prop.getProperty("Email"))).sendKeys(Email); 

	  driver.findElement(By.xpath(prop.getProperty("Password"))).sendKeys(Password); 

	   

	  Thread.sleep(1000); 

	  driver.findElement(By.xpath(prop.getProperty("Loginbtn"))).click(); 

}
}
