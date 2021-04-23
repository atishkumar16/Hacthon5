Feature: Login into application

  Scenario Outline: TC014 Return Product validation
    Given Navigate to Cart URL
    Then User click on My account and Login
    And User fill the Login form from given sheetname "<SheetName>" and rownumber <RowNumber>
    Then User should be logged in successfully
    Then user going to shopping cart and estimate taxes
    And enter details and click quote
   Then flat shipping and scrrenshot
    And billing details and continue
    Then return to home page
    

    Examples: 
      | SheetName | RowNumber |
      | Login     |         0 |


  Scenario Outline: TC015 Add to wishlist validation
    Given Navigate to Cart URL
    Then User click on My account and Login
    And User fill the Login form from given sheetname "<SheetName>" and rownumber <RowNumber>
    Then Select a product and add to wishlist

    Examples: 
      | SheetName | RowNumber |
      | Login     |         0 |

  Scenario Outline: TC016 Return Product validation
    Given Navigate to Cart URL
    Then User click on My account and Login
    And User fill the Login form from given sheetname "<SheetName>" and rownumber <RowNumber>
    Then User should be logged in successfully
    And Navigate to order History and return the product
  
    Examples: 
      | SheetName | RowNumber |
      | Login     |         0 |
      
      
