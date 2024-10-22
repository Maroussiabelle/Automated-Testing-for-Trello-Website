Feature: Trello Profile Management

  Background: Registered User is Logged In
    Given the user navigates to the login page
    When the user submits username and password
    Then the user should be redirected to their Trello dashboard

  @profileEdition
  Scenario: Editing user profile information
    Given the user is on their Trello dashboard
    When the user navigates to their profile
    And clicks the Edit Profile Info button
    And updates their username
    And clicks the Save button
    Then their profile information should be updated successfully

  @workspaceEdition
  Scenario: Editing workspace details
    Given the user is on their Trello dashboard
    When the user navigates to the workspace settings
    And the user updates the workspace name and description and clicks the Save button
    Then the workspace details should be updated successfully