

Feature: logout

  Scenario Outline: As a user, I can log out 

    Given I am on the index page
    When I login with <username> and <password>
    When I logout 

    Examples:
      | username | password             | message                        |
      | arisss   | 200798               | Welcome arisss |

