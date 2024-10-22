Feature: Trello Board Management

  Background: Registered User is Logged In
    Given the user navigates to the login page
    When the user submits username and password
    Then the user should be redirected to their Trello dashboard

  @boardCreation
  Scenario: Creating a new board
    Given the user is on their Trello dashboard
    When the user clicks on the Create new board button
    And selects a background and gives the board a title
    And Presses enter
    Then a new board should be created and displayed on the dashboard

  @boardSearch
  Scenario: Searching for a specific board
    Given the user is on their Trello dashboard
    When the user clicks on the search bar
    And types the name of the board in the search bar
    Then the board with the specified name should appear in the search results