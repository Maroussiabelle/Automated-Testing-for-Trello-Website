Feature: Trello Card Management

  Background: Registered User is Logged In
    Given the user navigates to the login page
    When the user submits username and password
    Then the user should be redirected to their Trello dashboard

  @cardCreation
  Scenario: Creating a new card in a list
    Given the user is signed in and on a specific board with lists
    When the user clicks the Add a card button in a list
    And enters a title for the card
    And clicks the Add Card button
    Then a new card should be created and displayed in the list

  @cardFiltering
  Scenario: Filter cards on a board
    Given the user is signed in and on a specific board with multiple cards
    When the user clicks the Filter Cards button
    And selects specific filter criteria
    Then the cards matching the filter criteria should be displayed on the board
