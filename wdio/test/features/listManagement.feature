Feature: Trello List Management

  Background: Registered User is Logged In
    Given the user navigates to the login page
    When the user submits username and password
    Then the user should be redirected to their Trello dashboard

  @listCreation
  Scenario: Creating a new list on a board
    Given the user is signed in and on a specific board
    When the user clicks the Add a list button
    And enters a title for the list
    And presses the Enter key
    Then a new list should be created and displayed on the board
