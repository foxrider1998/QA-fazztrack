

Feature: all in 1 test

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the index page
    When I choose laptop category
    When I choose vaio i5 
    When I choose add to cart
    When I am accepts Alert
    When I choose cart
    When I delete first item



  Scenario Outline: As a user, I can log into the secure area

    Given I am on the index page
    When I login with <username> and <password>
    Then I get <message>

    Examples:
      | username | password             | message                        |
      | arisss   | 200798               | welcome arisss |
      # | foobar   | barfoo               | Your username is invalid!      |



  Scenario Outline: As a user, I can log out 

    Given I am on the index page
    When I login with <username> and <password>
    When I logout 

    Examples:
      | username | password             | message                        |
      | arisss   | 200798               | Welcome arisss |

