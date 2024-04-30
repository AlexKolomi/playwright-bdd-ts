Feature: Online Shopping Behavior

  Scenario: Filter products by Category and Subcategory
    Given I am on the homepage
    When I filter products by "Makeup" and "Face"
    Then I should see "Product with stock locations, Delicate Oil-Free Powder Blush"

  Scenario: Filter products by Category and Subcategory
    Given I am on the homepage
    When I filter products by "Skincare" and "Sun"
    Then I should see "Flash Bronzer Body Gel"

  Scenario: Add products to cart including sale items
    Given I am on the homepage
    When I add a sale product "Absolue Eye Precious Cells" to the cart
    Then The product cart should be highlighted

  Scenario: View and verify cart contents
    Given I am on the homepage
    And I have added items "Brunette expressions Conditioner, Skinsheen Bronzer Stick" to the cart
    When I view the cart
    Then I should see the added items
