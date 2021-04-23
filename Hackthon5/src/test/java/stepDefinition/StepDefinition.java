package stepDefinition;

import java.io.File;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import dataprovider.ConfigPropertyReader;
import driverfactory.DriverFactory;
import pages.LoginPage;
import pages.OrderHistoryPage;
import pages.ProductPage;
import utils.ExcelReader;

public class StepDefinition {
	
	WebDriver driver;
	ConfigPropertyReader configReader;
    Properties prop;
    WebDriverWait wait;
    DriverFactory driverFactory;
    LoginPage log;
    ProductPage selproduct;
    OrderHistoryPage orderReturn;
	
	
	@Before(order = 0)
    public void getProperty() {
        configReader = new ConfigPropertyReader();
        prop = configReader.init_prop();
    }

 

    @Before(order = 1)
    public void launchBrowser() {
        String browserName = prop.getProperty("browser");
        driverFactory = new DriverFactory();
        driver = driverFactory.init_driver(browserName);
        
    }
    
    @Given("^Navigate to Cart URL$")
    public void navigate_to_Cart_URL() throws Throwable {
        String url = prop.getProperty("url");
        driver.get(url);
        driver.manage().window().maximize();
    }
	
    @Then("^User click on My account and Login$") 

    public void user_click_on_My_account_and_Login() throws Throwable { 

     

        log = new LoginPage(driver); 

        log.clickLogin(); 

     

    } 

     

    @Then("^User fill the Login form from given sheetname \"(.*?)\" and rownumber (\\d+)$") 

    public void user_fill_the_Login_form_from_given_sheetname_and_rownumber(String sheetName, int rowNumber) throws Throwable { 

    ExcelReader reader = new ExcelReader(); 

    List<Map<String,String>> testData =  

    reader.getData("C:\\Users\\atish\\eclipse-workspace\\Hackthon5\\ExcelData\\My excel.xlsx", sheetName); 

     

    String emailid = testData.get(rowNumber).get("Email"); 

    String password = testData.get(rowNumber).get("Password"); 

     

    log.login(emailid, password); 

    Thread.sleep(2000); 

    } 

    @Then("^User should be logged in successfully$") 

    public void user_should_be_logged_in_successfully() throws Throwable { 

     

    String ExpTitle = "My Account"; 

    String ActTitle = driver.getTitle(); 

    Assert.assertEquals(ActTitle, ExpTitle); 

         

    } 

     

      @Then("^Select a product and add to wishlist$") 

       public void select_a_product_and_add_to_wishlist() throws Throwable { 

        

       selproduct = new ProductPage(driver); 

       selproduct.selectProductToWishlist(); 

            

       } 

      @Then("^Navigate to order History and return the product$") 

       public void navigate_to_order_History_and_return_the_product() throws Throwable { 

            

      orderReturn = new OrderHistoryPage(driver); 

      orderReturn.ViewOrderHistory(); 

      orderReturn.ReturnProduct(); 

       } 
      
      @Then("^user going to shopping cart and estimate taxes$")
      public void user_going_to_shopping_cart_and_estimate_taxes() throws Throwable {
          driver.findElement(By.xpath(prop.getProperty("shopping_cart_xpath"))).click();
          JavascriptExecutor down = (JavascriptExecutor)  driver;
           down.executeScript("window.scrollBy(5,250)");
           driver.findElement(By.xpath(prop.getProperty("estimate_order_xpath"))).click();
           
      }

   

      @And("^enter details and click quote$")
      public void enter_details_and_click_quote() throws Throwable {
         
          JavascriptExecutor drop = (JavascriptExecutor)  driver;
          drop.executeScript("window.scrollBy(5,500)");
          WebDriverWait wait = new WebDriverWait(driver,20);
           wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty("estimate_country_xpath"))));
          Select drpCountry = new Select(driver.findElement(By.xpath(prop.getProperty("estimate_country_xpath"))));
          drpCountry.selectByVisibleText("India");
          Select paymentCountry = new Select(driver.findElement(By.xpath(prop.getProperty("estimate_state_xpath"))));
              paymentCountry.selectByVisibleText("Goa");
               driver.findElement(By.xpath(prop.getProperty("estimate_postcode_xpath"))).sendKeys("560068");
               WebDriverWait quote = new WebDriverWait(driver,20);
               quote.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty("estimate_country_xpath"))));
               driver.findElement(By.xpath(prop.getProperty("estimate_getquote_xpath"))).click();
               
              
      }

   

      @Then("^flat shipping and scrrenshot$")
      public void flat_shipping_and_scrrenshot() throws Throwable {
    	  
    	  WebDriverWait wait = new WebDriverWait(driver,20);
          wait.until(ExpectedConditions.visibilityOfElementLocated(By.name("shipping_method")));
    	  
    	  
    	  
          
          driver.findElement(By.name("shipping_method")).click();
       
          driver.findElement(By.id("button-shipping")).click();
          
          Thread.sleep(1000);
          File scr = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
           File dest = new File(("user.dir")+ "/target/cucumber-reports/screenshots/"+"flatshipping.screenshot"+ ".png");
           FileUtils.copyFile(scr, dest);
           WebDriverWait checkout = new WebDriverWait(driver,80);
           checkout.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty(("checkout_button_xpath")))));
          JavascriptExecutor drop = (JavascriptExecutor)  driver;
          drop.executeScript("window.scrollBy(5,500)");
          driver.findElement(By.xpath(prop.getProperty("checkout_button_xpath"))).click();

   

      }

   

      @And("^billing details and continue$")
      public void billing_details_and_continue() throws Throwable {
          WebDriverWait ship = new WebDriverWait(driver,60);
                  ship.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty("continue_payment_xpath"))));
                  driver.findElement(By.xpath(prop.getProperty("continue_payment_xpath"))).click();
                  
                  driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
                  JavascriptExecutor drop = (JavascriptExecutor)  driver;
                  drop.executeScript("window.scrollBy(5,500)");
                  WebDriverWait wait = new WebDriverWait(driver,60);
                  wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty("continue_shipping_xpath"))));
               
                  driver.findElement(By.xpath(prop.getProperty("continue_shipping_xpath"))).click();
               driver.findElement(By.xpath(prop.getProperty("flat_comment_xpath"))).sendKeys("Confirm");
               
               WebDriverWait shipping = new WebDriverWait(driver,20);
               shipping.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty("continue_shippingmethod_xpath"))));
              driver.findElement(By.xpath(prop.getProperty("continue_shippingmethod_xpath"))).click();
              WebDriverWait time = new WebDriverWait(driver,20);
              time.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty("check_cashondev_xpath"))));
              driver.findElement(By.xpath(prop.getProperty("check_cashondev_xpath"))).click();
              driver.findElement(By.xpath(prop.getProperty("continue_method_xpath"))).click();
              WebDriverWait confirm = new WebDriverWait(driver,20);
              confirm.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty("check_cashondev_xpath"))));
              driver.findElement(By.xpath(prop.getProperty("confirm_button_xpath"))).click();
              Thread.sleep(1000);
          
      }

   

      @Then("^return to home page$")
      public void return_to_home_page() throws Throwable {
         
          driver.findElement(By.xpath(prop.getProperty("last_contine_button_xpath"))).click();
      }
  

   

   

      
   

    @After(order = 0) 

    public void quitBrowser() { 

    driver.quit(); 

    } 
}

     
