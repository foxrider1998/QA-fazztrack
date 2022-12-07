

Feature: login

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the index page
    When I login with <username> and <password>
    Then I get <message>

    Examples:
      | username | password             | message                        |
      | arisss   | 200798               | welcome arisss |
      # | foobar   | barfoo               | Your username is invalid!      |

