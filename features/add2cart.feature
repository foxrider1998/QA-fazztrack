Feature: add to cart

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the index page
    When I choose laptop category
    When I choose vaio i5 
    When I choose add to cart
    When I am accepts Alert
    When I choose cart
    When I delete first item
