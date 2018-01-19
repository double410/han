Feature: Verify homepage
    In order to verify homepage
    As a user
    I want feature Verify homepage

    Scenario: Open homepage
        Given I opened the homepage
        When selected the check box "only show products in stock"
        Then I can not see the products without stock
    
    

    