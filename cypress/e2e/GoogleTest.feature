Feature: Search on google

    Background: 
        Given I navigate to the google search page

    Scenario: Search for these results
        When I search for a result
        Then Search results are displayed

    Scenario: Search for amazon and open website
        When I search for amazon
        And I open the amazon website
        # Then amazon is displayed

